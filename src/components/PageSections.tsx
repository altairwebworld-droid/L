import { ArrowDown, ArrowLeft, ArrowRight, BadgeCheck, CalendarCheck2, ChevronDown, Crosshair, RefreshCw } from 'lucide-react';
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

  const benefits = [
    { icon: Crosshair, label: 'Capture more opportunities' },
    { icon: BadgeCheck, label: 'Qualify with confidence' },
    { icon: CalendarCheck2, label: 'Book more appointments' },
    { icon: RefreshCw, label: 'Follow up that converts' },
  ];

  return (
    <section className="dispatch-hero" aria-labelledby="dispatch-hero-title">
      <div className="dispatch-frame">
        <div className="dispatch-wordmark" aria-hidden="true">LYCORE</div>

        <Link className="dispatch-side-tab dispatch-side-tab--left" to="/vision" aria-label="Explore the LYCORE vision">
          <ArrowLeft aria-hidden="true" />
        </Link>
        <Link className="dispatch-side-tab dispatch-side-tab--right" to="/what-we-build" aria-label="Explore LYCORE systems">
          <ArrowRight aria-hidden="true" />
        </Link>

        <div className="dispatch-copy">
          <h1 id="dispatch-hero-title">
            <span>Capture. </span><span>Qualify. </span><span>Dispatch. </span><span>Follow up.</span>
          </h1>
          <p>The lead system that keeps your pipeline moving and your calendar full.</p>
          <Link to="/what-we-build" className="dispatch-cta">
            See how it works <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="dispatch-media">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/lycore-dispatch-poster.webp"
            aria-label="Animated LYCORE dispatch carousel moving leads from capture to qualification, booking, and follow-up"
          >
            <source src="/lycore-dispatch-carousel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="dispatch-note">
          <p>Designed to turn more leads into booked jobs. Automatically.</p>
          <span><span aria-hidden="true">+</span> Follow up</span>
        </div>

        <div className="dispatch-points" aria-hidden="true">
          <span className="dispatch-point dispatch-point--capture">Capture</span>
          <span className="dispatch-point dispatch-point--qualify">Qualify</span>
          <span className="dispatch-point dispatch-point--book">Book</span>
        </div>

        <ul className="dispatch-benefits" aria-label="LYCORE system benefits">
          {benefits.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span><Icon aria-hidden="true" /></span>
              {label}
            </li>
          ))}
        </ul>

        <a className="dispatch-scroll" href="#problem-heading" aria-label="Scroll to learn more">
          <ArrowDown aria-hidden="true" />
        </a>
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
          <p className="micro-label mb-5 text-[#225a9f]">Your next step</p>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#082f68] md:text-6xl">
            Find the calls and leads slipping through.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#225a9f] md:text-lg">
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
