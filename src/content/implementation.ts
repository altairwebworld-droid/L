export const implementationSteps = [
  {
    title: 'Review the current system',
    body: 'We look at calls, website journeys, follow-up, lead routing, and source visibility to find where useful demand disappears.',
  },
  {
    title: 'Configure the receptionist and website',
    body: 'The receptionist learns your hours, service area, greeting, and escalation rules while the website is shaped around the call action.',
  },
  {
    title: 'Route every lead to the team',
    body: 'Your team receives the caller, requested service, location, urgency, and source in a consistent summary.',
  },
  {
    title: 'Measure what changes',
    body: 'Review answered calls, booked opportunities, and lead sources at 30, 60, and 90 days without unsupported outcome claims.',
  },
] as const;

export const reportFields = [
  ['Caller name', 'Captured during intake'],
  ['Lead source', 'Website, profile, call path, or configured source'],
  ['Service requested', 'Mapped to the business service list'],
  ['Urgency', 'Recorded using the business rules'],
  ['Call status', 'Answered, transferred, or routed'],
  ['Booking status', 'Requested, scheduled, or needs action'],
  ['Follow-up status', 'Confirmed, pending, or complete'],
] as const;

