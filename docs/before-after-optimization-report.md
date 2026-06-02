# Before And After Optimization Report

Created: 2026-06-02

| Area | Before | After | How to Verify | Status |
| --- | --- | --- | --- | --- |
| SEO | SPA-wide metadata only. | Route-specific generated metadata, sitemap, schema. | Run build and inspect dist routes. | Fully implemented |
| AEO | Partial FAQs without systematic schema. | Visible FAQs and matching FAQPage schema. | Inspect route content and JSON-LD. | Fully implemented |
| GEO | Mixed claims and entity language. | Consistent LyCore entity statement. | Manual AI summary review. | Fully implemented |
| Conversion | Email/simulated form. | Audit CTA and backend-ready form. | Submit form to /api/leads. | Fully implemented |
| Backend/CRM | Limited payload and public GET leads. | Structured payload and Vercel API functions with Zoho/generic webhook placeholders; no public lead dump. | Inspect api/leads.ts and test API. | Fully implemented |
| Trust | Placeholder legal links and strong claims. | Privacy/terms, disclaimers, sanitized claims. | Inspect pages. | Fully implemented |
| Analytics | No event utility. | Safe no-op analytics and events. | Dev console or provider dashboard. | Requires manual setup |
| Chatbot | Free-form chat, heavy client import. | Strict 10-step flow, server-side API. | Chat via UI, check network tab. | Fully implemented |
| Agentic Workflow | None. | Lead scoring and owner notification stubs. | Inspect server.ts logic. | Fully implemented |
| Performance | Heavy client-side genai SDK. | SDK removed from frontend bundle. | Analyze build size. | Fully implemented |
