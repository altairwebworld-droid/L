import { accents } from './palette';

export type UrgentCall = {
  id: string;
  industry: string;
  time: string;
  summary: string;
  accent: string;
  /** Why this specific call is lost when nobody answers. */
  explanation: string;
  /** What LYCORE does with it instead. */
  steps: readonly string[];
  outcome: string;
  value: string;
};

/**
 * Six example calls from one ordinary night, across six different trades. These
 * are illustrations, not client results. Each has its own accent so the scene
 * reads as a sequence of distinct businesses.
 */
export const urgentCalls: readonly UrgentCall[] = [
  {
    id: 'plumbing',
    industry: 'Plumbing',
    time: '11:42 PM',
    summary: 'Kitchen flooding upstairs',
    accent: accents.cyan,
    explanation:
      'Water is coming through a ceiling. This caller will not leave a voicemail. They will call the next plumber on the search page.',
    steps: ['Urgency asked', 'Address captured', 'On-call plumber notified', 'Visit booked or requested'],
    outcome: 'On-call plumber notified',
    value: 'Example call',
  },
  {
    id: 'towing',
    industry: 'Towing',
    time: '12:15 AM',
    summary: 'Truck will not start on highway shoulder',
    accent: accents.amber,
    explanation:
      'A driver on a shoulder at midnight rings several companies at once. The first one that picks up gets the job.',
    steps: ['Location captured', 'Vehicle details recorded', 'Driver notified', 'Live transfer if set up'],
    outcome: 'Driver notified',
    value: 'Example call',
  },
  {
    id: 'locksmith',
    industry: 'Locksmiths',
    time: '1:07 AM',
    summary: 'Locked out, child asleep inside',
    accent: accents.violet,
    explanation:
      'This caller decides in minutes. A ring nobody answers is a job that went to the next locksmith.',
    steps: ['Lockout confirmed', 'Exact location captured', 'Technician notified', 'Live transfer if set up'],
    outcome: 'Technician notified',
    value: 'Example call',
  },
  {
    id: 'hvac',
    industry: 'HVAC',
    time: '2:20 AM',
    summary: 'Heater stopped during cold night',
    accent: accents.coral,
    explanation:
      'On the coldest nights the phone rings faster than one person can answer it. The calls you miss go to the next company.',
    steps: ['System details captured', 'Urgency asked', 'Technician notified', 'Booking or callback requested'],
    outcome: 'Request logged for morning',
    value: 'Example call',
  },
  {
    id: 'restoration',
    industry: 'Restoration',
    time: '3:05 AM',
    summary: 'Water spreading across ground floor',
    accent: accents.teal,
    explanation:
      'Water keeps spreading while nobody picks up. The customer calls the next restoration company instead of waiting for you to open.',
    steps: ['Damage type captured', 'Property confirmed', 'Response team notified', 'Site visit requested'],
    outcome: 'Team notified',
    value: 'Example call',
  },
  {
    id: 'bail',
    industry: 'Bail bonds',
    time: '4:18 AM',
    summary: 'Family requesting urgent assistance',
    accent: accents.gold,
    explanation:
      'A family works down a list of numbers at 4 a.m. and most of them ring out. The one that answers is the one they stay on with.',
    steps: ['Situation captured', 'Facility confirmed', 'Agent notified', 'Human handoff completed'],
    outcome: 'Handed to an agent',
    value: 'Example call',
  },
] as const;
