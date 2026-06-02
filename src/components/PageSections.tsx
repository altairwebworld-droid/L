import { Link } from 'react-router-dom';
import { Faq, servicePages, site } from '../siteData';
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
            Lead systems for bail bond agencies
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.98] text-glow-strong max-w-6xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mb-10 leading-relaxed font-light text-glow-strong">{copy}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link to={site.auditPath} className="btn-3d w-full sm:w-auto" data-track="cta_click">
              {site.primaryCta}
            </Link>
            <Link to="/services" className="btn-3d-dark w-full sm:w-auto">
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
        <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mb-10 leading-relaxed font-light">{copy}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={site.auditPath} className="btn-3d w-full sm:w-auto" data-track="cta_click">
            {site.primaryCta}
          </Link>
          <Link to="/services" className="btn-3d-dark w-full sm:w-auto">
            {site.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-normal mb-5">What LyCore Builds</h2>
        <p className="text-stone-300 font-light leading-relaxed">
          A connected lead system is stronger than a standalone website, ad campaign, or chatbot. Each service is designed to work with the others.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicePages.map((page) => (
          <article key={page.path} className="glass-panel rounded-[28px] border border-white/10 p-7 flex flex-col min-h-[260px]">
            <h3 className="text-2xl font-medium mb-4 tracking-wide">{page.label}</h3>
            <p className="text-stone-300 font-light leading-relaxed flex-grow">{page.explanation}</p>
            <Link to={page.path} className="mt-8 text-sm uppercase tracking-[0.12em] font-bold hover:text-white/70 transition-colors">
              Explore {page.label}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ['01', 'Audit the current lead path', 'Review calls, website pages, forms, chat, CRM handoff, follow-up, and source tracking.'],
    ['02', 'Build the measurable system', 'Add clear pages, answer content, metadata, form payloads, and backend-readiness placeholders.'],
    ['03', 'Prepare routing and follow-up', 'Structure the lead so CRM, owner notifications, summaries, and future automations can connect safely.'],
    ['04', 'Measure and improve', 'Use Search Console, analytics, form data, and lead quality signals to improve over 30, 60, and 90 days.'],
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-normal mb-5">How the LyCore Lead System Works</h2>
        <p className="text-stone-300 font-light leading-relaxed">The goal is not just a better-looking website. The goal is a measurable lead capture system.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {steps.map(([number, title, body]) => (
          <article key={number} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
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

export function TrustSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="rounded-[36px] border border-white/10 bg-white/[0.05] p-8 md:p-12">
        <h2 className="text-3xl font-medium mb-5">Human-In-Control AI</h2>
        <p className="text-stone-300 leading-relaxed font-light">{site.aiDisclaimer}</p>
        <p className="text-stone-400 text-sm leading-relaxed mt-5">
          LyCore does not guarantee rankings, revenue, client volume, reviews, legal outcomes, or bail outcomes. Analytics, CRM, chatbot, booking, email, and Search Console integrations require manual setup with real credentials.
        </p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="rounded-[40px] border border-white/10 bg-white text-black p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Bail Bond Lead System Audit</h2>
          <p className="text-stone-700 leading-relaxed">
            Review how your agency captures calls, website visitors, intake details, CRM records, follow-up, and source tracking.
          </p>
        </div>
        <Link to={site.auditPath} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white text-xs tracking-[0.1em] uppercase font-bold" data-track="cta_click">
          {site.primaryCta}
        </Link>
      </div>
    </section>
  );
}
