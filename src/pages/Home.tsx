import { ArrowUpRight, Check, Clock3, PhoneIncoming } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CtaBand, FaqSection, Hero, ProcessSection, ShowcaseSection } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

const industries = [
  'Towing', 'Plumbing', 'Roofing', 'HVAC', 'Electrical',
  'Restaurants', 'Urgent care', 'Locksmiths',
  'Restoration', 'Auto repair', 'Pest control',
];

const gaps = [
  {
    number: '01',
    title: 'The call nobody answered',
    body: 'A customer needs help now. Voicemail gives them a reason to call the next business. Your LYCORE receptionist answers, captures the job, and alerts your team.',
  },
  {
    number: '02',
    title: 'The website that hides the phone number',
    body: 'We rebuild the mobile journey around the one action that matters: a fast, obvious tap to call from the first screen.',
  },
  {
    number: '03',
    title: 'The follow-up that depends on memory',
    body: 'Every lead arrives with the source, service request, location, and urgency. Confirmations and follow-up happen without sticky notes.',
  },
];

const services = [
  {
    label: 'Core system',
    title: '24/7 call answering',
    body: 'A receptionist trained on your hours, service area, and routing rules answers when your team cannot. Live transfers handle the calls that need a person now.',
    link: '/what-we-build',
    featured: true,
  },
  {
    label: 'Conversion',
    title: 'Websites built to earn the call',
    body: 'Fast, phone-first pages where urgent customers can understand, trust, and contact you in seconds.',
    link: '/what-we-build',
  },
  {
    label: 'Local demand',
    title: 'Google Business Profile',
    body: 'The right categories, service areas, hours, and content so nearby customers can find you.',
    link: '/what-we-build',
  },
  {
    label: 'Operations',
    title: 'Intake and follow-up',
    body: 'Clean summaries, confirmations, lead routing, and reporting that keep the job moving after the call.',
    link: '/what-we-build',
  },
  {
    label: 'The longer arc',
    title: 'Complete business systems',
    body: 'Industry-specific systems that connect the first ring to dispatch, invoicing, reporting, and repeat business.',
    link: '/vision',
  },
];

export default function Home() {
  return (
    <>
      <Hero title="Stop losing jobs to missed calls" copy={site.heroCopy} />

      <section className="section-shell py-24 md:py-32" aria-labelledby="problem-heading">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="micro-label mb-5">Where revenue leaks</p>
            <h2 id="problem-heading" className="section-title max-w-xl">
              The job is usually lost before your team sees it.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-ink-muted md:text-lg">
              LYCORE closes the gaps between a customer searching for help and your team booking the work.
            </p>
            <div className="mt-9 inline-flex items-center gap-3 border-l-2 border-accent px-4 py-2 text-sm text-stone-200">
              <Clock3 className="h-4 w-4 text-accent" aria-hidden="true" />
              Built for the call that comes after hours
            </div>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {gaps.map((gap) => (
              <article key={gap.number} className="group grid gap-5 py-8 sm:grid-cols-[4rem_1fr] md:py-10">
                <span className="font-mono text-xs tracking-[0.18em] text-accent">{gap.number}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {gap.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base font-light leading-7 text-stone-300">{gap.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28" aria-labelledby="services-heading">
        <div className="mb-12 grid gap-7 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="micro-label mb-5">One connected system</p>
            <h2 id="services-heading" className="section-title max-w-3xl">From first ring to a lead your team can act on.</h2>
          </div>
          <p className="max-w-xl text-base font-light leading-7 text-stone-300 lg:justify-self-end">
            Start with the gap costing you the most. Add the rest as your business grows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card ${service.featured ? 'service-card--featured lg:col-span-7 lg:row-span-2' : index < 3 ? 'lg:col-span-5' : 'lg:col-span-6'}`}
            >
              <div>
                <p className="micro-label mb-6 text-accent">{service.label}</p>
                {service.featured && (
                  <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-[#0b4b9f] shadow-[0_14px_34px_rgba(0,32,92,0.22)]">
                    <PhoneIncoming className="h-6 w-6" aria-hidden="true" />
                  </div>
                )}
                <h3 className={`${service.featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} max-w-xl font-medium leading-tight tracking-tight`}>
                  {service.title}
                </h3>
                <p className={`${service.featured ? 'max-w-xl text-base md:text-lg' : 'max-w-md text-sm md:text-base'} mt-5 font-light leading-7 text-stone-300`}>
                  {service.body}
                </p>
              </div>
              <Link to={service.link} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent">
                See how it works <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/8 bg-white/[0.025] py-10" aria-labelledby="industries-heading">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <p className="micro-label mb-4">Built for urgent demand</p>
              <h2 id="industries-heading" className="text-2xl font-medium tracking-tight md:text-3xl">
                If the customer calls the next number, we can help.
              </h2>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-4" aria-label="Industries served">
              {industries.map((industry) => (
                <li key={industry} className="inline-flex items-center gap-2 text-sm text-stone-300 md:text-base">
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ShowcaseSection />
      <ProcessSection />
      <FaqSection faqs={globalFaqs.slice(0, 6)} />
      <CtaBand />
    </>
  );
}
