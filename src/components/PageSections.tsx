import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { accentFor } from '../content/palette';
import { Faq, site } from '../siteData';
import { Container, Section } from './home/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

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

/** Colored number/icon chip reused across page lists to inject accent color. */
export function AccentChip({ index, accent, children }: { index?: number; accent: string; children?: React.ReactNode }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold"
      style={{ backgroundColor: `${accent}1f`, color: accent }}
    >
      {children ?? (typeof index === 'number' ? String(index + 1).padStart(2, '0') : null)}
    </span>
  );
}

export function Hero({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-28 md:pb-12 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full opacity-30 blur-[110px]"
        style={{ background: 'radial-gradient(circle, #4b8df8, transparent 70%)' }}
      />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="micro-label mb-5 inline-flex items-center gap-2 text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
          Customer systems
        </p>
        <h1 className="display-title text-ink">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-relaxed text-ink-muted">{copy}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to={site.auditPath} className="btn-primary w-full sm:w-auto" data-track="cta_click">
            {site.primaryCta}
          </Link>
          <Link to="/book" className="btn-secondary w-full sm:w-auto" data-track="book_call_click">
            Book a strategy call
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ['Find the leak', 'We review your calls, website, and follow-up to see where good leads disappear.'],
    ['Build around your rules', 'Your receptionist learns your business while the website is shaped around the call action.'],
    ['Route every lead', 'Your team receives the caller, service, location, urgency, and source in a clean summary.'],
    ['Measure the change', 'We track answered calls, booked opportunities, and lead sources at 30, 60, and 90 days.'],
  ];

  return (
    <Section surface="ivory">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="micro-label mb-5 text-ink-muted">How it works</p>
            <h2 className="section-title text-ink">A clear path from missed call to booked job.</h2>
          </div>
          <ol className="border-t border-[#092f69]/12">
            {steps.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <li className="grid grid-cols-[2.75rem_1fr] items-start gap-5 border-b border-[#092f69]/12 py-7 sm:grid-cols-[2.75rem_0.7fr_1.3fr] sm:items-center sm:gap-6 sm:py-9">
                  <AccentChip index={index} accent={accentFor(index)} />
                  <h3 className="text-lg font-medium tracking-tight text-ink md:text-xl">{title}</h3>
                  <p className="col-span-2 text-sm font-light leading-6 text-ink-muted sm:col-span-1 sm:text-base sm:leading-7">{body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

export function FaqSection({ faqs, showAllLink = true }: { faqs: Faq[]; showAllLink?: boolean }) {
  return (
    <Section id="faq" surface="ivory">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="micro-label mb-5 text-ink-muted">Straight answers</p>
            <h2 className="section-title text-ink">Questions before we get to work.</h2>
            {showAllLink && (
              <Link to="/faq" className="btn-text mt-8 px-0">
                View all questions <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
          <Accordion type="single" collapsible defaultValue={faqs[0]?.question}>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-[#092f69]/12">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}

export function CtaBand() {
  return (
    <section className="px-6 pb-14 md:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="cta-panel">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-[90px]"
            style={{ background: 'radial-gradient(circle, #ffffff, transparent 70%)' }}
          />
          <div className="relative z-10 max-w-3xl">
            <p className="micro-label mb-5">Your next step</p>
            <h2 className="section-title text-[#082f68]">
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
      </div>
    </section>
  );
}

export function ScrollCue({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} aria-label={label} className="mx-auto mt-14 flex w-fit text-ink-muted transition-colors hover:text-ink">
      <ChevronDown className="h-5 w-5 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
    </a>
  );
}
