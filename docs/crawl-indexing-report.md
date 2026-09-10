# Crawl And Indexing Report

Created: 2026-06-02

- Sitemap URL: https://www.lycore.org/sitemap.xml
- Robots.txt URL: https://www.lycore.org/robots.txt
- Pages included in sitemap: /, /what-we-build, /vision, /industries, /about, /faq, /contact, /book, /integrations, /resources, /services/outbound-lead-generation, /services/cold-email-infrastructure, /services/ai-receptionist, /services/missed-call-text-back, /services/lead-follow-up, /services/reputation-management, /services/review-automation, /services/google-business-profile-management, /services/crm-automation, /services/customer-reactivation, /services/web-design, /industries/home-services, /industries/pest-control, /industries/plumbing, /industries/roofing, /industries/restoration, /industries/towing, /industries/med-spas, /industries/dentists, /industries/veterinary, /integrations/gohighlevel, /integrations/housecall-pro, /integrations/gorilladesk, /integrations/fieldroutes, /integrations/pestpac, /integrations/jobber, /integrations/servicetitan, /integrations/hubspot, /integrations/n8n, /integrations/zapier, /integrations/make, /integrations/notion, /resources/ai-receptionist-vs-answering-service, /resources/missed-call-text-back, /resources/review-automation, /resources/crm-vs-field-service-management, /resources/cold-email-infrastructure, /resources/zapier-vs-n8n, /privacy-policy, /terms, /data-deletion, /commitments, /commitments/career-growth, /commitments/work-life-balance, /commitments/social-impact, /commitments/how-we-work
- Pages intentionally excluded: /audit-request-received, /booking-confirmed, /booking-failed because they are post-submit/post-booking confirmation pages and should not be indexed.
- Indexing risks: Search Console/domain verification require manual setup.
- Verification status: Fully implemented for files; Requires manual setup for submission.

## Implementation Detail Matrix

| Item | File/component or setup area | What changed / why it matters | How to verify | Status |
| --- | --- | --- | --- | --- |
| Files/components changed | See the report body plus src/siteData.ts, route pages, public crawl files, and docs output where relevant. | Documents exactly where the implementation lives. | Open the named files and compare to the report. | Fully implemented |
| What changed | Visible copy, metadata, schema, routing, form readiness, tracking readiness, or documentation was updated according to this report topic. | Keeps optimization measurable instead of cosmetic. | Run npm run build and inspect dist route HTML plus the matching page. | Fully implemented |
| Why it matters | Improves search crawlability, answerability, conversion clarity, compliance posture, or operational readiness. | Ties the change to a measurable business or technical outcome. | Use the measurement plan, Search Console, analytics events, and form/lead checks. | Fully implemented |
| How to verify | Use npm run validate, inspect the generated route HTML, test local routes, and review the relevant docs table. | Prevents claiming completion without evidence. | Run npm run lint, npm run build, npm run validate, then test the route named in the report. | Fully implemented |
| Manual setup boundary | Live CRM, booking, analytics, Search Console, email/SMS, chatbot keys, and legal review are not faked. | Avoids false claims and unsafe credentials. | Confirm real environment variables/accounts exist before marking live integrations complete. | Requires manual setup |

