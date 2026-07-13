import { Link } from 'react-router-dom';
import { Faq, showcaseItems, site } from '../siteData';
import SplineScene from './SplineScene';

const heroSplineUrl = 'https://my.spline.design/powercopycopy-KUOVCO8PM7olZbrkuid9HBWM-SEH/';

export function Hero({
  title,
  copy,
  compact = false,
}: {
  title: string;
  copy: string;
  compact?: boolean;
}) {
  const showSpline = !compact;

  if (showSpline) {
    return (
      <section className="relative min-h-[92vh] overflow-hidden px-6 pt-32 pb-24 flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_48%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.78)_58%,rgba(0,0,0,0.96)_100%)] pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/20 to-black/95 pointer-events-none" />

        <div className="absolute inset-x-0 top-12 z-0 mx-auto h-[74vh] max-h-[760px] min-h-[520px] w-full max-w-6xl opacity-60 pointer-events-none">
          <SplineScene url={heroSplineUrl} />
        </div>

        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <p className="micro-label mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            24/7 answering, websites, and lead recovery for service businesses
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.98] text-glow-strong max-w-6xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mb-10 leading-relaxed font-light text-glow-strong">{copy}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link to={site.auditPath} className="btn-3d w-full sm:w-auto" data-track="cta_click">
              {site.primaryCta}
            </Link>
            <Link to="/what-we-build" className="btn-3d-dark w-full sm:w-auto">
              {site.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-6 pt-36 pb-16 max-w-7xl mx-auto overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.98] text-glow-strong">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-10 leading-relaxed font-light">{copy}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={site.auditPath} className="btn-3d w-full sm:w-auto" data-track="cta_click">
            {site.primaryCta}
          </Link>
          <Link to="/book" className="btn-3d-dark w-full sm:w-auto" data-track="book_call_click">
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
        <div className="max-w-3xl">
          <p className="micro-label mb-4">Website concepts</p>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-5">
            Sample website directions LYCORE can build from.
          </h2>
          <p className="text-white text-lg font-light leading-relaxed">
            These visuals show possible directions for service business homepages and lead-capture experiences. They are concept references, not client results or performance claims.
          </p>
        </div>
        <Link to={site.auditPath} className="btn-3d shrink-0" data-track="cta_click">
          Show Me What My Business Needs
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {showcaseItems.map((item) => (
          <article key={item.image} className="glass-panel overflow-hidden rounded-[32px] border border-white/10">
            <div className="aspect-video overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="p-7 md:p-8">
              <p className="micro-label mb-4">{item.eyebrow}</p>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">{item.title}</h3>
              <p className="text-stone-300 font-light leading-relaxed">{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ['01', 'Review your current system', 'We look at how your business handles calls, website visitors, and follow-up today — and find where jobs are falling through.'],
    ['02', 'Set up the receptionist and website', 'Your receptionist gets trained on your business. Your website gets rebuilt around one goal: getting the caller to tap your number.'],
    ['03', 'Route every lead to your team', 'Every answered call arrives as a clean summary with caller details, urgency, and service type — ready for your team to act on.'],
    ['04', 'Measure what changes', 'After 30, 60, and 90 days: how many calls answered, how many jobs booked, and where they came from.'],
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-normal mb-5">From missed call to booked job</h2>
        <p className="text-white font-light leading-relaxed">LYCORE builds the path that turns a ringing phone into revenue you can measure.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {steps.map(([number, title, body]) => (
          <article key={number} className="glass-panel rounded-[28px] border border-white/10 p-6">
            <p className="micro-label mb-6">{number}</p>
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <p className="text-sm text-stone-300 font-light leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-normal text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="glass-panel border border-white/10 rounded-[24px] p-6">
            <summary className="cursor-pointer text-xl font-medium tracking-wide">{faq.question}</summary>
            <p className="text-stone-300 font-light leading-relaxed mt-4">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="lycore-card rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find out how many calls your business is missing.</h2>
          <p className="text-stone-300 leading-relaxed">
            Get a free review of how your business handles calls, website visitors, and follow-up — with a plain-English breakdown of what to fix first.
          </p>
        </div>
        <Link to={site.auditPath} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black text-xs tracking-[0.1em] uppercase font-bold" data-track="cta_click">
          {site.primaryCta}
        </Link>
      </div>
    </section>
  );
}
