# Zoho Webhook And Calendar Setup

Created: 2026-06-02

## What The Site Now Sends

The Vercel Function at `/api/leads` validates the audit form and can forward the lead to:

- `ZOHO_CRM_WEBHOOK_URL` for Zoho CRM or Zoho Flow lead creation.
- `ZOHO_CALENDAR_WEBHOOK_URL` for Zoho Calendar, Zoho Bookings, or Zoho Flow appointment preparation.
- `CRM_WEBHOOK_URL` and `CALENDAR_WEBHOOK_URL` as generic alternatives.

No Zoho API keys or OAuth secrets should be placed in frontend code.

## Recommended Zoho Flow Setup

1. Create a Zoho Flow with an incoming webhook trigger.
2. Copy the incoming webhook URL.
3. In the Flow, add actions to create or update the lead/contact in Zoho CRM.
4. Map the incoming JSON fields from `lead.fullName`, `lead.agencyName`, `lead.email`, `lead.phone`, `lead.location`, `lead.biggestChallenge`, `lead.currentCRM`, `lead.missedCalls`, `lead.preferredContactMethod`, `lead.preferredContactTime`, `lead.message`, and the attribution fields.
5. Test the webhook with a real audit form submission.
6. Add the webhook URL to Vercel as `ZOHO_CRM_WEBHOOK_URL`.

## Recommended Calendar Setup

1. Create a second Zoho Flow with an incoming webhook trigger for appointment preparation.
2. Add a Zoho Calendar, Zoho Bookings, or task/reminder action.
3. Map `contact.fullName`, `contact.email`, `contact.phone`, `contact.preferredContactTime`, `qualification.biggestChallenge`, `qualification.missedCalls`, `bookingUrl`, and `submittedAt`.
4. Use human review when the submitted preferred time is not an exact calendar slot.
5. Add the webhook URL to Vercel as `ZOHO_CALENDAR_WEBHOOK_URL`.

## Vercel Environment Variables

Set these in the Vercel project:

```text
ZOHO_CRM_WEBHOOK_URL=https://...
ZOHO_CALENDAR_WEBHOOK_URL=https://...
BOOKING_URL=https://...
VITE_BOOKING_URL=https://...
```

Optional:

```text
OWNER_NOTIFICATION_WEBHOOK=https://...
FOLLOW_UP_WEBHOOK_URL=https://...
GEMINI_API_KEY=...
```

## What You Should See When Done

- Submitting `/free-bail-bond-lead-system-audit` returns a success state on the website.
- The Vercel Function logs show `/api/leads` returning `201`.
- Zoho receives the lead payload and creates or updates the mapped CRM record.
- The calendar Flow prepares a booking, task, reminder, or calendar event depending on your mapping.
- If a webhook is missing, the site still works but returns `manualSetupRequired: true`.

## Manual Setup Required

Zoho field mapping, calendar event rules, OAuth/API permissions, email/SMS reminders, and final legal/privacy review require manual setup inside Zoho and Vercel.
