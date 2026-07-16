import { Check } from 'lucide-react';
import { CtaBand, FaqSection, Hero, ProcessSection, Reveal } from '../components/PageSections';
import { globalFaqs } from '../siteData';

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
      <section className="offerings-ledger section-shell py-20 md:py-28" aria-labelledby="offerings-heading">
        <aside className="offerings-ledger__nav">
          <p className="micro-label mb-5">The system</p>
          <h2 id="offerings-heading" className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">Five layers. Add only what the operation needs.</h2>
          <nav className="mt-8 hidden border-l border-white/12 pl-5 lg:block" aria-label="What LYCORE builds">
            {offerings.map((offering, index) => (
              <a key={offering.id} href={`#${offering.id}`} className="block py-2 text-sm text-stone-400 transition-colors hover:text-white">
                0{index + 1} / {offering.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="offerings-ledger__rows">
          {offerings.map((offering, index) => (
            <Reveal key={offering.title}>
              <article id={offering.id} className="offering-row scroll-mt-32">
                <div className="offering-row__heading">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{offering.title}</h3>
                    {offering.note && <p className="offering-row__status">{offering.note}</p>}
                  </div>
                </div>
                <div>
                  <p className="offering-row__description">{offering.description}</p>
                  <ul className="offering-row__details" role="list">
                    {offering.details.map((detail) => (
                      <li key={detail}>
                        <Check aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <ProcessSection />
      <FaqSection faqs={[globalFaqs[1], globalFaqs[6], globalFaqs[7], globalFaqs[8]]} />
      <CtaBand />
    </>
  );
}
