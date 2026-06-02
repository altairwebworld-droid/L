export type LeadPayload = {
  fullName?: string;
  agencyName?: string;
  website?: string;
  email?: string;
  phone?: string;
  location?: string;
  biggestChallenge?: string;
  currentCRM?: string;
  missedCalls?: string;
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

export type NormalizedLeadPayload = Required<Omit<LeadPayload, 'honeypot'>>;

type Env = Record<string, string | undefined>;

type WebhookTarget = {
  name: string;
  url: string;
  kind: 'crm' | 'calendar' | 'notification' | 'follow_up';
};

export const requiredLeadFields: Array<keyof LeadPayload> = [
  'fullName',
  'agencyName',
  'email',
  'phone',
  'location',
  'biggestChallenge',
  'missedCalls',
  'preferredContactMethod',
];

export function clean(value: unknown, maxLength = 2000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export function validateLead(payload: LeadPayload) {
  const missing = requiredLeadFields.filter((field) => !clean(payload[field]));
  if (payload.consent !== true) missing.push('consent');
  return missing;
}

export function normalizeLeadPayload(body: LeadPayload): NormalizedLeadPayload {
  return {
    fullName: clean(body.fullName),
    agencyName: clean(body.agencyName),
    website: clean(body.website),
    email: clean(body.email),
    phone: clean(body.phone),
    location: clean(body.location),
    biggestChallenge: clean(body.biggestChallenge),
    currentCRM: clean(body.currentCRM),
    missedCalls: clean(body.missedCalls),
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
    title: `LyCore audit request: ${payload.agencyName}`,
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

  if (errors.length) {
    throw new Error(errors.join('; '));
  }

  const forwardedTo = [...crm.sent, ...calendar.sent, ...notifications.sent];
  return {
    manualSetupRequired: forwardedTo.length === 0,
    forwardedTo,
    crmConfigured: crmTargets.length > 0,
    calendarConfigured: calendarTargets.length > 0,
    notificationConfigured: notificationTargets.length > 0,
  };
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

  try {
    const routing = await routeLead(payload, leadScore, env);
    return {
      status: routing.manualSetupRequired ? 202 : 201,
      body: {
        success: true,
        leadScore,
        ...routing,
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Webhook routing failed';
    console.error('Lead submission error:', message);
    return {
      status: 502,
      body: {
        success: false,
        error: 'Lead validation passed, but CRM/calendar routing failed. Check Vercel function logs and webhook setup.',
        detail: message,
      },
    };
  }
}

export function fallbackChat(message: string) {
  const normalized = message.toLowerCase();
  if (normalized.includes('crm')) {
    return 'LyCore can prepare a CRM-ready lead payload with contact details, qualification answers, source data, UTM fields, consent, and calendar handoff fields. Live CRM routing requires manual setup with a real platform.';
  }
  if (normalized.includes('form')) {
    return 'LyCore can support either the built-in audit form or an external CRM intake form. The form should capture contact details, agency context, consent, source data, and the visitor challenge.';
  }
  if (normalized.includes('dashboard')) {
    return 'LyCore can build custom dashboards for bail bond agencies to review leads, intake status, source data, CRM handoff, follow-up activity, and operational signals after data sources are connected.';
  }
  if (normalized.includes('appointment') || normalized.includes('booking') || normalized.includes('calendar')) {
    return 'LyCore can prepare appointment-setting workflows that route qualified leads toward booking, reminders, staff handoff, calendar updates, and CRM updates. Calendar and booking tools require manual setup.';
  }
  if (normalized.includes('mobile') || normalized.includes('app') || normalized.includes('ui')) {
    return 'LyCore can build mobile apps and web UI apps for bail bond workflows such as lead review, intake queues, dashboards, appointment coordination, and follow-up tasks.';
  }
  if (normalized.includes('call') || normalized.includes('after')) {
    return 'LyCore can support after-hours call answering by collecting lead details, preparing summaries, and routing next steps. AI does not replace licensed professionals or make legal decisions.';
  }
  if (normalized.includes('seo') || normalized.includes('website')) {
    return 'LyCore builds SEO-ready bail bond websites with clear service pages, metadata, schema, FAQ content, internal links, and conversion-focused audit CTAs. Rankings are not guaranteed.';
  }
  return 'LyCore helps bail bond agencies capture more leads with SEO websites, AI call answering, automated intake, CRM integration, follow-up workflows, custom dashboards, appointment setting, and mobile or web UI apps. The free audit is the best next step.';
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
          "You are LyCore's website intake assistant. You MUST guide visitors through a strict 10-step qualification flow. Ask exactly ONE question at a time. The flow is: 1. Welcome 2. Ask if they own/manage a bail bond agency 3. Ask what they need help with (calls, SEO, CRM, calendar, dashboards, apps, etc.) 4. Ask for their website URL 5. Ask for agency location 6. Ask whether they miss calls after hours 7. Recommend the relevant LyCore service 8. Offer the free lead system audit 9. Collect contact details 10. Confirm their info will be reviewed. Do not give legal advice, promise results, replace licensed professionals, or make bail outcome decisions. Keep replies under 50 words.",
      },
    });
    return { status: 200, body: { success: true, text: response.text || fallbackChat(safeMessage), manualSetupRequired: false } };
  } catch (error) {
    console.error('Chat error:', error);
    return { status: 200, body: { success: true, text: fallbackChat(safeMessage), manualSetupRequired: true } };
  }
}
