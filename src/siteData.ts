export const site = {
  name: 'LyCore',
  legalName: 'LYCORE GROUP LLC',
  domain: 'https://www.lycore.org',
  email: 'services@lycore.org',
  phone: '+1 (917) 722-5646',
  address: {
    street: '1209 Mountain Road Pl NE, Ste N',
    locality: 'Albuquerque',
    region: 'NM',
    postalCode: '87110',
    country: 'US',
  },
  primaryCta: 'Get a Free Bail Bond Lead System Audit',
  secondaryCta: 'See How It Works',
  auditPath: '/free-bail-bond-lead-system-audit',
  ogImage: '/og-image.png',
  coreStatement:
    'LyCore helps agencies in the bail bonds industry capture more leads with SEO websites, AI call answering, automated intake, CRM integration, and follow-up workflows.',
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
  kind: 'home' | 'legacy' | 'service' | 'audit' | 'legal' | 'system';
  faqs?: Faq[];
};

export const showcaseItems = [
  {
    title: 'Verdict-style strategic bail website',
    eyebrow: 'Sample Website 01',
    image: '/showcase/sample-verdict-strategic-bail.jpeg',
    alt: 'Sample bail bond website concept with a white editorial layout, large strategic bail solutions headline, and contact an agent navigation.',
    copy:
      'A clean premium hero concept for agencies that want a confident legal-advisory feel, clear navigation, and immediate consultation messaging.',
  },
  {
    title: 'Aegis bail bonds agency landing page',
    eyebrow: 'Sample Website 02',
    image: '/showcase/sample-aegis-bail-bonds-agency.jpeg',
    alt: 'Sample bail bonds agency website concept with oversized typography, black and white styling, and request agent call to action.',
    copy:
      'A bold agency homepage direction with oversized typography, instant request-agent action, and a high-end black-and-white brand system.',
  },
  {
    title: 'Bail Relief conversion-focused hero',
    eyebrow: 'Sample Website 03',
    image: '/showcase/sample-bail-relief-freedom-secured.jpeg',
    alt: 'Sample bail relief website concept with large freedom secured headline, request bond button, handcuffs, compass, and service callouts.',
    copy:
      'A high-impact landing page style for urgent visitors, built around a clear request-bond action, visual service callouts, and immediate credibility.',
  },
  {
    title: 'Secured freedom service architecture',
    eyebrow: 'Sample Website 04',
    image: '/showcase/sample-aegis-secured-freedom.jpeg',
    alt: 'Sample bail bond services page concept with architectural monochrome layout, process notes, and secured freedom messaging.',
    copy:
      'A structured service-page concept for explaining process, requirements, confidentiality, tracking, and release steps in a refined layout.',
  },
  {
    title: 'Aegis underwriter premium brand page',
    eyebrow: 'Sample Website 05',
    image: '/showcase/sample-aegis-underwriter.jpeg',
    alt: 'Sample premium bail services website concept with burgundy background, contact an underwriter button, process strip, and phone icon.',
    copy:
      'A polished premium direction with visible contact actions, process steps, and stronger brand personality for agencies that want a more distinctive look.',
  },
];

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
    title: 'AI Call Answering for Bail Bond Agencies - LyCore',
    description:
      'AI call answering support for bail bond agencies that need to capture after-hours leads, collect intake details, and route summaries without replacing licensed agents.',
    h1: 'AI Call Answering for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Bail bond agencies can miss important lead details when calls arrive after hours, during court work, or while staff are already helping another family.',
    explanation:
      'LyCore helps you put a trained intake assistant at the front door of your agency, so callers get a response, staff get clean notes, and licensed agents stay in charge of the decisions.',
    benefits: ['Capture caller details when staff are busy', 'Send cleaner summaries to your team', 'Route hot leads faster', 'Keep licensed agents in control'],
    included: ['Buyer-focused call script', 'Lead qualification questions', 'Safe fallback language', 'CRM-ready call summary fields'],
    process: ['Find the calls you miss or repeat', 'Write safe intake conversations', 'Route summaries to your team', 'Test before live use'],
    related: ['/bail-bond-intake-automation', '/bail-bond-crm-integration', '/bail-bond-follow-up-automation'],
    faqs: [globalFaqs[0], globalFaqs[1], globalFaqs[4], globalFaqs[7]],
  },
  {
    path: '/bail-bond-website-design',
    label: 'Website Design',
    title: 'Bail Bond Website Design for Lead Capture - LyCore',
    description:
      'Conversion-focused bail bond website design with clear service pages, audit CTAs, intake forms, metadata, schema, and CRM-ready lead capture.',
    h1: 'Bail Bond Website Design for Lead Capture',
    kind: 'service',
    problem:
      'Many agency websites are difficult to understand, thin on service content, and not ready to measure qualified lead capture.',
    explanation:
      'LyCore builds bail bond websites that sell the next step: clear help, fast contact, intake capture, service pages, trust copy, and search-ready structure that can be measured after launch.',
    benefits: ['Make the offer obvious in seconds', 'Turn service pages into lead paths', 'Give visitors a reason to submit', 'Prepare every page for search and sharing'],
    included: ['Sales-focused homepage', 'Dedicated service pages', 'Free audit offer page', 'Trust and compliance content'],
    process: ['Clarify why visitors should act', 'Build the page experience', 'Add direct answers and CTAs', 'Validate metadata, links, and mobile layout'],
    related: ['/bail-bond-seo-services', '/bail-bond-intake-automation', '/free-bail-bond-lead-system-audit'],
    faqs: [globalFaqs[6], globalFaqs[5], globalFaqs[2], globalFaqs[3]],
  },
  {
    path: '/bail-bond-seo-services',
    label: 'SEO Services',
    title: 'Bail Bond SEO Services for More Agency Leads - LyCore',
    description:
      'Bail bond SEO services that improve technical crawl readiness, service page clarity, answer content, metadata, schema, and measurable search visibility.',
    h1: 'Bail Bond SEO Services for More Agency Leads',
    kind: 'service',
    problem:
      'Search engines and AI answer tools need clear, crawlable pages before they can understand what an agency offers.',
    explanation:
      'LyCore turns your website into something Google and AI answer tools can understand: focused service pages, useful answers, clean metadata, internal links, schema, sitemap, and measurement. Rankings are never guaranteed.',
    benefits: ['Help search engines understand your services', 'Give each offer its own page', 'Answer buyer questions directly', 'Measure impressions, clicks, and queries'],
    included: ['Title and meta strategy', 'Indexable service pages', 'Structured data', 'Internal links and crawl checks'],
    process: ['Find search visibility gaps', 'Create useful service pages', 'Add metadata and schema', 'Measure what Google shows after launch'],
    related: ['/bail-bond-website-design', '/ai-receptionist-for-bail-bonds', '/free-bail-bond-lead-system-audit'],
    faqs: [globalFaqs[5], globalFaqs[6], globalFaqs[3], globalFaqs[1]],
  },
  {
    path: '/bail-bond-intake-automation',
    label: 'Intake Automation',
    title: 'Bail Bond Intake Automation Systems - LyCore',
    description:
      'Automated bail bond intake systems that collect qualified lead details, source data, consent, and CRM-ready information from forms, calls, and chat.',
    h1: 'Bail Bond Intake Automation Systems',
    kind: 'service',
    problem:
      'Manual intake can lose details, delay responses, and make it difficult to know which marketing source produced a lead.',
    explanation:
      'LyCore builds intake flows that ask the right questions, capture source data, confirm consent, and give your team a cleaner lead record before follow-up starts.',
    benefits: ['Collect the details staff actually need', 'Reduce back-and-forth', 'See where the lead came from', 'Prepare stronger CRM handoff'],
    included: ['Lead qualification form', 'Hidden source and UTM fields', 'Validation and consent', 'Backend-ready lead payload'],
    process: ['Choose the questions that matter', 'Capture source data', 'Validate the submission', 'Prepare CRM or inbox handoff'],
    related: ['/bail-bond-crm-integration', '/bail-bond-follow-up-automation', '/ai-receptionist-for-bail-bonds'],
    faqs: [globalFaqs[2], globalFaqs[3], globalFaqs[7], globalFaqs[5]],
  },
  {
    path: '/bail-bond-crm-integration',
    label: 'CRM Integration',
    title: 'Bail Bond CRM Integration & Intake Automation - LyCore',
    description:
      'CRM integration readiness for bail bond agencies, with structured lead payloads, webhook placeholders, UTM data, consent capture, and error handling.',
    h1: 'Bail Bond CRM Integration and Intake Automation',
    kind: 'service',
    problem:
      'Leads are harder to follow up when calls, forms, chat, and owner notes are scattered across disconnected tools.',
    explanation:
      'LyCore prepares your lead data so forms, calls, chat, booking, and follow-up can move into the CRM or dashboard you choose once real account access is connected.',
    benefits: ['Stop copying lead details by hand', 'Send the right fields to the right system', 'Preserve source and UTM data', 'Keep private credentials out of frontend code'],
    included: ['Webhook placeholder', 'Environment variable pattern', 'Payload validation', 'CRM field documentation'],
    process: ['Map lead fields', 'Prepare API route', 'Connect credentials manually', 'Test CRM record creation'],
    related: ['/bail-bond-intake-automation', '/bail-bond-follow-up-automation', '/free-bail-bond-lead-system-audit'],
    faqs: [globalFaqs[3], globalFaqs[7], globalFaqs[2], globalFaqs[5]],
  },
  {
    path: '/bail-bond-follow-up-automation',
    label: 'Follow-Up',
    title: 'Automated Follow-Up Systems for Bail Bond Agencies - LyCore',
    description:
      'Follow-up automation readiness for bail bond agencies, including lead summaries, owner notifications, CRM tasks, and no-pressure next-step workflows.',
    h1: 'Automated Follow-Up Systems for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Qualified leads can go cold if follow-up depends on manual reminders, scattered notes, or delayed owner notifications.',
    explanation:
      'LyCore prepares follow-up workflows so promising leads are easier to see, summarize, assign, and move to the next step once your email, CRM, calendar, or automation platform is connected.',
    benefits: ['Know which leads need attention', 'Give owners cleaner summaries', 'Create consistent follow-up tasks', 'Keep more context with every lead'],
    included: ['Notification placeholder', 'Lead summary placeholder', 'Follow-up workflow outline', 'Analytics events for completions'],
    process: ['Capture the lead', 'Categorize the challenge', 'Prepare owner summary', 'Trigger follow-up after CRM setup'],
    related: ['/bail-bond-crm-integration', '/bail-bond-intake-automation', '/ai-receptionist-for-bail-bonds'],
    faqs: [globalFaqs[7], globalFaqs[4], globalFaqs[1], globalFaqs[3]],
  },
  {
    path: '/custom-dashboards-for-bail-bonds',
    label: 'Custom Dashboards',
    title: 'Custom Dashboards for Bail Bond Agencies - LyCore',
    description:
      'Custom dashboard development for bail bond agencies that need lead visibility, source tracking, intake status, CRM handoff, follow-up activity, and operational reporting.',
    h1: 'Custom Dashboards for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Bail bond agency owners and managers can lose visibility when lead sources, intake notes, CRM records, call summaries, and follow-up tasks live in separate tools.',
    explanation:
      'LyCore builds dashboards that help owners see the business instead of chasing it: new leads, intake status, source data, follow-up activity, calendar items, and CRM handoff in one view.',
    benefits: ['See what needs attention today', 'Compare lead sources', 'Track intake and follow-up status', 'Create owner-ready reporting'],
    included: ['Dashboard planning', 'Lead and CRM data views', 'Filters and status boards', 'Manual setup notes for connected data sources'],
    process: ['Decide what the owner needs to see', 'Map the data sources', 'Design agency-focused views', 'Connect live data after credentials are provided'],
    related: ['/bail-bond-crm-integration', '/bail-bond-intake-automation', '/bail-bond-follow-up-automation'],
    faqs: [globalFaqs[8], globalFaqs[3], globalFaqs[7], globalFaqs[5]],
  },
  {
    path: '/appointment-setting-for-bail-bonds',
    label: 'Appointment Setting',
    title: 'Appointment Setting for Bail Bond Agencies - LyCore',
    description:
      'Appointment-setting workflow readiness for bail bond agencies, including qualified lead routing, booking prompts, reminders, staff handoff, and CRM updates.',
    h1: 'Appointment Setting for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Qualified leads can stall when booking, reminders, staff handoff, and CRM updates are disconnected from the intake process.',
    explanation:
      'LyCore prepares appointment-setting flows that move qualified leads from interest to a scheduled next step, while keeping consent, source data, staff handoff, and CRM updates ready.',
    benefits: ['Make booking the obvious next step', 'Prepare reminder workflows', 'Support staff handoff', 'Keep appointment data measurable'],
    included: ['Booking flow outline', 'Qualification handoff fields', 'Reminder workflow placeholder', 'CRM/update readiness'],
    process: ['Define appointment types', 'Map qualification rules', 'Prepare booking and reminder fields', 'Connect calendar tools after manual setup'],
    related: ['/bail-bond-follow-up-automation', '/bail-bond-crm-integration', '/ai-receptionist-for-bail-bonds'],
    faqs: [globalFaqs[9], globalFaqs[7], globalFaqs[4], globalFaqs[5]],
  },
  {
    path: '/mobile-apps-for-bail-bonds',
    label: 'Mobile Apps',
    title: 'Mobile Apps for Bail Bond Agencies - LyCore',
    description:
      'Mobile app planning and development for bail bond agency workflows such as lead review, intake visibility, follow-up tasks, appointment coordination, and internal operations.',
    h1: 'Mobile Apps for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Agency teams often need lead and follow-up visibility while away from a desk, but disconnected tools make mobile operations harder to manage.',
    explanation:
      'LyCore can build mobile apps that give agency teams cleaner access to leads, intake status, reminders, appointments, tasks, and dashboard views when they are away from the desk.',
    benefits: ['Review leads from anywhere', 'Improve task visibility', 'Coordinate appointment follow-up', 'Prepare role-based workflow views'],
    included: ['Mobile workflow planning', 'App screen design', 'Backend/API readiness', 'Manual setup notes for app store, auth, and push tools'],
    process: ['Define user roles', 'Map mobile workflows', 'Design core screens', 'Connect backend/auth/push services after setup'],
    related: ['/custom-dashboards-for-bail-bonds', '/appointment-setting-for-bail-bonds', '/bail-bond-crm-integration'],
    faqs: [globalFaqs[10], globalFaqs[8], globalFaqs[3], globalFaqs[5]],
  },
  {
    path: '/ui-apps-for-bail-bonds',
    label: 'UI Apps',
    title: 'Web UI Apps for Bail Bond Agencies - LyCore',
    description:
      'Custom web UI app development for bail bond agencies, including internal tools, intake views, lead review screens, dashboard interfaces, and workflow apps.',
    h1: 'Web UI Apps for Bail Bond Agencies',
    kind: 'service',
    problem:
      'Generic software screens often do not match the way bail bond agencies review leads, coordinate intake, manage follow-up, and understand source performance.',
    explanation:
      'LyCore builds custom web UI apps for the screens your team actually needs: intake queues, lead review, dashboard views, appointment coordination, follow-up tasks, and internal operations.',
    benefits: ['Create agency-specific interfaces', 'Make workflows easier to scan', 'Support internal tools', 'Prepare data-ready UI screens'],
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
    title: 'Bail Bonds AI Receptionist and SEO Websites - LyCore',
    description: site.coreStatement,
    h1: 'Bail Bonds AI Receptionist, SEO Websites, and Lead Automation',
    kind: 'home',
    faqs: globalFaqs.slice(0, 6),
  },
  {
    path: '/services',
    label: 'Services',
    title: 'Bail Bond Lead Capture Services - LyCore',
    description:
      'Explore LyCore services for bail bond agencies, including SEO websites, AI call answering, intake automation, CRM integration, follow-up workflows, dashboards, appointment setting, and apps.',
    h1: 'Bail Bond Lead Capture Services',
    kind: 'legacy',
    faqs: globalFaqs.slice(0, 5),
  },
  {
    path: '/about',
    label: 'About',
    title: 'About LyCore Group LLC - AI Receptionist and Lead Automation',
    description:
      'Learn how LyCore Group LLC supports bail bond agencies with AI receptionist workflows, SEO websites, intake automation, CRM readiness, dashboards, and follow-up systems.',
    h1: 'About LyCore',
    kind: 'legacy',
    faqs: [globalFaqs[4], globalFaqs[5]],
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Request a Bail Bond Lead System Audit - LyCore',
    description:
      'Request a free audit of your bail bond agency website, calls, intake, CRM readiness, follow-up workflows, and tracking.',
    h1: 'Request Your Free Bail Bond Lead System Audit',
    kind: 'audit',
    faqs: [globalFaqs[5], globalFaqs[7], globalFaqs[4]],
  },
  {
    path: '/bail-bonds',
    label: 'Bail Bonds',
    title: 'Lead Capture Systems for Bail Bond Agencies - LyCore',
    description:
      'See how LyCore helps bail bond agencies connect websites, AI call answering, intake automation, CRM integration, follow-up workflows, dashboards, appointment setting, and apps.',
    h1: 'Lead Capture Systems for Bail Bond Agencies',
    kind: 'legacy',
    faqs: [globalFaqs[1], globalFaqs[2], globalFaqs[4]],
  },
  {
    path: '/book',
    label: 'Book a Call',
    title: 'Book a Strategy Call - LyCore',
    description: 'Schedule a time to discuss how LyCore can help your bail bond agency capture more leads.',
    h1: 'Book a Strategy Call',
    kind: 'legacy',
  },
];

export const legalPages: PageMeta[] = [
  {
    path: '/privacy',
    label: 'Privacy',
    title: 'Privacy Policy - LyCore',
    description:
      'LyCore privacy policy placeholder covering audit form data, analytics readiness, CRM setup, consent, and manual legal review.',
    h1: 'Privacy Policy',
    kind: 'legal',
  },
  {
    path: '/terms',
    label: 'Terms',
    title: 'Terms of Use - LyCore',
    description:
      'LyCore terms placeholder covering informational content, no guarantees, no legal advice, and human-in-control AI positioning.',
    h1: 'Terms of Use',
    kind: 'legal',
  },
];

export const auditPage: PageMeta = {
  path: site.auditPath,
  label: 'Free Audit',
  title: 'Free Bail Bond Lead System Audit - LyCore',
  description:
    'Request a free LyCore audit of your bail bond agency lead system, including website, SEO, calls, intake, CRM, follow-up, and source tracking readiness.',
  h1: 'Get a Free Bail Bond Lead System Audit',
  kind: 'audit',
  faqs: [globalFaqs[5], globalFaqs[6], globalFaqs[7], globalFaqs[4]],
};

export const redirectPages: PageMeta[] = [
  {
    path: '/audit-request-received',
    label: 'Audit Request Received',
    title: 'Audit Request Received - LyCore',
    description:
      'Confirmation page for LyCore bail bond lead system audit requests, with next steps for booking, CRM review, and human follow-up.',
    h1: 'Your lead system audit request is in.',
    kind: 'system',
  },
  {
    path: '/booking-confirmed',
    label: 'Booking Confirmed',
    title: 'Strategy Call Booking Confirmed - LyCore',
    description:
      'Confirmation page for a LyCore strategy call booking, with next steps for reviewing bail bond lead capture, intake, CRM, and follow-up workflows.',
    h1: 'Your strategy call is booked.',
    kind: 'system',
  },
  {
    path: '/booking-failed',
    label: 'Booking Not Completed',
    title: 'Strategy Call Booking Not Completed - LyCore',
    description:
      'Fallback page for interrupted LyCore booking flows, with options to retry scheduling or email LyCore for help.',
    h1: 'The meeting was not booked.',
    kind: 'system',
  },
];

export const allPages: PageMeta[] = [...legacyPages, ...servicePages, auditPage, ...redirectPages, ...legalPages];

export const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'AI Receptionist', path: '/ai-receptionist-for-bail-bonds' },
  { label: 'SEO', path: '/bail-bond-seo-services' },
  { label: 'Dashboards', path: '/custom-dashboards-for-bail-bonds' },
  { label: 'Apps', path: '/mobile-apps-for-bail-bonds' },
  { label: 'Bail Bonds', path: '/bail-bonds' },
  { label: 'Book a Call', path: '/book' },
  { label: 'Contact', path: '/contact' },
  { label: 'About', path: '/about' },
];

export const formFieldNames = [
  'fullName',
  'agencyName',
  'website',
  'email',
  'phoneCountryCode',
  'phone',
  'location',
  'biggestChallenge',
  'currentCRM',
  'missedCalls',
  'preferredContactMethod',
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
