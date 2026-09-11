export const operationsCategories = [
  { title: 'Customer operations', items: ['Status updates', 'Appointment reminders and rescheduling', 'Post-service follow-up', 'Review requests', 'Maintenance reminders', 'Customer reactivation'] },
  { title: 'Job operations', items: ['Job creation', 'Routing and team notifications', 'Job-status syncing', 'Technician note summaries', 'Voice notes into structured job notes', 'Customer update messages'] },
  { title: 'Sales operations', items: ['Estimate follow-up', 'Quote reminders', 'Abandoned lead recovery', 'CRM stage updates', 'Sales notifications', 'Unsold estimate reactivation'] },
  { title: 'Administrative operations', items: ['Document extraction and classification', 'CRM and field-service updates', 'Invoice reminders', 'Payment follow-up', 'Internal reporting', 'Task creation'] },
] as const;

export const operationsFlow = ['Customer contacts you', 'Lead is qualified', 'Work is booked', 'Job and CRM records update', 'The right person is notified', 'Customer receives updates', 'Job is completed', 'Payment and review follow-up', 'Future service reminder'];

export const operationsFaqs = [
  { question: 'Does LYCORE replace my CRM or field-service software?', answer: 'No. In most cases, LYCORE works with the tools you already use and automates the work happening between them.' },
  { question: 'Can LYCORE automate work after a customer books?', answer: 'Yes. Depending on your systems, LYCORE can connect booking to job creation, staff notifications, customer updates, follow-up, payment reminders, reviews and reactivation.' },
  { question: 'Will AI make decisions for my business?', answer: 'Only where you want it to. Pricing, approvals, unusual situations, sensitive conversations and technical judgment can stay behind human review.' },
];
