import type { Faq, PageMeta } from '../siteData';

export type GrowthPage = PageMeta & {
  eyebrow: string;
  problem: string;
  builds: string[];
  workflow: string[];
  control: string;
  related: string[];
  faqs: Faq[];
};

const standardFaqs: Faq[] = [
  { question: 'Does LYCORE replace the software we already use?', answer: 'No. LYCORE starts with the tools and operating rules your team already uses, then evaluates practical ways to connect the work around them.' },
  { question: 'Are outcomes guaranteed?', answer: 'No. A system can improve the speed and consistency of a process, but LYCORE does not guarantee rankings, reply rates, booked appointments, revenue, or any other business outcome.' },
];

const service = (slug: string, title: string, description: string, problem: string, builds: string[], workflow: string[], related: string[]): GrowthPage => ({
  path: `/services/${slug}`,
  label: title,
  title: `${title} for Service Businesses — LYCORE`,
  description,
  h1: title,
  kind: 'service',
  eyebrow: 'Service system',
  problem,
  builds,
  workflow,
  control: 'Your team keeps control of business rules, escalation decisions, approvals, customer data, and the tools it chooses to keep. LYCORE configures and documents the workflow around those rules.',
  related,
  faqs: standardFaqs,
});

export const serviceGrowthPages: GrowthPage[] = [
  service('outbound-lead-generation', 'Outbound Lead Generation', 'Target-market research, outreach workflows, qualification and booking support for service businesses.', 'When there is no repeatable acquisition process, growth depends on referrals and whatever leads happen to arrive.', ['Target-market and account definition', 'Prospect research and list quality checks', 'Outreach sequences and reply-routing rules'], ['Target market defined', 'Relevant companies researched', 'Contacts verified where possible', 'Outreach and follow-up sent', 'Replies qualified', 'Qualified conversations booked'], ['/services/cold-email-infrastructure', '/services/crm-automation']),
  service('cold-email-infrastructure', 'Cold Email Infrastructure', 'Email sending infrastructure and deliverability preparation for responsible business outreach.', 'A campaign cannot be judged fairly when domains, inboxes, authentication, and sending practices are not prepared.', ['Sending-domain strategy', 'Google Workspace or Microsoft 365 inbox setup', 'SPF, DKIM and DMARC configuration support', 'Mailbox warm-up and sending controls'], ['Sending setup reviewed', 'Authentication configured', 'Inboxes prepared', 'Campaign rules approved', 'Sending monitored', 'Replies handled'], ['/services/outbound-lead-generation']),
  service('ai-receptionist', 'AI Receptionist', 'Configured call answering, intake, routing and booking support for service-business enquiries.', 'After-hours and overflow calls often become voicemail, then become a job for someone else.', ['Business-name greeting and FAQs', 'Configured intake questions', 'Escalation and live-transfer rules', 'Booking, notification, and call-summary workflows'], ['Customer calls', 'Request and contact details captured', 'Service-area and escalation rules checked', 'Request routed or booked', 'Customer receives confirmation', 'Team receives the summary'], ['/services/missed-call-text-back', '/services/lead-follow-up']),
  service('missed-call-text-back', 'Missed Call Text Back', 'Fast, configured SMS follow-up after an unanswered service-business call.', 'When a customer cannot reach a business, waiting until someone notices the missed call loses time and trust.', ['Missed-call trigger', 'Approved acknowledgement message', 'Reply routing and qualification prompts', 'Team notifications when a person is needed'], ['Call is missed', 'Configured text is sent', 'Customer replies', 'Request is captured', 'Team is notified', 'Next step is booked or routed'], ['/services/ai-receptionist', '/services/lead-follow-up']),
  service('lead-follow-up', 'Lead Follow-Up', 'Follow-up workflows that help service businesses keep enquiries, estimates and appointments moving.', 'A form, call, or estimate has little value if nobody follows up at the right time.', ['New-lead response paths', 'Estimate and appointment reminders', 'Human task creation when automation stops', 'Channel and timing rules'], ['Lead enters the system', 'Acknowledgement is sent', 'Configured follow-up begins', 'Response or status is recorded', 'Human task created when needed', 'Outcome reviewed'], ['/services/crm-automation', '/services/customer-reactivation']),
  service('reputation-management', 'Reputation Management', 'Practical review and reputation workflows for service businesses.', 'Completed jobs rarely become reviews without a consistent, customer-respectful request process.', ['Reputation-channel review', 'Review-request process design', 'Response workflow guidance', 'Performance and operational monitoring'], ['Job completes', 'Completion signal is received', 'Review request is sent', 'Configured follow-up occurs', 'Review is received', 'Response workflow is available'], ['/services/review-automation', '/services/google-business-profile-management']),
  service('review-automation', 'Review Automation', 'Post-service review-request workflows built around the customer journey.', 'Asking manually is inconsistent; avoiding the request entirely leaves a business without fresh customer feedback.', ['Completion-based triggers', 'SMS or email request paths', 'Respectful follow-up timing', 'Review-response routing'], ['Job completes', 'Customer is identified', 'Request is sent', 'No response receives configured follow-up', 'Review arrives', 'Team is notified'], ['/services/reputation-management']),
  service('google-business-profile-management', 'Google Business Profile Management', 'Google Business Profile audits and maintenance for accurate local business information.', 'Wrong hours, categories, service areas, or contact paths can send a ready customer elsewhere.', ['Business information audit', 'Category and service-area review', 'Photo and post workflow guidance', 'Website and conversion-path alignment'], ['Profile audited', 'Critical business details corrected', 'Service information reviewed', 'Customer path checked', 'Updates scheduled', 'Changes monitored'], ['/services/reputation-management', '/services/web-design']),
  service('crm-automation', 'CRM Automation', 'Customer lifecycle workflows around the CRM and operational tools your team already uses.', 'Leads, estimates, reminders and internal handoffs break when systems are disconnected or steps are manual.', ['Pipeline and lifecycle review', 'Lead assignment and notification rules', 'API, webhook, native or automation-platform connection assessment', 'Documented exception handling'], ['Trigger occurs', 'Data is routed', 'Customer or team message is sent', 'Status is updated', 'Exception is assigned to a person', 'Workflow is reviewed'], ['/services/lead-follow-up', '/services/customer-reactivation']),
  service('customer-reactivation', 'Customer Reactivation', 'Reactivation workflows for past customers, dormant leads, and recurring-service reminders.', 'Past customers can be forgotten even when they are the most likely people to need the next service.', ['Eligible customer segments', 'Approved outreach cadence', 'Response and booking path', 'Suppression and opt-out handling'], ['Segment is selected', 'Message is approved', 'Campaign is sent', 'Replies are routed', 'Bookings are handled', 'Results are reviewed'], ['/services/crm-automation']),
  service('web-design', 'Web Design for Service Businesses', 'Conversion-focused websites that connect traffic, enquiries, follow-up and booking.', 'A good-looking site still fails when urgent visitors cannot find the service, trust the business, or take the next step.', ['Service-page structure', 'Mobile and speed improvements', 'Calls, forms, scheduling and tracking', 'Connection to follow-up workflows'], ['Visitor arrives', 'Service need is understood', 'Clear action is offered', 'Enquiry is captured', 'CRM or team is notified', 'Follow-up begins'], ['/services/lead-follow-up', '/services/google-business-profile-management']),
];

const industry = (slug: string, name: string, description: string, problem: string, workflow: string[], tools: string[]): GrowthPage => ({
  path: `/industries/${slug}`,
  label: `${name} systems`,
  title: `${name} Customer Journey Systems — LYCORE`,
  description,
  h1: `${name} customer journey systems`,
  kind: 'industry',
  eyebrow: 'Industry workflow',
  problem,
  builds: ['Lead-response and intake rules shaped around the work', 'Booking, follow-up, review and reactivation opportunities', `Software connection assessment for tools such as ${tools.join(', ')}`],
  workflow,
  control: 'LYCORE does not replace professional judgment, dispatch decisions, clinical decisions, or your existing operational platform. The workflow is configured around the rules your team approves.',
  related: ['/services/ai-receptionist', '/services/crm-automation', '/integrations'],
  faqs: standardFaqs,
});

export const industryGrowthPages: GrowthPage[] = [
  industry('home-services', 'Home services', 'Lead response, booking and follow-up systems for home-service businesses.', 'A homeowner with an urgent issue often calls the next business if the first one does not respond.', ['Enquiry arrives', 'Service need and location captured', 'Availability or escalation rules checked', 'Request routed or booked', 'Customer confirmed', 'Follow-up continues'], ['Jobber', 'Housecall Pro', 'ServiceTitan']),
  industry('pest-control', 'Pest control', 'Customer-journey systems for pest-control enquiries, recurring service and reviews.', 'A treatment request can be lost between the first call, scheduling, job completion, and the next seasonal need.', ['Customer asks about treatment', 'Pest and property details captured', 'Service area checked', 'Appointment path offered', 'Job completion triggers review opportunity', 'Future treatment reminder is available'], ['GorillaDesk', 'FieldRoutes', 'PestPac', 'Jobber']),
  industry('plumbing', 'Plumbing', 'Urgent call response, estimate follow-up and review workflows for plumbing businesses.', 'A leak or no-water call is urgent; missed calls and delayed estimate follow-up push the customer to another plumber.', ['Customer calls with an issue', 'Location and issue captured', 'Urgency and escalation rules checked', 'On-call team notified or visit booked', 'Customer receives confirmation', 'Completed work can start a review workflow'], ['Housecall Pro', 'Jobber', 'ServiceTitan']),
  industry('roofing', 'Roofing', 'Storm-demand, inspection and estimate-follow-up systems for roofing businesses.', 'Storm demand produces many enquiries at once, while inspection requests and estimates need a reliable follow-through.', ['Property owner enquires', 'Damage and location captured', 'Inspection request logged', 'Estimator or booking path assigned', 'Estimate follow-up begins', 'Customer status is reviewed'], ['Jobber', 'ServiceTitan', 'HubSpot']),
  industry('restoration', 'Restoration', 'Response and customer-lifecycle systems for restoration businesses.', 'Property damage gets worse while customers wait for a response, and fast handoffs matter.', ['Damage call arrives', 'Type, location and urgency captured', 'Escalation rules checked', 'Response team notified', 'Customer updated', 'Job lifecycle follow-up continues'], ['ServiceTitan', 'Jobber', 'HubSpot']),
  industry('towing', 'Towing', 'Dispatch-ready intake and customer communication workflows for towing businesses.', 'A stranded driver may call several providers in minutes; response speed and precise location capture matter.', ['Driver calls', 'Location and vehicle details captured', 'Dispatch rules checked', 'Driver or team notified', 'Customer receives next-step update', 'Follow-up records the outcome'], ['Google Calendar', 'Twilio', 'HubSpot']),
  industry('med-spas', 'Med spas', 'Consultation response, booking and reactivation workflows for med spas.', 'Consultation forms, no-shows, appointment reminders and dormant clients need consistent, careful communication.', ['Prospect enquires', 'Consultation request captured', 'Approved qualification questions answered', 'Available appointment path offered', 'Reminder workflow begins', 'Reactivation can be considered'], ['Boulevard', 'Vagaro', 'Mindbody', 'Mangomint', 'Zenoti']),
  industry('dentists', 'Dental practices', 'Non-clinical enquiry, appointment and recall-support workflows for dental practices.', 'Missed calls, no-shows and appointment questions can overload a front desk without improving patient care.', ['Patient enquiry arrives', 'Non-clinical details captured', 'Appointment or callback path offered', 'Reminder sent', 'Staff receives summary', 'Recall or reactivation workflow is considered'], ['Dentrix', 'Open Dental', 'Eaglesoft', 'Curve Dental']),
  industry('veterinary', 'Veterinary practices', 'Non-clinical lead response, scheduling and follow-up systems for veterinary practices.', 'A worried pet owner needs an immediate, clear next step when the team is busy with patients.', ['Pet owner enquires', 'Non-clinical details captured', 'Urgent escalation rules checked', 'Appointment or callback path offered', 'Reminder is sent', 'Team receives the summary'], ['Google Calendar', 'HubSpot', 'Twilio']),
];

const integration = (slug: string, name: string, category: string, description: string, workflows: string[]): GrowthPage => ({
  path: `/integrations/${slug}`,
  label: `${name} workflows`,
  title: `${name} Automation & Workflow Integration — LYCORE`,
  description,
  h1: `${name} automation and workflow integration`,
  kind: 'integration',
  eyebrow: `${category} integration`,
  problem: `A ${name} workflow can become disconnected when customer information, notifications, and follow-up must be copied between tools.`,
  builds: ['A discovery review of available connection methods', 'Workflow design around approved business rules', 'Clear documentation of limitations and human handoffs'],
  workflow: workflows,
  control: `LYCORE is not an official ${name} partner and does not claim a native connection without verification. Connection options may rely on the platform's available features, APIs, webhooks, Zapier, Make, n8n, or custom implementation.`,
  related: ['/services/crm-automation', '/services/lead-follow-up', '/integrations'],
  faqs: [{ question: `Does LYCORE replace ${name}?`, answer: `No. LYCORE evaluates whether workflows can be built around ${name}; it does not present the service as a replacement for the platform.` }, ...standardFaqs],
});

export const integrationGrowthPages: GrowthPage[] = [
  integration('gohighlevel', 'GoHighLevel', 'CRM', 'GoHighLevel workflow planning for service-business customer journeys.', ['Lead arrives', 'Contact is created or matched', 'Assigned workflow begins', 'Team is notified', 'Booking or follow-up status is recorded']),
  integration('housecall-pro', 'Housecall Pro', 'Field-service', 'Housecall Pro workflow assessment for leads, jobs and customer communication.', ['Customer request is captured', 'Connection method is assessed', 'Job or customer workflow is routed', 'Team receives notification', 'Post-job follow-up is considered']),
  integration('gorilladesk', 'GorillaDesk', 'Field-service', 'GorillaDesk workflow assessment for pest-control customer journeys.', ['Treatment enquiry is captured', 'Connection method is assessed', 'Scheduling or job context is routed', 'Completion signal is reviewed', 'Review or reminder workflow is considered']),
  integration('fieldroutes', 'FieldRoutes', 'Field-service', 'FieldRoutes workflow assessment for customer acquisition and follow-up.', ['Lead or customer event occurs', 'Available connection method is reviewed', 'Approved data is routed', 'Team notification is sent', 'Lifecycle follow-up is considered']),
  integration('pestpac', 'PestPac', 'Field-service', 'PestPac workflow assessment for pest-control operations and customer follow-up.', ['Customer request occurs', 'System capabilities are verified', 'Approved workflow is mapped', 'Exception reaches a person', 'Outcome is recorded']),
  integration('jobber', 'Jobber', 'Field-service', 'Jobber workflow assessment for service-business leads, jobs and customer communication.', ['New request enters the journey', 'Connection method is reviewed', 'Assignment or notification occurs', 'Job status is considered', 'Customer follow-up is available']),
  integration('servicetitan', 'ServiceTitan', 'Field-service', 'ServiceTitan workflow assessment for service-business customer lifecycle workflows.', ['Lead or call event occurs', 'Integration option is verified', 'Approved data movement is configured', 'Team action is assigned', 'Result is reviewed']),
  integration('hubspot', 'HubSpot', 'CRM', 'HubSpot workflow design for service-business lead response and customer follow-up.', ['Contact enters HubSpot', 'Lifecycle stage is set', 'Workflow is triggered', 'Owner is notified', 'Outcome is logged']),
  integration('n8n', 'n8n', 'Automation', 'n8n workflow design for connecting approved service-business systems.', ['Trigger is received', 'Data is validated', 'Approved actions run', 'Exception is logged', 'Human owner is notified']),
  integration('zapier', 'Zapier', 'Automation', 'Zapier workflow assessment for practical, maintainable service-business automation.', ['Event starts a Zap', 'Approved data is passed', 'Destination action occurs', 'Failure path is defined', 'Owner reviews exceptions']),
  integration('make', 'Make', 'Automation', 'Make scenario design for service-business workflow automation.', ['Scenario trigger occurs', 'Data is transformed where approved', 'Connected action runs', 'Error handling applies', 'Workflow is monitored']),
  integration('notion', 'Notion', 'Productivity', 'Notion workflow assessment for internal visibility and documented service-business processes.', ['Operational event occurs', 'Approved summary is created', 'Team can review context', 'Task or owner is assigned', 'Process stays documented']),
];

export const growthPages = [...serviceGrowthPages, ...industryGrowthPages, ...integrationGrowthPages];

export const integrationsHub: PageMeta = {
  path: '/integrations', label: 'Integrations', title: 'Service Business Integrations & Workflow Connections — LYCORE', description: 'Explore LYCORE workflow integration assessments for field-service tools, CRMs and automation platforms.', h1: 'Integrations', kind: 'integration',
};

export type ResourcePage = PageMeta & {
  answer: string;
  steps: string[];
  tradeoffs: string[];
  related: string[];
  faqs: Faq[];
};

const guide = (slug: string, title: string, description: string, answer: string, steps: string[], tradeoffs: string[], related: string[]): ResourcePage => ({
  path: `/resources/${slug}`, label: title, title: `${title} — LYCORE`, description, h1: title, kind: 'resource', answer, steps, tradeoffs, related,
  faqs: [{ question: 'Is there one right option for every business?', answer: 'No. The useful choice depends on the customer journey, the team that owns the work, the existing software, the risk of an error, and the ability to maintain the process.' }, { question: 'Can LYCORE help evaluate the workflow?', answer: 'Yes. LYCORE can review the customer journey and identify where a practical connection, automation, or human handoff may help. It does not guarantee a specific technical outcome.' }],
});

export const resourcePages: ResourcePage[] = [
  guide('ai-receptionist-vs-answering-service', 'AI receptionist vs. traditional answering service', 'A practical comparison for service businesses deciding how to handle after-hours and overflow calls.', 'An AI receptionist can follow configured intake, routing, and booking rules continuously. A traditional answering service relies on human agents and may be a better fit when a live person, complex judgment, or a particular coverage model matters.', ['Map the calls that currently go unanswered', 'Separate routine questions from calls needing a person', 'Define escalation and disclosure rules', 'Compare coverage, training, reporting, and maintenance needs', 'Test the chosen process with real call scenarios'], ['AI systems require careful configuration and escalation boundaries.', 'Traditional services may offer human judgment but can vary in training and availability.', 'Neither option replaces licensed, emergency, or business-critical human decision-making.'], ['/services/ai-receptionist', '/services/missed-call-text-back']),
  guide('missed-call-text-back', 'How missed-call text back works for service businesses', 'A plain-language guide to fast SMS acknowledgement after an unanswered business call.', 'Missed-call text back sends a configured SMS acknowledgement after a call is not answered. The aim is to offer a clear next step while the team is unavailable, not to pretend a person has replied.', ['Missed call is detected', 'Approved SMS acknowledgement is sent', 'Customer can reply or take a booking action', 'Response is routed to the team or workflow', 'A human handles exceptions and complex requests'], ['Messages must follow consent, carrier, and communication rules.', 'The message needs an obvious way to reach a person when needed.', 'A text back does not solve an unstaffed or poorly routed lead process by itself.'], ['/services/missed-call-text-back', '/services/lead-follow-up']),
  guide('review-automation', 'How review automation works without review gating', 'A practical guide to requesting authentic customer reviews after completed service.', 'Review automation uses a completion signal and a respectful request path to ask every eligible customer for honest feedback. It should not filter customers based on sentiment, buy reviews, or suppress legitimate criticism.', ['Define a legitimate completion event', 'Choose the relevant review channel for the industry', 'Send a clear, neutral request', 'Use a limited, respectful follow-up', 'Route reviews and response tasks to the team'], ['Review policies differ by platform and can change.', 'More requests do not guarantee more positive reviews.', 'The operational experience must improve alongside the request process.'], ['/services/review-automation', '/services/reputation-management']),
  guide('crm-vs-field-service-management', 'CRM vs. field-service management software', 'How service businesses can decide which system should own leads, jobs, and customer follow-up.', 'A CRM is usually built to manage customer relationships and sales activity. Field-service software is generally built around scheduling, technicians, jobs, and operational delivery. Many service businesses need both, connected around defined handoffs rather than forced into one tool.', ['List where leads arrive', 'Identify who owns qualification and booking', 'Identify who owns scheduling and job completion', 'Map data that must pass between systems', 'Define the source of truth for each customer stage'], ['Replacing an operational platform can be more disruptive than connecting around it.', 'Duplicate records and unclear ownership create errors.', 'Integration feasibility depends on the actual tools, permissions, and connection methods available.'], ['/services/crm-automation', '/integrations']),
  guide('cold-email-infrastructure', 'What cold email infrastructure includes', 'A buyer guide to responsible outbound email setup and the limits of deliverability work.', 'Cold email infrastructure is the technical and operational setup behind responsible outreach: sending domains, inboxes, authentication, sending controls, list quality, and reply handling. It cannot guarantee inbox placement, replies, meetings, or sales.', ['Define audience and outreach purpose', 'Set up domains and inboxes responsibly', 'Configure authentication records', 'Prepare list quality and opt-out handling', 'Launch cautiously and monitor replies, bounces, and complaints'], ['Technical setup does not make irrelevant outreach acceptable.', 'Deliverability changes over time and depends on recipient systems.', 'Legal, privacy, and platform obligations must be reviewed for the intended campaign.'], ['/services/cold-email-infrastructure', '/services/outbound-lead-generation']),
  guide('zapier-vs-n8n', 'Zapier vs. n8n for service-business automation', 'A neutral comparison of two common automation approaches for maintainable business workflows.', 'Zapier can be a practical choice for straightforward, managed app-to-app workflows. n8n can offer more flexibility and control for teams prepared to manage a more technical setup. The right option depends on the workflow, available integrations, security needs, ownership, and maintenance capacity.', ['Define the trigger, data, and desired outcome', 'Check available connection methods', 'Design exception and approval paths', 'Choose the owner who will maintain the workflow', 'Test with realistic failures as well as successful runs'], ['Zapier may be simpler for common workflows but costs and limits vary by plan.', 'n8n may offer more control but can require more technical ownership.', 'Neither tool removes the need for process design, monitoring, and human escalation.'], ['/integrations/zapier', '/integrations/n8n', '/services/crm-automation']),
];

export const resourcesHub: PageMeta = { path: '/resources', label: 'Resources', title: 'Service Business Growth Resources — LYCORE', description: 'Practical guides on call response, follow-up, reviews, CRM workflows, outbound systems, and automation choices.', h1: 'Resources for service-business customer journeys', kind: 'resource' };
