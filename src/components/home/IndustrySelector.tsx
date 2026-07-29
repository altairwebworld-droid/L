import {
  ArrowRight,
  Bug,
  Car,
  Droplets,
  Flame,
  HeartPulse,
  KeyRound,
  Scale,
  Building2,
  Truck,
  UtensilsCrossed,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import { industries } from '../../content/industries';

const icons: Record<string, LucideIcon> = {
  Towing: Truck,
  Plumbing: Droplets,
  HVAC: Wind,
  Locksmiths: KeyRound,
  Restoration: Building2,
  Roofing: Flame,
  Electrical: Zap,
  'Auto repair': Car,
  'Pest control': Bug,
  'Bail bonds': Scale,
  'Urgent care': HeartPulse,
  Restaurants: UtensilsCrossed,
};

/**
 * Two-column industry selector. The left list is a real tablist; the right
 * panel shows that industry's actual pain, workflow and outcome — each with
 * its own accent, so switching industries visibly changes the whole panel
 * rather than swapping a label.
 */
export default function IndustrySelector() {
  const [active, setActive] = useState(0);
  const industry = industries[active];
  const ActiveIcon = icons[industry.name] ?? Droplets;

  return (
    <section id="industries" className="relative px-6 py-12 md:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="ambient-glow left-[4%] top-[20%] h-[30rem] w-[30rem] transition-colors duration-700"
        style={{ backgroundColor: `${industry.accent}26` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[80rem]">
        <div className="mb-12 max-w-[40rem]">
          <p className="micro-label mb-5 text-[#9fc0ea]">Who this is for</p>
          <h2 className="section-title text-ink">
            Built for businesses where delayed responses cost real revenue.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10">
          {/* Left: industry list. Horizontal scroll on mobile, list on desktop. */}
          <div
            role="tablist"
            aria-label="Industries"
            aria-orientation="vertical"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {industries.map((item, index) => {
              const Icon = icons[item.name] ?? Droplets;
              const isActive = index === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  id={`industry-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls="industry-panel"
                  onClick={() => setActive(index)}
                  className="flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:w-full lg:shrink"
                  style={{
                    borderColor: isActive ? `${item.accent}45` : 'rgba(255,255,255,0.07)',
                    backgroundColor: isActive ? `${item.accent}14` : 'transparent',
                  }}
                >
                  <Icon
                    className="h-4 w-4 shrink-0 transition-colors duration-300"
                    style={{ color: isActive ? item.accent : 'rgba(255,255,255,0.4)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="whitespace-nowrap text-[0.94rem] font-medium transition-colors duration-300"
                    style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.62)' }}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: the selected industry's workflow. */}
          <div
            role="tabpanel"
            id="industry-panel"
            aria-labelledby={`industry-tab-${active}`}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 p-7 transition-colors duration-500 md:p-9"
            style={{
              background: `linear-gradient(160deg, ${industry.accent}12, rgba(11,52,120,0.6) 40%, rgba(6,24,58,0.85))`,
              boxShadow: '0 28px 70px rgba(2,12,38,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-500"
                style={{ backgroundColor: `${industry.accent}24` }}
              >
                <ActiveIcon
                  className="h-5 w-5 transition-colors duration-500"
                  style={{ color: industry.accent }}
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="text-[1.3rem] font-semibold tracking-tight text-ink">
                  {industry.name}
                </h3>
                <p
                  className="text-[0.76rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-500"
                  style={{ color: industry.accent }}
                >
                  Where the revenue leaks
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-[48ch] text-[1rem] font-light leading-[1.65] text-[#c3d8f3]">
              {industry.pain}
            </p>

            {/* Workflow. */}
            <ol className="mt-7 flex flex-col" role="list">
              {industry.workflow.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex flex-col items-center self-stretch">
                    <span
                      className="tabular flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold transition-colors duration-500"
                      style={{
                        backgroundColor: `${industry.accent}22`,
                        color: industry.accent,
                      }}
                    >
                      {index + 1}
                    </span>
                    {index < industry.workflow.length - 1 && (
                      <span className="h-full min-h-[1.25rem] w-px flex-1 bg-white/10" aria-hidden="true" />
                    )}
                  </span>
                  <span className="pb-4 text-[0.95rem] leading-snug text-white last:pb-0">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            {/* Outcome. */}
            <div
              className="mt-6 flex items-start gap-3 rounded-xl border px-4 py-3.5 transition-colors duration-500"
              style={{
                borderColor: `${industry.accent}30`,
                backgroundColor: `${industry.accent}12`,
              }}
            >
              <ArrowRight
                className="mt-0.5 h-4 w-4 shrink-0 transition-colors duration-500"
                style={{ color: industry.accent }}
                aria-hidden="true"
              />
              <p className="text-[0.94rem] leading-snug text-white">{industry.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
