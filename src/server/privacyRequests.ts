import { clean } from './leadRouting';

export type PrivacyRequestPayload = {
  name?: unknown;
  email?: unknown;
  requestType?: unknown;
  details?: unknown;
  consent?: unknown;
};

type Env = Record<string, string | undefined>;

const requestTypes = new Set(['access', 'correct', 'delete', 'opt-out', 'other']);

function normalizedRequest(body: PrivacyRequestPayload) {
  const requestType = clean(body.requestType, 40);
  return {
    name: clean(body.name, 160),
    email: clean(body.email, 200),
    requestType: requestTypes.has(requestType) ? requestType : '',
    details: clean(body.details, 2000),
    consent: body.consent === true,
    submittedAt: new Date().toISOString(),
  };
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character] || character));
}

async function sendEmail(request: ReturnType<typeof normalizedRequest>, env: Env) {
  const apiKey = clean(env.RESEND_API_KEY, 500);
  const to = clean(env.PRIVACY_REQUEST_EMAIL || env.LEADS_NOTIFY_EMAIL, 200);
  if (!apiKey || !to) return false;

  const from = clean(env.PRIVACY_FROM_EMAIL || env.LEADS_FROM_EMAIL, 200) || 'LYCORE Privacy <onboarding@resend.dev>';
  const rows = Object.entries(request)
    .map(([label, value]) => `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:bold">${escapeHtml(label)}</td><td style="padding:6px 12px;border:1px solid #ddd">${escapeHtml(String(value))}</td></tr>`)
    .join('');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: request.email,
      subject: `LYCORE privacy request: ${request.requestType}`,
      html: `<h2>Privacy request</h2><table style="border-collapse:collapse">${rows}</table>`,
    }),
  });
  if (!response.ok) throw new Error('Privacy request email delivery failed.');
  return true;
}

async function sendWebhook(request: ReturnType<typeof normalizedRequest>, env: Env) {
  const url = clean(env.PRIVACY_REQUEST_WEBHOOK_URL, 2000);
  if (!url) return false;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'lycore_privacy_request', request }),
  });
  if (!response.ok) throw new Error('Privacy request workflow delivery failed.');
  return true;
}

export async function submitPrivacyRequest(body: PrivacyRequestPayload, env: Env = process.env) {
  const request = normalizedRequest(body);
  if (!request.consent || !request.requestType || !validEmail(request.email)) {
    return { status: 400, body: { success: false, error: 'Provide a valid email address, request type, and consent.' } };
  }

  const results = await Promise.allSettled([sendWebhook(request, env), sendEmail(request, env)]);
  const delivered = results.some((result) => result.status === 'fulfilled' && result.value);
  if (!delivered) {
    return {
      status: 503,
      body: { success: false, error: 'The privacy request form is not configured. Please email services@lycore.org with the subject “Privacy Request.”' },
    };
  }
  return { status: 201, body: { success: true } };
}
