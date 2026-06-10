# LyCore Baseline Audit

Audit date: 2026-06-01  
Repository: `https://github.com/altairwebworld-droid/L.git`  
Local path: `E:\PCTMoveData\Documents\Website design\L`  
Branch at audit time: `codex/measurable-website-optimizer`

## Current State Summary

The imported project is a Vite/React/TypeScript single-page application served by an Express server. It has five React routes, one global `index.html` metadata block, a SQLite lead endpoint, a committed `leads.db`, an AI chat demo that imports `@google/genai` in client code, and static `public/sitemap.xml` and `public/robots.txt` files.

## Baseline Inventory

| Item | Status | Current state |
|---|---:|---|
| 1. Current pages/routes found | Present | React routes exist for `/`, `/services`, `/about`, `/contact`, and `/bail-bonds` in `src/App.tsx`. |
| 2. Current title tags | Weak | Only one global title exists in `index.html`: `Lycore Bail Bond AI | AI Automation for Bail Bond Companies`. No route-specific title tags exist. |
| 3. Current meta descriptions | Weak | Only one global meta description exists in `index.html`. No route-specific descriptions exist. |
| 4. Current H1/H2/H3 structure | Weak | Pages contain headings, but there is not a validated one-H1-per-route SEO structure. The homepage uses a screen-reader-only H1 while the visible hero uses non-heading text. |
| 5. Current canonical tags | Missing | No canonical tags were found in `index.html`. |
| 6. Current robots meta tags | Missing | No page-level robots meta tags were found. |
| 7. Current Open Graph tags | Weak | Global Open Graph tags exist in `index.html`, but they are not route-specific and use an external Unsplash image. |
| 8. Current Twitter/X card tags | Missing | No Twitter/X card metadata was found. |
| 9. Current schema/structured data | Weak | One global Organization JSON-LD block exists. It references `https://lycore.org/logo.png`, which is not verified in the repo. No Service, FAQPage, or BreadcrumbList schema exists. |
| 10. Current sitemap.xml status | Weak | `public/sitemap.xml` exists for the five current routes, but it has stale `lastmod` dates and does not include planned service/audit/privacy/terms pages. |
| 11. Current robots.txt status | Present | `public/robots.txt` allows crawling and references `https://lycore.org/sitemap.xml`. |
| 12. Current internal links | Weak | Navigation and footer links exist, but services mostly point to `/services`; privacy/terms point to `#`; dedicated service pages do not exist. |
| 13. Current CTA language | Weak | CTAs are email/proposal/session oriented, such as mailto links and `Request Your Custom Solution`, rather than the primary audit CTA. |
| 14. Current form fields | Weak | Contact form collects first name, last name, email, agency, and message only. It lacks phone, location, challenge, CRM, missed calls, preferred contact, consent, source, and UTM fields. |
| 15. Current backend/form submission status | Broken | Contact form simulates an API call and does not submit to `/api/leads`. Backend stores only limited fields. |
| 16. Current analytics/tracking status | Missing | No analytics utility, conversion events, or UTM capture were found. |
| 17. Current chatbot status | Weak | `AIChatDemo.tsx` imports `@google/genai` in client code and uses `process.env.GEMINI_API_KEY`, which risks exposing implementation assumptions in frontend code. |
| 18. Current performance concerns | Weak | App uses animated sections, external fonts, Spline dependency, and client-side AI import. No post-build route metadata generation exists. |
| 19. Current accessibility concerns | Weak | Labels exist on the contact form, but there are placeholder legal links, icon-only/low-context controls, many animation-heavy sections, and heading hierarchy needs validation. |
| 20. Current trust/compliance content | Weak | Footer links to privacy and terms are placeholders. Existing content includes strong claims around guarantees, revenue, dominance, and Google Guaranteed without visible substantiation. |
| 21. Current SEO weaknesses | Weak | No route-specific metadata, canonicals, robots meta, Twitter tags, dedicated service pages, or complete sitemap. |
| 22. Current AEO weaknesses | Weak | FAQs exist in page content, but there is no systematic direct Q&A coverage or matching FAQPage schema. |
| 23. Current GEO weaknesses | Weak | LyCore's niche is clear, but entity language is inconsistent and includes unsupported performance language rather than a stable AI-readable positioning statement. |
| 24. Current conversion weaknesses | Broken | Primary CTA is not the audit CTA, form is simulated, no consent/UTM/source capture, and no CRM-ready payload exists. |
| 25. Current backend/CRM readiness weaknesses | Broken | `GET /api/leads` publicly exposes leads, `leads.db` is committed, no CRM webhook placeholder exists, no environment-based routing exists, and payload fields are incomplete. |

## Current Routes Found

- `/`
- `/services`
- `/about`
- `/contact`
- `/bail-bonds`

## Current Risky Or Unverified Claims Found

- `100% lead capture`
- `dominates`
- `Google Guaranteed`
- `costing you thousands`
- `growth of your profit`
- `systems guarantee instant engagement`
- physical address in footer/contact without verification in the brief
- unverified logo URL in Organization schema

## Baseline Conclusion

The site has a strong visual style and an existing LyCore bail-bond focus, but it is not yet a measurable, route-indexable, CRM-ready, compliant lead capture system. Implementation should preserve the dark premium style while replacing unverified claims, adding route-level metadata and schema, creating dedicated service/audit pages, connecting the form to a safer backend payload, removing public lead exposure, and documenting all manual setup requirements.

## Follow-Up SEO Tool Baseline

Audit date: 2026-06-02  
Target page: `/`  
Target keyword: `bail bonds`

| Finding | Baseline status | Evidence |
| --- | ---: | --- |
| Keyword in title | Weak | Current title uses `AI Receptionist & SEO Websites for Bail Bond Agencies | LyCore`, which does not contain the exact phrase `bail bonds`. |
| Title delimiter | Weak | Current title uses the pipe delimiter `|`. |
| Raw HTML headings | Broken | Source `index.html` renders an empty `<div id="root"></div>` before JavaScript, so strict crawlers can report no page headers. |
| Raw HTML content | Broken | Source `index.html` has no crawlable body copy before JavaScript, so strict crawlers can report 0 words and no keyword in content. |
