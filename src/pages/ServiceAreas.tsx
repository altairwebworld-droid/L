import { Link, useLocation } from 'react-router-dom';
import { FaqSection, Hero } from '../components/PageSections';
import { globalFaqs, servicePages, site } from '../siteData';

const states = [
  'New Mexico',
  'Texas',
  'Arizona',
  'California',
  'Florida',
  'Georgia',
  'North Carolina',
  'Tennessee',
  'Colorado',
  'Nevada',
  'Oklahoma',
  'Louisiana',
];

export default function ServiceAreas() {
  const location = useLocation();
  const isAlbuquerque = location.pathname === '/albuquerque-bail-bond-marketing';
  const title = isAlbuquerque ? 'Albuquerque Bail Bond Marketing and Lead Capture Systems' : 'Service Areas for Bail Bond Agency Websites and Automation';
  const copy = isAlbuquerque
    ? 'LyCore Group LLC is based in Albuquerque, New Mexico and builds remote-ready website, AI receptionist, intake, CRM, dashboard, and follow-up systems for bail bond agencies.'
    : 'LyCore supports bail bond agencies across the United States with remote-ready website design, AI receptionist workflows, intake automation, CRM readiness, dashboards, and follow-up systems.';

  return (
    <>
      <Hero compact title={title} copy={copy} />
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <p className="micro-label mb-5">{isAlbuquerque ? 'Business base' : 'Remote service area'}</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-5">
              {isAlbuquerque ? 'Based in Albuquerque, built for agencies that need measurable lead systems' : 'United States bail bond agencies can work with LyCore remotely'}
            </h2>
            <p className="text-stone-300 leading-relaxed font-light">
              {isAlbuquerque
                ? `${site.legalName} lists ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode} as its business address. Google Business Profile verification, local citations, and Search Console indexing still require manual setup.`
                : 'LyCore does not need to be physically inside an agency office to build service pages, intake forms, AI receptionist scripts, CRM-ready payloads, dashboards, and follow-up workflows. Live credentials, calendars, phone systems, and CRM accounts still require manual setup with the agency.'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to={site.auditPath} className="btn-3d w-full sm:w-auto" data-track="cta_click">
                {site.primaryCta}
              </Link>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="btn-3d-dark w-full sm:w-auto" data-track="phone_click">
                Call {site.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicePages.slice(0, 8).map((page) => (
              <Link key={page.path} to={page.path} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.08] transition-colors">
                <p className="micro-label mb-4">{page.label}</p>
                <h3 className="text-xl font-medium mb-3">{page.h1}</h3>
                <p className="text-sm text-stone-300 font-light leading-relaxed">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <p className="micro-label mb-4">Location intent without fake offices</p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-5">Service-area coverage should be honest and specific.</h2>
          <p className="text-white font-light leading-relaxed">
            LyCore can build pages and lead systems for agencies in multiple states, but the site should not claim local offices, reviews, or case studies that do not exist. These areas are listed as remote-service targets for future Search Console and Business Profile measurement.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {states.map((state) => (
            <div key={state} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-stone-200">
              {state}
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={[globalFaqs[0], globalFaqs[1], globalFaqs[3], globalFaqs[5]]} />
    </>
  );
}
