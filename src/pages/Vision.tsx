import { Container, Section } from '../components/home/Section';
import { NightToDawnField } from '../components/home/NightToDawnField';
import { CtaBand, Hero, Reveal } from '../components/PageSections';
import { Badge } from '../components/ui/badge';
import { accentFor } from '../content/palette';

const roadmap = [
  {
    phase: 'Now',
    title: 'Start with the phone',
    body: 'Most small service businesses lose revenue the same way: the phone rings and nobody answers. LYCORE fixes that first with 24/7 call handling, a phone-first website, and structured intake.',
    status: 'Available now',
  },
  {
    phase: 'Next',
    title: 'Automate the paperwork',
    body: 'Call details move into confirmations, routing, follow-up, and reporting without the owner touching a spreadsheet.',
    status: 'Rolling out to early partners',
  },
  {
    phase: 'Direction',
    title: 'Build the operating system',
    body: 'One system per industry, connecting the first call to dispatch, invoicing, repeat-business follow-up, and reporting.',
    status: 'Direction — not a product available today',
  },
  {
    phase: 'Long term',
    title: 'Move beyond the screen',
    body: 'As LYCORE understands each industry more deeply, the ambition can extend into physical infrastructure, logistics, and services that software alone cannot replace.',
    status: 'Long-term ambition',
  },
];

export default function Vision() {
  return (
    <NightToDawnField>
      <Hero title="Where We Are Building" copy="LYCORE starts with the call. The ambition goes further." />

      <Section divider={false} surface="ivory">
        <Container className="max-w-4xl">
          <div className="mb-14 text-center">
            <p className="micro-label mb-5 text-ink-muted">Build sequence</p>
            <h2 className="section-title text-ink">Useful now. Ambitious over time.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-ink-muted">
              Each layer earns the right to exist by making the previous one work better.
            </p>
          </div>

          <ol className="relative border-l border-[#092f69]/15 pl-8">
            {roadmap.map((step, index) => {
              const accent = accentFor(index);
              return (
                <Reveal key={step.phase} delay={index * 0.08}>
                  <li className="relative pb-14 last:pb-0">
                    <span
                      className="absolute -left-[2.65rem] flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold"
                      style={{ borderColor: `${accent}55`, backgroundColor: '#0b3478', color: accent }}
                    >
                      {index + 1}
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="micro-label" style={{ color: accent }}>{step.phase}</p>
                      <Badge>{step.status}</Badge>
                    </div>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink md:text-3xl">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-ink-muted md:text-base">{step.body}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </Section>

      <CtaBand />
    </NightToDawnField>
  );
}
