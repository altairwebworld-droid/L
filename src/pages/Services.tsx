import { CtaBand, FaqSection, Hero, ServiceGrid, TrustSection } from '../components/PageSections';
import { globalFaqs } from '../siteData';

export default function Services() {
  return (
    <>
      <Hero
        compact
        title="Fix the lead leaks your agency cannot afford to ignore"
        copy="LyCore builds the pieces that turn interest into action: websites that sell the next step, AI-supported call intake, CRM-ready forms, dashboards, appointment setting, mobile apps, and follow-up workflows."
      />
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ['More visitors should become inquiries', 'Clear pages, stronger CTAs, and direct answers help people understand why they should contact your agency now.'],
            ['More inquiries should become usable lead records', 'Forms, calls, chat, and booking flows should collect the details your team needs to respond intelligently.'],
            ['More lead records should become follow-up actions', 'CRM handoff, summaries, scoring, dashboards, and notifications help the team see what to do next.'],
          ].map(([title, copy]) => (
            <article key={title} className="glass-panel rounded-[28px] border border-white/10 p-7">
              <h2 className="text-2xl font-medium mb-4">{title}</h2>
              <p className="text-stone-300 font-light leading-relaxed">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <ServiceGrid />
      <TrustSection />
      <FaqSection faqs={globalFaqs.slice(0, 5)} />
      <CtaBand />
    </>
  );
}
