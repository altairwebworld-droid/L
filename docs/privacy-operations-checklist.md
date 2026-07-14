# Privacy Operations Launch Checklist

Status: Requires manual setup before relying on the public policy as final legal documentation.

## 1. Confirm active providers

| Category | Possible implementation in this repository | Launch owner must confirm |
| --- | --- | --- |
| Hosting and deployment | Vercel or another configured host | Provider, account owner, region, retention, security contacts |
| Analytics | Google Analytics only when `VITE_GA4_MEASUREMENT_ID` is configured and a visitor opts in | Measurement ID, retention, Google Signals/advertising settings, data-sharing settings |
| AI chat | Google Gemini only when `GEMINI_API_KEY` is configured | Provider account, model, API retention and training settings |
| Lead requests | Resend when configured | Sender domain, recipient inbox, retention, access controls |
| Privacy requests | Jotform form `261947648151061` | Recipient notifications, retention, access controls, deletion process |
| CRM and automation | Webhook, CRM, calendar, notification, and follow-up URLs when configured | Every live destination, data fields sent, contract/DPA, owner |
| Social and messaging links | Facebook, Instagram, Threads, LinkedIn, X, WhatsApp | Confirm links are intentional; these platforms govern data after a visitor leaves the site |

## 2. Adopt the retention schedule

Set and document the actual period, deletion owner, and backup behavior for each record type before publishing a final policy.

| Record type | Required decision |
| --- | --- |
| Unconverted form leads | Retention period after last contact; deletion cadence |
| Privacy requests | Retention period for request, identity verification, response, and appeal records |
| Chat requests | Whether provider logs are retained; how long and who can access them |
| CRM and client records | Contractual retention and deletion requirements |
| Analytics | Configure provider retention and confirm advertising features stay off unless separately disclosed |
| Security logs and backups | Retention, access owner, restore/deletion process |

## 3. Configure the Jotform privacy-request workflow

The policy page links to Jotform form `261947648151061`. In Jotform, configure the recipient notification, access permissions, retention, and any secure case-management automation. Test one access, correction, deletion, opt-out, and appeal request. Document the identity-verification method, response deadline, owner, and escalation path.

## 4. Review regularly

- Review the vendor inventory and policy at least annually and before enabling a new tracker, CRM, AI provider, marketing channel, or international service.
- Confirm Global Privacy Control and analytics opt-in behavior after any analytics change.
- Review rate limits, API logs, access controls, and incident contacts quarterly.
- Have qualified counsel review the final public policy, client agreements, data-processing terms, and any regulated-industry workflows.
