# 30/60/90 Optimization Plan

Created: 2026-06-02

| Period | Metrics to Check | What Improvement Looks Like | Action if Underperforming |
| --- | --- | --- | --- |
| 30 Days | Indexing, impressions, clicks, form starts, form errors | More pages indexed, impressions growing, starts > 0 | Request indexing, fix crawl errors, simplify form |
| 60 Days | Service page impressions, CTR, FAQ queries, internal links | Service pages getting clicks, FAQs answering queries | Expand FAQs, strengthen internal links, revise copy |
| 90 Days | Qualified lead count, CRM follow-up success | High % of leads are qualified agency owners | Add proof assets, connect automations, expand high-value topics |

## Implementation Detail Matrix

| Item | File/component or setup area | What changed / why it matters | How to verify | Status |
| --- | --- | --- | --- | --- |
| Files/components changed | See the report body plus src/siteData.ts, route pages, public crawl files, and docs output where relevant. | Documents exactly where the implementation lives. | Open the named files and compare to the report. | Fully implemented |
| What changed | Visible copy, metadata, schema, routing, form readiness, tracking readiness, or documentation was updated according to this report topic. | Keeps optimization measurable instead of cosmetic. | Run npm run build and inspect dist route HTML plus the matching page. | Fully implemented |
| Why it matters | Improves search crawlability, answerability, conversion clarity, compliance posture, or operational readiness. | Ties the change to a measurable business or technical outcome. | Use the measurement plan, Search Console, analytics events, and form/lead checks. | Fully implemented |
| How to verify | Use npm run validate, inspect the generated route HTML, test local routes, and review the relevant docs table. | Prevents claiming completion without evidence. | Run npm run lint, npm run build, npm run validate, then test the route named in the report. | Fully implemented |
| Manual setup boundary | Live CRM, booking, analytics, Search Console, email/SMS, chatbot keys, and legal review are not faked. | Avoids false claims and unsafe credentials. | Confirm real environment variables/accounts exist before marking live integrations complete. | Requires manual setup |

