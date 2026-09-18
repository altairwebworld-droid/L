export const implementationSteps = [
  {
    title: 'Review where calls get lost',
    body: 'We look at your phone, website, Google listing and follow-up to find where customers slip away before they book.',
  },
  {
    title: 'Set up your receptionist',
    body: 'It learns your greeting, hours, service area and when to call you, and your website points people to the phone. Calls are tested before launch.',
  },
  {
    title: 'Every lead reaches you',
    body: 'You get the name, number, address, reason and urgency in one clear summary, not a half-heard voicemail.',
  },
  {
    title: 'Check the numbers together',
    body: 'At 30, 60 and 90 days we go through answered calls, bookings and lead sources with you. No promised results, just what happened.',
  },
] as const;

export const reportFields = [
  ['Caller name', 'Asked during the call'],
  ['Lead source', 'Website, listing, or call path when it can be tracked'],
  ['Service requested', 'Matched to the services you offer'],
  ['Urgency', 'Marked using your rules'],
  ['Call status', 'Answered, transferred, or message taken'],
  ['Booking status', 'Booked, requested, or needs you'],
  ['Follow-up status', 'Sent, waiting, or done'],
] as const;
