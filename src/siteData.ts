export const site = {
  name: 'LYCORE',
  legalName: 'LYCORE GROUP LLC',
  domain: 'https://www.lycore.org',
  email: 'services@lycore.org',
  address: {
    street: '1209 Mountain Road Pl NE, Ste N',
    locality: 'Albuquerque',
    region: 'NM',
    postalCode: '87110',
    country: 'US',
  },
  primaryCta: 'Get a Free Lead System Review',
  secondaryCta: 'See What We Build',
  auditPath: '/contact',
  privacyRequestFormUrl: 'https://form.jotform.com/261947648151061',
  ogImage: '/og-image.png',
  logo: '/lycore-logo.jpeg',
  coreStatement:
    'LYCORE builds lead generation, call handling, booking and follow-up systems for service businesses.',
  heroCopy:
    'Calls, enquiries and follow-up need a clear next step. LYCORE builds the systems that connect them, with your business rules and human handoffs built in.',
  expandedServicesStatement:
    'LYCORE also optimizes your Google Business Profile, automates intake and follow-up paperwork, and is building full operating systems for service industries.',
  aiDisclaimer:
    "LYCORE configures AI call handling to capture enquiries and route information to your staff. The AI identifies itself and follows approved business rules. It does not replace licensed professionals or make professional decisions on your behalf.",
  socials: {
    x: 'https://x.com/LYCOREGROUP',
    facebookLycore: 'https://www.facebook.com/share/1BTyGMNYRh/',
    facebookBrenda: 'https://www.facebook.com/share/1Emrd1fN6T/',
    instagram: 'https://www.instagram.com/brendalycore',
    threads: 'https://www.threads.com/@brendalycore',
    linkedin: 'https://www.linkedin.com/company/lycore-group',
    whatsapp: 'https://wa.me/19178145066',
  },
};

const operationsFaqs: Faq[] = [
  { question: 'What parts of my business can be automated?', answer: 'Usually the best candidates are repetitive tasks involving calls, messages, data entry, routing, follow-up, updates, documents and information moving between systems.' },
  { question: 'Can LYCORE automate work after a customer books?', answer: 'Yes. LYCORE can connect booking to job creation, staff notifications, customer updates, follow-up, payment reminders, reviews and other operational workflows depending on your systems.' },
  { question: 'Do I need to replace my current software?', answer: 'No. The goal is usually to make the software you already pay for work together better. LYCORE checks the available connection methods before proposing a build.' },
];

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
  kind: 'home' | 'legacy' | 'service' | 'industry' | 'integration' | 'resource' | 'audit' | 'legal' | 'commitment' | 'system';
  updatedAt?: string;
  faqs?: Faq[];
};

export const showcaseItems = [
  {
    title: 'Crave Atelier — beauty salon',
    eyebrow: 'Concept 01',
    image: '/showcase/concept-01.webp',
    alt: 'Website concept for a beauty salon with a clean editorial layout and booking action.',
    copy:
      'A phone-first salon homepage built around booking, not browsing — the request-appointment action stays visible from the first screen.',
  },
  {
    title: 'Lumina Cleaning Co — cleaning services',
    eyebrow: 'Concept 02',
    image: '/showcase/concept-02.webp',
    alt: 'Website concept for a residential cleaning company with a bold hero and call-to-book action.',
    copy:
      'A bold homepage direction for a cleaning company, with a clear service area, pricing signals, and an instant quote action above the fold.',
  },
  {
    title: 'Terra Well Chiropractic — chiropractic clinic',
    eyebrow: 'Concept 03',
    image: '/showcase/concept-03.webp',
    alt: 'Website concept for a chiropractic clinic with a calm layout and appointment request button.',
    copy:
      'A calm, trust-building homepage for a health clinic, with the appointment button and clinic hours visible without scrolling.',
  },
  {
    title: 'Auto Studio — car detailing',
    eyebrow: 'Concept 04',
    image: '/showcase/concept-04.webp',
    alt: 'Website concept for a car detailing business with a structured layout showing services and booking.',
    copy:
      'A structured service page that lays out packages, turnaround time, and a booking action for a visitor who wants their car handled today.',
  },
  {
    title: 'Verde Pest Control — pest control',
    eyebrow: 'Concept 05',
    image: '/showcase/concept-05.webp',
    alt: 'Website concept for a pest control company with a strong hero and request-service action.',
    copy:
      'A direct-response homepage for an urgent home-service call, with the request-service button and coverage area answered immediately.',
  },
  {
    title: 'Harborview Veterinary Care — veterinary clinic',
    eyebrow: 'Concept 06',
    image: '/showcase/concept-06.webp',
    alt: 'Website concept for a veterinary clinic with a warm layout and appointment request action.',
    copy:
      'A warm, reassuring homepage for a veterinary practice, built so a worried pet owner can find the phone number and book in seconds.',
  },
  {
    title: 'Bright Smiles Pediatric Dentistry — pediatric dental practice',
    eyebrow: 'Concept 07',
    image: '/showcase/concept-07.webp',
    alt: 'Website concept for a pediatric dental practice with a friendly layout and booking call to action.',
    copy:
      'A friendly, family-facing homepage for a pediatric practice, with appointment booking and new-patient information front and center.',
  },
  {
    title: 'Precision Garage Doors — garage door repair',
    eyebrow: 'Concept 08',
    image: '/showcase/concept-08.webp',
    alt: 'Website concept for a garage door repair company with a bold hero and call-now action.',
    copy:
      'A no-nonsense homepage for a repair business, with a tappable phone number, service list, and response-time promise up top.',
  },
  {
    title: 'Verdeo Landscape & Outdoor Living — landscaping',
    eyebrow: 'Concept 09',
    image: '/showcase/concept-09.webp',
    alt: 'Website concept for a landscaping and outdoor living company with a premium visual layout.',
    copy:
      'A premium, visual-first homepage for a landscaping company, using large project imagery alongside a clear quote-request action.',
  },
  {
    title: 'Lumière Med Spa — medical spa',
    eyebrow: 'Concept 10',
    image: '/showcase/concept-10.webp',
    alt: 'Website concept for a medical spa with an elegant layout and consultation booking action.',
    copy:
      'An elegant homepage direction for a med spa, balancing brand personality with a straightforward consultation-booking path.',
  },
  {
    title: 'Crestflow Plumbing — plumbing services',
    eyebrow: 'Concept 11',
    image: '/showcase/concept-11.webp',
    alt: 'Website concept for a plumbing company with a direct hero and emergency call action.',
    copy:
      'An emergency-ready homepage for a plumbing business, with the call action, service area, and availability answered in the first screen.',
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
    question: 'What kind of businesses does LYCORE work with?',
    answer:
      'LYCORE works with spas, med spas, dental and veterinary clinics, real estate agents, law firms, roofers, plumbers, water restoration companies, and other service businesses. Each industry page explains a workflow for that team.',
  },
  {
    question: 'How does LYCORE answer my calls?',
    answer:
      'LYCORE can configure an AI receptionist for overflow or after-hours calls. It identifies your business and itself as an AI assistant, asks approved intake questions and routes a summary through the agreed tools. Routing, coverage and fallback behavior are tested before launch.',
  },
  {
    question: 'Is the receptionist a real person or a computer?',
    answer:
      'It is an AI assistant, not a person. It uses approved information about your services, hours and service area. When it cannot answer reliably or a caller needs a person, it follows your transfer or callback rules.',
  },
  {
    question: 'Will callers know they are not talking to my staff?',
    answer:
      'Yes. The greeting identifies the assistant as AI acting for your business. Callers can request a person, with a transfer or callback path based on staff availability. Recording and consent requirements are reviewed during setup.',
  },
  {
    question: 'What happens after the call is answered?',
    answer:
      'The configured owner receives the captured contact details and request through an approved channel. Missing information, failed notifications and unanswered handoffs need an exception path. Sensitive details are excluded from routine notifications where appropriate.',
  },
  {
    question: 'Can LYCORE transfer live calls to my team?',
    answer:
      'Live transfer can be included where the phone setup supports it. You approve the transfer rules, available contacts and what happens if nobody answers. A transfer attempt is not treated as a completed handoff.',
  },
  {
    question: 'How are the websites different from what I can build myself?',
    answer:
      'LYCORE websites are built specifically for service businesses that depend on phone calls. The phone number is tappable from the first screen, pages are optimized for fast mobile use, and every element is arranged to get an urgent searcher to call instead of browse. We also connect Google Business Profile, call tracking, and lead routing so you can see which pages are generating calls.',
  },
  {
    question: 'What does Google Business Profile optimization include?',
    answer:
      'The scope can include checking categories, service areas, hours, photos, contact links and descriptions, then agreeing an update process. Accurate information helps visitors evaluate your business, but profile work does not guarantee placement in local results.',
  },
  {
    question: 'What is the intake and follow-up automation?',
    answer:
      'A call or form can trigger intake, acknowledgement, assignment and timed follow-up. Replies, opt-outs and status changes alter or stop the sequence. Reporting sources, measures and frequency are agreed in the scope; an acknowledgement is counted separately from a human response or confirmed booking.',
  },
  {
    question: 'What does LYCORE cost?',
    answer:
      'Pricing depends on what your business needs. Start with a free review — we will look at how your calls, website, and follow-up are working today and tell you plainly what would help and what it costs. No pressure, no obligation.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer:
      'No. LYCORE does not require long-term contracts. We believe the work should speak for itself month over month.',
  },
];

export const servicePages: ServicePage[] = [
  {
    path: '/what-we-build',
    label: 'What We Build',
    title: 'Lead Generation, Websites & Automation Services - LYCORE',
    description:
      'Explore lead generation, AI receptionists, web design, CRM automation, reviews and customer follow-up for service businesses.',
    h1: 'Connect the next step.',
    kind: 'service',
    problem:
      'Service businesses lose jobs every week to calls that go unanswered, websites that do not convert, and follow-up that never happens.',
    explanation:
      'LYCORE connects the journey from a ringing phone to a completed job: a receptionist that answers, a website that makes urgent callers act, intake that captures the right details, and operations workflows that move approved information through the CRM or field-service software you already use.',
    benefits: [
      'After-hours and overflow call handling with an agreed fallback',
      'Websites built for callers, not browsers',
      'A Google Business Profile with the right phone number, hours and service area',
      'Intake and follow-up that runs itself',
    ],
    included: [
      '24/7 receptionist setup and training',
      'Phone-first website with tappable number',
      'Google Business Profile audit and optimization',
      'Monthly lead and call reporting',
      'Workflow mapping for job creation, team notifications, customer updates and post-job follow-up',
    ],
    process: [
      'Review how your business handles calls, website, and follow-up today',
      'Set up the receptionist with your business details and call-routing rules',
      'Build or rebuild your website around phone conversions',
      'Measure answered calls, booked jobs, and lead sources after 30, 60, 90 days',
      'Map the repeatable work after booking and test human approval points before launch',
    ],
    related: ['/industries', '/vision'],
    faqs: [globalFaqs[0], globalFaqs[1], globalFaqs[6], globalFaqs[9]],
  },
  {
    path: '/industries',
    label: 'Industries',
    title: 'Industries LYCORE Serves — Call Handling, Websites & Follow-Up',
    description:
      'Explore every industry LYCORE serves, with the pain points, call handling, websites, intake, booking and follow-up each business can receive.',
    h1: 'Find your industry.',
    kind: 'service',
    problem:
      'Different service industries lose opportunities in different ways, but the pattern is consistent: calls overlap, urgent customers move on quickly, and incomplete intake slows the team down.',
    explanation:
      'LYCORE configures call handling, phone-first websites, structured intake, booking and follow-up around the operating rules of each industry instead of forcing every business into one generic script.',
    benefits: [
      'Industry-specific call and intake questions',
      'Clear escalation and routing rules',
      'Phone-first customer journeys',
      'Structured summaries the team can act on',
    ],
    included: [
      'Auto repair, bail-bond and electrical workflows',
      'HVAC, locksmith and pest-control workflows',
      'Plumbing, restaurant and restoration workflows',
      'Roofing, towing and urgent-care non-clinical routing workflows',
    ],
    process: [
      'Review the calls and customer journeys specific to the business',
      'Configure service area, hours, intake and escalation rules',
      'Connect call handling, website actions, booking and follow-up',
      'Review the quality and routing of captured opportunities',
    ],
    related: ['/what-we-build', '/contact'],

  },
];

export const legacyPages: PageMeta[] = [
  {
    path: '/',
    label: 'Home',
    title: 'LYCORE: AI Receptionist & Follow-Up for Service Businesses',
    description:
      'A 24/7 AI receptionist that answers every call, filters wrong numbers and sales calls, and books real customers. Built for service businesses.',
    h1: 'More leads. Fewer leaks.',
    kind: 'home',
    faqs: globalFaqs.slice(0, 6),
  },
  {
    path: '/what-we-build',
    label: 'What We Build',
    title: 'Lead Generation, Websites & Automation Services - LYCORE',
    description:
      'Explore lead generation, AI receptionists, web design, CRM automation, reviews and customer follow-up for service businesses.',
    h1: 'Connect the next step.',
    kind: 'service',

  },
  {
    path: '/ai-operations',
    label: 'AI Operations',
    title: 'AI Operations for Service Businesses - LYCORE',
    description: 'Automate repetitive work between customers, staff and the CRM or field-service software your business already uses.',
    h1: 'AI operations for service businesses',
    kind: 'service',
    faqs: [...globalFaqs, ...operationsFaqs],
  },
  {
    path: '/vision',
    label: 'Vision',
    title: 'Where LYCORE Is Building — Full Business Systems',
    description:
      'LYCORE is building toward complete operating systems for service industries: from answered calls to automated paperwork to end-to-end business infrastructure.',
    h1: 'Where We Are Building',
    kind: 'legacy',
  },
  {
    path: '/industries',
    label: 'Industries',
    title: 'Industries LYCORE Serves — Call Handling, Websites & Follow-Up',
    description:
      'Explore every industry LYCORE serves, with the pain points, call handling, websites, intake, booking and follow-up each business can receive.',
    h1: 'Find your industry.',
    kind: 'service',
    faqs: [globalFaqs[0], globalFaqs[1], globalFaqs[4], globalFaqs[6], globalFaqs[9]],
  },
  {
    path: '/about',
    label: 'About',
    title: 'About LYCORE GROUP LLC - Service Business Systems',
    description:
      'Learn how LYCORE GROUP LLC builds customer communication and workflow systems for service businesses that need reliable response and follow-up.',
    h1: 'About LYCORE',
    kind: 'legacy',
    faqs: [globalFaqs[0], globalFaqs[10]],
  },
  {
    path: '/faq',
    label: 'FAQ',
    title: 'Frequently Asked Questions — LYCORE',
    description:
      'Answers to common questions about LYCORE 24/7 call answering, websites, Google Business Profile optimization, pricing, and how it all works for service businesses.',
    h1: 'Frequently Asked Questions',
    kind: 'legacy',
    faqs: globalFaqs,
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Contact LYCORE — Free Lead System Review',
    description:
      'Get a free review of how your service business handles calls, website visitors, and follow-up. No pressure, no obligation.',
    h1: 'Get in Touch',
    kind: 'audit',
    faqs: [globalFaqs[9], globalFaqs[10]],
  },
  {
    path: '/book',
    label: 'Book a Call',
    title: 'Book a Strategy Call — LYCORE',
    description: 'Schedule a time to discuss how LYCORE can help your service business answer more calls and book more jobs.',
    h1: 'Book a Strategy Call',
    kind: 'legacy',
  },
];

export const legalPages: PageMeta[] = [
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    title: 'Privacy Policy — LYCORE',
    description:
      'Learn how LYCORE GROUP LLC collects, uses, shares, protects, and retains personal information from this website, and how to exercise your privacy choices.',
    h1: 'Privacy Policy',
    kind: 'legal',
  },
  {
    path: '/terms',
    label: 'Terms',
    title: 'Terms of Use — LYCORE',
    description:
      'LYCORE terms covering website use, services, third-party tools, and service boundaries.',
    h1: 'Terms of Use',
    kind: 'legal',
  },
  {
    path: '/data-deletion',
    label: 'Data Deletion',
    title: 'Data Deletion Instructions — LYCORE',
    description:
      'How to request deletion of personal information or data connected to your account through LYCORE-operated applications and integrations.',
    h1: 'Data Deletion Instructions',
    kind: 'legal',
  },
];

export const commitmentPages: PageMeta[] = [
  {
    path: '/commitments',
    label: 'Commitments',
    title: 'Our Commitments — LYCORE',
    description: 'How LYCORE approaches its work, people and wider responsibilities as a remote-first, early-stage company.',
    h1: 'How We Intend to Grow',
    kind: 'commitment',
  },
  {
    path: '/commitments/career-growth',
    label: 'Career Growth',
    title: 'Career Growth and Continuous Learning — LYCORE',
    description: 'How LYCORE approaches practical learning, feedback, responsibility and career development as the company grows.',
    h1: 'Career Growth and Continuous Learning',
    kind: 'commitment',
  },
  {
    path: '/commitments/work-life-balance',
    label: 'Work-Life Balance',
    title: 'Remote Work and Work-Life Balance — LYCORE',
    description: 'The LYCORE remote-first working arrangement, flexibility expectations and work-life balance commitments.',
    h1: 'Remote Work and Work-Life Balance',
    kind: 'commitment',
  },
  {
    path: '/commitments/social-impact',
    label: 'Social Impact',
    title: 'Our Social Impact Commitment — LYCORE',
    description: 'The public LYCORE pledge for responsible technology, fair access, privacy, inclusive communication and practical support.',
    h1: 'Our Social Impact Commitment',
    kind: 'commitment',
  },
  {
    path: '/commitments/how-we-work',
    label: 'How We Work',
    title: 'How We Work — LYCORE',
    description: 'The principles that guide how LYCORE approaches ownership, communication, learning and client work.',
    h1: 'How We Work',
    kind: 'commitment',
  },
];

export const auditPage: PageMeta = {
  path: site.auditPath,
  label: 'Free Review',
  title: 'Free Lead System Review — LYCORE',
  description:
    'Request a free LYCORE review of how your service business handles calls, website visitors, and follow-up — with a plain-English breakdown of what to fix first.',
  h1: 'Get a Free Lead System Review',
  kind: 'audit',
  faqs: [globalFaqs[9], globalFaqs[0], globalFaqs[1], globalFaqs[10]],
};

export const redirectPages: PageMeta[] = [
  {
    path: '/audit-request-received',
    label: 'Review Request Received',
    title: 'Review Request Received — LYCORE',
    description:
      'Confirmation page for LYCORE lead system review requests, with next steps.',
    h1: 'Your review request is in.',
    kind: 'system',
  },
  {
    path: '/booking-confirmed',
    label: 'Booking Confirmed',
    title: 'Strategy Call Booking Confirmed — LYCORE',
    description:
      'Confirmation page for a LYCORE strategy call booking.',
    h1: 'Your strategy call is booked.',
    kind: 'system',
  },
  {
    path: '/booking-failed',
    label: 'Booking Not Completed',
    title: 'Strategy Call Booking Not Completed — LYCORE',
    description:
      'Fallback page for interrupted LYCORE booking flows, with options to retry or email for help.',
    h1: 'The meeting was not booked.',
    kind: 'system',
  },
];

// The detailed customer-journey pages are maintained as content data so static
// metadata, sitemap generation, and the client routes always share one inventory.
import { growthPages, integrationsHub, resourcePages, resourcesHub } from './content/architecture';

export const allPages: PageMeta[] = [...legacyPages, integrationsHub, resourcesHub, ...growthPages, ...resourcePages, ...redirectPages, ...legalPages, ...commitmentPages];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'What We Build', path: '/what-we-build' },
  { label: 'Industries', path: '/industries' },
  { label: 'Vision', path: '/vision' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
];

export const formFieldNames = [
  'email',
  'phone',
  'biggestChallenge',
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
