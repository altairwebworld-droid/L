export type BuyerQuestion = {
  question: string;
  category: 'lead generation' | 'lead response' | 'reputation' | 'crm automation' | 'websites' | 'integrations' | 'industry workflows';
  priority: 'high' | 'medium';
};

const themes: Array<{ category: BuyerQuestion['category']; subject: string; questions: string[] }> = [
  { category: 'lead generation', subject: 'outbound lead generation', questions: ['How does it work for a service business?', 'What should be set up before launching?', 'What can go wrong?', 'How do you qualify replies?', 'What should you measure?', 'When should a human take over?'] },
  { category: 'lead generation', subject: 'cold email infrastructure', questions: ['What does it include?', 'How do SPF, DKIM, and DMARC fit in?', 'What does it not guarantee?', 'How do you handle opt-outs?', 'How do you monitor sending?', 'When is it not a good fit?'] },
  { category: 'lead response', subject: 'AI receptionist', questions: ['How does it handle after-hours calls?', 'When should it transfer to a person?', 'What customer details can it capture?', 'How should escalation rules work?', 'What should callers be told?', 'What does it not replace?'] },
  { category: 'lead response', subject: 'missed-call text back', questions: ['How quickly should the first message go out?', 'What should the message say?', 'How do replies reach the right person?', 'What consent rules matter?', 'When should the team call back?', 'What happens when the customer does not respond?'] },
  { category: 'lead response', subject: 'lead follow-up automation', questions: ['Which leads need follow-up first?', 'How do estimate reminders work?', 'When should a task be created for sales?', 'How do you avoid over-messaging?', 'Which channels should be used?', 'How do you measure response quality?'] },
  { category: 'reputation', subject: 'review automation', questions: ['How do you request honest reviews?', 'What is review gating?', 'When should a request be sent?', 'How many reminders are appropriate?', 'Which review site matters most?', 'How should a business respond to a review?'] },
  { category: 'reputation', subject: 'Google Business Profile management', questions: ['Which business details matter most?', 'How do service areas work?', 'How often should hours be checked?', 'What categories should be reviewed?', 'How do website and profile paths connect?', 'What should not be claimed?'] },
  { category: 'crm automation', subject: 'CRM automation', questions: ['Which system should own the customer record?', 'How do lead-assignment rules work?', 'When should a workflow stop?', 'How do webhooks and APIs differ?', 'How should exceptions be handled?', 'What should a team document?'] },
  { category: 'crm automation', subject: 'customer reactivation', questions: ['Which past customers are eligible?', 'What should a reactivation message say?', 'How do opt-outs work?', 'When should recurring reminders be sent?', 'How are replies handled?', 'Which outcomes should be tracked?'] },
  { category: 'websites', subject: 'service-business web design', questions: ['What must an urgent visitor see first?', 'How should calls and forms be presented?', 'What makes a service page useful?', 'How do you connect a site to follow-up?', 'What should be tracked?', 'How do mobile visitors behave differently?'] },
  { category: 'integrations', subject: 'field-service and CRM integrations', questions: ['What can be connected?', 'Is the connection native or middleware-based?', 'Which data should move between systems?', 'What permissions are required?', 'What happens when a workflow fails?', 'Who maintains the connection?'] },
  { category: 'integrations', subject: 'Zapier, Make, and n8n', questions: ['Which tool fits a simple workflow?', 'Which tool provides more control?', 'How do costs and limits affect design?', 'What technical ownership is needed?', 'How should failures be monitored?', 'When is custom work justified?'] },
  { category: 'industry workflows', subject: 'home-service customer journeys', questions: ['Where do urgent calls get lost?', 'How should service-area rules work?', 'When is escalation required?', 'How do completed jobs trigger reviews?', 'How should estimates be followed up?', 'What does reactivation look like?'] },
  { category: 'industry workflows', subject: 'pest-control, plumbing, roofing, restoration, towing, med-spa, dental, and veterinary workflows', questions: ['What makes the intake different?', 'Which operational handoff matters most?', 'How do appointment reminders fit?', 'What customer communication is appropriate?', 'Which software needs verification?', 'What stays under staff control?'] },
];

const decisionPrompts = [
  'What does implementation look like?',
  'What should be confirmed before buying?',
  'What are the main limitations?',
  'Which metrics matter?',
  'What common mistake should be avoided?',
  'How should a team maintain the process?',
];

export const buyerQuestionUniverse: BuyerQuestion[] = themes.flatMap((theme, themeIndex) => [...theme.questions, ...decisionPrompts].map((question, questionIndex) => ({ question: `${theme.subject}: ${question}`, category: theme.category, priority: themeIndex < 8 && questionIndex < 4 ? 'high' : 'medium' })));

export const buyerQuestionSummary = {
  total: buyerQuestionUniverse.length,
  highPriority: buyerQuestionUniverse.filter((item) => item.priority === 'high').length,
  categories: [...new Set(buyerQuestionUniverse.map((item) => item.category))],
};
