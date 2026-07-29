export const serviceModules = [
  {
    id: 'receptionist',
    title: '24/7 Receptionist',
    body: 'A receptionist trained on your hours, service area, greeting, and routing rules answers when your team cannot.',
    points: ['Business-name greeting', 'Structured caller details', 'Live-transfer rules', 'Text, email, or dashboard summary'],
    accent: '#9b7bf7',
    availability: 'Available now',
  },
  {
    id: 'websites',
    title: 'Websites That Convert Callers',
    body: 'Fast, phone-first pages where urgent customers can understand, trust, and contact you in seconds.',
    points: ['Tappable phone action', 'Fast mobile path', 'Service-answer content', 'Call and source tracking'],
    accent: '#4b8df8',
    availability: 'Available now',
  },
  {
    id: 'google-profile',
    title: 'Google Business Profile',
    body: 'The right categories, service areas, hours, photos, and description so nearby customers can find accurate information.',
    points: ['Category and service-area review', 'Hours and business details', 'Photos, posts, and Q&A', 'Website and call-path connection'],
    accent: '#52b9d4',
    availability: 'Available now',
  },
  {
    id: 'automation',
    title: 'Intake and Follow-Up Automation',
    body: 'Clean summaries, confirmations, routing, and follow-up keep the opportunity moving after the first contact.',
    points: ['Structured intake', 'Caller confirmation', 'Team routing', 'Follow-up status'],
    accent: '#53bc88',
    availability: 'Rolling out',
  },
  {
    id: 'systems',
    title: 'Business Systems',
    body: 'The longer direction connects the first call to dispatch, invoicing, reporting, and repeat-business workflows.',
    points: ['Industry-specific rules', 'Connected job lifecycle', 'Operational reporting', 'Repeat-business triggers'],
    accent: '#ef7c55',
    availability: 'Long-term direction',
  },
] as const;

