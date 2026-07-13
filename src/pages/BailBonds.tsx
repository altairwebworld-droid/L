import { Hero } from '../components/PageSections';
import { site } from '../siteData';

export default function BailBonds() {
  return (
    <>
      <Hero
        compact
        title="Bail Bond Agency Services"
        copy="LYCORE serves bail bond agencies with 24/7 call answering and phone-first websites."
      />
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="glass-panel rounded-[32px] border border-white/10 p-8 md:p-10">
          <h2 className="text-3xl font-medium mb-5">We work with bail bond agencies</h2>
          <p className="text-white text-lg leading-relaxed font-light mb-6">
            Bail bonds was one of the first industries LYCORE served. We understand the urgency of after-hours calls, the importance of fast intake, and the operational complexity of running an agency.
          </p>
          <p className="text-white text-lg leading-relaxed font-light mb-8">
            For full bail bond service details, pricing, and industry-specific features, visit our dedicated bail bonds site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.lycore.org"
              className="btn-3d w-full sm:w-auto text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit lycore.org for bail bond details
            </a>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}
              className="btn-3d-dark w-full sm:w-auto text-center"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
