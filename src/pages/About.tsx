import { Check } from 'lucide-react';
import { Container, Section } from '../components/home/Section';
import { NightToDawnField } from '../components/home/NightToDawnField';
import { PrincipleScrub } from '../components/home/PrincipleScrub';
import { CtaBand, FaqSection, Hero, Reveal } from '../components/PageSections';
import { accentFor } from '../content/palette';
import { globalFaqs, site } from '../siteData';
import { deliveryStandards } from '../content/deliveryStandards';

const principles = [
  {
    title: 'Start with the missed-call problem',
    body: 'LYCORE GROUP LLC builds customer communication and workflow systems for service businesses. The work starts where revenue usually disappears: an unanswered call or delayed follow-up.',
  },
  {
    title: 'Shape the system around the operation',
    body: 'Call handling, lead capture, booking, SMS, CRM integration and follow-up start with your operating rules, current software and the people who handle exceptions.',
  },
  {
    title: 'Measure the work honestly',
    body: 'LYCORE does not guarantee rankings, revenue or call volume. The scope defines what to track, where the records come from and how to separate automated activity from customer outcomes.',
  },
];

const signals = ['Answered calls', 'Booked opportunities', 'Lead sources', 'System performance'];

export default function About() {
  return (
    <NightToDawnField>
      <Hero title="About LYCORE" copy={site.coreStatement} />

      <Section divider={false}>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="micro-label mb-5 text-ink-muted">Why LYCORE exists</p>
            <p className="section-title text-ink">
              A good service business should not lose the job simply because everyone was already helping someone else.
            </p>
          </Reveal>
        </Container>
      </Section>

      <PrincipleScrub eyebrow="How we work" principles={principles} />

      <Section surface="ivory">
        <Container className="grid gap-8 lg:grid-cols-[0.5fr_1fr] lg:items-center">
          <div>
            <p className="micro-label mb-5 text-ink-muted">The operating view</p>
            <h2 className="section-title text-ink">Agree what to track.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {signals.map((signal, index) => (
              <li key={signal} className="flex items-center gap-3 rounded-2xl border border-[#092f69]/12 bg-white/50 px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${accentFor(index)}1f` }}>
                  <Check className="h-4 w-4" style={{ color: accentFor(index) }} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink">{signal}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section><Container><p className="micro-label text-ink-muted">Delivery checklist</p><h2 className="section-title mt-4">Before a workflow goes live.</h2><p className="mt-5 max-w-3xl leading-relaxed text-ink-muted">The checklist below defines what LYCORE agrees, tests and documents before launch.</p><ol className="mt-8 grid gap-6 md:grid-cols-2">{deliveryStandards.map((step, index) => <li key={step.title} className="rounded-2xl border border-current/15 p-6"><p className="micro-label text-ink-muted">{String(index + 1).padStart(2, '0')}</p><h3 className="mt-3 font-display text-2xl text-ink">{step.title}</h3><p className="mt-3 leading-relaxed text-ink-muted">{step.detail}</p></li>)}</ol></Container></Section>
      <FaqSection faqs={[globalFaqs[0], globalFaqs[10]]} />
      <CtaBand />
    </NightToDawnField>
  );
}
