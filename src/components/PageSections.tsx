import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, BadgeCheck, CalendarCheck2, ChevronDown, Crosshair, RefreshCw } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Faq, showcaseItems, site } from '../siteData';

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function DispatchMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div className={`dispatch-media ${ready ? 'dispatch-media--ready' : ''}`}>
      <img
        src="/lycore-dispatch-poster.webp"
        alt=""
        className="dispatch-media__poster"
        aria-hidden="true"
      />
      {!reduceMotion && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/lycore-dispatch-poster.webp"
          onCanPlay={() => setReady(true)}
          aria-label="Animated LYCORE dispatch carousel moving leads from capture to qualification, booking, and follow-up"
        >
          <source src="/lycore-dispatch-carousel.mp4" type="video/mp4" />
        </video>
      )}
      <div className="dispatch-media__status" aria-hidden="true">
        <span />
        {reduceMotion ? 'Static preview' : ready ? 'System live' : 'Preparing demonstration'}
      </div>
    </div>
  );
}

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
      <section className="page-intro">
        <div className="page-intro__index" aria-hidden="true">LY / SYSTEMS</div>
        <Reveal className="page-intro__content">
          <p className="micro-label mb-6">LYCORE customer systems</p>
          <h1 className="display-title">{title}</h1>
          <p className="page-intro__copy">{copy}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to={site.auditPath} className="btn-primary w-full sm:w-auto" data-track="cta_click">
              {site.primaryCta}
            </Link>
            <Link to="/book" className="btn-secondary w-full sm:w-auto" data-track="book_call_click">
              Book a strategy call
            </Link>
          </div>
        </Reveal>
        <div className="page-intro__rule" aria-hidden="true"><span /></div>
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
        <p className="dispatch-kicker">Customer communication, connected</p>
        <div className="dispatch-wordmark" aria-hidden="true">LYCORE</div>

        <div className="dispatch-copy">
          <h1 id="dispatch-hero-title">
            <span>Capture. </span><span>Qualify. </span><span>Dispatch. </span><span>Follow up.</span>
          </h1>
          <p>The lead system that keeps your pipeline moving and your calendar full.</p>
          <Link to="/what-we-build" className="dispatch-cta">
            See how it works <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <DispatchMedia />

        <div className="dispatch-note">
          <span className="dispatch-note__number">01</span>
          <p>One connected route from incoming lead to booked job.</p>
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

export function FaqSection({ faqs, showAllLink = true }: { faqs: Faq[]; showAllLink?: boolean }) {
  return (
    <section id="faq" className="section-shell py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <p className="micro-label mb-5">Straight answers</p>
          <h2 id="faq-heading" className="section-title">Questions before we get to work.</h2>
          {showAllLink && (
            <Link to="/faq" className="btn-text mt-8 px-0">
              View all questions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
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
