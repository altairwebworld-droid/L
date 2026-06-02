# LyCore Measurement Plan

Created: 2026-06-02

| Metric | What it measures | Where tracked | What counts as improvement | Setup status |
| --- | --- | --- | --- | --- |
| Indexed pages | How many public pages Google indexes. | Google Search Console | More public service/audit pages indexed. | Requires manual setup |
| Impressions | How often pages appear in search. | Google Search Console | Impressions increase for service themes. | Requires manual setup |
| Clicks | Organic visits from search. | Google Search Console | Clicks increase for relevant queries. | Requires manual setup |
| CTR | Click-through from impressions. | Google Search Console | CTR improves after clearer titles/descriptions. | Requires manual setup |
| Average position | Average ranking by page/query. | Google Search Console | Relevant queries trend upward over time. | Requires manual setup |
| Unique titles | Pages with distinct title tags. | Generated route HTML | All indexable pages have unique titles. | Fully implemented |
| Unique descriptions | Pages with distinct meta descriptions. | Generated route HTML | All indexable pages have unique descriptions. | Fully implemented |
| Exactly one H1 | Visible main heading count. | Manual/validator review | Each route renders one main H1. | Fully implemented |
| Canonical tags | Self-referencing canonical URLs. | Generated route HTML | Every public page has HTTPS canonical. | Fully implemented |
| Sitemap inclusion | Canonical URLs in sitemap. | /sitemap.xml | Public pages included; legal pages excluded intentionally. | Fully implemented |
| Valid schema | JSON-LD parses and matches visible content. | Generated route HTML | Schema parses without errors. | Fully implemented |
| CTA clicks | Audit CTA interactions. | Analytics utility | CTA events fire after analytics setup. | Requires manual setup |
| Form starts | Visitors starting the audit form. | Analytics utility | Starts captured with path context. | Requires manual setup |
| Form submissions | Successful audit requests. | Vercel Function/backend/CRM | Valid submissions are validated and optionally forwarded to Zoho or another webhook. | Fully implemented |
| Form errors | Validation/backend errors. | Analytics/backend logs | Errors are tracked and reduced. | Fully implemented |
| Lead source/UTM captured | Attribution readiness. | Payload/backend rows | Source and UTM fields persist. | Fully implemented |
| Qualified leads | Lead quality after routing. | CRM/backend after setup | More agency-owner/manager leads. | Requires manual setup |
| Clear entity | Whether AI tools identify LyCore. | Manual GEO review | AI identifies niche and services accurately. | Fully implemented |
| FAQ completeness | Direct buyer answers. | Visible content and schema | Answers match JSON-LD. | Fully implemented |
