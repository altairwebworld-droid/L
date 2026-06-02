import AIChatDemo from '../components/AIChatDemo';
import { CtaBand, FaqSection, Hero, ProcessSection, ServiceGrid, TrustSection } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function Home() {
  return (
    <>
      <Hero title="AI Receptionist, SEO Websites, and Lead Automation for Bail Bond Agencies" copy={site.coreStatement} />
      <ServiceGrid />
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">Support Calls, Intake, and Follow-Up Without Replacing Agents</h2>
          <p className="text-stone-300 text-lg leading-relaxed font-light mb-6">
            LyCore positions AI as operational support: answering common questions, collecting intake details, summarizing conversations, and preparing CRM updates for human review.
          </p>
          <p className="text-stone-400 leading-relaxed font-light">
            The agency remains responsible for client decisions, legal decisions, financial decisions, and bail outcomes.
          </p>
          <p className="text-stone-400 leading-relaxed font-light mt-5">
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
