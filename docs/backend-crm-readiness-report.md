# Backend CRM Readiness Report

Created: 2026-06-02

- Payload fields: fullName, agencyName, website, email, phone, location, biggestChallenge, currentCRM, missedCalls, preferredContactMethod, preferredContactTime, message, consent, sourcePage, landingPage, referrer, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, submittedAt
- API routes: api/leads.ts and api/chat.ts for Vercel, with server.ts retained for local development.
- Webhook placeholders: ZOHO_CRM_WEBHOOK_URL, CRM_WEBHOOK_URL, ZOHO_CALENDAR_WEBHOOK_URL, CALENDAR_WEBHOOK_URL, OWNER_NOTIFICATION_WEBHOOK, FOLLOW_UP_WEBHOOK_URL.
- Validation: required fields and consent.
- Missing credentials: CRM webhook, calendar webhook, analytics, email/SMS, chatbot provider, booking provider.
- Manual setup required: connect real Zoho CRM/Calendar or automation provider endpoints.
- Verification status: Fully implemented for readiness; Requires manual setup for live routing.
