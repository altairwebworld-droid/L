import AIChatDemo from '../components/AIChatDemo';
import { CtaBand, FaqSection, Hero, ProcessSection, ServiceGrid, ShowcaseSection, TrustSection } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function Home() {
  return (
    <>
      <Hero title="Bail Bonds AI Receptionist, SEO Websites, and Lead Automation" copy={site.heroCopy} />
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
              ['The 2 AM call nobody answered', 'An AI receptionist picks up when your staff can’t, collects the caller’s details, and hands your team a clean summary — so the lead is waiting for you, not calling a competitor.'],
              ['A website that just sits there', 'Service pages, clear CTAs, and direct answers turn your website from a brochure into the start of an intake conversation.'],
              ['No idea which marketing works', 'Every lead arrives tagged with its source, landing page, and campaign — so you know exactly what to spend more on and what to cut.'],
              ['Intake scribbled on sticky notes', 'Calls, forms, chat, and bookings land in your CRM as one structured record. Nothing gets retyped, nothing gets lost.'],
              ['Follow-up that depends on memory', 'Owner alerts, lead summaries, and follow-up tasks fire the moment a qualified lead comes in.'],
              ['Flying blind on operations', 'Dashboards and apps show intake status, appointments, lead sources, and open follow-up work at a glance.'],
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
          <h2 className="text-4xl md:text-5xl font-normal mb-6">AI That Works the Front Desk, While Your Agents Work the Cases</h2>
          <p className="text-white text-lg leading-relaxed font-light mb-6">
            The AI answers common questions, collects intake details, summarizes every conversation, and preps the CRM update. Your team reviews the summary and takes over — informed, not interrupted.
          </p>
          <p className="text-white leading-relaxed font-light">
            Licensed agents stay in charge of every client, legal, financial, and bail decision. The AI just makes sure nothing reaches them cold.
          </p>
          <p className="text-white leading-relaxed font-light mt-5">
            Need more than answering? LyCore also builds custom dashboards, appointment-setting workflows, mobile apps, and web UI apps around your agency&apos;s operations.
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
