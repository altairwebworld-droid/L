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
 * Six calls from one ordinary night, across six different trades. Each has its
 * own accent so the scene reads as a sequence of distinct businesses rather
 * than one colour-coded list — no single vertical owns the signature moment.
 */
export const urgentCalls: readonly UrgentCall[] = [
  {
    id: 'plumbing',
    industry: 'Plumbing',
    time: '11:42 PM',
    summary: 'Kitchen flooding upstairs',
    accent: accents.cyan,
    explanation:
      'Water is moving through a ceiling. This caller will not leave a voicemail — they will dial the next plumber on the search results page.',
    steps: ['Emergency graded', 'Address captured', 'On-call plumber notified', 'Visit scheduled'],
    outcome: 'Booked in 90 seconds',
    value: '$850 job',
  },
  {
    id: 'towing',
    industry: 'Towing',
    time: '12:15 AM',
    summary: 'Truck will not start on highway shoulder',
    accent: accents.amber,
    explanation:
      'A driver on a shoulder at midnight is calling three companies at once. The first one to answer is the one that gets paid.',
    steps: ['Location captured', 'Vehicle details recorded', 'Driver dispatched', 'Arrival time sent'],
    outcome: 'Dispatched in 2 minutes',
    value: '$220 tow',
  },
  {
    id: 'locksmith',
    industry: 'Locksmiths',
    time: '1:07 AM',
    summary: 'Locked out, child asleep inside',
    accent: accents.violet,
    explanation:
      'This is decided in minutes, not hours. A ring that goes unanswered is simply a job that went somewhere else.',
    steps: ['Lockout confirmed', 'Exact location captured', 'Nearest technician notified', 'Arrival confirmed'],
    outcome: 'Technician en route',
    value: '$150 job',
  },
  {
    id: 'hvac',
    industry: 'HVAC',
    time: '2:20 AM',
    summary: 'Heater stopped during cold night',
    accent: accents.coral,
    explanation:
      'Cold nights generate more calls in six hours than the office handles in a week. The overflow is where the revenue leaks.',
    steps: ['System details captured', 'Urgency graded', 'Technician assigned', 'Window confirmed'],
    outcome: 'Morning slot booked',
    value: '$600 job',
  },
  {
    id: 'restoration',
    industry: 'Restoration',
    time: '3:05 AM',
    summary: 'Water spreading across ground floor',
    accent: accents.teal,
    explanation:
      'Damage compounds by the hour. A call that waits until the office opens becomes a substantially larger claim.',
    steps: ['Damage type captured', 'Property confirmed', 'Response team notified', 'Site visit set'],
    outcome: 'Team notified',
    value: '$1,100 job',
  },
  {
    id: 'bail',
    industry: 'Bail bonds',
    time: '4:18 AM',
    summary: 'Family requesting urgent assistance',
    accent: accents.gold,
    explanation:
      'A family working down a list of numbers at 4 a.m. Most of those numbers ring out. The one that answers calmly is the one they trust.',
    steps: ['Situation captured', 'Facility confirmed', 'Agent notified', 'Human handoff completed'],
    outcome: 'Handed to an agent',
    value: '$500 premium',
  },
] as const;
