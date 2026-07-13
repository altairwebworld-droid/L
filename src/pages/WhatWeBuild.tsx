import { Link } from 'react-router-dom';
import { CtaBand, FaqSection, Hero, ProcessSection } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

const offerings = [
  {
    id: 'call-answering',
    title: '24/7 Receptionist',
    description: 'Every call answered, day or night. Caller details captured. Live transfer when it matters. Booked appointments. Missed calls become booked jobs.',
    details: [
      'Answers in your business name, with your greeting',
      'Captures caller name, number, location, urgency, and service type',
      'Sends call summaries to your team by text, email, or dashboard',
      'Transfers live calls to your on-call staff when rules are met',
      'Works nights, weekends, holidays — no gaps',
    ],
  },
  {
    id: 'conversion-websites',
    title: 'Websites That Convert Callers',
    description: 'Fast, phone-first sites built so an urgent searcher taps and calls. Your number is tappable from the first screen.',
    details: [
      'Phone number visible and tappable within one second',
      'Loads in under two seconds on any mobile connection',
      'Service pages answer the questions callers actually ask',
      'Connected to Google Business Profile and call tracking',
      'Built for the person holding a phone at 2 a.m., not someone browsing on a laptop',
    ],
  },
  {
    id: 'local-search',
    title: 'Google Business Profile Optimization',
    description: 'The listing that decides whether you get found and called in local search. We set it up right and keep it current.',
    details: [
      'Correct categories, service areas, and business hours',
      'Photos, posts, and Q&A that match what callers look for',
      'Monitoring and updates as Google changes requirements',
      'Connected to your website and call tracking',
    ],
  },
  {
    id: 'lead-follow-up',
    title: 'Intake + Follow-Up Automation',
    description: 'The paperwork behind the call fills itself. Confirmations and follow-ups send themselves. A monthly report shows what the system brought in.',
    details: [
      'Call details routed into your existing tools automatically',
      'Caller receives a confirmation that their request was received',
      'Follow-up fires if nobody on your team has responded',
      'Monthly report: how many leads, how many handled, where they came from',
    ],
    note: 'This feature is currently rolling out.',
  },
  {
    id: 'business-systems',
    title: 'Business Systems and Infrastructure',
    description: 'One system per industry that runs the office end to end — from the first call through dispatch, invoicing, and repeat business.',
    details: [
      'Dispatch and scheduling tied to call intake',
      'Invoicing and payment connected to the job lifecycle',
      'Repeat-business triggers and customer follow-up',
      'Reporting that shows the full picture, not just one slice',
    ],
    note: 'This is where we are building toward, not a product available today.',
  },
];

export default function WhatWeBuild() {
  return (
    <>
      <Hero
        compact
        title="What We Build"
        copy="LYCORE handles the chain from ring to revenue. Here is what your business gets."
      />
      <section className="py-10 px-6 max-w-7xl mx-auto space-y-10">
        {offerings.map((offering) => (
          <article id={offering.id} key={offering.title} className="glass-panel scroll-mt-28 rounded-[32px] border border-white/10 p-8 md:p-10">
            <h2 className="text-3xl font-medium mb-4">{offering.title}</h2>
            <p className="text-white text-lg leading-relaxed font-light mb-6">{offering.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {offering.details.map((detail) => (
                <div key={detail} className="lycore-card rounded-2xl p-5">
                  <p className="text-sm text-stone-200 font-light leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            {offering.note && (
              <p className="text-sm text-stone-400 font-light italic">{offering.note}</p>
            )}
          </article>
        ))}
      </section>
      <ProcessSection />
      <FaqSection faqs={[globalFaqs[1], globalFaqs[6], globalFaqs[7], globalFaqs[8]]} />
      <CtaBand />
    </>
  );
}
