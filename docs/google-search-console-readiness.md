# Google Search Console Readiness

Created: 2026-06-02

| Page URL | Target Query | Readiness Status |
| --- | --- | --- |
| / | LYCORE GROUP LLC - Customer Communication Systems | Fully implemented |
| /what-we-build | 24/7 Receptionist, Websites & GBP for Service Businesses | Fully implemented |
| /vision | Where LYCORE Is Building — Full Business Systems | Fully implemented |
| /industries/towing | Towing Company Websites & 24/7 Call Answering — LYCORE | Fully implemented |
| /about | About LYCORE GROUP LLC - Service Business Systems | Fully implemented |
| /faq | Frequently Asked Questions — LYCORE | Fully implemented |
| /contact | Contact LYCORE — Free Lead System Review | Fully implemented |
| /book | Book a Strategy Call — LYCORE | Fully implemented |
| /privacy-policy | Privacy Policy — LYCORE | Fully implemented |
| /terms | Terms of Use — LYCORE | Fully implemented |
| /data-deletion | Data Deletion Instructions — LYCORE | Fully implemented |
| /commitments | Our Commitments — LYCORE | Fully implemented |
| /commitments/career-growth | Career Growth and Continuous Learning — LYCORE | Fully implemented |
| /commitments/work-life-balance | Remote Work and Work-Life Balance — LYCORE | Fully implemented |
| /commitments/social-impact | Our Social Impact Commitment — LYCORE | Fully implemented |
| /commitments/how-we-work | How We Work — LYCORE | Fully implemented |


## Simple Search Console setup

1. Add a **Domain property** for `lycore.org` and verify it with the DNS TXT record Google supplies. If DNS access is unavailable, add the URL-prefix property `https://www.lycore.org/` and use the existing HTML-file or meta-tag verification.
2. Open **Indexing > Sitemaps**, enter `sitemap.xml`, and select **Submit**.
3. Use **URL inspection** to request indexing first for the homepage, `/what-we-build`, `/industries/towing`, `/about`, `/contact`, `/book`, and `/faq`. The sitemap can handle discovery of the remaining canonical pages.
4. Do not request indexing for redirect or result routes: `/privacy`, `/industries/bail-bonds`, `/audit-request-received`, `/booking-confirmed`, or `/booking-failed`.
5. Check **Page indexing** after several days, then review **Performance > Search results** once Google begins collecting impressions.

- Sitemap URL: https://www.lycore.org/sitemap.xml
- Robots.txt URL: https://www.lycore.org/robots.txt
- Search Console setup status: Requires manual setup.

## Implementation Detail Matrix

| Item | File/component or setup area | What changed / why it matters | How to verify | Status |
| --- | --- | --- | --- | --- |
| Files/components changed | See the report body plus src/siteData.ts, route pages, public crawl files, and docs output where relevant. | Documents exactly where the implementation lives. | Open the named files and compare to the report. | Fully implemented |
| What changed | Visible copy, metadata, schema, routing, form readiness, tracking readiness, or documentation was updated according to this report topic. | Keeps optimization measurable instead of cosmetic. | Run npm run build and inspect dist route HTML plus the matching page. | Fully implemented |
| Why it matters | Improves search crawlability, answerability, conversion clarity, compliance posture, or operational readiness. | Ties the change to a measurable business or technical outcome. | Use the measurement plan, Search Console, analytics events, and form/lead checks. | Requires manual setup |
| How to verify | Use npm run validate, inspect the generated route HTML, test local routes, and review the relevant docs table. | Prevents claiming completion without evidence. | Run npm run lint, npm run build, npm run validate, then test the route named in the report. | Fully implemented |
| Manual setup boundary | Live CRM, booking, analytics, Search Console, email/SMS, chatbot keys, and legal review are not faked. | Avoids false claims and unsafe credentials. | Confirm real environment variables/accounts exist before marking live integrations complete. | Requires manual setup |

