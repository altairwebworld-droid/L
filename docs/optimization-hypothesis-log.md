# Optimization Hypothesis Log

Created: 2026-06-02

| Area | Hypothesis | Metric | Expected result | Review date | Status |
| --- | --- | --- | --- | --- | --- |
| CTA | Specific audit CTA will increase clarity. | CTA clicks/forms | Higher form starts | 30 days | Pending |
| Service pages | Dedicated pages for core services improve search. | Impressions | More impressions | 60 days | Pending |
| FAQs | Direct answers improve AEO readiness. | AI summaries | Accurate summaries | 60 days | Pending |
| Form payload | Qualification fields improve lead quality. | Qualified leads | Better leads | 30 days | Pending |
| CRM readiness | Webhook placeholder reduces integration friction. | Setup time | Faster setup | 60 days | Pending |
| Chatbot | Strict 10-step flow increases qualification rate. | Chatbot leads | Higher qual rate | 30 days | Pending |
| Internal Linking | Contextual related links increase time on site. | Pages/session | Higher engagement | 60 days | Pending |
| Schema | Service/FAQ schema increases rich results. | Rich results | More rich snippets | 90 days | Pending |
| Agentic Flow | Automated scoring prioritizes follow-up. | Response time | Faster response | 30 days | Pending |

## Implementation Detail Matrix

| Item | File/component or setup area | What changed / why it matters | How to verify | Status |
| --- | --- | --- | --- | --- |
| Files/components changed | See the report body plus src/siteData.ts, route pages, public crawl files, and docs output where relevant. | Documents exactly where the implementation lives. | Open the named files and compare to the report. | Fully implemented |
| What changed | Visible copy, metadata, schema, routing, form readiness, tracking readiness, or documentation was updated according to this report topic. | Keeps optimization measurable instead of cosmetic. | Run npm run build and inspect dist route HTML plus the matching page. | Fully implemented |
| Why it matters | Improves search crawlability, answerability, conversion clarity, compliance posture, or operational readiness. | Ties the change to a measurable business or technical outcome. | Use the measurement plan, Search Console, analytics events, and form/lead checks. | Fully implemented |
| How to verify | Use npm run validate, inspect the generated route HTML, test local routes, and review the relevant docs table. | Prevents claiming completion without evidence. | Run npm run lint, npm run build, npm run validate, then test the route named in the report. | Fully implemented |
| Manual setup boundary | Live CRM, booking, analytics, Search Console, email/SMS, chatbot keys, and legal review are not faked. | Avoids false claims and unsafe credentials. | Confirm real environment variables/accounts exist before marking live integrations complete. | Requires manual setup |

