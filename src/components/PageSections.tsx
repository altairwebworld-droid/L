import { ArrowRight, Check, ChevronDown, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Faq, showcaseItems, site } from '../siteData';

export function Hero({
  title,
  copy,
  compact = false,
}: {
  title: string;
  copy: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <section className="section-shell relative overflow-hidden pb-20 pt-40 md:pb-24 md:pt-48">
        <div className="hero-orb -left-32 top-10" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl">
          <p className="micro-label mb-6 text-accent">LYCORE customer systems</p>
          <h1 className="display-title max-w-5xl">{title}</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-stone-300 md:text-xl">{copy}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to={site.auditPath} className="btn-primary w-full sm:w-auto" data-track="cta_click">
              {site.primaryCta}
            </Link>
            <Link to="/book" className="btn-secondary w-full sm:w-auto" data-track="book_call_click">
              Book a strategy call
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/8 pt-32">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-orb -right-48 -top-40" aria-hidden="true" />
      <div className="section-shell relative z-10 grid min-h-[calc(100dvh-8rem)] items-center gap-16 pb-20 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:pb-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Calls answered around the clock
          </div>
          <h1 className="display-title max-w-4xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-stone-300 md:text-xl">{copy}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to={site.auditPath} className="btn-primary w-full sm:w-auto" data-track="cta_click">
              {site.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/what-we-build" className="btn-text w-full sm:w-auto">
              {site.secondaryCta}
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs tracking-wide text-stone-400">
            <span>No long-term contract</span>
            <span>Built for service businesses</span>
            <span>Setup around your rules</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:justify-self-end" aria-label="Example of a captured incoming lead">
          <div className="absolute -inset-8 rounded-full bg-accent/[0.07] blur-3xl" aria-hidden="true" />
          <div className="lead-console relative">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-[#17120f]">
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Incoming call answered</p>
                  <p className="mt-0.5 text-xs text-stone-400">12:42 AM · 01:18 duration</p>
                </div>
              </div>
              <span className="status-chip">Live</span>
            </div>

            <div className="space-y-4 p-5 md:p-6">
              <div className="rounded-2xl bg-white/[0.045] p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="micro-label mb-2">New lead</p>
                    <p className="text-xl font-medium">Emergency roadside tow</p>
                  </div>
                  <span className="text-xs font-medium text-accent">High urgency</span>
                </div>
                <dl className="grid grid-cols-2 gap-x-5 gap-y-4 text-sm">
                  <div>
                    <dt className="text-xs text-stone-500">Location</dt>
                    <dd className="mt-1 text-stone-200">I-40, Exit 159</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-500">Vehicle</dt>
                    <dd className="mt-1 text-stone-200">Ford F-150</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-500">Issue</dt>
                    <dd className="mt-1 text-stone-200">Won&apos;t start</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-500">Source</dt>
                    <dd className="mt-1 text-stone-200">Google profile</dd>
                  </div>
                </dl>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="console-stat">
                  <span className="console-stat__value">00:14</span>
                  <span className="console-stat__label">answer time</span>
                </div>
                <div className="console-stat">
                  <span className="console-stat__value">Sent</span>
                  <span className="console-stat__label">team alert</span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/8 pt-4 text-xs text-stone-400">
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                Caller details captured and routed automatically
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden border border-white/10 bg-[#17191a] px-4 py-3 shadow-2xl sm:block">
            <p className="text-xs text-stone-400">The job stays with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section className="section-shell py-24 md:py-32" aria-labelledby="showcase-heading">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="micro-label mb-5">Website concepts</p>
          <h2 id="showcase-heading" className="section-title">Built to make the next action obvious.</h2>
        </div>
        <div className="lg:justify-self-end">
          <p className="max-w-lg text-base font-light leading-7 text-stone-300">
            Sample directions for fast, phone-first service business websites. Concept work, not client performance claims.
          </p>
          <Link to={site.auditPath} className="btn-text mt-5 px-0" data-track="cta_click">
            Discuss your website <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="grid gap-x-5 gap-y-10 md:grid-cols-2">
        {showcaseItems.slice(0, 4).map((item, index) => (
          <article key={item.image} className={index % 2 === 1 ? 'md:translate-y-16' : ''}>
            <div className="showcase-frame group">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-90"
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="micro-label mb-2 text-accent">{item.eyebrow}</p>
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">{item.title}</h3>
              </div>
              <span className="font-mono text-xs text-stone-500">0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ['01', 'Find the leak', 'We review your calls, website, and follow-up to see where good leads disappear.'],
    ['02', 'Build around your rules', 'Your receptionist learns your business while the website is shaped around the call action.'],
    ['03', 'Route every lead', 'Your team receives the caller, service, location, urgency, and source in a clean summary.'],
    ['04', 'Measure the change', 'We track answered calls, booked opportunities, and lead sources at 30, 60, and 90 days.'],
  ];

  return (
    <section className="border-y border-white/8 bg-white/[0.02] py-24 md:py-32" aria-labelledby="process-heading">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="micro-label mb-5">How it works</p>
            <h2 id="process-heading" className="section-title">A clear path from missed call to booked job.</h2>
          </div>
          <ol className="border-t border-white/10">
            {steps.map(([number, title, body]) => (
              <li key={number} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[4rem_0.7fr_1.3fr] sm:gap-6 sm:py-9">
                <span className="font-mono text-xs tracking-[0.16em] text-accent">{number}</span>
                <h3 className="text-lg font-medium tracking-tight md:text-xl">{title}</h3>
                <p className="text-sm font-light leading-6 text-stone-300 md:text-base md:leading-7">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="section-shell py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <p className="micro-label mb-5">Straight answers</p>
          <h2 id="faq-heading" className="section-title">Questions before we get to work.</h2>
          <Link to="/faq" className="btn-text mt-8 px-0">
            View all questions <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="border-t border-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item group">
              <summary>
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-stone-500 transition-transform duration-300 group-open:rotate-180 group-open:text-accent" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="section-shell pb-24 md:pb-32">
      <div className="cta-panel">
        <div className="relative z-10 max-w-3xl">
          <p className="micro-label mb-5 text-[#4f2a1c]">Your next step</p>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#17120f] md:text-6xl">
            Find the calls and leads slipping through.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4f2a1c] md:text-lg">
            Get a free, plain-English review of your call handling, website, and follow-up. We will show you what to fix first.
          </p>
        </div>
        <Link to={site.auditPath} className="btn-dark relative z-10 shrink-0" data-track="cta_click">
          {site.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
