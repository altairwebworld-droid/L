import { ArrowUpRight, Check } from 'lucide-react';
import { CtaBand, FaqSection, Hero, Reveal } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

const towingActions = [
  'Answers every call 24/7 in your company name',
  'Captures vehicle type, location, keys-or-no-keys, and urgency',
  'Sends job details to your dispatcher or driver by text and email',
  'Transfers live calls to your on-call driver when your rules are met',
  'Makes tap-to-call the first action on your mobile website',
  'Connects the website, Google profile, and call tracking',
];

const towingProcess = [
  ['Review the calls', 'Find when calls ring, when they are answered, and where good jobs disappear.'],
  ['Set the rules', 'Train the receptionist on service area, rate structure, dispatch process, and escalation rules.'],
  ['Build the call path', 'Make the website fast, the number obvious, and each job summary immediately useful.'],
  ['Measure the change', 'Review answered calls, dispatched opportunities, and lead sources at 30, 60, and 90 days.'],
];

export default function Towing() {
  return (
    <>
      <Hero
        compact
        title="Towing Websites and 24/7 Call Answering"
        copy="LYCORE builds phone-first websites and answers every call for towing companies—so the stranded driver at midnight reaches you, not your competitor."
      />

      <section className="towing-story section-shell py-20 md:py-28" aria-labelledby="towing-problem-title">
        <Reveal className="towing-story__moment">
          <p className="micro-label mb-5">01 / The missed tow</p>
          <h2 id="towing-problem-title">At 1 a.m., four unanswered rings are enough to lose the job.</h2>
          <p>A stranded driver searches “tow truck near me,” taps your listing, and reaches voicemail. They call the next result. You never know the opportunity existed.</p>
        </Reveal>

        <Reveal className="towing-story__response">
          <div>
            <p className="micro-label mb-5">02 / The response</p>
            <h2>Every caller reaches a system that knows what to ask next.</h2>
          </div>
          <ul role="list">
            {towingActions.map((action) => (
              <li key={action}><Check aria-hidden="true" /><span>{action}</span></li>
            ))}
          </ul>
          <a className="btn-secondary mt-8" href={site.socials.whatsapp} target="_blank" rel="noreferrer">
            Discuss your call flow <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <section className="towing-route" aria-labelledby="towing-route-title">
        <div className="section-shell">
          <div className="towing-route__header">
            <p className="micro-label mb-5">From ring to dispatch</p>
            <h2 id="towing-route-title" className="section-title">A practical four-step setup.</h2>
          </div>
          <ol>
            {towingProcess.map(([title, body], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection faqs={[globalFaqs[1], globalFaqs[4], globalFaqs[5], globalFaqs[6]]} />
      <CtaBand />
    </>
  );
}
