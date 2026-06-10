import AIChatDemo from '../components/AIChatDemo';
import { CtaBand, FaqSection, Hero, ProcessSection, ServiceGrid, ShowcaseSection, TrustSection } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function Home() {
  return (
    <>
      <Hero title="Bail Bonds AI Receptionist, SEO Websites, and Lead Automation" copy={site.coreStatement} />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="micro-label mb-4">The pain LyCore fixes</p>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight leading-tight mb-6">
              Bail bond leads do not wait for a better time.
            </h2>
            <p className="text-white text-lg leading-relaxed font-light">
              A family searching for help may call, click, fill out a form, or leave within minutes. If your website is vague, your intake is slow, your CRM is disconnected, or your follow-up depends on memory, the opportunity can disappear before anyone owns it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Missed after-hours calls', 'AI-supported answering and safe intake flows help capture caller details when staff are unavailable.'],
              ['A website that does not sell', 'Service pages, clear CTAs, FAQs, and trust copy make the next step obvious.'],
              ['No idea where leads came from', 'UTM, landing page, referrer, and source fields prepare every form submission for measurement.'],
              ['CRM notes scattered everywhere', 'Structured payloads prepare calls, forms, chat, and bookings for CRM or dashboard handoff.'],
              ['Follow-up happens too late', 'Owner summaries, scoring placeholders, and follow-up routing make the next action easier to see.'],
              ['No operational visibility', 'Dashboards and apps can show intake status, appointment context, source data, and open follow-up work.'],
            ].map(([title, body]) => (
              <article key={title} className="glass-panel rounded-[24px] border border-white/10 p-6">
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-sm text-stone-300 font-light leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ServiceGrid />
      <ShowcaseSection />
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">Support Calls, Intake, and Follow-Up Without Replacing Agents</h2>
          <p className="text-white text-lg leading-relaxed font-light mb-6">
            LyCore positions AI as operational support: answering common questions, collecting intake details, summarizing conversations, and preparing CRM updates for human review.
          </p>
          <p className="text-white leading-relaxed font-light">
            The agency remains responsible for client decisions, legal decisions, financial decisions, and bail outcomes.
          </p>
          <p className="text-white leading-relaxed font-light mt-5">
            LyCore can also build custom dashboards, appointment-setting workflows, mobile apps, and web UI apps for bail bond agency operations.
          </p>
        </div>
        <AIChatDemo />
      </section>
      <ProcessSection />
      <TrustSection />
      <FaqSection faqs={globalFaqs.slice(0, 6)} />
      <CtaBand />
    </>
  );
}
