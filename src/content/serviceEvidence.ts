export type Metric = { name: string; definition: string };
export type ServiceEvidence = {
  summary: string;
  timeline?: { label: string; value: string; explanation: string };
  tools?: { name: string; role: string; url: string }[];
  metrics: Metric[];
  reference?: { text: string; label: string; url: string };
  faqs?: { question: string; answer: string }[];
};

export const measurementNote = 'These are measures to agree before launch, not published client results. Record the source, date range and sample size. Compare equivalent periods, separate automated activity from customer actions, and show unavailable data as unavailable rather than zero.';

const responseMetrics: Metric[] = [
  { name: 'First response time', definition: 'Median time from a new inquiry to the first reply. Report automated acknowledgements and human responses separately, with the number of inquiries measured.' },
  { name: 'Booking rate', definition: 'Unique inquiries that become confirmed appointments divided by eligible unique inquiries, multiplied by 100. Agree the eligibility rules before comparing periods.' },
  { name: 'Unresolved inquiries', definition: 'Count of inquiries still awaiting an assigned next action at the end of the reporting period, grouped by age.' },
];

const outreachMetrics: Metric[] = [
  { name: 'Bounce rate', definition: 'Bounced campaign messages divided by attempted campaign sends, multiplied by 100. Record hard and soft bounces separately and exclude warm-up traffic.' },
  { name: 'Positive reply rate', definition: 'Unique prospects with an interested human reply divided by unique prospects reached without a recorded bounce, multiplied by 100. Exclude auto-replies and warm-up messages.' },
  { name: 'Qualified meetings', definition: 'Count of meetings that meet the agreed fit criteria. Show booked meetings, attended meetings and cancellations separately in the CRM.' },
];

export function registerServiceEvidence(slug: string, summary: string) {
  serviceEvidence[slug] = { summary, metrics: responseMetrics };
}

export const serviceEvidence: Record<string, ServiceEvidence> = {
  'cold-email-infrastructure': {
    summary: 'LYCORE sets up sending domains, business mailboxes, SPF, DKIM and DMARC, then prepares the inboxes for a controlled launch. Infrastructure setup and campaign management are separate parts of the scope.',
    timeline: {
      label: 'Planned inbox warm-up', value: 'About 2 weeks',
      explanation: 'Allow roughly 14 days for the initial warm-up after mailbox setup and authentication checks. This is a planning estimate, not a guaranteed launch date or inbox-placement result. Domain history, provider restrictions and test results may require more time. Start campaign sending gradually only after the checks pass.',
    },
    tools: [
      { name: 'InboxKit', role: 'Mailbox provisioning and email infrastructure option. Provider, account access and subscription scope are agreed before setup.', url: 'https://www.inboxkit.com/' },
      { name: 'Squarespace Domains', role: 'Domain registration and DNS management for domains purchased through Squarespace.', url: 'https://domains.squarespace.com/' },
      { name: 'Hostinger', role: 'Domain registration and DNS management for domains purchased through Hostinger.', url: 'https://www.hostinger.com/domains' },
      { name: 'Porkbun', role: 'Domain registration and DNS management for domains purchased through Porkbun.', url: 'https://porkbun.com/' },
    ],
    metrics: [
      { name: 'Authentication checks', definition: 'Record SPF, DKIM and DMARC configuration and test-message results for each sending domain. A published DNS record alone does not establish that messages pass authentication.' },
      { name: 'Launch readiness', definition: 'Record working mailboxes, completed warm-up days, failed checks and the approved sending limit. Fourteen elapsed days alone do not mean an inbox is ready.' },
      ...outreachMetrics.slice(0, 1),
      { name: 'Provider reputation signals', definition: 'Review spam complaints and domain reputation where the provider supplies data. Keep test or warm-up scores separate from real campaign delivery; acceptance by a mail server does not prove inbox placement.' },
    ],
    reference: { text: 'Google requires spam rates reported in Postmaster Tools to stay below 0.3% for senders to personal Gmail accounts. This is a provider requirement, not a LYCORE performance result or a guarantee of delivery. Other authentication, sending and unsubscribe requirements also apply.', label: 'Google email sender guidelines', url: 'https://support.google.com/mail/answer/81126' },
    faqs: [
      { question: 'How long does cold email infrastructure warm-up take?', answer: 'LYCORE plans about two weeks for the initial inbox warm-up after mailbox setup and authentication checks. The launch date depends on domain history, provider requirements and test results. Warm-up does not guarantee inbox placement, replies or sales.' },
      { question: 'Can you use domains bought through Squarespace, Hostinger or Porkbun?', answer: 'Yes. LYCORE can work with sending domains purchased through Squarespace, Hostinger or Porkbun, subject to the DNS and account access needed for setup. Domain registration, mailbox hosting and outreach software are separate services; their costs and ownership should be agreed in the scope.' },
      { question: 'Does using a keyword in a sending domain improve Google rankings?', answer: 'A sending domain is part of the email setup, not a search-ranking strategy. Choose a clear, honest sender identity. Search-focused service pages belong on the main website and should answer the questions buyers ask.' },
    ],
  },
  'outbound-lead-generation': { summary: 'B2B lead generation starts with a defined buyer, relevant contact research and an offer worth replying to. Agree what counts as a qualified conversation before launching outreach.', metrics: outreachMetrics },
  'ai-receptionist': {
    summary: 'AI call answering handles approved questions, captures caller details and routes appointment or callback requests. Staff handle exceptions and professional decisions.',
    metrics: responseMetrics,
    reference: { text: 'ServiceTitan\'s 2022 analysis of home-service call data found that smaller shops booked about 26% of calls at peak times and about 9% after 6 p.m. This is third-party industry data, not a LYCORE result or a promise of what you will book.', label: 'ServiceTitan call booking rate data', url: 'https://www.servicetitan.com/blog/data-call-booking-rates' },
    faqs: [
      { question: 'Will callers know they are talking to an AI?', answer: 'Yes. The greeting identifies the assistant as an AI acting for your business, and callers can ask for a person at any point. A transfer or callback path follows your rules and your staff availability. LYCORE does not present the receptionist as a human.' },
      { question: 'What happens when the AI receptionist cannot answer a question?', answer: 'It is set up to hand over rather than guess. When it cannot answer reliably, or the caller needs a person, it follows your transfer or callback rules, captures the caller\'s details and sends you a summary so nobody is left wondering what was said. These handover paths are tested with real call scenarios before launch.' },
      { question: 'Can an AI receptionist stop routine and unwanted calls from interrupting me?', answer: 'It answers every call, so routine questions, wrong numbers and sales calls are handled by the receptionist instead of pulling you off the job. Real enquiries are captured with the caller\'s details and sent to you, and you decide who gets put through.' },
      { question: 'Can it book appointments for me?', answer: 'Where your calendar or booking tool can be connected, it can offer times and record the booking. Where it cannot, it captures a booking or callback request for your team to confirm. LYCORE checks what can be connected before the build is agreed, so you know which one you are getting.' },
      { question: 'Does an AI receptionist replace my staff?', answer: 'No. It covers calls your team cannot take, such as after hours and busy periods, and it captures the details your staff need. Your team handles exceptions, pricing decisions and anything that needs professional judgment.' },
      { question: 'How is an AI receptionist different from a traditional answering service?', answer: 'A traditional answering service uses human agents. An AI receptionist follows your configured intake, routing and booking rules at any hour. A person may suit you better when a live voice or complex judgment matters. LYCORE\'s comparison guide sets out the trade-offs.' },
      { question: 'Do I have to sign a long-term contract?', answer: 'No. LYCORE does not require long-term contracts.' },
      { question: 'How much does an AI receptionist cost?', answer: 'It depends on your call volume and what you want it to do. A free review looks at how your calls are handled today and tells you plainly what would help and what it costs, with no pressure and no obligation.' },
    ],
  },
  'missed-call-text-back': {
    summary: 'Missed-call SMS offers an unanswered caller a next step. Measure customer replies and completed handoffs as well as the speed of the automatic text.',
    metrics: responseMetrics,
    reference: { text: 'Invoca, a call analytics company, reports that 27% of calls to home-services businesses go unanswered and that fewer than 3% of callers sent to voicemail leave a message. This is third-party industry data, not a LYCORE result or a promise of what you will recover.', label: 'Invoca: what missed sales calls cost home-services businesses', url: 'https://www.invoca.com/blog/how-much-missed-sales-calls-cost-home-services-businesses' },
    faqs: [
      { question: 'What does a missed call text back say?', answer: 'You approve the wording. A typical message tells the caller who you are, that you missed their call, and asks what they need or offers a way to book. It reads as a message from your business, not from a person pretending to be you.' },
      { question: 'What happens when the customer replies?', answer: 'The reply is captured with their details and sent to you or your team, so the conversation continues with a person. Automation stops when a person needs to take over.' },
      { question: 'Are missed call texts allowed?', answer: 'Text messages need approved wording and opt-out handling, and the rules differ by carrier and situation. LYCORE sets up approved messages with STOP handling and reviews consent requirements during setup. Confirm the requirements for your own business with your advisor.' },
      { question: 'Does missed call text back replace answering the phone?', answer: 'No. It gives an unanswered caller a fast, clear next step. It works well alongside an AI receptionist, which can answer the call itself, and it does not fix a lead process with nobody to pick up the reply.' },
    ],
  },
  'lead-follow-up': {
    summary: 'Lead follow-up automation connects the first inquiry to a staff action, estimate or appointment. Messages should stop or change when the customer responds.',
    metrics: responseMetrics,
    faqs: [
      { question: 'What does lead follow-up automation do?', answer: 'It replies to every new enquiry straight away, follows up on estimates and appointment requests on a schedule you approve, and creates a task for a person when automation should stop. It stops when the customer replies.' },
      { question: 'Will follow-up messages annoy my customers?', answer: 'They should not. You approve the wording, timing, channels and quiet hours, and a reply, cancellation or opt-out stops or changes the sequence. Sensitive details stay out of routine texts and emails.' },
      { question: 'Does it work with the software I already use?', answer: 'Usually yes. LYCORE starts with the tools your team already uses and checks the available connection methods before the build is agreed. It does not replace your CRM or field-service software.' },
    ],
  },
  'crm-automation': { summary: 'CRM workflow automation assigns leads, updates records and alerts the right person when work needs attention.', metrics: [responseMetrics[2], { name: 'Workflow completion rate', definition: 'Successfully completed eligible workflow runs divided by eligible runs, multiplied by 100. Show failures and retries separately.' }, { name: 'Duplicate records', definition: 'Count of confirmed duplicate customer or lead records found during the review, using an agreed matching rule.' }] },
  'customer-reactivation': { summary: 'Customer reactivation campaigns follow up with eligible past customers and dormant inquiries. Use recorded permission and suppression rules to decide who can be contacted.', metrics: [outreachMetrics[1], responseMetrics[1], { name: 'Opt-outs', definition: 'Count of unique recipients who opt out during the campaign. Confirm they are suppressed from later messages.' }] },
  'reputation-management': { summary: 'Review management gives completed customers a consistent way to leave honest feedback and helps staff respond.', metrics: [{ name: 'Review requests delivered', definition: 'Count of eligible customers whose review invitation has a recorded delivery confirmation, with unknown delivery shown separately.' }, { name: 'New reviews', definition: 'Count of new reviews by platform and reporting period. Do not attribute every review to a campaign unless the data supports that link.' }, { name: 'Review response time', definition: 'Median time between a review being published and the business response, with the count of unanswered reviews.' }] },
  'review-automation': { summary: 'Automated review requests follow a completed service. Apply the same eligibility rules regardless of whether a customer is expected to leave positive or negative feedback.', metrics: [{ name: 'Request coverage', definition: 'Eligible completed customers sent a review request divided by all eligible completed customers, multiplied by 100.' }, { name: 'New reviews', definition: 'Count of new reviews by platform and reporting period. Report campaign attribution only where it can be verified.' }] },
  'google-business-profile-management': { summary: 'Google Business Profile management keeps hours, services and contact paths accurate and connects profile visits to the next customer action.', faqs: [
    { question: 'Why does my Google Business Profile matter?', answer: 'For many local searches it is the first thing a customer sees, before your website. A wrong phone number, old hours or a missing service area can send a ready customer to the wrong place or to a competitor.' },
    { question: 'Do you need my Google password?', answer: 'No. You add LYCORE as a manager on your Google Business Profile, and you stay the owner. You can remove access at any time.' },
    { question: 'Will this get me to the top of Google Maps?', answer: 'No one can promise placement. Accurate, complete and active profile information helps customers evaluate you and reach you, but rankings depend on many factors and LYCORE does not guarantee them.' },
  ], metrics: [{ name: 'Profile interactions', definition: 'Calls, website clicks and direction requests reported by the profile platform, with each measure kept separate. A click is not a completed appointment.' }, { name: 'Attributed inquiries', definition: 'Unique inquiries linked to profile traffic through available attribution data. Label inquiries with an unknown source separately.' }] },
  'web-design': { summary: 'Service-business web design should explain the offer, answer buyer questions and make contacting the team straightforward on a phone.', faqs: [
    { question: 'What makes a website good for a service business?', answer: 'It says plainly what you do, who you serve and where. It loads quickly on a phone, shows why to trust you, and puts a tappable phone number and a booking or enquiry button where a visitor can find them at once.' },
    { question: 'Can you tell me which pages bring in calls?', answer: 'Yes. Call and form tracking are part of the build, so you can see which pages and sources produce enquiries instead of guessing.' },
    { question: 'Will a new website rank on Google?', answer: 'A clear, fast site with pages that answer real customer questions gives you a fair chance of being found, but no one can guarantee rankings. Search results depend on competition, your history and many other factors.' },
  ], metrics: [{ name: 'Website inquiry rate', definition: 'Eligible website sessions with a completed inquiry divided by eligible sessions, multiplied by 100. Exclude internal and test traffic where identifiable.' }, { name: 'Search clicks and impressions', definition: 'Clicks and impressions reported by Search Console, grouped by query and landing page. These are search measurements, not revenue.' }, { name: 'Qualified website leads', definition: 'Unique website inquiries that meet agreed fit criteria, verified in the CRM rather than inferred from button clicks.' }] },
};
