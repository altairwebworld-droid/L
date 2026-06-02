import { CtaBand, FaqSection, Hero, TrustSection } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function About() {
  return (
    <>
      <Hero compact title="About LyCore" copy={site.coreStatement} />
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-10">
        <div>
          <h2 className="text-4xl font-normal mb-5">Built for Bail Bond Lead Operations</h2>
          <p className="text-stone-300 text-lg leading-relaxed font-light">
            LyCore focuses on the operational side of bail bond lead capture: search-ready websites, AI-supported call answering, structured intake, CRM handoff, and follow-up readiness.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed font-light mt-5">
            The same system can extend into custom dashboards, appointment-setting workflows, mobile apps, and web UI apps for agency teams that need better lead visibility and workflow control.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-normal mb-5">Measurement Before Marketing Claims</h2>
          <p className="text-stone-300 text-lg leading-relaxed font-light">
            The system is designed to measure indexed pages, impressions, clicks, CTA clicks, form starts, form submissions, source data, and lead quality after analytics and Search Console are connected.
          </p>
        </div>
      </section>
      <TrustSection />
      <FaqSection faqs={[globalFaqs[4], globalFaqs[5]]} />
      <CtaBand />
    </>
  );
}
