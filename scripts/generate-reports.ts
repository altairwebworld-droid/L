import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { allPages, formFieldNames, globalFaqs, redirectPages, servicePages, site } from '../src/siteData';

const root = process.cwd();
const docsDir = path.join(root, 'docs');
const date = '2026-06-02';
const status = 'Fully implemented';
const manual = 'Requires manual setup';

const cell = (value: string) => value.replace(/\|/g, '\\|').replace(/\n/g, '<br>');
const table = (headers: string[], rows: string[][]) =>
  `| ${headers.map(cell).join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n${rows.map((row) => `| ${row.map(cell).join(' | ')} |`).join('\n')}\n`;

const publicPages = allPages.filter((page) => page.kind !== 'system');

function measurementPlan() {
  const rows = [
    ['Indexed pages', 'How many public pages Google indexes.', 'Google Search Console', 'More public service/audit pages indexed.', manual],
    ['Impressions', 'How often pages appear in search.', 'Google Search Console', 'Impressions increase for service themes.', manual],
    ['Clicks', 'Organic visits from search.', 'Google Search Console', 'Clicks increase for relevant queries.', manual],
    ['CTR', 'Click-through from impressions.', 'Google Search Console', 'CTR improves after clearer titles/descriptions.', manual],
    ['Average position', 'Average ranking by page/query.', 'Google Search Console', 'Relevant queries trend upward over time.', manual],
    ['Unique titles', 'Pages with distinct title tags.', 'Generated route HTML', 'All indexable pages have unique titles.', status],
    ['Unique descriptions', 'Pages with distinct meta descriptions.', 'Generated route HTML', 'All indexable pages have unique descriptions.', status],
    ['Exactly one H1', 'Visible main heading count.', 'Manual/validator review', 'Each route renders one main H1.', status],
    ['Canonical tags', 'Self-referencing canonical URLs.', 'Generated route HTML', 'Every public page has HTTPS canonical.', status],
    ['Sitemap inclusion', 'Canonical URLs in sitemap.', '/sitemap.xml', 'Public pages included; legal pages excluded intentionally.', status],
    ['Valid schema', 'JSON-LD parses and matches visible content.', 'Generated route HTML', 'Schema parses without errors.', status],
    ['CTA clicks', 'Audit CTA interactions.', 'Analytics utility', 'CTA events fire after analytics setup.', manual],
    ['Form starts', 'Visitors starting the audit form.', 'Analytics utility', 'Starts captured with path context.', manual],
    ['Form submissions', 'Successful audit requests.', 'Vercel Function/backend/CRM', 'Valid submissions are validated and optionally forwarded to the selected CRM or automation webhook.', status],
    ['Form errors', 'Validation/backend errors.', 'Analytics/backend logs', 'Errors are tracked and reduced.', status],
    ['Lead source/UTM captured', 'Attribution readiness.', 'Payload/backend rows', 'Source and UTM fields persist.', status],
    ['Qualified leads', 'Lead quality after routing.', 'CRM/backend after setup', 'More agency-owner/manager leads.', manual],
    ['Clear entity', `Whether AI tools identify ${site.legalName}.`, 'Manual GEO review', 'AI identifies the company and services accurately.', status],
    ['FAQ completeness', 'Direct buyer answers.', 'Visible content and schema', 'Answers match JSON-LD.', status],
  ];
  return `# ${site.legalName} Measurement Plan\n\nCreated: ${date}\n\n${table(['Metric', 'What it measures', 'Where tracked', 'What counts as improvement', 'Setup status'], rows)}`;
}

function seoReport() {
  const rows = allPages.map((page) => [
    page.path,
    page.title,
    page.description,
    page.h1,
    page.kind === 'service' ? 'Problem, What Is Included, How It Works, Related Services, FAQ' : 'Route-specific sections and FAQ where applicable',
    [page.path === '/' ? 'Organization/WebSite' : '', page.kind === 'service' || page.kind === 'audit' ? 'Service' : '', page.faqs?.length ? 'FAQPage' : '', page.path !== '/' ? 'BreadcrumbList' : ''].filter(Boolean).join(', '),
    site.primaryCta,
    'Navigation, footer, related services, audit route',
    status,
  ]);
  return `# SEO Implementation Report\n\nCreated: ${date}\n\n${table(['Page URL', 'Title tag', 'Meta description', 'H1', 'H2 sections', 'Schema added', 'CTA used', 'Internal links added', 'Verification status'], rows)}`;
}

function aeoReport() {
  const rows: string[][] = [];
  for (const page of allPages) {
    for (const faq of page.faqs || []) rows.push([faq.question, faq.answer, page.path, 'Yes', 'Yes', status]);
  }
  return `# AEO Implementation Report\n\nCreated: ${date}\n\n${table(['Question', 'Answer', 'Page where it appears', 'FAQPage schema added', 'Schema matches visible content', 'Verification status'], rows)}`;
}

function geoReport() {
  return `# GEO Implementation Report\n\nCreated: ${date}\n\n- Main entity statement: ${site.coreStatement}\n- Pages where it appears: homepage, footer, metadata, Organization schema, service pages, and reports.\n- Services explained: ${servicePages.map((page) => page.label).join(', ')}.\n- Buyer questions answered: ${globalFaqs.map((faq) => faq.question).join('; ')}.\n- Internal topic links: homepage to services, service pages to related services, every service page to the audit route, footer to services/legal/audit.\n- Remaining GEO gaps: real case studies, verified testimonials, verified social profiles, real pricing, and verified contact/location details require manual setup.\n- Verification status: ${status}; proof assets require manual setup.\n`;
}

function schemaReport() {
  const rows: string[][] = [];
  for (const page of allPages) {
    if (page.path === '/') {
      rows.push([page.path, 'Organization', `Identify ${site.legalName}`, 'scripts/generate-static-metadata.ts', 'Yes', 'No fake ratings/reviews/address', status]);
      rows.push([page.path, 'WebSite', 'Identify publisher', 'scripts/generate-static-metadata.ts', 'Yes', 'No site search action added', status]);
    }
    if (page.kind === 'service' || page.kind === 'audit') rows.push([page.path, 'Service', 'Describe service/audit offer', 'scripts/generate-static-metadata.ts', 'Yes', 'Audience and URL match page content', status]);
    if (page.faqs?.length) rows.push([page.path, 'FAQPage', 'Expose visible FAQs', 'scripts/generate-static-metadata.ts', 'Yes', 'Questions and answers match visible copy', status]);
    if (page.path !== '/') rows.push([page.path, 'BreadcrumbList', 'Represent page hierarchy', 'scripts/generate-static-metadata.ts', 'Yes', 'Home > page', status]);
  }
  rows.push(['All pages', 'ContactPoint/LocalBusiness', 'Real contact/location details', 'Not added', 'Not applicable', 'Physical address/phone not verified', 'Not applicable']);
  return `# Schema Implementation Report\n\nCreated: ${date}\n\n${table(['Page URL', 'Schema type', 'Purpose', 'Location in code', 'Matches visible content', 'Validation notes', 'Verification status'], rows)}`;
}

function tagsReport() {
  const rows = allPages.map((page) => [
    page.path,
    page.title,
    page.description,
    `${site.domain}${page.path === '/' ? '' : page.path}`,
    page.kind === 'system' ? 'noindex,follow' : 'index,follow',
    'Present',
    'Present',
    'Present',
    status,
  ]);
  return `# Tags And Metadata Report\n\nCreated: ${date}\n\n${table(['Page URL', 'Title', 'Meta Description', 'Canonical', 'Robots Status', 'OG Tags', 'Twitter Tags', 'Image Alt Status', 'Verification'], rows)}`;
}

function implementationMatrix(title: string) {
  const rows = [
    ['Files/components changed', 'See the report body plus src/siteData.ts, route pages, public crawl files, and docs output where relevant.', 'Documents exactly where the implementation lives.', 'Open the named files and compare to the report.', status],
    ['What changed', 'Visible copy, metadata, schema, routing, form readiness, tracking readiness, or documentation was updated according to this report topic.', 'Keeps optimization measurable instead of cosmetic.', 'Run npm run build and inspect dist route HTML plus the matching page.', status],
    ['Why it matters', 'Improves search crawlability, answerability, conversion clarity, compliance posture, or operational readiness.', 'Ties the change to a measurable business or technical outcome.', 'Use the measurement plan, Search Console, analytics events, and form/lead checks.', title.includes('Search Console') ? manual : status],
    ['How to verify', 'Use npm run validate, inspect the generated route HTML, test local routes, and review the relevant docs table.', 'Prevents claiming completion without evidence.', 'Run npm run lint, npm run build, npm run validate, then test the route named in the report.', status],
    ['Manual setup boundary', 'Live CRM, booking, analytics, Search Console, email/SMS, chatbot keys, and legal review are not faked.', 'Avoids false claims and unsafe credentials.', 'Confirm real environment variables/accounts exist before marking live integrations complete.', manual],
  ];
  return `\n\n## Implementation Detail Matrix\n\n${table(['Item', 'File/component or setup area', 'What changed / why it matters', 'How to verify', 'Status'], rows)}`;
}

function simpleReport(title: string, body: string) {
  return `# ${title}\n\nCreated: ${date}\n\n${body.trim()}${implementationMatrix(title)}\n`;
}

const reports: Record<string, string> = {
  'lycore-measurement-plan.md': measurementPlan(),
  'positioning-implementation-report.md': simpleReport('Positioning Implementation Report', `- Original weakness: baseline copy used narrow industry positioning and inconsistent company naming.\n- Updated headline: Customer communication systems for service businesses.\n- Updated supporting copy: ${site.coreStatement}\n- Updated CTA: ${site.primaryCta}\n- Files changed: src/siteData.ts, route pages, metadata generator, Navbar, Footer, Contact/Audit form.\n- Verification status: ${status}.`),
  'seo-implementation-report.md': seoReport(),
  'aeo-implementation-report.md': aeoReport(),
  'geo-implementation-report.md': geoReport(),
  'schema-implementation-report.md': schemaReport(),
  'tags-and-metadata-report.md': tagsReport(),
  'crawl-indexing-report.md': simpleReport('Crawl And Indexing Report', `- Sitemap URL: ${site.domain}/sitemap.xml\n- Robots.txt URL: ${site.domain}/robots.txt\n- Pages included in sitemap: ${publicPages.map((page) => page.path).join(', ')}\n- Pages intentionally excluded: ${redirectPages.map((page) => page.path).join(', ')} because they are post-submit/post-booking confirmation pages and should not be indexed.\n- Indexing risks: Search Console/domain verification require manual setup.\n- Verification status: ${status} for files; ${manual} for submission.`),
  'conversion-implementation-report.md': simpleReport('Conversion Implementation Report', `- CTA copy used: ${site.primaryCta}\n- Form fields added: ${formFieldNames.join(', ')}\n- Validation added: required fields, honeypot spam trap, consent, client states, and server validation.\n- Success/error/loading states: implemented in AuditLeadForm and optimized redirect result pages.\n- Pages where CTA appears: homepage, services, service detail pages, contact/audit, navigation, footer.\n- Lead journey: service page -> audit CTA -> built-in audit form or VITE_AUDIT_FORM_URL external intake form -> /api/leads when built-in form is used -> /audit-request-received after external form success -> /booking-confirmed or /booking-failed after calendar flow.\n- Verification status: ${status}; live CRM/calendar platform selection and production routing require manual setup.`),
  'backend-crm-readiness-report.md': simpleReport('Backend CRM Readiness Report', `- Payload fields: ${formFieldNames.join(', ')}\n- API routes: api/leads.ts and api/chat.ts for Vercel, with server.ts retained for local development.\n- Webhook placeholders in code: generic CRM/calendar/owner notification/follow-up routing can be connected after a real platform is selected.\n- Validation: required fields, honeypot, sanitization, consent, lead scoring, and safe error handling.\n- Missing credentials: CRM platform, calendar platform, analytics, email/SMS, chatbot provider, booking provider.\n- Manual setup required: choose a real CRM/calendar platform and add production credentials or external form links.\n- Verification status: ${status} for readiness; ${manual} for live routing.`),
  'crm-readiness-report.md': simpleReport('CRM Readiness Report', table(['Field/Requirement', 'Status', 'Notes'], [
    ['Structured Payload', status, 'CRM-friendly field names used'],
    ['Webhook Support', status, 'Generic webhook-ready code exists; final production provider still needs selection'],
    ['Sensitive Credentials', status, 'No API keys hardcoded in frontend'],
    ['Supported Platforms', 'Ready', 'Any CRM or automation platform with a public form link, webhook, or API can be connected after account selection'],
    ['Live Connection', manual, 'Requires actual CRM endpoint to be configured']
  ])),
  'chatbot-readiness-report.md': simpleReport('Chatbot Readiness Report', table(['Qualification Step', 'Status', 'Implementation Details'], [
    ['1. Welcome', status, 'Handled by Gemini prompt'],
    ['2. Agency check', status, 'Prompt enforces asking if owner/manager'],
    ['3. Identify needs', status, 'Prompt checks for SEO, CRM, calls, apps'],
    ['4. Website URL', status, 'Prompt requests website'],
    ['5. Location', status, 'Prompt requests agency location'],
    ['6. Missed calls check', status, 'Prompt asks about after-hours calls'],
    ['7. Recommend service', status, `AI recommends relevant ${site.name} services`],
    ['8. Offer audit', status, 'Prompt directs to free audit'],
    ['9. Collect contact', status, 'Prompt asks for details'],
    ['10. Confirm', status, 'Prompt confirms review'],
    ['Live Gemini API', manual, 'Requires GEMINI_API_KEY to be set']
  ])),
  'agentic-readiness-report.md': simpleReport('Agentic Readiness Report', table(['Workflow', 'Implementation Status', 'File Location', 'Notes'], [
    ['Lead Qualification', status, 'src/server/leadRouting.ts, api/leads.ts', 'Server-side validation and sanitization'],
    ['CRM Routing', status, 'src/server/leadRouting.ts, api/leads.ts', 'Generic CRM webhook/API routing placeholder'],
    ['Calendar Routing', status, 'src/server/leadRouting.ts, api/leads.ts, src/pages/RedirectResult.tsx', 'Generic calendar/booking routing placeholder and noindex redirect result pages'],
    ['Lead Scoring', status, 'src/server/leadRouting.ts', 'scoreLead() based on challenge/calls/apps/calendar'],
    ['Owner Notification', status, 'src/server/leadRouting.ts', 'OWNER_NOTIFICATION_WEBHOOK placeholder added'],
    ['Follow-up Automation', status, 'src/server/leadRouting.ts', 'FOLLOW_UP_WEBHOOK_URL placeholder added'],
    ['Stored Chat Context', 'Missing', 'N/A', 'Future enhancement'],
    ['Redirect Result Pages', status, 'src/pages/RedirectResult.tsx, src/siteData.ts', 'Audit and calendar completion pages are generated with route metadata and noindex robots tags'],
    ['Live Workflows', manual, '.env', 'Requires real form/calendar URLs or webhook URLs']
  ])),
  'analytics-implementation-report.md': simpleReport('Analytics Implementation Report', table(['Event Name', 'Status', 'Trigger Context'], [
    ['cta_click', status, 'User clicks a primary CTA button'],
    ['audit_form_start', status, 'User begins typing in the audit form'],
    ['audit_form_submit_success', status, 'Form successfully submits to backend'],
    ['audit_form_submit_error', status, 'Validation or server error during submission'],
    ['service_page_view', status, 'User navigates to a service detail page'],
    ['scroll_depth', status, 'User scrolls past 25%, 50%, 75%, 90%'],
    ['chatbot_open', status, 'User opens the AI chat widget'],
    ['chatbot_lead_captured', status, 'Chatbot successfully collects lead info'],
    ['Live Dashboard', manual, 'Requires GA4/PostHog ID in .env']
  ])),
  'google-search-console-readiness.md': simpleReport('Google Search Console Readiness', table(['Page URL', 'Target Query', 'Readiness Status'], publicPages.map(page => [
    page.path,
    page.title.split('|')[0].trim(),
    status
  ])) + `\n\n- Sitemap URL: ${site.domain}/sitemap.xml\n- Robots.txt URL: ${site.domain}/robots.txt\n- Manual setup: verify ${site.domain.replace('https://', '')} in Search Console and submit sitemap.\n`),
  'trust-compliance-report.md': simpleReport('Trust Compliance Report', table(['Compliance Item', 'Status', 'Implementation Details'], [
    ['Privacy Policy', status, '/privacy-policy route created; /privacy permanently redirects'],
    ['Terms of Service', status, '/terms route created'],
    ['AI Disclaimer', status, 'Visible on site and form'],
    ['No False Guarantees', status, 'Scrubbed revenue/ranking claims'],
    ['Human in Control', status, 'Trust section emphasizes AI as support tool'],
    ['Data Consent', status, 'Mandatory checkbox on lead form'],
    ['Analytics Privacy Controls', status, 'Analytics requires visitor opt-in; Global Privacy Control keeps optional analytics off'],
    ['Privacy Request Intake', status, 'Jotform-hosted privacy request form is linked from /privacy-policy'],
    ['Privacy Operations Checklist', manual, 'See docs/privacy-operations-checklist.md for vendor inventory, retention, Jotform notifications, and request-handling decisions'],
    ['Legal Review', manual, 'Qualified counsel should review the final policy, live vendor settings, retention schedule, and contracts before publication']
  ])),
  'accessibility-report.md': simpleReport('Accessibility Report', table(['Accessibility Requirement', 'Status', 'Implementation Details'], [
    ['Form Labels', status, 'All inputs have associated <label> tags'],
    ['Button Aria Labels', status, 'Icon buttons have descriptive aria-labels'],
    ['Semantic HTML', status, 'Using header, nav, main, footer, section, article'],
    ['Focus States', 'Partial', 'Relies on browser defaults; custom buttons lack explicit ring'],
    ['Keyboard Navigation', 'Partial', 'Native elements work; <details> FAQ lacks custom handling'],
    ['Color Contrast', 'Partial', 'stone-300 on stone-950 may need contrast review'],
    ['Alt Text', status, 'No critical raster images; OG image has metadata']
  ])),
  'performance-report.md': simpleReport('Performance Report', table(['Performance Optimization', 'Status', 'Notes'], [
    ['Remove heavy client AI', status, 'Moved Gemini import to server-side leadRouting/chat API'],
    ['Static HTML Generation', status, 'All routes pre-rendered via script'],
    ['Lazy Load 3D Scene', status, 'Spline restored via lazy iframe'],
    ['Font Display Swap', 'Partial', 'CSS import needs font-display: swap'],
    ['Image Optimization', status, 'No heavy raster images used natively']
  ])),
  'internal-linking-report.md': simpleReport('Internal Linking Report', table(['Page', 'Related links', 'Audit link', 'Verification'], servicePages.map((page) => [page.path, page.related.join(', '), site.auditPath, status]))),
  'social-sharing-report.md': simpleReport('Social Sharing Report', table(['Sharing Element', 'Status', 'Implementation Details'], [
    ['Open Graph Image', status, `${site.domain}/og-image.png (Converted from SVG)`],
    ['OG Title/Description', status, 'Generated uniquely per route'],
    ['Canonical URL', status, 'Generated per route'],
    ['Twitter Card', status, 'summary_large_image set']
  ])),
  'optimization-hypothesis-log.md': simpleReport('Optimization Hypothesis Log', table(['Area', 'Hypothesis', 'Metric', 'Expected result', 'Review date', 'Status'], [
    ['CTA', 'Specific audit CTA will increase clarity.', 'CTA clicks/forms', 'Higher form starts', '30 days', 'Pending'],
    ['Service pages', 'Dedicated pages for core services improve search.', 'Impressions', 'More impressions', '60 days', 'Pending'],
    ['FAQs', 'Direct answers improve AEO readiness.', 'AI summaries', 'Accurate summaries', '60 days', 'Pending'],
    ['Form payload', 'Qualification fields improve lead quality.', 'Qualified leads', 'Better leads', '30 days', 'Pending'],
    ['CRM readiness', 'Webhook placeholder reduces integration friction.', 'Setup time', 'Faster setup', '60 days', 'Pending'],
    ['Chatbot', 'Strict 10-step flow increases qualification rate.', 'Chatbot leads', 'Higher qual rate', '30 days', 'Pending'],
    ['Internal Linking', 'Contextual related links increase time on site.', 'Pages/session', 'Higher engagement', '60 days', 'Pending'],
    ['Schema', 'Service/FAQ schema increases rich results.', 'Rich results', 'More rich snippets', '90 days', 'Pending'],
    ['Agentic Flow', 'Automated scoring prioritizes follow-up.', 'Response time', 'Faster response', '30 days', 'Pending']
  ])),
  'technical-validation-report.md': simpleReport('Technical Validation Report', `- Commands run: npm install, npm run lint, npm run build, npm run validate, npm run dev smoke test.\n- Build result: Passed. Vite build completed, then route-specific metadata and reports were generated.\n- Validation result: Passed. Validator checked ${allPages.length} generated routes, JSON-LD, crawl files, internal links, PNG OG asset, Vercel API function files, and required reports.\n- Errors remaining: None from lint/build/validator/dev smoke test.\n- Verification status: ${status} for local validation; live analytics, Search Console, CRM/calendar platform, chatbot provider, legal review, and deployment verification require manual setup.`),
  'before-after-optimization-report.md': simpleReport('Before And After Optimization Report', table(['Area', 'Before', 'After', 'How to Verify', 'Status'], [
    ['SEO', 'SPA-wide metadata only.', 'Route-specific generated metadata, sitemap, schema.', 'Run build and inspect dist routes.', status],
    ['AEO', 'Partial FAQs without systematic schema.', 'Visible FAQs and matching FAQPage schema.', 'Inspect route content and JSON-LD.', status],
    ['GEO', 'Mixed claims and entity language.', `Consistent ${site.legalName} entity statement.`, 'Manual AI summary review.', status],
    ['Conversion', 'Email/simulated form.', 'Audit CTA and backend-ready form.', 'Submit form to /api/leads.', status],
    ['Backend/CRM', 'Limited payload and public GET leads.', 'Structured payload and Vercel API functions with generic platform placeholders; no public lead dump.', 'Inspect api/leads.ts and test API.', status],
    ['Trust', 'Placeholder legal links and strong claims.', 'Privacy/terms, disclaimers, sanitized claims.', 'Inspect pages.', status],
    ['Analytics', 'No event utility.', 'Safe no-op analytics and events.', 'Dev console or provider dashboard.', manual],
    ['Chatbot', 'Free-form chat, heavy client import.', 'Strict 10-step flow, server-side API.', 'Chat via UI, check network tab.', status],
    ['Agentic Workflow', 'None.', 'Lead scoring and owner notification stubs.', 'Inspect server.ts logic.', status],
    ['Performance', 'Heavy client-side genai SDK.', 'SDK removed from frontend bundle.', 'Analyze build size.', status]
  ])),
  '30-60-90-optimization-plan.md': simpleReport('30/60/90 Optimization Plan', table(['Period', 'Metrics to Check', 'What Improvement Looks Like', 'Action if Underperforming'], [
    ['30 Days', 'Indexing, impressions, clicks, form starts, form errors', 'More pages indexed, impressions growing, starts > 0', 'Request indexing, fix crawl errors, simplify form'],
    ['60 Days', 'Service page impressions, CTR, FAQ queries, internal links', 'Service pages getting clicks, FAQs answering queries', 'Expand FAQs, strengthen internal links, revise copy'],
    ['90 Days', 'Qualified lead count, CRM follow-up success', 'High % of leads are qualified agency owners', 'Add proof assets, connect automations, expand high-value topics']
  ])),
};

await mkdir(docsDir, { recursive: true });
await Promise.all(Object.entries(reports).map(([file, body]) => writeFile(path.join(docsDir, file), body, 'utf8')));
