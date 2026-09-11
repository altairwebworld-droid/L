export type IndustryPlaybook = {
  headline: string;
  workflows: { name: string; trigger: string; action: string; handoff: string }[];
  quoteInputs: string[];
  boundary: string;
  metrics: { name: string; definition: string }[];
  related: string[];
};

export const playbookNote = 'These example workflows show what LYCORE can scope for your business. Software connections, permissions and exception rules are checked before the build is agreed.';
export const industryMeasurementNote = 'These are proposed measures, not achieved results. Agree the reporting period and data source before launch. Missing records stay unknown, not zero; small samples and incomplete tracking are reported.';
export const messagingNote = 'Follow-up uses approved channels, contact permissions, quiet hours and opt-out rules. A reply, cancellation or opt-out stops or changes the sequence. Sensitive details stay out of routine texts and emails.';

export const industryPlaybooks: Record<string, IndustryPlaybook> = {
  spas: {
    headline: 'Spa booking & follow-up',
    workflows: [
      { name: 'Treatment enquiry to booking request', trigger: 'A guest calls or submits a treatment enquiry.', action: 'Capture the requested treatment, preferred time and callback details; answer only approved package and preparation questions.', handoff: 'The booking owner confirms therapist availability and treatment suitability. Without a verified booking connection, send a request, not a confirmed appointment.' },
      { name: 'Cancellation and return-visit follow-up', trigger: 'An appointment changes or a completed visit becomes eligible for follow-up.', action: 'Send an approved rescheduling link or return-visit invitation and record the response.', handoff: 'Complaints, refunds and treatment questions go to a person; no automatic discounts or treatment recommendations.' },
    ],
    quoteInputs: ['Booking platform, locations and treatment menu', 'Opening hours, appointment buffers and cancellation rules', 'Enquiry volume and permission rules for return-visit messages'],
    boundary: 'Automation supports booking administration. Therapists decide treatment suitability and handle care questions.',
    metrics: [{ name: 'Enquiry-to-booking rate', definition: 'Confirmed appointments linked to enquiries divided by eligible enquiries in the same reporting cohort; exclude duplicate contacts.' }, { name: 'Rescheduling completion', definition: 'Cancelled appointments that become confirmed replacement bookings divided by cancellations offered rescheduling.' }],
    related: ['/services/ai-receptionist', '/services/customer-reactivation', '/services/lead-follow-up'],
  },
  'real-estate': {
    headline: 'Real estate lead follow-up',
    workflows: [
      { name: 'Property enquiry to agent handoff', trigger: 'A buyer asks about a listed property.', action: 'Record the listing reference, viewing preference and contact details, then assign the enquiry by listing owner or agreed rotation.', handoff: 'The agent verifies listing availability and confirms the viewing; no invented availability or property advice.' },
      { name: 'Seller valuation follow-up', trigger: 'A homeowner requests a valuation or stops replying to an enquiry.', action: 'Collect the property address and preferred contact time, create an agent task and send the agreed reminder sequence.', handoff: 'The agent performs the valuation and handles negotiation. Automation stops when the owner replies or declines.' },
    ],
    quoteInputs: ['CRM, listing enquiry sources and agent assignment rules', 'Viewing calendar access and confirmation process', 'Buyer and seller follow-up stages, permissions and timing'],
    boundary: 'Agents retain valuation, negotiation and eligibility decisions. Routing must not use protected personal characteristics.',
    metrics: [{ name: 'Agent response time', definition: 'Median time from recorded enquiry arrival to the first recorded agent response; report automated acknowledgements separately.' }, { name: 'Viewing attendance rate', definition: 'Completed viewings divided by confirmed viewings due in the period, with cancellations and no-shows shown separately.' }],
    related: ['/services/lead-follow-up', '/services/crm-automation', '/services/web-design'],
  },
  'law-firms': {
    headline: 'Law firm intake & scheduling',
    workflows: [
      { name: 'New enquiry to intake review', trigger: 'A prospective client calls or completes an enquiry form.', action: 'Capture contact details and a broad matter category, then assign a restricted intake task to the designated person.', handoff: 'Firm staff completes conflict, suitability and engagement checks before a consultation is confirmed. Do not request detailed case narratives in automated messages.' },
      { name: 'Approved consultation reminders', trigger: 'Staff approves and schedules a consultation.', action: 'Send a minimal confirmation and reminder with a rescheduling path; keep case details out of the message.', handoff: 'Deadline questions, legal advice and requests for representation go to firm staff. A booking is not an engagement agreement.' },
    ],
    quoteInputs: ['Practice areas and approved intake questions', 'Intake software, restricted access and retention requirements', 'Conflict-review gate, consultation calendar and escalation contacts'],
    boundary: 'No automated legal advice, conflict clearance, deadline calculation or acceptance of a client. The firm controls those decisions.',
    metrics: [{ name: 'Intake handoff time', definition: 'Median time from a recorded enquiry to assignment to the designated intake owner; assignment is not a completed review.' }, { name: 'Consultation attendance rate', definition: 'Attended consultations divided by approved, confirmed consultations due in the period.' }],
    related: ['/services/ai-receptionist', '/services/crm-automation', '/services/lead-follow-up'],
  },
  hvac: {
    headline: 'HVAC calls & estimate follow-up',
    workflows: [
      { name: 'Seasonal service-call intake', trigger: 'A heating or cooling enquiry arrives, including after hours.', action: 'Capture service address, equipment context and callback details, then route using the contractor\'s approved service-area and escalation rules.', handoff: 'Dispatch confirms capacity and priority. Safety concerns go through the approved human escalation path; automation does not diagnose equipment.' },
      { name: 'Estimate and maintenance follow-up', trigger: 'An estimate is issued or a maintenance visit becomes due.', action: 'Create a timed follow-up with an estimate reference or scheduling request; update the CRM when the customer responds.', handoff: 'A person approves pricing, scope changes and maintenance eligibility before a job is confirmed.' },
    ],
    quoteInputs: ['Dispatch software, service area and on-call schedule', 'Equipment intake fields and emergency escalation wording', 'Estimate stages and maintenance reminder permissions'],
    boundary: 'No automated fault diagnosis, safety assessment or guaranteed arrival time. Dispatch and technicians make those decisions.',
    metrics: [{ name: 'Dispatch acknowledgement time', definition: 'Median time between request assignment and recorded acknowledgement by dispatch; show unacknowledged requests separately.' }, { name: 'Estimate acceptance rate', definition: 'Accepted estimates divided by delivered estimates in a defined cohort, with pending estimates reported separately.' }],
    related: ['/services/missed-call-text-back', '/services/lead-follow-up', '/services/customer-reactivation'],
  },
  electrical: {
    headline: 'Electrical service enquiry automation',
    workflows: [
      { name: 'Electrical enquiry to callback', trigger: 'A customer requests electrical work or reports a concern.', action: 'Record location, contact details and the customer\'s description; flag requests using approved escalation rules.', handoff: 'An electrician or dispatcher assesses urgency. The automated response does not give troubleshooting or safety instructions.' },
      { name: 'Site visit and estimate follow-up', trigger: 'Staff approves a site visit or sends an estimate.', action: 'Send the agreed appointment details and follow-up prompts; record replies against the job.', handoff: 'The electrician approves scope, permit requirements, price and any requested changes.' },
    ],
    quoteInputs: ['Service areas, enquiry channels and job categories', 'Human escalation coverage and approved response wording', 'Estimate software, visit calendar and follow-up timing'],
    boundary: 'Automation does not assess electrical hazards or authorize work. An unanswered escalation needs a documented fallback.',
    metrics: [{ name: 'Callback completion rate', definition: 'Callback requests marked completed divided by callback requests due in the reporting period.' }, { name: 'Estimate response rate', definition: 'Delivered estimates receiving a customer response divided by delivered estimates in the selected cohort; a response is not an acceptance.' }],
    related: ['/services/ai-receptionist', '/services/lead-follow-up', '/services/crm-automation'],
  },
  locksmiths: {
    headline: 'Locksmith calls & callbacks',
    workflows: [
      { name: 'Lockout request to technician', trigger: 'A caller requests lockout help.', action: 'Capture the location, contact number and broad lock or vehicle context; check the configured service area and notify the assigned technician.', handoff: 'The technician verifies authorization, availability, price and arrival expectations. A notification does not mean a technician has accepted the job.' },
      { name: 'Non-urgent quote callback', trigger: 'A customer asks about rekeying or a planned lock replacement.', action: 'Create a callback task with the property type and requested work; send a minimal acknowledgement.', handoff: 'Staff checks access authorization and confirms the quote and appointment.' },
    ],
    quoteInputs: ['Coverage area, operating hours and technician routing', 'Approved intake fields and authorization-review process', 'Callback system and unavailable-technician fallback'],
    boundary: 'No automated access approval, identity verification conclusion, entry instructions or guaranteed response time.',
    metrics: [{ name: 'Technician acknowledgement time', definition: 'Median time from technician notification to recorded acceptance or decline; unanswered notifications remain visible.' }, { name: 'Request disposition coverage', definition: 'Requests with a recorded outcome divided by all captured requests, separating accepted, declined and unreachable contacts.' }],
    related: ['/services/ai-receptionist', '/services/missed-call-text-back', '/services/crm-automation'],
  },
  'auto-repair': {
    headline: 'Auto repair booking & updates',
    workflows: [
      { name: 'Vehicle enquiry to service advisor', trigger: 'A driver asks for an inspection or repair appointment.', action: 'Capture vehicle details, the reported concern and preferred timing, then create an advisor task.', handoff: 'The advisor confirms workshop capacity and the inspection. Automation does not diagnose a fault or quote unapproved work.' },
      { name: 'Approved repair updates and collection', trigger: 'Staff changes the repair status or marks a vehicle ready.', action: 'Send the approved status message or collection instructions and record delivery and replies.', handoff: 'Work authorization, price changes and disputes stay with the advisor; an unread message is not consent.' },
    ],
    quoteInputs: ['Workshop software and available job-status signals', 'Advisor assignment and appointment capacity rules', 'Approved update templates and repair-authorization process'],
    boundary: 'Diagnostics, roadworthiness and repair authorization stay with qualified staff and the vehicle owner.',
    metrics: [{ name: 'Enquiry-to-inspection rate', definition: 'Confirmed inspections linked to enquiries divided by eligible inspection enquiries in the same cohort.' }, { name: 'Status update coverage', definition: 'Eligible job-status changes with a recorded notification attempt divided by eligible status changes; report delivery failures separately.' }],
    related: ['/services/ai-receptionist', '/services/crm-automation', '/services/customer-reactivation'],
  },
  restaurants: {
    headline: 'Restaurant calls & reservations',
    workflows: [
      { name: 'Overflow call to reservation request', trigger: 'A guest calls while the host is busy.', action: 'Answer approved hours and location questions, then capture date, party size and contact details for a reservation request.', handoff: 'The host or verified reservation system confirms capacity. Requests are not presented as confirmed tables.' },
      { name: 'Reservation changes and private events', trigger: 'A guest wants to change a booking or enquire about a group event.', action: 'Link the request to the reservation where possible and send the details to the host or event contact.', handoff: 'Staff confirms changes, deposits and event terms. Allergy and food-safety questions go to trained staff.' },
    ],
    quoteInputs: ['Reservation platform and table-confirmation rules', 'Hours, party-size limits and private-event contact', 'Cancellation wording and guest messaging permissions'],
    boundary: 'No invented table availability, allergy assurances or automatic acceptance of special requests.',
    metrics: [{ name: 'Reservation request confirmation rate', definition: 'Confirmed reservations divided by eligible reservation requests in the same cohort, with unavailable dates separated.' }, { name: 'Change-request response time', definition: 'Median time between a recorded change request and the host\'s recorded response.' }],
    related: ['/services/ai-receptionist', '/services/lead-follow-up', '/services/review-automation'],
  },
  'bail-bonds': {
    headline: 'Bail bond intake & callbacks',
    workflows: [
      { name: 'After-hours enquiry to licensed agent', trigger: 'A caller contacts the agency outside staffed hours.', action: 'Collect the minimum approved contact and facility details, then notify the on-call licensed agent through the agreed private channel.', handoff: 'The agent handles eligibility, terms and advice. Sensitive records are not repeated in ordinary SMS notifications.' },
      { name: 'Unanswered callback escalation', trigger: 'An assigned enquiry has no recorded agent acknowledgement within the agreed interval.', action: 'Notify the designated backup and preserve the callback status to avoid duplicate contact.', handoff: 'A person owns the response. The workflow never promises release, approval or a court outcome.' },
    ],
    quoteInputs: ['Licensed-agent coverage and backup escalation contacts', 'Approved minimum intake fields and secure storage requirements', 'Callback tracker, acknowledgement interval and retention policy'],
    boundary: 'No automated legal advice, underwriting, release predictions or eligibility decisions. Licensed staff controls the process.',
    metrics: [{ name: 'Agent acknowledgement time', definition: 'Median time from enquiry assignment to an agent\'s recorded acknowledgement; show pending requests separately.' }, { name: 'Callback completion rate', definition: 'Due callbacks marked completed divided by all callbacks due in the period; no inference about release or approval.' }],
    related: ['/services/ai-receptionist', '/services/crm-automation', '/services/lead-follow-up'],
  },
  'urgent-care': {
    headline: 'Urgent care administrative support',
    workflows: [
      { name: 'Administrative call handling', trigger: 'A caller asks about hours, directions or appointment procedures.', action: 'Provide clinic-approved administrative information and capture a minimal callback request when needed.', handoff: 'Clinical questions go to clinic staff. The workflow follows the clinic\'s approved urgent-care and emergency messaging without assessing symptoms.' },
      { name: 'Front-desk callback queue', trigger: 'An administrative enquiry needs a staff response.', action: 'Assign a restricted callback task and send an acknowledgement that does not include health details.', handoff: 'Staff confirms any appointment, eligibility or billing information. No estimated wait time is given without an approved current source.' },
    ],
    quoteInputs: ['Approved administrative FAQs and escalation wording', 'Scheduling system, access controls and data-handling requirements', 'Front-desk coverage, callback owner and vendor agreement requirements'],
    boundary: 'No clinical triage, diagnosis or assurances of regulatory compliance. Assess data sensitivity, access and vendor agreements before connecting patient systems.',
    metrics: [{ name: 'Administrative callback completion', definition: 'Administrative callbacks completed divided by administrative callbacks due during the period.' }, { name: 'Staff handoff acknowledgement', definition: 'Staff-routed requests with a recorded acknowledgement divided by staff-routed requests; this does not measure clinical response or care quality.' }],
    related: ['/services/ai-receptionist', '/services/crm-automation', '/services/web-design'],
  },
  'home-services': {
    headline: 'Home service lead automation',
    workflows: [
      { name: 'Website enquiry to job request', trigger: 'A homeowner submits a form or leaves a missed call.', action: 'Capture service type, address and preferred time; check the service area and assign the request to the right job queue.', handoff: 'Staff confirms job fit, capacity and price before an appointment is represented as booked.' },
      { name: 'Completed job to feedback request', trigger: 'An approved job record is marked complete.', action: 'Send a neutral feedback or review request to eligible customers using the agreed contact rules.', handoff: 'Staff handles complaints and follow-up work. Do not screen out unhappy customers from public review invitations.' },
    ],
    quoteInputs: ['Service categories, coverage area and job software', 'Booking rules and job-completion signals', 'Follow-up permissions and review-request policy'],
    boundary: 'Automation does not commit a crew, approve work or filter reviews by expected rating.',
    metrics: [{ name: 'Lead-to-job rate', definition: 'Confirmed jobs linked to captured leads divided by eligible leads in the same cohort, excluding duplicate enquiries.' }, { name: 'Review-request coverage', definition: 'Eligible completed jobs with a recorded review request divided by eligible completed jobs; this is not a review rating.' }],
    related: ['/services/missed-call-text-back', '/services/lead-follow-up', '/services/review-automation'],
  },
  'pest-control': {
    headline: 'Pest control booking & reminders',
    workflows: [
      { name: 'Treatment enquiry to inspection request', trigger: 'A customer reports a pest concern.', action: 'Record the property type, service address and customer description, then route an inspection or callback request.', handoff: 'A qualified person assesses the pest, treatment suitability and precautions; automation does not identify species or recommend chemicals.' },
      { name: 'Recurring service reminder', trigger: 'An approved service plan shows a visit due.', action: 'Send a scheduling reminder, record the reply and stop reminders when the visit is booked or declined.', handoff: 'Staff handles plan changes, treatment concerns and requests outside the approved schedule.' },
    ],
    quoteInputs: ['Scheduling software and recurring-plan data', 'Service area, intake questions and technician handoff rules', 'Reminder timing, permissions and approved preparation wording'],
    boundary: 'Pest identification, treatment selection and safety advice stay with qualified staff.',
    metrics: [{ name: 'Inspection booking rate', definition: 'Confirmed inspections divided by eligible inspection enquiries in the same reporting cohort.' }, { name: 'Recurring visit completion', definition: 'Completed recurring visits divided by recurring visits due in the period; show rescheduled and declined visits separately.' }],
    related: ['/services/ai-receptionist', '/services/customer-reactivation', '/services/review-automation'],
  },
  plumbing: {
    headline: 'Plumbing calls & estimate follow-up',
    workflows: [
      { name: 'Urgent enquiry to dispatcher', trigger: 'A caller reports a leak, blockage or loss of water.', action: 'Capture the location and reported issue, then notify dispatch according to approved escalation and coverage rules.', handoff: 'Dispatch assesses the request and confirms availability. The caller is not told a plumber is on the way until staff confirms it.' },
      { name: 'Open estimate follow-up', trigger: 'An estimate has been delivered but no decision is recorded.', action: 'Send a scoped reminder with an estimate reference and route questions to the assigned owner.', handoff: 'A plumber approves scope changes, discounts and repair advice. Follow-up stops on acceptance, decline or opt-out.' },
    ],
    quoteInputs: ['Dispatch tool, service area and on-call coverage', 'Approved urgent-request wording and fallback contact', 'Estimate stages, reminder cadence and customer permissions'],
    boundary: 'No automated diagnosis, emergency response guarantee or unapproved arrival estimate.',
    metrics: [{ name: 'Dispatch acknowledgement time', definition: 'Median time from urgent-request notification to recorded dispatcher acknowledgement; keep unacknowledged requests visible.' }, { name: 'Estimate decision coverage', definition: 'Estimates with a recorded acceptance or decline divided by delivered estimates in the selected cohort, with pending estimates shown separately.' }],
    related: ['/services/missed-call-text-back', '/services/ai-receptionist', '/services/lead-follow-up'],
  },
  roofing: {
    headline: 'Roofing inspections & lead follow-up',
    workflows: [
      { name: 'Storm enquiry to inspection queue', trigger: 'A property owner submits a roof or storm-damage enquiry.', action: 'Capture the property address, contact details and reported damage, then group the request by service area for estimator assignment.', handoff: 'Staff prioritizes inspections and confirms availability. No roof condition or insurance conclusion is generated.' },
      { name: 'Inspection-to-estimate follow-up', trigger: 'An inspection is complete or an estimate is delivered.', action: 'Create the next task, send an approved reminder and record whether the owner wants a callback.', handoff: 'The estimator handles scope, pricing, financing and claim-related questions.' },
    ],
    quoteInputs: ['Lead sources, service area and estimator assignment rules', 'Inspection calendar and estimate status fields', 'Storm-demand overflow plan and approved follow-up wording'],
    boundary: 'Automation does not assess structural safety, guarantee insurance coverage or approve a roofing scope.',
    metrics: [{ name: 'Enquiry-to-inspection rate', definition: 'Confirmed inspections linked to enquiries divided by eligible enquiries in the same cohort.' }, { name: 'Estimate turnaround time', definition: 'Median time from a completed inspection to a recorded estimate delivery; report missing delivery records separately.' }],
    related: ['/services/lead-follow-up', '/services/crm-automation', '/services/web-design'],
  },
  restoration: {
    headline: 'Restoration intake & job updates',
    workflows: [
      { name: 'Damage call to response coordinator', trigger: 'A caller reports water or property damage.', action: 'Capture the minimum approved location, contact and incident details, then alert the response coordinator using the escalation tree.', handoff: 'The coordinator assesses urgency and confirms dispatch. If acknowledgement is missing, notify the agreed backup rather than assuming help is on the way.' },
      { name: 'Approved job-status updates', trigger: 'Staff records a milestone in the restoration job.', action: 'Send the approved next-step update and keep customer questions attached to the job record.', handoff: 'Staff handles safety guidance, scope changes and insurance questions; no automatic coverage or completion promises.' },
    ],
    quoteInputs: ['Response coverage, escalation contacts and backup intervals', 'Job-management software and milestone signals', 'Approved intake, customer updates and access restrictions'],
    boundary: 'Automation is not an emergency response service or a damage assessment. Dispatch, safety and insurance decisions remain with qualified people.',
    metrics: [{ name: 'Response-owner acknowledgement', definition: 'Median time from incident notification to recorded coordinator acknowledgement; this is not on-site arrival time.' }, { name: 'Milestone update coverage', definition: 'Eligible job milestones with a recorded customer update divided by eligible milestones, with failed deliveries listed separately.' }],
    related: ['/services/ai-receptionist', '/services/crm-automation', '/services/lead-follow-up'],
  },
  towing: {
    headline: 'Towing intake & dispatch handoffs',
    workflows: [
      { name: 'Tow request to dispatch queue', trigger: 'A driver requests a tow or roadside service.', action: 'Capture contact details, the location provided by the driver, vehicle type and requested service; send the request to dispatch.', handoff: 'Dispatch verifies location, equipment needs, capacity and price. Do not infer safety or promise an arrival time.' },
      { name: 'Dispatch-approved customer updates', trigger: 'Dispatch accepts, changes or completes a job.', action: 'Send the approved status update and route customer replies to the dispatcher.', handoff: 'Only use an arrival estimate explicitly supplied by dispatch. Unconfirmed or cancelled jobs receive the approved fallback message.' },
    ],
    quoteInputs: ['Dispatch system and accepted location-sharing method', 'Coverage, equipment categories and human escalation contacts', 'Job-status signals and approved ETA or cancellation wording'],
    boundary: 'Automation does not verify roadside safety or dispatch a vehicle without the approved dispatch decision.',
    metrics: [{ name: 'Dispatch decision time', definition: 'Median time from a captured request to a recorded accept or decline decision; pending requests remain separate.' }, { name: 'Accepted-job completion rate', definition: 'Completed jobs divided by accepted jobs in the reporting cohort, with cancellations and unresolved jobs reported separately.' }],
    related: ['/services/ai-receptionist', '/services/missed-call-text-back', '/services/crm-automation'],
  },
  'med-spas': {
    headline: 'Med spa consultation follow-up',
    workflows: [
      { name: 'Consultation enquiry to booking review', trigger: 'A visitor asks about a treatment consultation.', action: 'Capture contact details, the broad service of interest and preferred timing, then offer an approved consultation-request path.', handoff: 'Qualified staff determines suitability and confirms the appointment. Avoid collecting medical histories through ordinary lead forms or messages.' },
      { name: 'Consultation reminders and return invitations', trigger: 'A consultation is confirmed or staff approves a follow-up segment.', action: 'Send a minimal reminder or approved invitation and route replies to the booking owner.', handoff: 'Care questions, adverse reactions and treatment recommendations go to clinical staff through approved channels.' },
    ],
    quoteInputs: ['Booking system, consultation rules and approved FAQs', 'Data-handling requirements and clinical escalation contacts', 'Reminder permissions and staff-approved follow-up segments'],
    boundary: 'No diagnosis, treatment recommendation or automated suitability decision. Review sensitive-data handling and vendor agreements before implementation.',
    metrics: [{ name: 'Consultation booking rate', definition: 'Confirmed consultations divided by eligible consultation enquiries in the same cohort; not a treatment conversion claim.' }, { name: 'Consultation attendance rate', definition: 'Attended consultations divided by confirmed consultations due in the reporting period.' }],
    related: ['/services/ai-receptionist', '/services/lead-follow-up', '/services/customer-reactivation'],
  },
  dentists: {
    headline: 'Dental booking & recall support',
    workflows: [
      { name: 'New-patient enquiry to front desk', trigger: 'A caller requests an appointment or administrative information.', action: 'Collect minimal contact details and preferred timing, answer approved administrative questions and create a front-desk request.', handoff: 'Practice staff handles symptoms, appointment priority, insurance verification and clinical questions. Do not confirm coverage or treatment suitability.' },
      { name: 'Practice-approved recall reminders', trigger: 'The practice provides an approved recall date or confirmed appointment.', action: 'Send a minimal reminder and offer a rescheduling or callback path; stop duplicate reminders when the record changes.', handoff: 'Practice staff selects recall eligibility and handles care questions. No clinical intervals are calculated by the automation.' },
    ],
    quoteInputs: ['Practice-management software and available scheduling access', 'Approved administrative questions and staff escalation rules', 'Recall source, messaging permissions and data/vendor requirements'],
    boundary: 'Clinical decisions and recall eligibility stay with the practice. Patient-system connections require a data-access and vendor-agreement review; no blanket compliance claim is made.',
    metrics: [{ name: 'Appointment request completion', definition: 'Appointment requests with a confirmed booking or recorded staff decision divided by captured appointment requests.' }, { name: 'Recall booking rate', definition: 'Confirmed recall bookings linked to the reminder cohort divided by eligible patients contacted in that cohort, excluding duplicate messages.' }],
    related: ['/services/ai-receptionist', '/services/lead-follow-up', '/services/customer-reactivation'],
  },
  veterinary: {
    headline: 'Veterinary booking & reminders',
    workflows: [
      { name: 'Pet-owner enquiry to clinic staff', trigger: 'A pet owner calls or requests an appointment online.', action: 'Capture contact details, the pet\'s name and the broad administrative request, then route according to clinic-approved rules.', handoff: 'Veterinary staff assesses symptoms and urgency. The workflow uses approved escalation wording and never decides a pet can safely wait.' },
      { name: 'Approved appointment and recall reminders', trigger: 'Clinic staff confirms an appointment or provides a recall date.', action: 'Send the approved reminder, record replies and create a staff task for rescheduling requests.', handoff: 'Veterinary staff determines recall intervals, medication instructions and care advice; automation does not generate them.' },
    ],
    quoteInputs: ['Practice software and appointment or recall signals', 'Clinic hours, after-hours contacts and escalation wording', 'Approved reminder templates and owner contact permissions'],
    boundary: 'No diagnosis, symptom triage, medication advice or substitute for emergency veterinary care.',
    metrics: [{ name: 'Clinic callback completion', definition: 'Staff callbacks marked completed divided by callbacks due in the reporting period; this is not a care-quality measure.' }, { name: 'Appointment attendance rate', definition: 'Attended appointments divided by confirmed appointments due in the period, with cancellations and no-shows separated.' }],
    related: ['/services/ai-receptionist', '/services/lead-follow-up', '/services/customer-reactivation'],
  },
};

export function industryFaqs(slug: string, name: string) {
  const playbook = industryPlaybooks[slug];
  if (!playbook) return [];
  return [
    { question: `What can LYCORE automate for ${name.toLowerCase()}?`, answer: `${playbook.workflows.map(workflow => `${workflow.name}: ${workflow.action}`).join(' ')} These are configurable examples, subject to a review of your software and business rules.` },
    { question: 'Which decisions stay with a person?', answer: playbook.boundary },
    { question: 'What does LYCORE need to prepare a quote?', answer: `${playbook.quoteInputs.join('; ')}. LYCORE reviews the requirements before quoting. Software subscriptions, connection limits and ongoing support are identified in the proposed scope.` },
  ];
}
