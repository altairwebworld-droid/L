import { Check } from 'lucide-react';
import { Container, Section } from '../components/home/Section';
import { NightToDawnField } from '../components/home/NightToDawnField';
import { PrincipleScrub } from '../components/home/PrincipleScrub';
import { CtaBand, FaqSection, Hero, Reveal } from '../components/PageSections';
import { accentFor } from '../content/palette';
import { globalFaqs, site } from '../siteData';

const principles = [
  {
    title: 'Start with the missed-call problem',
    body: 'LYCORE GROUP LLC builds customer communication and workflow systems for service businesses. The work starts where revenue usually disappears: an unanswered call or delayed follow-up.',
  },
  {
    title: 'Shape the system around the operation',
    body: 'Call handling, lead capture, booking, SMS, CRM integration, and follow-up are configured around the way the client actually works — not around a generic software template.',
  },
  {
    title: 'Measure the work honestly',
    body: 'We do not guarantee rankings, revenue, or call volume. We measure answered calls, booked opportunities, lead sources, and system performance so the numbers can tell the story.',
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
            <h2 className="section-title text-ink">Four signals we keep visible.</h2>
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

      <FaqSection faqs={[globalFaqs[0], globalFaqs[10]]} />
      <CtaBand />
    </NightToDawnField>
  );
}
