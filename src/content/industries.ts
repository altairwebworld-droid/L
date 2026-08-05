import { accents } from './palette';

/**
 * Industries LYCORE builds for. Each carries its own accent, the specific way
 * a delayed response costs that business money, and the actual call-to-outcome
 * path — so the selector shows a real workflow instead of a renamed generic one.
 */
export type Industry = {
  name: string;
  /** Short intake summary, used in compact contexts. */
  need: string;
  accent: string;
  /** What specifically goes wrong when the phone is not answered. */
  pain: string;
  /** First call → resolved job. Five steps, industry-specific. */
  workflow: readonly string[];
  /** The business result, stated plainly. */
  outcome: string;
};

const industryCatalogue: readonly Industry[] = [
  {
    name: 'Towing',
    need: 'Roadside urgency, exact location, vehicle details, and dispatch-ready summaries.',
    accent: accents.amber,
    pain: 'A stranded driver calls three companies at once. The first one to answer gets the job.',
    workflow: [
      'Stranded driver calls',
      'Location captured',
      'Vehicle details recorded',
      'Driver dispatched',
      'Customer updated with arrival time',
    ],
    outcome: 'The tow is booked before the driver reaches the next number on their list.',
  },
  {
    name: 'Plumbing',
    need: 'After-hours calls, leak severity, property location, and the right service path.',
    accent: accents.cyan,
    pain: 'Water damage does not wait for business hours, and neither does the customer.',
    workflow: [
      'Emergency identified',
      'Address captured',
      'Service area confirmed',
      'On-call plumber notified',
      'Visit scheduled',
    ],
    outcome: 'Emergency work gets routed to the right plumber instead of a voicemail box.',
  },
  {
    name: 'HVAC',
    need: 'No-cooling and no-heat urgency, equipment context, and appointment routing.',
    accent: accents.coral,
    pain: 'A heater failing on the coldest night produces more calls than the office can answer.',
    workflow: [
      'No-heat call received',
      'Property and system details captured',
      'Urgency graded',
      'Technician assigned',
      'Appointment window confirmed',
    ],
    outcome: 'Peak-demand nights stop overwhelming a team of two people and one phone line.',
  },
  {
    name: 'Locksmiths',
    need: 'Location, lockout context, urgency, and immediate contact routing.',
    accent: accents.violet,
    pain: 'Lockouts are decided in minutes. A missed call is simply a job that went elsewhere.',
    workflow: [
      'Lockout call received',
      'Exact location captured',
      'Lock type and access noted',
      'Nearest technician notified',
      'Arrival time sent to caller',
    ],
    outcome: 'Every lockout call reaches a person, including the ones that arrive at 3 a.m.',
  },
  {
    name: 'Restoration',
    need: 'Damage type, location, urgency, and response-team notification.',
    accent: accents.teal,
    pain: 'Damage spreads by the hour. The call that waits until morning becomes a larger loss.',
    workflow: [
      'Damage call received',
      'Type and extent captured',
      'Property location confirmed',
      'Response team notified',
      'Site visit scheduled',
    ],
    outcome: 'Response starts while the damage is still containable.',
  },
  {
    name: 'Roofing',
    need: 'Storm-related demand, inspection requests, location, and source tracking.',
    accent: accents.gold,
    pain: 'A storm creates a week of demand in a single afternoon, then it moves on.',
    workflow: [
      'Storm-damage call received',
      'Property and damage captured',
      'Inspection request logged',
      'Estimator assigned',
      'Inspection scheduled',
    ],
    outcome: 'Storm demand is captured while it lasts instead of ringing out.',
  },
  {
    name: 'Electrical',
    need: 'Safety-sensitive intake, service type, property location, and escalation rules.',
    accent: accents.amber,
    pain: 'Safety calls need triage, not a callback form that someone reads tomorrow.',
    workflow: [
      'Service call received',
      'Safety concern identified',
      'Property details captured',
      'Electrician routed by urgency',
      'Visit confirmed',
    ],
    outcome: 'Urgent safety calls escalate immediately; routine work books itself.',
  },
  {
    name: 'Auto repair',
    need: 'Vehicle concern, availability, appointment intent, and follow-up status.',
    accent: accents.cobalt,
    pain: 'The shop is under a car. The phone rings. The booking goes to whoever picks up.',
    workflow: [
      'Customer calls about a vehicle',
      'Concern and vehicle captured',
      'Availability checked',
      'Appointment booked',
      'Reminder sent before the visit',
    ],
    outcome: 'Bookings keep arriving while the whole team is working on cars.',
  },
  {
    name: 'Pest control',
    need: 'Pest type, property context, location, scheduling, and reminder flow.',
    accent: accents.green,
    pain: 'Customers call once, decide fast, and rarely leave a message.',
    workflow: [
      'Treatment request received',
      'Pest type and property captured',
      'Service area confirmed',
      'Technician scheduled',
      'Reminder and follow-up sent',
    ],
    outcome: 'First-call bookings rise because there is no voicemail step to abandon.',
  },
  {
    name: 'Bail bonds',
    need: 'Time-sensitive calls, calm information capture, and clear human handoff.',
    accent: accents.gold,
    pain: 'Families call at 4 a.m. from a list of numbers. Most of those numbers ring out.',
    workflow: [
      'Family calls for assistance',
      'Situation and facility captured',
      'Contact details recorded',
      'Agent notified immediately',
      'Human handoff completed',
    ],
    outcome: 'The call is answered calmly and handed to a person, at any hour.',
  },
  {
    name: 'Urgent care',
    need: 'Clear non-clinical intake and routing without replacing licensed medical judgment.',
    accent: accents.teal,
    pain: 'Front-desk staff cannot answer the phone and check in patients at the same time.',
    workflow: [
      'Patient calls the clinic',
      'Non-clinical details captured',
      'Hours and location confirmed',
      'Visit or callback routed',
      'Summary sent to front desk',
    ],
    outcome: 'Phone coverage holds during the busiest hours without adding a desk hire.',
  },
  {
    name: 'Restaurants',
    need: 'Reservations, hours, location questions, and overflow call handling.',
    accent: accents.coral,
    pain: 'The dinner rush is exactly when nobody can reach the phone.',
    workflow: [
      'Guest calls during service',
      'Reservation details captured',
      'Party size and time confirmed',
      'Booking added',
      'Confirmation sent to guest',
    ],
    outcome: 'Reservations and questions get handled without pulling staff off the floor.',
  },
] as const;

/** Alphabetical order keeps every public industry selector neutral. */
export const industries: readonly Industry[] = Object.freeze(
  [...industryCatalogue].sort((a, b) => a.name.localeCompare(b.name)),
);
