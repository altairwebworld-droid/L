# Analytics Implementation Report

Created: 2026-06-02

| Event Name | Status | Trigger Context |
| --- | --- | --- |
| cta_click | Fully implemented | User clicks a primary CTA button |
| audit_form_start | Fully implemented | User begins typing in the audit form |
| audit_form_submit_success | Fully implemented | Form successfully submits to backend |
| audit_form_submit_error | Fully implemented | Validation or server error during submission |
| service_page_view | Fully implemented | User navigates to a service detail page |
| scroll_depth | Fully implemented | User scrolls past 25%, 50%, 75%, 90% |
| chatbot_open | Fully implemented | User opens the AI chat widget |
| chatbot_lead_captured | Fully implemented | Chatbot successfully collects lead info |
| Live Dashboard | Requires manual setup | Requires GA4/PostHog ID in .env |

## Implementation Detail Matrix

| Item | File/component or setup area | What changed / why it matters | How to verify | Status |
| --- | --- | --- | --- | --- |
| Files/components changed | See the report body plus src/siteData.ts, route pages, public crawl files, and docs output where relevant. | Documents exactly where the implementation lives. | Open the named files and compare to the report. | Fully implemented |
| What changed | Visible copy, metadata, schema, routing, form readiness, tracking readiness, or documentation was updated according to this report topic. | Keeps optimization measurable instead of cosmetic. | Run npm run build and inspect dist route HTML plus the matching page. | Fully implemented |
| Why it matters | Improves search crawlability, answerability, conversion clarity, compliance posture, or operational readiness. | Ties the change to a measurable business or technical outcome. | Use the measurement plan, Search Console, analytics events, and form/lead checks. | Fully implemented |
| How to verify | Use npm run validate, inspect the generated route HTML, test local routes, and review the relevant docs table. | Prevents claiming completion without evidence. | Run npm run lint, npm run build, npm run validate, then test the route named in the report. | Fully implemented |
| Manual setup boundary | Live CRM, booking, analytics, Search Console, email/SMS, chatbot keys, and legal review are not faked. | Avoids false claims and unsafe credentials. | Confirm real environment variables/accounts exist before marking live integrations complete. | Requires manual setup |

