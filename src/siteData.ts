export const site = {
  name: 'LyCore',
  domain: 'https://lycore.org',
  email: 'services@lycore.org',
  primaryCta: 'Get a Free Bail Bond Lead System Audit',
  secondaryCta: 'See How It Works',
  auditPath: '/free-bail-bond-lead-system-audit',
  ogImage: '/og-image.png',
  coreStatement:
    'LyCore helps bail bond agencies capture more leads with SEO websites, AI call answering, automated intake, CRM integration, and follow-up workflows.',
  expandedServicesStatement:
    'LyCore also builds custom dashboards, appointment-setting workflows, mobile apps, and web UI apps for bail bond agencies that need clearer operations and better lead visibility.',
  aiDisclaimer:
    "LyCore's AI systems are designed to support call answering, intake, follow-up, summaries, and CRM updates. They do not replace licensed professionals, make legal decisions, or determine bail outcomes.",
};

export type Faq = {
  question: string;
  answer: string;
};

export type PageMeta = {
  path: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  kind: 'home' | 'legacy' | 'service' | 'audit' | 'legal';
  faqs?: Faq[];
};

export type ServicePage = PageMeta & {
  problem: string;
  explanation: string;
  benefits: string[];
  included: string[];
  process: string[];
  related: string[];
};

export const globalFaqs: Faq[] = [
  {
    question: 'Can AI answer calls for bail bond agencies?',
    answer:
      'Yes. AI can support bail bond agencies by answering common intake calls, collecting lead details, summarizing conversations, and preparing CRM updates. The agency remains responsible for legal, financial, and client decisions.',
  },
  {
    question: 'How can bail bond agencies stop missing leads after hours?',
    answer:
      'Agencies can reduce missed opportunities by combining AI-supported call answering, website forms, automated intake, CRM updates, and follow-up workflows that capture lead details when staff are unavailable.',
  },
  {
    question: 'What should a bail bond intake form collect?',
    answer:
      'A bail bond intake form should collect contact details, agency context, location, urgency, preferred contact method, consent, source page, and UTM data so follow-up can be measured.',
  },
  {
    question: 'Can a bail bond website connect to a CRM?',
    answer:
      'Yes. A website can send qualified form, call, and chat leads into a CRM through an API route, webhook, or integration tool after credentials and field mapping are configured.',
  },
  {
    question: 'Does AI replace bail agents?',
    answer:
      'No. AI supports call answering, intake, summaries, follow-up, and CRM updates. It does not replace licensed professionals, make legal decisions, or determine bail outcomes.',
  },
  {
    question: 'What is a bail bond lead system audit?',
    answer:
      'A bail bond lead system audit reviews how an agency captures calls, website visitors, form leads, chat leads, CRM records, follow-up, tracking, and missed opportunities.',
  },
  {
    question: 'What is the difference between a normal website and an automated lead capture system?',
    answer:
      'A normal website mostly displays information. An automated lead capture system guides visitors, qualifies leads, captures source data, routes submissions, updates a CRM, and prepares follow-up.',
  },
  {
    question: 'Can LyCore connect calls, forms, chat, and CRM into one workflow?',
    answer:
      'Yes. LyCore can prepare a connected workflow where calls, forms, chat, CRM updates, summaries, and follow-up steps share one structured lead payload after backend tools are connected.',
  },
  {
    question: 'Can LyCore build custom dashboards for bail bond agencies?',
    answer:
      'Yes. LyCore can build custom dashboards that help bail bond agencies review leads, source data, intake status, CRM handoff, follow-up activity, and operational signals after the proper backend data sources are connected.',
  },
  {
    question: 'Can LyCore help with appointment setting for bail bond agencies?',
    answer:
      'Yes. LyCore can prepare appointment-setting workflows that route qualified leads toward booking, reminders, staff handoff, and CRM updates. Booking tools and calendars require manual setup with real account access.',
  },
  {
    question: 'Does LyCore build mobile apps and web UI apps for bail bond agencies?',
    answer:
      'Yes. LyCore can build mobile apps and web UI apps for bail bond agency workflows such as lead review, intake visibility, follow-up tasks, appointment coordination, and internal dashboards.',
  },
];

export const servicePages: ServicePage[] = [
  {
    path: '/ai-receptionist-for-bail-bonds',
    label: 'AI Receptionist',
    title: 'AI Call Answering for Bail Bond Agencies | LyCore',
    description:
      'AI call answering support for bail bond agencies that need to capture after-hours leads, collect intake details, and route summaries without replacing licensed agents.',
    h1: 'AI Call Answering for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Bail bond agencies can miss important lead details when calls arrive after hours, during court work, or while staff are already helping another family.',
    explanation:
      'LyCore prepares AI receptionist workflows that support call answering, lead qualification, summaries, and CRM handoff while keeping licensed professionals responsible for decisions.',
    benefits: ['Support after-hours response', 'Collect cleaner intake details', 'Prepare summaries for staff', 'Keep humans in control'],
    included: ['Call flow outline', 'Qualification questions', 'Fallback language', 'CRM-ready summary fields'],
    process: ['Map common caller questions', 'Define safe AI boundaries', 'Prepare routing fields', 'Test summaries before launch'],
    related: ['/bail-bond-intake-automation', '/bail-bond-crm-integration', '/bail-bond-follow-up-automation'],
    faqs: [globalFaqs[0], globalFaqs[1], globalFaqs[4], globalFaqs[7]],
  },
  {
    path: '/bail-bond-website-design',
    label: 'Website Design',
    title: 'Bail Bond Website Design for Lead Capture | LyCore',
    description:
      'Conversion-focused bail bond website design with clear service pages, audit CTAs, intake forms, metadata, schema, and CRM-ready lead capture.',
    h1: 'Bail Bond Website Design for Lead Capture',
    kind: 'service',
    problem:
      'Many agency websites are difficult to understand, thin on service content, and not ready to measure qualified lead capture.',
    explanation:
      'LyCore builds Google-ready bail bond websites that explain your offer, answer buyer questions, route visitors to a free audit, and prepare submissions for backend or CRM workflows.',
    benefits: ['Clear offer above the fold', 'Dedicated service pages', 'Mobile-friendly audit form', 'Metadata and schema readiness'],
    included: ['Homepage positioning', 'Service pages', 'Audit offer page', 'Trust and compliance content'],
    process: ['Clarify the offer', 'Build page templates', 'Add answer content', 'Validate metadata and links'],
    related: ['/bail-bond-seo-services', '/bail-bond-intake-automation', '/free-bail-bond-lead-system-audit'],
    faqs: [globalFaqs[6], globalFaqs[5], globalFaqs[2], globalFaqs[3]],
  },
  {
    path: '/bail-bond-seo-services',
    label: 'SEO Services',
    title: 'Bail Bond SEO Services for More Agency Leads | LyCore',
    description:
      'Bail bond SEO services that improve technical crawl readiness, service page clarity, answer content, metadata, schema, and measurable search visibility.',
    h1: 'Bail Bond SEO Services for More Agency Leads',
    kind: 'service',
    problem:
      'Search engines and AI answer tools need clear, crawlable pages before they can understand what an agency offers.',
    explanation:
      'LyCore improves technical SEO foundations with unique metadata, clean URLs, service pages, internal links, sitemap and robots files, schema, and answer-focused content. Rankings are never guaranteed.',
    benefits: ['Better crawl readiness', 'Clearer service coverage', 'Improved answer readiness', 'Search Console measurement plan'],
    included: ['Title and meta strategy', 'Service page structure', 'Structured data', 'Internal linking and crawl checks'],
    process: ['Audit visibility', 'Create indexable pages', 'Add metadata and schema', 'Measure impressions, clicks, CTR, and queries'],
    related: ['/bail-bond-website-design', '/ai-receptionist-for-bail-bonds', '/free-bail-bond-lead-system-audit'],
    faqs: [globalFaqs[5], globalFaqs[6], globalFaqs[3], globalFaqs[1]],
  },
  {
    path: '/bail-bond-intake-automation',
    label: 'Intake Automation',
    title: 'Bail Bond Intake Automation Systems | LyCore',
    description:
      'Automated bail bond intake systems that collect qualified lead details, source data, consent, and CRM-ready information from forms, calls, and chat.',
    h1: 'Bail Bond Intake Automation Systems',
    kind: 'service',
    problem:
      'Manual intake can lose details, delay responses, and make it difficult to know which marketing source produced a lead.',
    explanation:
      'LyCore prepares intake workflows that collect contact details, challenge context, consent, landing page, referrer, and UTM data in one structured payload.',
    benefits: ['More consistent lead records', 'Cleaner attribution', 'Faster CRM handoff', 'Better qualification before follow-up'],
    included: ['Lead qualification form', 'Hidden UTM/source fields', 'Validation and consent', 'Backend-ready payload'],
    process: ['Define required fields', 'Capture source data', 'Validate submissions', 'Prepare CRM handoff'],
    related: ['/bail-bond-crm-integration', '/bail-bond-follow-up-automation', '/ai-receptionist-for-bail-bonds'],
    faqs: [globalFaqs[2], globalFaqs[3], globalFaqs[7], globalFaqs[5]],
  },
  {
    path: '/bail-bond-crm-integration',
    label: 'CRM Integration',
    title: 'Bail Bond CRM Integration & Intake Automation | LyCore',
    description:
      'CRM integration readiness for bail bond agencies, with structured lead payloads, webhook placeholders, UTM data, consent capture, and error handling.',
    h1: 'Bail Bond CRM Integration and Intake Automation',
    kind: 'service',
    problem:
      'Leads are harder to follow up when calls, forms, chat, and owner notes are scattered across disconnected tools.',
    explanation:
      'LyCore structures lead data so a backend can send it to tools such as HubSpot, Zoho, Bitrix24, Airtable, Supabase, Make, Zapier, n8n, or a custom dashboard when credentials are provided.',
    benefits: ['CRM-friendly field names', 'Cleaner lead routing', 'Source and UTM capture', 'Credentials kept out of frontend code'],
    included: ['Webhook placeholder', 'Environment variable pattern', 'Payload validation', 'CRM field documentation'],
    process: ['Map lead fields', 'Prepare API route', 'Connect credentials manually', 'Test CRM record creation'],
    related: ['/bail-bond-intake-automation', '/bail-bond-follow-up-automation', '/free-bail-bond-lead-system-audit'],
    faqs: [globalFaqs[3], globalFaqs[7], globalFaqs[2], globalFaqs[5]],
  },
  {
    path: '/bail-bond-follow-up-automation',
    label: 'Follow-Up',
    title: 'Automated Follow-Up Systems for Bail Bond Agencies | LyCore',
    description:
      'Follow-up automation readiness for bail bond agencies, including lead summaries, owner notifications, CRM tasks, and no-pressure next-step workflows.',
    h1: 'Automated Follow-Up Systems for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Qualified leads can go cold if follow-up depends on manual reminders, scattered notes, or delayed owner notifications.',
    explanation:
      'LyCore prepares follow-up workflows that can notify owners, summarize lead context, update a CRM, and support next-step reminders once email, CRM, or automation credentials are connected.',
    benefits: ['Faster response preparation', 'Better owner visibility', 'Consistent follow-up tasks', 'More complete lead context'],
    included: ['Notification placeholder', 'Lead summary placeholder', 'Follow-up workflow outline', 'Analytics events for completions'],
    process: ['Capture the lead', 'Categorize the challenge', 'Prepare owner summary', 'Trigger follow-up after CRM setup'],
    related: ['/bail-bond-crm-integration', '/bail-bond-intake-automation', '/ai-receptionist-for-bail-bonds'],
    faqs: [globalFaqs[7], globalFaqs[4], globalFaqs[1], globalFaqs[3]],
  },
  {
    path: '/custom-dashboards-for-bail-bonds',
    label: 'Custom Dashboards',
    title: 'Custom Dashboards for Bail Bond Agencies | LyCore',
    description:
      'Custom dashboard development for bail bond agencies that need lead visibility, source tracking, intake status, CRM handoff, follow-up activity, and operational reporting.',
    h1: 'Custom Dashboards for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Bail bond agency owners and managers can lose visibility when lead sources, intake notes, CRM records, call summaries, and follow-up tasks live in separate tools.',
    explanation:
      'LyCore builds custom dashboards that organize lead capture, source tracking, intake status, CRM handoff, follow-up activity, and operational signals into clear views for agency teams.',
    benefits: ['Centralize lead visibility', 'Review source and UTM data', 'Track intake and follow-up status', 'Prepare owner-ready reporting'],
    included: ['Dashboard planning', 'Lead and CRM data views', 'Filtering and status patterns', 'Manual setup notes for connected data sources'],
    process: ['Map dashboard users and decisions', 'Define the data sources', 'Design agency-focused views', 'Connect live data after credentials are provided'],
    related: ['/bail-bond-crm-integration', '/bail-bond-intake-automation', '/bail-bond-follow-up-automation'],
    faqs: [globalFaqs[8], globalFaqs[3], globalFaqs[7], globalFaqs[5]],
  },
  {
    path: '/appointment-setting-for-bail-bonds',
    label: 'Appointment Setting',
    title: 'Appointment Setting for Bail Bond Agencies | LyCore',
    description:
      'Appointment-setting workflow readiness for bail bond agencies, including qualified lead routing, booking prompts, reminders, staff handoff, and CRM updates.',
    h1: 'Appointment Setting for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Qualified leads can stall when booking, reminders, staff handoff, and CRM updates are disconnected from the intake process.',
    explanation:
      'LyCore prepares appointment-setting workflows that guide qualified visitors from calls, forms, or chat toward the right next step while preserving consent, source data, and human review.',
    benefits: ['Route qualified leads to booking', 'Prepare reminder workflows', 'Support staff handoff', 'Keep appointment data measurable'],
    included: ['Booking flow outline', 'Qualification handoff fields', 'Reminder workflow placeholder', 'CRM/update readiness'],
    process: ['Define appointment types', 'Map qualification rules', 'Prepare booking and reminder fields', 'Connect calendar tools after manual setup'],
    related: ['/bail-bond-follow-up-automation', '/bail-bond-crm-integration', '/ai-receptionist-for-bail-bonds'],
    faqs: [globalFaqs[9], globalFaqs[7], globalFaqs[4], globalFaqs[5]],
  },
  {
    path: '/mobile-apps-for-bail-bonds',
    label: 'Mobile Apps',
    title: 'Mobile Apps for Bail Bond Agencies | LyCore',
    description:
      'Mobile app planning and development for bail bond agency workflows such as lead review, intake visibility, follow-up tasks, appointment coordination, and internal operations.',
    h1: 'Mobile Apps for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Agency teams often need lead and follow-up visibility while away from a desk, but disconnected tools make mobile operations harder to manage.',
    explanation:
      'LyCore can build mobile apps that support bail bond agency workflows such as lead review, intake visibility, follow-up tasks, appointment coordination, and internal dashboard access.',
    benefits: ['Support mobile lead review', 'Improve task visibility', 'Coordinate appointment follow-up', 'Prepare role-based workflow views'],
    included: ['Mobile workflow planning', 'App UI structure', 'Backend/API readiness', 'Manual setup notes for app store, auth, and push tools'],
    process: ['Define user roles', 'Map mobile workflows', 'Design core screens', 'Connect backend/auth/push services after setup'],
    related: ['/custom-dashboards-for-bail-bonds', '/appointment-setting-for-bail-bonds', '/bail-bond-crm-integration'],
    faqs: [globalFaqs[10], globalFaqs[8], globalFaqs[3], globalFaqs[5]],
  },
  {
    path: '/ui-apps-for-bail-bonds',
    label: 'UI Apps',
    title: 'Web UI Apps for Bail Bond Agencies | LyCore',
    description:
      'Custom web UI app development for bail bond agencies, including internal tools, intake views, lead review screens, dashboard interfaces, and workflow apps.',
    h1: 'Web UI Apps for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Generic software screens often do not match the way bail bond agencies review leads, coordinate intake, manage follow-up, and understand source performance.',
    explanation:
      'LyCore builds custom web UI apps for agency workflows such as lead review, intake queues, dashboard interfaces, follow-up views, appointment coordination, and internal operations.',
    benefits: ['Create agency-specific interfaces', 'Improve workflow clarity', 'Support internal tools', 'Prepare data-ready UI screens'],
    included: ['UI app planning', 'Responsive interface design', 'Workflow screens', 'API and analytics readiness'],
    process: ['Define the workflow', 'Design the app screens', 'Build responsive UI', 'Connect APIs and analytics after setup'],
    related: ['/custom-dashboards-for-bail-bonds', '/mobile-apps-for-bail-bonds', '/bail-bond-crm-integration'],
    faqs: [globalFaqs[10], globalFaqs[8], globalFaqs[7], globalFaqs[3]],
  },
];

export const legacyPages: PageMeta[] = [
  {
    path: '/',
    label: 'Home',
    title: 'AI Receptionist & SEO Websites for Bail Bond Agencies | LyCore',
    description: site.coreStatement,
    h1: 'AI Receptionist, SEO Websites, and Lead Automation for Bail Bond Agencies',
    kind: 'home',
    faqs: globalFaqs.slice(0, 6),
  },
  {
    path: '/services',
    label: 'Services',
    title: 'Bail Bond Lead Capture Services | LyCore',
    description:
      'Explore LyCore services for bail bond agencies, including SEO websites, AI call answering, intake automation, CRM integration, follow-up workflows, dashboards, appointment setting, and apps.',
    h1: 'Bail Bond Lead Capture Services',
    kind: 'legacy',
    faqs: globalFaqs.slice(0, 5),
  },
  {
    path: '/about',
    label: 'About',
    title: 'About LyCore Bail Bond Lead Systems | LyCore',
    description:
      'Learn how LyCore supports bail bond agencies with measurable websites, AI-supported intake, CRM readiness, follow-up automation, dashboards, appointment setting, and apps.',
    h1: 'About LyCore',
    kind: 'legacy',
    faqs: [globalFaqs[4], globalFaqs[5]],
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Request a Bail Bond Lead System Audit | LyCore',
    description:
      'Request a free audit of your bail bond agency website, calls, intake, CRM readiness, follow-up workflows, and tracking.',
    h1: 'Request Your Free Bail Bond Lead System Audit',
    kind: 'audit',
    faqs: [globalFaqs[5], globalFaqs[7], globalFaqs[4]],
  },
  {
    path: '/bail-bonds',
    label: 'Bail Bonds',
    title: 'Lead Capture Systems for Bail Bond Agencies | LyCore',
    description:
      'See how LyCore helps bail bond agencies connect websites, AI call answering, intake automation, CRM integration, follow-up workflows, dashboards, appointment setting, and apps.',
    h1: 'Lead Capture Systems for Bail Bond Agencies',
    kind: 'legacy',
    faqs: [globalFaqs[1], globalFaqs[2], globalFaqs[4]],
  },
  {
    path: '/book',
    label: 'Book a Call',
    title: 'Book a Strategy Call | LyCore',
    description: 'Schedule a time to discuss how LyCore can help your bail bond agency capture more leads.',
    h1: 'Book a Strategy Call',
    kind: 'legacy',
  },
];

export const legalPages: PageMeta[] = [
  {
    path: '/privacy',
    label: 'Privacy',
    title: 'Privacy Policy | LyCore',
    description:
      'LyCore privacy policy placeholder covering audit form data, analytics readiness, CRM setup, consent, and manual legal review.',
    h1: 'Privacy Policy',
    kind: 'legal',
  },
  {
    path: '/terms',
    label: 'Terms',
    title: 'Terms of Use | LyCore',
    description:
      'LyCore terms placeholder covering informational content, no guarantees, no legal advice, and human-in-control AI positioning.',
    h1: 'Terms of Use',
    kind: 'legal',
  },
];

export const auditPage: PageMeta = {
  path: site.auditPath,
  label: 'Free Audit',
  title: 'Free Bail Bond Lead System Audit | LyCore',
  description:
    'Request a free LyCore audit of your bail bond agency lead system, including website, SEO, calls, intake, CRM, follow-up, and source tracking readiness.',
  h1: 'Get a Free Bail Bond Lead System Audit',
  kind: 'audit',
  faqs: [globalFaqs[5], globalFaqs[6], globalFaqs[7], globalFaqs[4]],
};

export const allPages: PageMeta[] = [...legacyPages, ...servicePages, auditPage, ...legalPages];

export const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'AI Receptionist', path: '/ai-receptionist-for-bail-bonds' },
  { label: 'SEO', path: '/bail-bond-seo-services' },
  { label: 'Dashboards', path: '/custom-dashboards-for-bail-bonds' },
  { label: 'Apps', path: '/mobile-apps-for-bail-bonds' },
  { label: 'Bail Bonds', path: '/bail-bonds' },
  { label: 'Book a Call', path: '/book' },
  { label: 'About', path: '/about' },
];

export const formFieldNames = [
  'fullName',
  'agencyName',
  'website',
  'email',
  'phone',
  'location',
  'biggestChallenge',
  'currentCRM',
  'missedCalls',
  'preferredContactMethod',
  'preferredContactTime',
  'message',
  'consent',
  'sourcePage',
  'landingPage',
  'referrer',
  'utmSource',
  'utmMedium',
  'utmCampaign',
  'utmContent',
  'utmTerm',
  'submittedAt',
];
