import { Link } from 'react-router-dom';
import { CtaBand, FaqSection, Hero } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function Towing() {
  return (
    <>
      <Hero
        compact
        title="Towing Websites and 24/7 Call Answering"
        copy="LYCORE builds phone-first websites and answers every call for towing companies — so the stranded driver at midnight reaches you, not your competitor."
      />
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article className="glass-panel rounded-[32px] border border-white/10 p-8">
          <h2 className="text-3xl font-medium mb-5">The problem</h2>
          <p className="text-white text-lg leading-relaxed font-light mb-6">
            A driver breaks down at 1 a.m. and searches "tow truck near me." Your Google listing comes up. They tap the number. It rings four times and goes to voicemail. They call the next result. You never know the call happened.
          </p>
          <p className="text-white text-lg leading-relaxed font-light">
            Most towing companies lose calls after hours, on weekends, and when drivers are already on a job. Every unanswered call is a tow you did not get.
          </p>
        </article>
        <article className="glass-panel rounded-[32px] border border-white/10 p-8">
          <h2 className="text-3xl font-medium mb-5">What LYCORE does for towing companies</h2>
          <ul className="space-y-4 text-stone-300 font-light leading-relaxed">
            <li>Answers every call 24/7 in your company name</li>
            <li>Captures vehicle type, location, keys-or-no-keys, and urgency</li>
            <li>Sends job details to your dispatcher or driver by text and email</li>
            <li>Transfers live calls to your on-call driver when rules are met</li>
            <li>Builds a website where "tap to call" is the first thing a stranded driver sees</li>
            <li>Optimizes your Google Business Profile so local searches find you first</li>
          </ul>
        </article>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="glass-panel rounded-[32px] border border-white/10 p-8 md:p-10">
          <h2 className="text-3xl font-medium mb-6">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              ['01', 'Review your calls', 'We look at how your towing company handles calls today: how many ring, how many get answered, and where the gaps are.'],
              ['02', 'Set up the receptionist', 'We train the receptionist on your service area, your rates structure, your dispatch process, and the questions your callers ask.'],
              ['03', 'Build or improve your site', 'Your website gets rebuilt around one goal: getting the stranded driver to tap your number. Fast load, big number, clear service area.'],
              ['04', 'Measure what changes', 'After 30, 60, and 90 days: how many calls were answered, how many were dispatched, and where they came from.'],
            ].map(([number, title, body]) => (
              <div key={number} className="lycore-card rounded-2xl p-5">
                <p className="micro-label mb-4">{number}</p>
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm text-stone-300 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={[globalFaqs[1], globalFaqs[4], globalFaqs[5], globalFaqs[6]]} />
      <CtaBand />
    </>
  );
}
