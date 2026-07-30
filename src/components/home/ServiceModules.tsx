import {
  ArrowRight,
  Check,
  Globe,
  MapPin,
  MessageSquare,
  PhoneCall,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { accents } from '../../content/palette';
import { SliderControls } from './SliderControls';

/**
 * Service modules as an asymmetric editorial grid. Deliberately not five
 * identical cards: each module gets its own proportion, its own accent, and
 * its own interface demonstration, because they do genuinely different jobs.
 */

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ServiceModules() {
  const railRef = useRef<HTMLDivElement>(null);

  return (
    <section className="home-service-modules relative px-6 py-12 md:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="ambient-glow left-[8%] top-[6%] h-[28rem] w-[28rem]"
        style={{ backgroundColor: 'rgba(75,141,248,0.16)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[80rem]">
        <div className="signal-slider-heading mb-14">
          <div className="max-w-[38rem]">
            <p className="micro-label mb-5 text-[#9fc0ea]">What LYCORE runs</p>
            <h2 className="section-title text-ink">
              From the first ring to a lead your team can act on.
            </h2>
          </div>
          <SliderControls railRef={railRef} label="services" />
        </div>

        <div ref={railRef} className="signal-slider signal-slider--services grid grid-cols-12 gap-4 md:gap-5">
          <ReceptionModule />
          <WebsiteModule />
          <ProfileModule />
          <IntakeModule />
          <SystemsModule />
        </div>
      </div>
    </section>
  );
}

/* ---- 1. Large: 24/7 reception ---------------------------------------- */

const callFields = [
  ['Caller need', 'Burst pipe, ground floor'],
  ['Service area', 'Inside coverage / Zone 2'],
  ['Urgency', 'Emergency'],
  ['Transfer', 'On-call tech notified'],
];

function ReceptionModule() {
  return (
    <motion.article
      {...reveal}
      className="col-span-12 overflow-hidden rounded-[1.75rem] border border-white/10 p-7 md:p-9 lg:col-span-7"
      style={{
        background: 'linear-gradient(160deg, rgba(11,52,120,0.78), rgba(6,24,58,0.9))',
        boxShadow: '0 28px 70px rgba(2,12,38,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accents.amber}22` }}
        >
          <PhoneCall className="h-5 w-5" style={{ color: accents.amber }} aria-hidden="true" />
        </span>
        <span
          className="text-[0.76rem] font-semibold uppercase tracking-[0.14em]"
          style={{ color: accents.amber }}
        >
          Always on
        </span>
      </div>

      <h3 className="section-title--sm mt-6 max-w-[16ch] text-ink">
        24/7 reception and call handling
      </h3>
      <p className="mt-4 max-w-[46ch] text-[1rem] font-light leading-[1.65] text-[#bfd5f2]">
        Every call answered in your business name, with the details your team needs
        to act captured before the caller hangs up.
      </p>

      {/* Live call interface. */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-[#061838]/60 p-5">
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <span className="flex items-center gap-2">
            <span
              className="h-2 w-2 animate-pulse rounded-full motion-reduce:animate-none"
              style={{ backgroundColor: accents.amber }}
            />
            <span className="text-[0.85rem] font-medium text-white">Call in progress</span>
          </span>
          <span className="tabular text-[0.8rem] text-[#8fb2e4]">00:41</span>
        </div>

        <dl className="mt-3 flex flex-col">
          {callFields.map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-white/6 py-2.5 last:border-0"
            >
              <dt className="text-[0.85rem] text-[#8fb2e4]">{label}</dt>
              <dd className="text-right text-[0.88rem] font-medium text-white">{value}</dd>
            </div>
          ))}
        </dl>

        <p
          className="mt-3 rounded-lg px-3 py-2.5 text-[0.85rem]"
          style={{ backgroundColor: `${accents.amber}14`, color: '#e8dcc4' }}
        >
          Summary sent to your team: name, number, location, urgency.
        </p>
      </div>
    </motion.article>
  );
}

/* ---- 2. Medium: websites --------------------------------------------- */

const journey = ['Search result', 'Service page', 'Call placed', 'Appointment booked'];

function WebsiteModule() {
  return (
    <motion.article
      {...reveal}
      transition={{ ...reveal.transition, delay: 0.06 }}
      className="col-span-12 overflow-hidden rounded-[1.75rem] border p-7 md:p-8 lg:col-span-5"
      style={{
        borderColor: 'rgba(9,47,105,0.1)',
        background: 'linear-gradient(165deg, #f6f2e8, #eae3d5)',
        boxShadow: '0 24px 60px rgba(2,12,38,0.3)',
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accents.cyan}24` }}
        >
          <Globe className="h-5 w-5" style={{ color: '#2b7d8c' }} aria-hidden="true" />
        </span>
        <span className="text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-[#2b7d8c]">
          Phone-first
        </span>
      </div>

      <h3 className="section-title--sm mt-6 max-w-[14ch] text-[#092f69]">
        Websites that convert callers
      </h3>
      <p className="mt-3 text-[0.98rem] font-light leading-[1.6] text-[#4a5f8a]">
        Built for someone holding a phone in an emergency, not someone browsing
        on a laptop.
      </p>

      {/* A real build, not a mockup metaphor. */}
      <div className="mt-5 overflow-hidden rounded-xl border border-[#092f69]/12 shadow-[0_16px_40px_rgba(9,47,105,0.18)]">
        <img
          src="/showcase/concept-11.png"
          alt="Phone-first plumbing website concept with an emergency call action above the fold"
          className="aspect-[16/10] w-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Customer journey, kept to one compact line per step. */}
      <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5" role="list">
        {journey.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="text-[0.85rem] font-medium text-[#092f69]">{step}</span>
            {index < journey.length - 1 && (
              <span className="text-[#2b7d8c]" aria-hidden="true">→</span>
            )}
          </li>
        ))}
      </ol>
    </motion.article>
  );
}

/* ---- 3. Medium: Google Business Profile ------------------------------ */

const profileMetrics = [
  ['Listing completeness', 94],
  ['Calls from listing', 72],
  ['Review activity', 61],
  ['Direction requests', 48],
] as const;

function ProfileModule() {
  return (
    <motion.article
      {...reveal}
      transition={{ ...reveal.transition, delay: 0.06 }}
      className="col-span-12 overflow-hidden rounded-[1.75rem] border border-white/10 p-7 md:p-8 lg:col-span-5"
      style={{
        background: 'linear-gradient(160deg, rgba(9,42,96,0.8), rgba(6,24,58,0.9))',
        boxShadow: '0 24px 60px rgba(2,12,38,0.36), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accents.teal}22` }}
        >
          <MapPin className="h-5 w-5" style={{ color: accents.teal }} aria-hidden="true" />
        </span>
        <span
          className="text-[0.76rem] font-semibold uppercase tracking-[0.14em]"
          style={{ color: accents.teal }}
        >
          Local search
        </span>
      </div>

      <h3 className="section-title--sm mt-6 max-w-[16ch] text-ink">
        Google Business Profile optimisation
      </h3>
      <p className="mt-4 text-[0.98rem] font-light leading-[1.6] text-[#bfd5f2]">
        Help nearby customers find, trust and contact your business when they are
        ready to act.
      </p>

      <dl className="mt-7 flex flex-col gap-4">
        {profileMetrics.map(([label, value]) => (
          <div key={label}>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[0.86rem] text-[#bfd5f2]">{label}</dt>
              <dd className="tabular text-[0.86rem] font-semibold" style={{ color: accents.teal }}>
                {value}%
              </dd>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full"
                style={{ width: `${value}%`, backgroundColor: accents.teal }}
              />
            </div>
          </div>
        ))}
      </dl>
    </motion.article>
  );
}

/* ---- 4. Wide horizontal: intake and follow-up ------------------------ */

const intakeFlow = [
  { label: 'Missed call', icon: PhoneCall },
  { label: 'Automatic text sent', icon: MessageSquare },
  { label: 'Information captured', icon: Check },
  { label: 'Team notified', icon: ArrowRight },
  { label: 'Appointment confirmed', icon: Check },
];

function IntakeModule() {
  return (
    <motion.article
      {...reveal}
      className="col-span-12 overflow-hidden rounded-[1.75rem] border border-white/10 p-7 md:p-9 lg:col-span-7"
      style={{
        background:
          'linear-gradient(120deg, rgba(139,124,232,0.16), rgba(11,52,120,0.7) 45%, rgba(6,24,58,0.88))',
        boxShadow: '0 28px 70px rgba(2,12,38,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-[30rem]">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${accents.violet}24` }}
            >
              <Workflow className="h-5 w-5" style={{ color: accents.violet }} aria-hidden="true" />
            </span>
            <span
              className="text-[0.76rem] font-semibold uppercase tracking-[0.14em]"
              style={{ color: accents.violet }}
            >
              Runs itself
            </span>
          </div>

          <h3 className="section-title--sm mt-6 text-ink">Intake and follow-up systems</h3>
          <p className="mt-4 text-[1rem] font-light leading-[1.65] text-[#bfd5f2]">
            The paperwork behind the call fills itself in, and nothing waits on
            someone remembering to send it.
          </p>
        </div>
      </div>

      {/* Horizontal flow — scrolls on narrow screens rather than wrapping. */}
      <div className="-mx-2 mt-8 overflow-x-auto px-2 pb-1">
        <ol className="flex min-w-max items-center gap-2" role="list">
          {intakeFlow.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.label} className="flex items-center gap-2">
                <span
                  className="flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5"
                  style={{
                    borderColor: `${accents.violet}30`,
                    backgroundColor: `${accents.violet}12`,
                  }}
                >
                  <Icon
                    className="h-4 w-4 shrink-0"
                    style={{ color: accents.violet }}
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap text-[0.86rem] font-medium text-white">
                    {step.label}
                  </span>
                </span>
                {index < intakeFlow.length - 1 && (
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-white/25"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </motion.article>
  );
}

/* ---- 5. Small supporting: business systems --------------------------- */

function SystemsModule() {
  return (
    <motion.article
      {...reveal}
      transition={{ ...reveal.transition, delay: 0.06 }}
      className="col-span-12 flex flex-col justify-between gap-6 rounded-[1.75rem] border border-white/8 px-7 py-6 md:flex-row md:items-center md:px-9"
      style={{ background: 'rgba(255,255,255,0.022)' }}
    >
      <div className="flex items-start gap-4 md:items-center">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accents.coral}20` }}
        >
          <Workflow className="h-5 w-5" style={{ color: accents.coral }} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-[1.15rem] font-semibold tracking-tight text-ink">
            Business systems
          </h3>
          <p className="mt-1 max-w-[52ch] text-[0.95rem] font-light leading-[1.6] text-[#bfd5f2]">
            Less manual coordination, fewer repeated tasks, and less information
            lost between the people who need it.
          </p>
        </div>
      </div>

      <span
        className="shrink-0 self-start rounded-lg px-3 py-1.5 text-[0.78rem] font-medium md:self-auto"
        style={{ backgroundColor: `${accents.coral}18`, color: accents.coral }}
      >
        In development
      </span>
    </motion.article>
  );
}
