# Performance Report

Created: 2026-06-02

| Performance Optimization | Status | Notes |
| --- | --- | --- |
| Remove heavy client AI | Fully implemented | Moved Gemini import to server-side leadRouting/chat API |
| Static HTML Generation | Fully implemented | All routes pre-rendered via script |
| Route code splitting | Fully implemented | Secondary pages load only when visited; homepage JavaScript fell from 403.13 KiB to about 189 KiB compressed |
| Deferred long-page modules | Fully implemented | Connected story, concept gallery, installation stack, FAQ, and final CTA initialize when the visitor approaches them |
| Gallery image delivery | Fully implemented | Displayed showcase PNGs were resized and converted to WebP; aggregate displayed gallery payload fell from about 17 MiB to about 0.4 MiB |
| Responsive hero images | Fully implemented | Hero cards provide 320 px and 640 px WebP sources with width, height, sizes, and decoding hints |
| Font delivery | Fully implemented | Removed render-blocking Google Fonts request; the condensed display face is self-hosted and uses font-display: swap |
| Lighthouse verification | Fully implemented | Local production audit reached 100 SEO, 100 accessibility, and 100 best practices; field Core Web Vitals still require production traffic data |

## Implementation Detail Matrix

| Item | File/component or setup area | What changed / why it matters | How to verify | Status |
| --- | --- | --- | --- | --- |
| Files/components changed | See the report body plus src/siteData.ts, route pages, public crawl files, and docs output where relevant. | Documents exactly where the implementation lives. | Open the named files and compare to the report. | Fully implemented |
| What changed | Visible copy, metadata, schema, routing, form readiness, tracking readiness, or documentation was updated according to this report topic. | Keeps optimization measurable instead of cosmetic. | Run npm run build and inspect dist route HTML plus the matching page. | Fully implemented |
| Why it matters | Improves search crawlability, answerability, conversion clarity, compliance posture, or operational readiness. | Ties the change to a measurable business or technical outcome. | Use the measurement plan, Search Console, analytics events, and form/lead checks. | Fully implemented |
| How to verify | Use npm run validate, inspect the generated route HTML, test local routes, and review the relevant docs table. | Prevents claiming completion without evidence. | Run npm run lint, npm run build, npm run validate, then test the route named in the report. | Fully implemented |
| Manual setup boundary | Live CRM, booking, analytics, Search Console, email/SMS, chatbot keys, and legal review are not faked. | Avoids false claims and unsafe credentials. | Confirm real environment variables/accounts exist before marking live integrations complete. | Requires manual setup |

