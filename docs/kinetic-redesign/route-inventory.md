# LYCORE route inventory

| Route | Purpose | Preservation requirement |
| --- | --- | --- |
| `/` | Main conversion and dispatch-machine narrative | Full kinetic redesign; preserve offer, CTAs, FAQ, concepts, and measurement language. |
| `/what-we-build` | Service-system details | Preserve five offerings and availability notes. |
| `/vision` | Product direction roadmap | Preserve now/next/direction/long-term distinctions. |
| `/industries/towing` | Towing-specific service page | Preserve urgent-service copy and WhatsApp action. |
| `/industries/bail-bonds` | Legacy route | Preserve redirect to `/what-we-build`. |
| `/about` | Company approach and measurement principles | Preserve company identity and claim boundaries. |
| `/faq` | Complete FAQ set | Preserve all eleven questions and answers. |
| `/contact` | Review form and direct-contact route | Preserve form submission, contact details, WhatsApp, email, social links, and booking link. |
| `/book` | Booking embed or configuration fallback | Preserve `VITE_BOOKING_URL` behavior. |
| `/commitments` | Commitment index | Preserve content and internal links. |
| `/commitments/career-growth` | Career growth commitment | Preserve text and metadata. |
| `/commitments/work-life-balance` | Remote-work commitment | Preserve text and metadata. |
| `/commitments/social-impact` | Social-impact commitment | Preserve text, pledge details, and privacy link. |
| `/commitments/how-we-work` | Working principles | Preserve text and cross-links. |
| `/audit-request-received` | Review submission result | Preserve analytics event and next action. |
| `/booking-confirmed` | Booking success | Preserve analytics event and next action. |
| `/booking-failed` | Booking fallback | Preserve retry/email options and explanatory note. |
| `/privacy-policy` | Privacy policy | Preserve policy, consent controls, and Jotform request action. |
| `/privacy` | Legacy privacy path | Preserve redirect to `/privacy-policy`. |
| `/terms` | Terms of use | Preserve legal text. |
| `/data-deletion` | Data deletion instructions | Preserve process and contact details. |
| `*` | Not found | Preserve recoverable navigation. |

## Route-level shared systems

- `Layout` retains one skip link, one navigation landmark, one `main`, SEO handling, privacy controls, and footer.
- The homepage alone receives the long pinned narrative.
- Inner routes reuse the visual system but remain content-driven and do not inherit the 520% hero sequence.
- Metadata continues to come from the existing typed page data and metadata generation scripts.

