import { ArrowUpRight, Check } from 'lucide-react';
import { Container, Section } from '../components/home/Section';
import { NightToDawnField } from '../components/home/NightToDawnField';
import { AccentChip, CtaBand, FaqSection, Hero, Reveal } from '../components/PageSections';
import TiltCard from '../components/TiltCard';
import { accentFor } from '../content/palette';
import { globalFaqs, site } from '../siteData';

const towingActions = [
  'Answers every call 24/7 in your company name',
  'Captures vehicle type, location, keys-or-no-keys, and urgency',
  'Sends job details to your dispatcher or driver by text and email',
  'Transfers live calls to your on-call driver when your rules are met',
  'Makes tap-to-call the first action on your mobile website',
  'Connects the website, Google profile, and call tracking',
];

const towingProcess = [
  ['Review the calls', 'Find when calls ring, when they are answered, and where good jobs disappear.'],
  ['Set the rules', 'Train the receptionist on service area, rate structure, dispatch process, and escalation rules.'],
  ['Build the call path', 'Make the website fast, the number obvious, and each job summary immediately useful.'],
  ['Measure the change', 'Review answered calls, dispatched opportunities, and lead sources at 30, 60, and 90 days.'],
];

export default function Towing() {
  return (
    <NightToDawnField>
      <Hero
        title="Towing Websites and 24/7 Call Answering"
        copy="LYCORE builds phone-first websites and answers every call for towing companies — so the stranded driver at midnight reaches you, not your competitor."
      />

      <Section divider={false}>
        <Container className="max-w-4xl text-center">
          <Reveal>
            <p className="micro-label mb-5 text-ink-muted">01 / The missed tow</p>
            <h2 className="section-title text-ink">At 1 a.m., four unanswered rings are enough to lose the job.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-ink-muted">
              A stranded driver searches "tow truck near me," taps your listing, and reaches voicemail. They call the next result. You never know the opportunity existed.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section surface="ivory">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="micro-label mb-5 text-ink-muted">02 / The response</p>
            <h2 className="section-title text-ink">Every caller reaches a system that knows what to ask next.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {towingActions.map((action, index) => (
              <Reveal key={action} delay={(index % 4) * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-[#092f69]/12 bg-white/50 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${accentFor(index)}1f` }}>
                    <Check className="h-4 w-4" style={{ color: accentFor(index) }} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-light leading-relaxed text-ink-muted">{action}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#092f69]/25 px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:border-[#092f69]/50"
            href={site.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Discuss your call flow <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Container>
      </Section>

      <Section surface="ivory">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="micro-label mb-5 text-ink-muted">From ring to dispatch</p>
            <h2 className="section-title text-ink">A practical four-step setup.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {towingProcess.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <TiltCard className="h-full" variant="white">
                  <div className="flex h-full flex-col gap-4 p-6">
                    <AccentChip index={index} accent={accentFor(index)} />
                    <h3 className="text-base font-medium tracking-tight text-[#0b3478]">{title}</h3>
                    <p className="text-sm font-light leading-relaxed text-[#4a5f8a]">{body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection faqs={[globalFaqs[1], globalFaqs[4], globalFaqs[5], globalFaqs[6]]} />
      <CtaBand />
    </NightToDawnField>
  );
}
