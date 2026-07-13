export type LeadPayload = {
  fullName?: string;
  agencyName?: string;
  businessName?: string;
  website?: string;
  websiteUrl?: string;
  email?: string;
  phoneCountryCode?: string;
  phone?: string;
  phoneNumber?: string;
  location?: string;
  cityState?: string;
  biggestChallenge?: string;
  currentCRM?: string;
  currentCrmTool?: string;
  missedCalls?: string;
  missAfterHoursCalls?: string;
  helpNeeded?: string;
  preferredContactMethod?: string;
  preferredContactTime?: string;
  message?: string;
  consent?: boolean;
  sourcePage?: string;
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  submittedAt?: string;
  honeypot?: string;
};

export type NormalizedLeadPayload = {
  fullName: string;
  agencyName: string;
  website: string;
  email: string;
  phone: string;
  location: string;
  biggestChallenge: string;
  currentCRM: string;
  missedCalls: string;
  helpNeeded: string;
  preferredContactMethod: string;
  preferredContactTime: string;
  message: string;
  consent: boolean;
  sourcePage: string;
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  submittedAt: string;
};

type Env = Record<string, string | undefined>;

type WebhookTarget = {
  name: string;
  url: string;
  kind: 'crm' | 'calendar' | 'notification' | 'follow_up';
};

export const requiredLeadFields: Array<keyof LeadPayload> = [
  'fullName',
  'email',
  'location',
  'biggestChallenge',
  'missedCalls',
];

export const jotformFieldIds = {
  fullNameFirst: '2_first',
  fullNameLast: '2_last',
  agencyName: '3',
  websiteUrl: '4',
  email: '5',
  phoneNumber: '6',
  cityState: '7',
  biggestChallenge: '8',
  currentCrmTool: '9',
  missAfterHoursCalls: '10',
  helpNeeded: '',
  preferredContactMethod: '11',
  preferredContactTime: '',
  message: '12',
  consent: '',
};

export function clean(value: unknown, maxLength = 2000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export function validateLead(payload: LeadPayload) {
  const missing = requiredLeadFields.filter((field) => {
    if (field === 'website') return false;
    if (field === 'phone') return !clean(payload.phone || payload.phoneNumber);
    if (field === 'location') return !clean(payload.location || payload.cityState);
    if (field === 'currentCRM') return !clean(payload.currentCRM || payload.currentCrmTool);
    if (field === 'missedCalls') return !clean(payload.missedCalls || payload.missAfterHoursCalls);
    return !clean(payload[field]);
  });
  if (!clean(payload.agencyName || payload.businessName)) missing.push('businessName');
  if (payload.consent !== true) missing.push('consent');
  return missing;
}

export function normalizeLeadPayload(body: LeadPayload): NormalizedLeadPayload {
  const biggestChallenge = clean(body.biggestChallenge);
  const phoneCountryCode = clean(body.phoneCountryCode, 10);
  const phoneNumber = clean(body.phone || body.phoneNumber);
  return {
    fullName: clean(body.fullName),
    agencyName: clean(body.businessName || body.agencyName),
    website: clean(body.website || body.websiteUrl),
    email: clean(body.email),
    phone: phoneNumber.startsWith('+') || !phoneCountryCode ? phoneNumber : `${phoneCountryCode} ${phoneNumber}`.trim(),
    location: clean(body.location || body.cityState),
    biggestChallenge,
    currentCRM: clean(body.currentCRM || body.currentCrmTool),
    missedCalls: clean(body.missedCalls || body.missAfterHoursCalls),
    helpNeeded: clean(body.helpNeeded) || biggestChallenge,
    preferredContactMethod: clean(body.preferredContactMethod),
    preferredContactTime: clean(body.preferredContactTime),
    message: clean(body.message),
    consent: true,
    sourcePage: clean(body.sourcePage),
    landingPage: clean(body.landingPage),
    referrer: clean(body.referrer),
    utmSource: clean(body.utmSource),
    utmMedium: clean(body.utmMedium),
    utmCampaign: clean(body.utmCampaign),
    utmContent: clean(body.utmContent),
    utmTerm: clean(body.utmTerm),
    submittedAt: clean(body.submittedAt) || new Date().toISOString(),
  };
}

export function scoreLead(payload: LeadPayload) {
  let score = 0;
  if (payload.missedCalls === 'Yes') score += 10;
  const challenge = payload.biggestChallenge?.toLowerCase() || '';
  if (challenge.includes('crm') || challenge.includes('intake')) score += 5;
  if (challenge.includes('appointment') || challenge.includes('booking') || challenge.includes('calendar')) score += 5;
  if (challenge.includes('dashboard') || challenge.includes('mobile') || challenge.includes('app')) score += 5;
  return score;
}

function addTarget(targets: WebhookTarget[], target: WebhookTarget | null) {
  if (!target?.url) return;
  if (targets.some((existing) => existing.url === target.url)) return;
  targets.push(target);
}

function leadWebhookTargets(env: Env) {
  const targets: WebhookTarget[] = [];
  addTarget(targets, env.LEAD_WEBHOOK_URL ? { name: 'Lead webhook', url: env.LEAD_WEBHOOK_URL, kind: 'crm' } : null);
  addTarget(targets, env.ZOHO_CRM_WEBHOOK_URL ? { name: 'Zoho CRM webhook', url: env.ZOHO_CRM_WEBHOOK_URL, kind: 'crm' } : null);
  addTarget(targets, env.CRM_WEBHOOK_URL ? { name: 'CRM webhook', url: env.CRM_WEBHOOK_URL, kind: 'crm' } : null);
  return targets;
}

function calendarWebhookTargets(env: Env) {
  const targets: WebhookTarget[] = [];
  addTarget(targets, env.CALENDAR_WEBHOOK_URL ? { name: 'Calendar webhook', url: env.CALENDAR_WEBHOOK_URL, kind: 'calendar' } : null);
  return targets;
}

function buildCalendarPayload(payload: NormalizedLeadPayload, leadScore: number, env: Env) {
  return {
    eventType: 'lycore_audit_request',
    title: `LYCORE audit request: ${payload.agencyName}`,
    leadScore,
    contact: {
      fullName: payload.fullName,
      agencyName: payload.agencyName,
      email: payload.email,
      phone: payload.phone,
      location: payload.location,
      preferredContactMethod: payload.preferredContactMethod,
      preferredContactTime: payload.preferredContactTime,
    },
    qualification: {
      biggestChallenge: payload.biggestChallenge,
      currentCRM: payload.currentCRM,
      missedCalls: payload.missedCalls,
      message: payload.message,
    },
    attribution: {
      sourcePage: payload.sourcePage,
      landingPage: payload.landingPage,
      referrer: payload.referrer,
      utmSource: payload.utmSource,
      utmMedium: payload.utmMedium,
      utmCampaign: payload.utmCampaign,
      utmContent: payload.utmContent,
      utmTerm: payload.utmTerm,
    },
    bookingUrl: env.BOOKING_URL || env.VITE_BOOKING_URL || '',
    submittedAt: payload.submittedAt,
    note:
      'Requires manual setup: map this payload in the selected CRM, booking platform, Make, Zapier, or n8n before production appointment creation is live.',
  };
}

function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: '', lastName: 'Unknown' };
  }
  if (parts.length === 1) {
    return { firstName: '', lastName: parts[0] };
  }
  return {
    firstName: parts.slice(0, -1).join(' '),
    lastName: parts[parts.length - 1],
  };
}

function splitNameForJotform(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || '',
    lastName: parts.slice(1).join(' '),
  };
}

function placeholderJotformFieldIds() {
  return Object.entries(jotformFieldIds)
    .filter(([, fieldId]) => fieldId.startsWith('REPLACE_WITH_'))
    .map(([field]) => field);
}

function appendJotformValue(body: URLSearchParams, fieldId: string, value: string | boolean) {
  const normalizedValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : clean(value);
  if (!fieldId || !normalizedValue) return;
  body.set(`submission[${fieldId}]`, normalizedValue);
}

function buildJotformSubmissionBody(payload: NormalizedLeadPayload) {
  const body = new URLSearchParams();
  const { firstName, lastName } = splitNameForJotform(payload.fullName);

  appendJotformValue(body, jotformFieldIds.fullNameFirst, firstName);
  appendJotformValue(body, jotformFieldIds.fullNameLast, lastName);
  appendJotformValue(body, jotformFieldIds.agencyName, payload.agencyName);
  appendJotformValue(body, jotformFieldIds.websiteUrl, payload.website);
  appendJotformValue(body, jotformFieldIds.email, payload.email);

  // Phone number sub-fields submission
  const digits = payload.phone.replace(/\D/g, '');
  const localUsDigits = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (localUsDigits.length === 10) {
    appendJotformValue(body, `${jotformFieldIds.phoneNumber}_area`, localUsDigits.slice(0, 3));
    appendJotformValue(body, `${jotformFieldIds.phoneNumber}_phone`, localUsDigits.slice(3));
  } else {
    appendJotformValue(body, `${jotformFieldIds.phoneNumber}_phone`, payload.phone);
  }

  appendJotformValue(body, jotformFieldIds.cityState, payload.location);
  appendJotformValue(body, jotformFieldIds.biggestChallenge, payload.biggestChallenge);
  appendJotformValue(body, jotformFieldIds.currentCrmTool, payload.currentCRM);
  appendJotformValue(body, jotformFieldIds.missAfterHoursCalls, payload.missedCalls);
  appendJotformValue(body, jotformFieldIds.helpNeeded, payload.helpNeeded);
  appendJotformValue(body, jotformFieldIds.preferredContactMethod, payload.preferredContactMethod);
  appendJotformValue(body, jotformFieldIds.preferredContactTime, payload.preferredContactTime);
  appendJotformValue(body, jotformFieldIds.message, payload.message);
  appendJotformValue(body, jotformFieldIds.consent, payload.consent);

  return body;
}

async function submitToJotform(payload: NormalizedLeadPayload, leadScore: number, env: Env) {
  const apiKey = clean(env.JOTFORM_API_KEY, 500);
  const formId = clean(env.JOTFORM_FORM_ID, 100);

  if (!apiKey || !formId) {
    throw new Error('Jotform API is not configured. Add JOTFORM_API_KEY and JOTFORM_FORM_ID.');
  }

  const placeholders = placeholderJotformFieldIds();
  if (placeholders.length) {
    throw new Error(`Replace these Jotform field ID placeholders before production use: ${placeholders.join(', ')}`);
  }

  const endpoint = new URL(`https://api.jotform.com/form/${encodeURIComponent(formId)}/submissions`);
  endpoint.searchParams.set('apiKey', apiKey);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: buildJotformSubmissionBody(payload),
  });
  const result = (await response.json().catch(() => ({}))) as { responseCode?: number; message?: string };

  if (!response.ok || (typeof result.responseCode === 'number' && result.responseCode >= 400)) {
    throw new Error(result.message || `Jotform rejected the request with status ${response.status}`);
  }

  return {
    manualSetupRequired: false,
    forwardedTo: ['Jotform API'],
    crmConfigured: true,
    calendarConfigured: false,
    notificationConfigured: false,
    leadScore,
  };
}

async function postWebhook(target: WebhookTarget, payload: Record<string, unknown>) {
  const response = await fetch(target.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`${target.name} rejected the request with status ${response.status}`);
  }
}

async function forwardToWebhooks(targets: WebhookTarget[], payload: Record<string, unknown>) {
  const sent: string[] = [];
  const errors: string[] = [];

  for (const target of targets) {
    try {
      await postWebhook(target, payload);
      sent.push(target.name);
    } catch (error) {
      const message = error instanceof Error ? error.message : `${target.name} failed`;
      errors.push(message);
    }
  }

  return { sent, errors };
}

export async function routeLead(payload: NormalizedLeadPayload, leadScore: number, env: Env = process.env) {
  const crmTargets = leadWebhookTargets(env);
  const calendarTargets = calendarWebhookTargets(env);
  const notificationTargets: WebhookTarget[] = [];
  addTarget(
    notificationTargets,
    env.OWNER_NOTIFICATION_WEBHOOK ? { name: 'Owner notification webhook', url: env.OWNER_NOTIFICATION_WEBHOOK, kind: 'notification' } : null,
  );
  addTarget(
    notificationTargets,
    env.FOLLOW_UP_WEBHOOK_URL ? { name: 'Follow-up workflow webhook', url: env.FOLLOW_UP_WEBHOOK_URL, kind: 'follow_up' } : null,
  );

  const crmPayload = {
    source: 'lycore_website_audit_form',
    leadScore,
    ...payload,
    ...splitFullName(payload.fullName),
    company: payload.agencyName,
    lead: payload,
    manualSetupNote:
      'Map these fields inside the selected CRM, Make, Zapier, n8n, or another backend. Do not put private API keys in frontend code.',
  };
  const calendarPayload = buildCalendarPayload(payload, leadScore, env);
  const notificationPayload = {
    type: 'lycore_new_audit_lead',
    leadScore,
    lead: payload,
    calendar: calendarPayload,
  };

  const crm = await forwardToWebhooks(crmTargets, crmPayload);
  const calendar = await forwardToWebhooks(calendarTargets, calendarPayload);
  const notifications = await forwardToWebhooks(notificationTargets, notificationPayload);
  const errors = [...crm.errors, ...calendar.errors, ...notifications.errors];
  const forwardedTo = [...crm.sent, ...calendar.sent, ...notifications.sent];

  if (errors.length && forwardedTo.length === 0) {
    throw new Error(errors.join('; '));
  }
  if (errors.length) {
    console.error('Partial webhook delivery failures:', errors.join('; '));
  }
  return {
    manualSetupRequired: forwardedTo.length === 0,
    forwardedTo,
    crmConfigured: crmTargets.length > 0,
    calendarConfigured: calendarTargets.length > 0,
    notificationConfigured: notificationTargets.length > 0,
  };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));
}

function leadEmailHtml(payload: NormalizedLeadPayload, leadScore: number) {
  const rows: Array<[string, string]> = [
    ['Full name', payload.fullName],
    ['Business name', payload.agencyName],
    ['Website', payload.website],
    ['Email', payload.email],
    ['Phone', payload.phone],
    ['Location', payload.location],
    ['Biggest challenge', payload.biggestChallenge],
    ['Current CRM/tool', payload.currentCRM],
    ['Misses after-hours calls', payload.missedCalls],
    ['Preferred contact', payload.preferredContactMethod],
    ['Message', payload.message],
    ['Lead score', String(leadScore)],
    ['Source page', payload.sourcePage],
    ['Landing page', payload.landingPage],
    ['Referrer', payload.referrer],
    ['UTM', [payload.utmSource, payload.utmMedium, payload.utmCampaign].filter(Boolean).join(' / ')],
    ['Submitted at', payload.submittedAt],
  ];
  const cells = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:bold">${escapeHtml(label)}</td><td style="padding:6px 12px;border:1px solid #ddd">${escapeHtml(value)}</td></tr>`,
    )
    .join('');
  return `<h2>New lead review request</h2><table style="border-collapse:collapse">${cells}</table>`;
}

async function sendLeadEmail(payload: NormalizedLeadPayload, leadScore: number, env: Env) {
  const apiKey = clean(env.RESEND_API_KEY, 500);
  const to = clean(env.LEADS_NOTIFY_EMAIL, 200);
  if (!apiKey || !to) {
    throw new Error('Email channel is not configured. Add RESEND_API_KEY and LEADS_NOTIFY_EMAIL.');
  }
  const from = clean(env.LEADS_FROM_EMAIL, 200) || 'LYCORE Leads <onboarding@resend.dev>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `New lead review: ${payload.agencyName} (${payload.location}) — score ${leadScore}`,
      html: leadEmailHtml(payload, leadScore),
    }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Resend rejected the lead email with status ${response.status}: ${detail.slice(0, 300)}`);
  }
}

export async function submitLead(body: LeadPayload, env: Env = process.env) {
  if (body.honeypot) {
    return { status: 201, body: { success: true, manualSetupRequired: false } };
  }

  const missing = validateLead(body);
  if (missing.length) {
    return { status: 400, body: { success: false, error: 'Missing required lead fields or consent', missing } };
  }

  const payload = normalizeLeadPayload(body);
  const leadScore = scoreLead(payload);

  const jotformConfigured = Boolean(clean(env.JOTFORM_API_KEY, 500) && clean(env.JOTFORM_FORM_ID, 100));
  const emailConfigured = Boolean(clean(env.RESEND_API_KEY, 500) && clean(env.LEADS_NOTIFY_EMAIL, 200));
  const webhooksConfigured =
    leadWebhookTargets(env).length > 0 ||
    calendarWebhookTargets(env).length > 0 ||
    Boolean(env.OWNER_NOTIFICATION_WEBHOOK || env.FOLLOW_UP_WEBHOOK_URL);

  const channels: Array<{ name: string; run: () => Promise<unknown> }> = [];
  if (webhooksConfigured) channels.push({ name: 'webhooks', run: () => routeLead(payload, leadScore, env) });
  if (emailConfigured) channels.push({ name: 'email notification', run: () => sendLeadEmail(payload, leadScore, env) });
  if (jotformConfigured) channels.push({ name: 'Jotform', run: () => submitToJotform(payload, leadScore, env) });

  if (channels.length === 0) {
    console.error('Lead received but no delivery channel is configured. Set LEAD_WEBHOOK_URL, RESEND_API_KEY + LEADS_NOTIFY_EMAIL, or JOTFORM_API_KEY + JOTFORM_FORM_ID.');
    return {
      status: 502,
      body: {
        success: false,
        error: 'No lead backend is configured yet.',
        detail: 'Set LEAD_WEBHOOK_URL, RESEND_API_KEY + LEADS_NOTIFY_EMAIL, or JOTFORM_API_KEY + JOTFORM_FORM_ID in the deployment environment.',
      },
    };
  }

  const results = await Promise.allSettled(channels.map((channel) => channel.run()));
  const delivered = channels.filter((_, index) => results[index].status === 'fulfilled').map((channel) => channel.name);
  const errors = results
    .map((result, index) => (result.status === 'rejected' ? `${channels[index].name}: ${result.reason instanceof Error ? result.reason.message : 'failed'}` : null))
    .filter((value): value is string => Boolean(value));

  if (errors.length) console.error('Lead delivery errors:', errors.join('; '));

  if (delivered.length === 0) {
    return {
      status: 502,
      body: {
        success: false,
        error: 'Lead validation passed, but every delivery channel failed. Check the function logs.',
        detail: errors.join('; '),
      },
    };
  }

  return {
    status: 201,
    body: {
      success: true,
      leadScore,
      forwardedTo: delivered,
      partialFailures: errors.length ? errors : undefined,
      manualSetupRequired: false,
    },
  };
}

export function fallbackChat(message: string) {
  const normalized = message.toLowerCase();
  if (normalized.includes('crm')) {
    return 'LYCORE prepares a CRM-ready lead payload with contact details, qualification answers, source data, UTM fields, consent, and calendar handoff fields. We integrate this directly into your CRM.';
  }
  if (normalized.includes('form')) {
    return 'LYCORE supports either the review form or an external CRM intake form. The form captures contact details, business context, consent, and source data.';
  }
  if (normalized.includes('dashboard')) {
    return 'LYCORE builds dashboards for businesses to review leads, intake status, source data, and follow-up activity after data sources are connected.';
  }
  if (normalized.includes('appointment') || normalized.includes('booking') || normalized.includes('calendar')) {
    return 'LYCORE sets up appointment-setting workflows that route leads toward booking, reminders, calendar updates, and CRM updates. We integrate with your existing calendars.';
  }
  if (normalized.includes('mobile') || normalized.includes('app') || normalized.includes('ui')) {
    return 'LYCORE can build mobile apps and web UI apps for workflows such as lead review, intake queues, dashboards, and follow-up tasks.';
  }
  if (normalized.includes('call') || normalized.includes('after')) {
    return 'LYCORE answers calls 24/7. It greets the caller in your business name, captures caller details, and routes summaries to your team.';
  }
  if (normalized.includes('seo') || normalized.includes('website')) {
    return 'LYCORE builds websites with clear service pages, metadata, schema, FAQ content, internal links, and conversion-focused review CTAs. Rankings are not guaranteed.';
  }
  return 'LYCORE answers calls 24/7, builds phone-first websites, and recovers missed leads for small service businesses. The free review is the best next step.';
}

export async function chatReply(message: string, env: Env = process.env) {
  const safeMessage = clean(message, 800);
  if (!safeMessage) {
    return { status: 400, body: { success: false, error: 'Message is required' } };
  }

  if (!env.GEMINI_API_KEY) {
    return { status: 200, body: { success: true, text: fallbackChat(safeMessage), manualSetupRequired: true } };
  }

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: safeMessage,
      config: {
        systemInstruction:
          "You are LYCORE's website intake assistant. You guide visitors through a qualification flow. Ask exactly ONE question at a time. The flow is: 1. Welcome 2. Ask if they own/manage a small service business 3. Ask what they need help with (calls, website, Google Business Profile, etc.) 4. Ask for their website URL 5. Ask for location 6. Ask whether they miss calls after hours 7. Recommend the relevant LYCORE service 8. Offer the free lead system review 9. Collect contact details 10. Confirm their info will be reviewed. Do not promise rankings, revenue, or outcomes. Keep replies under 50 words.",
      },
    });
    return { status: 200, body: { success: true, text: response.text || fallbackChat(safeMessage), manualSetupRequired: false } };
  } catch (error) {
    console.error('Chat error:', error);
    return { status: 200, body: { success: true, text: fallbackChat(safeMessage), manualSetupRequired: true } };
  }
}
