import { CtaBand, FaqSection, Hero, ProcessSection, TrustSection } from '../components/PageSections';
import { globalFaqs } from '../siteData';

export default function BailBonds() {
  return (
    <>
      <Hero
        compact
        title="Lead Capture Systems for Bail Bond Agencies"
        copy="Connect your website, calls, forms, chat, CRM records, and follow-up workflows into one measurable lead journey."
      />
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-medium mb-5">Common Lead Capture Gaps</h2>
          <ul className="space-y-4 text-stone-300 font-light leading-relaxed">
            <li>After-hours calls and form submissions are not routed consistently.</li>
            <li>Website pages do not clearly answer buyer questions.</li>
            <li>Lead source and UTM data are not captured for measurement.</li>
            <li>CRM records and follow-up tasks are created manually or inconsistently.</li>
            <li>Dashboards, mobile tools, and appointment workflows are missing or disconnected.</li>
          </ul>
        </article>
        <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-medium mb-5">LyCore Lead System Readiness</h2>
          <ul className="space-y-4 text-stone-300 font-light leading-relaxed">
            <li>SEO-ready service pages and direct answer content.</li>
            <li>AI-supported call and chat intake with human-control boundaries.</li>
            <li>CRM-ready audit form payload and webhook placeholder.</li>
            <li>Analytics events for CTA clicks, form starts, submissions, and service interest.</li>
            <li>Custom dashboards, appointment-setting flows, mobile apps, and web UI apps for agency operations.</li>
          </ul>
        </article>
      </section>
      <ProcessSection />
      <TrustSection />
      <FaqSection faqs={[globalFaqs[1], globalFaqs[2], globalFaqs[4]]} />
      <CtaBand />
    </>
  );
}
