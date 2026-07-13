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
  ogImage: '/og-image.png',
  coreStatement:
    'LYCORE answers your phones 24/7, builds websites that convert callers, and handles the follow-up — so small service businesses stop losing jobs to missed calls.',
  heroCopy:
    'A stranded driver at midnight. A burst pipe at 2 a.m. A patient searching for a clinic that answers. If your phone rings and nobody picks up, the job goes to whoever does. LYCORE makes sure that is you.',
  expandedServicesStatement:
    'LYCORE also optimizes your Google Business Profile, automates intake and follow-up paperwork, and is building full operating systems for service industries.',
  aiDisclaimer:
    "LYCORE's receptionist service is staffed by a trained system that answers calls, captures caller details, and routes information to your team. It does not replace licensed professionals or make decisions on your behalf.",
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
  kind: 'home' | 'legacy' | 'service' | 'audit' | 'legal' | 'commitment' | 'system';
  faqs?: Faq[];
};

export const showcaseItems = [
  {
    title: 'Towing company homepage with tap-to-call',
    eyebrow: 'Sample Website 01',
    image: '/showcase/sample-verdict-strategic-bail.jpeg',
    alt: 'Sample towing company website concept with a clean editorial layout, large headline, and tap-to-call button.',
    copy:
      'A clean, phone-first homepage built for urgency. The call button is visible from the first screen, service areas are clear, and the page loads fast on any phone.',
  },
  {
    title: 'Plumbing service landing page',
    eyebrow: 'Sample Website 02',
    image: '/showcase/sample-aegis-bail-bonds-agency.jpeg',
    alt: 'Sample plumbing service website concept with bold typography, black and white styling, and call-now action.',
    copy:
      'A bold homepage direction with oversized typography, an instant call action, and a layout that tells a homeowner exactly what you do in three seconds.',
  },
  {
    title: 'HVAC repair conversion-focused hero',
    eyebrow: 'Sample Website 03',
    image: '/showcase/sample-bail-relief-freedom-secured.jpeg',
    alt: 'Sample HVAC repair website concept with large headline, request service button, and service callouts.',
    copy:
      'A high-impact landing page built for urgent visitors. The request-service button sits above the fold, and service callouts answer the most common questions immediately.',
  },
  {
    title: 'Restoration company service page',
    eyebrow: 'Sample Website 04',
    image: '/showcase/sample-aegis-secured-freedom.jpeg',
    alt: 'Sample restoration company website concept with a structured layout showing process steps and service areas.',
    copy:
      'A structured service page that explains process, response times, coverage areas, and next steps in a layout built for someone in the middle of an emergency.',
  },
  {
    title: 'Locksmith premium brand page',
    eyebrow: 'Sample Website 05',
    image: '/showcase/sample-aegis-underwriter.jpeg',
    alt: 'Sample locksmith website concept with strong brand presence, contact actions, and process steps.',
    copy:
      'A polished direction with visible contact actions, process steps, and stronger brand personality for businesses that want a more distinctive look online.',
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
      'LYCORE works with small service businesses where a missed call means lost revenue: towing companies, plumbers, roofers, HVAC contractors, electricians, restaurants, urgent care clinics, bail bond agencies, locksmiths, restoration companies, and similar businesses.',
  },
  {
    question: 'How does LYCORE answer my calls?',
    answer:
      'When a call comes in and your team cannot pick up, our receptionist answers on your behalf. It greets the caller by your business name, captures the details you need (name, location, urgency, service type), and routes the information to your team by text, email, or dashboard. Your callers talk to a trained receptionist, not a voicemail box.',
  },
  {
    question: 'Is the receptionist a real person or a computer?',
    answer:
      'The receptionist uses artificial intelligence to hold natural conversations, capture caller details, and route information. It is not a human, but it is trained on your business specifics — your services, your hours, your service area — so callers get accurate, helpful responses instead of a generic voicemail.',
  },
  {
    question: 'Will callers know they are not talking to my staff?',
    answer:
      'The receptionist introduces itself as part of your team and answers using your business name. Most callers will not notice a difference. If a caller specifically asks, the receptionist will answer honestly.',
  },
  {
    question: 'What happens after the call is answered?',
    answer:
      'Your team receives a summary with the caller name, phone number, service requested, location, and urgency level. You can receive this by text, email, or through your existing tools. Nothing falls through the cracks.',
  },
  {
    question: 'Can LYCORE transfer live calls to my team?',
    answer:
      'Yes. When a call needs immediate human attention, the receptionist can transfer the caller directly to your on-call staff. You set the rules for when live transfers happen.',
  },
  {
    question: 'How are the websites different from what I can build myself?',
    answer:
      'LYCORE websites are built specifically for service businesses that depend on phone calls. The phone number is tappable from the first screen, pages load in under two seconds on mobile, and every element is arranged to get an urgent searcher to call — not browse. We also connect Google Business Profile, call tracking, and lead routing so you can see which pages are generating calls.',
  },
  {
    question: 'What does Google Business Profile optimization include?',
    answer:
      'We make sure your listing has the right categories, service areas, hours, photos, and description so that when someone nearby searches for what you do, your business appears in the local results. We also monitor and update the profile as Google makes changes.',
  },
  {
    question: 'What is the intake and follow-up automation?',
    answer:
      'After a call or form submission, the system captures the details, sends confirmations to your caller, routes the lead to your team, and follows up if nobody has responded. At the end of each month, you receive a report showing how many leads came in, how many were handled, and where they came from. This feature is currently rolling out.',
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
    title: '24/7 Receptionist, Websites & GBP for Service Businesses',
    description:
      'LYCORE answers calls 24/7, builds phone-first websites, optimizes Google Business Profiles, and automates intake for small service businesses that cannot afford to miss a call.',
    h1: 'What We Build',
    kind: 'service',
    problem:
      'Service businesses lose jobs every week to calls that go unanswered, websites that do not convert, and follow-up that never happens.',
    explanation:
      'LYCORE builds the system that sits between your ringing phone and a booked job: a receptionist that answers every call, a website that makes urgent callers tap your number, a Google listing that puts you first locally, and intake automation that handles the paperwork after the call.',
    benefits: [
      'Every call answered, day and night',
      'Websites built for callers, not browsers',
      'Google Business Profile that ranks locally',
      'Intake and follow-up that runs itself',
    ],
    included: [
      '24/7 receptionist setup and training',
      'Phone-first website with tappable number',
      'Google Business Profile audit and optimization',
      'Monthly lead and call reporting',
    ],
    process: [
      'Review how your business handles calls, website, and follow-up today',
      'Set up the receptionist with your business details and call-routing rules',
      'Build or rebuild your website around phone conversions',
      'Measure answered calls, booked jobs, and lead sources after 30, 60, 90 days',
    ],
    related: ['/industries/towing', '/industries/bail-bonds', '/vision'],
    faqs: [globalFaqs[0], globalFaqs[1], globalFaqs[6], globalFaqs[9]],
  },
];

export const legacyPages: PageMeta[] = [
  {
    path: '/',
    label: 'Home',
    title: 'LYCORE GROUP LLC - Customer Communication Systems',
    description:
      '24/7 call handling, lead capture, appointment booking, follow-up, SMS automation, CRM integration and workflow systems for service businesses.',
    h1: 'Stop losing jobs to missed calls',
    kind: 'home',
    faqs: globalFaqs.slice(0, 6),
  },
  {
    path: '/what-we-build',
    label: 'What We Build',
    title: '24/7 Receptionist, Websites & GBP for Service Businesses',
    description:
      'LYCORE answers calls 24/7, builds phone-first websites, optimizes Google Business Profiles, and automates intake for small service businesses that cannot afford to miss a call.',
    h1: 'What We Build',
    kind: 'service',
    faqs: [globalFaqs[1], globalFaqs[6], globalFaqs[7], globalFaqs[8]],
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
    path: '/industries/towing',
    label: 'Towing',
    title: 'Towing Company Websites & 24/7 Call Answering — LYCORE',
    description:
      'LYCORE builds phone-first websites and 24/7 call answering for towing companies so every roadside call turns into a dispatched job, not a voicemail.',
    h1: 'Towing Websites and 24/7 Call Answering',
    kind: 'service',
    faqs: [globalFaqs[1], globalFaqs[4], globalFaqs[5], globalFaqs[6]],
  },
  {
    path: '/industries/bail-bonds',
    label: 'Bail Bonds',
    title: 'Bail Bond Agency Services — LYCORE',
    description:
      'LYCORE serves bail bond agencies with 24/7 call answering and phone-first websites. For full bail bond pricing and service details, visit lycore.org.',
    h1: 'Bail Bond Agency Services',
    kind: 'legacy',
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
    path: '/privacy',
    label: 'Privacy',
    title: 'Privacy Policy — LYCORE',
    description:
      'LYCORE privacy policy covering data collection, usage, integrations, and user consent.',
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

export const allPages: PageMeta[] = [...legacyPages, ...redirectPages, ...legalPages, ...commitmentPages];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'What We Build', path: '/what-we-build' },
  { label: 'Vision', path: '/vision' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
];

export const formFieldNames = [
  'fullName',
  'businessName',
  'website',
  'email',
  'location',
  'industry',
  'biggestChallenge',
  'currentCRM',
  'missedCalls',
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
