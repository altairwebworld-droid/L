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
  'ai-receptionist': { summary: 'AI call answering handles approved questions, captures caller details and routes appointment or callback requests. Staff handle exceptions and professional decisions.', metrics: responseMetrics },
  'missed-call-text-back': { summary: 'Missed-call SMS offers an unanswered caller a next step. Measure customer replies and completed handoffs as well as the speed of the automatic text.', metrics: responseMetrics },
  'lead-follow-up': { summary: 'Lead follow-up automation connects the first inquiry to a staff action, estimate or appointment. Messages should stop or change when the customer responds.', metrics: responseMetrics },
  'crm-automation': { summary: 'CRM workflow automation assigns leads, updates records and alerts the right person when work needs attention.', metrics: [responseMetrics[2], { name: 'Workflow completion rate', definition: 'Successfully completed eligible workflow runs divided by eligible runs, multiplied by 100. Show failures and retries separately.' }, { name: 'Duplicate records', definition: 'Count of confirmed duplicate customer or lead records found during the review, using an agreed matching rule.' }] },
  'customer-reactivation': { summary: 'Customer reactivation campaigns follow up with eligible past customers and dormant inquiries. Use recorded permission and suppression rules to decide who can be contacted.', metrics: [outreachMetrics[1], responseMetrics[1], { name: 'Opt-outs', definition: 'Count of unique recipients who opt out during the campaign. Confirm they are suppressed from later messages.' }] },
  'reputation-management': { summary: 'Review management gives completed customers a consistent way to leave honest feedback and helps staff respond.', metrics: [{ name: 'Review requests delivered', definition: 'Count of eligible customers whose review invitation has a recorded delivery confirmation, with unknown delivery shown separately.' }, { name: 'New reviews', definition: 'Count of new reviews by platform and reporting period. Do not attribute every review to a campaign unless the data supports that link.' }, { name: 'Review response time', definition: 'Median time between a review being published and the business response, with the count of unanswered reviews.' }] },
  'review-automation': { summary: 'Automated review requests follow a completed service. Apply the same eligibility rules regardless of whether a customer is expected to leave positive or negative feedback.', metrics: [{ name: 'Request coverage', definition: 'Eligible completed customers sent a review request divided by all eligible completed customers, multiplied by 100.' }, { name: 'New reviews', definition: 'Count of new reviews by platform and reporting period. Report campaign attribution only where it can be verified.' }] },
  'google-business-profile-management': { summary: 'Google Business Profile management keeps hours, services and contact paths accurate and connects profile visits to the next customer action.', metrics: [{ name: 'Profile interactions', definition: 'Calls, website clicks and direction requests reported by the profile platform, with each measure kept separate. A click is not a completed appointment.' }, { name: 'Attributed inquiries', definition: 'Unique inquiries linked to profile traffic through available attribution data. Label inquiries with an unknown source separately.' }] },
  'web-design': { summary: 'Service-business web design should explain the offer, answer buyer questions and make contacting the team straightforward on a phone.', metrics: [{ name: 'Website inquiry rate', definition: 'Eligible website sessions with a completed inquiry divided by eligible sessions, multiplied by 100. Exclude internal and test traffic where identifiable.' }, { name: 'Search clicks and impressions', definition: 'Clicks and impressions reported by Search Console, grouped by query and landing page. These are search measurements, not revenue.' }, { name: 'Qualified website leads', definition: 'Unique website inquiries that meet agreed fit criteria, verified in the CRM rather than inferred from button clicks.' }] },
};
