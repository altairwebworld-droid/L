import {
  Building2,
  Droplets,
  KeyRound,
  Scale,
  Truck,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { urgentCalls } from '../../content/calls';
import { gsap, useGSAP } from '../../lib/gsap';

const icons: Record<string, LucideIcon> = {
  plumbing: Droplets,
  towing: Truck,
  locksmith: KeyRound,
  hvac: Wind,
  restoration: Building2,
  bail: Scale,
};

/**
 * The signature scroll scene. Six urgent calls from one night, each from a
 * different trade and each carrying its own accent. Scrolling activates one
 * call at a time; the left column, the ambient light, the active row and the
 * outcome indicator all change with it.
 *
 * Deliberately NOT a single colour sweeping across every row — the point is
 * that these are six different businesses, six different nights being lost.
 *
 * Mobile and reduced-motion get a plain stacked list with every call visible
 * and no pinning, which is a designed fallback rather than a degraded one.
 */
export default function CallLedger() {
  const sceneRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      // Pinned, scrubbed scene: desktop with motion allowed.
      media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        setPinned(true);

        const trigger = ScrollTriggerFor(sceneRef.current, (progress) => {
          const index = Math.min(
            urgentCalls.length - 1,
            Math.floor(progress * urgentCalls.length),
          );
          setActive(index);
        });

        return () => {
          trigger?.kill();
          setPinned(false);
        };
      });

      return () => media.revert();
    },
    { scope: sceneRef },
  );

  const activeCall = urgentCalls[active];
  const ActiveIcon = icons[activeCall.id] ?? Droplets;

  return (
    <section
      id="call-ledger"
      ref={sceneRef}
      className="home-call-ledger relative isolate overflow-hidden px-6 py-14 md:py-0 md:min-h-screen md:flex md:items-center"
    >
      {/* Ambient light takes the active call's accent — the whole section
          changes temperature as you scroll, not just one row. */}
      <div
        aria-hidden="true"
        className="ambient-glow right-[-8%] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2"
        style={{ backgroundColor: `${activeCall.accent}38` }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[80rem] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        {/* Left: explanation, driven by whichever call is active. */}
        <div>
          <p className="micro-label mb-5 text-[#9fc0ea]">Every night, somewhere</p>
          <h2 className="section-title max-w-[15ch] text-ink">
            Every unanswered call can become someone else’s job.
          </h2>

          {pinned ? (
            <div className="mt-8 min-h-[15rem]">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-500"
                  style={{ backgroundColor: `${activeCall.accent}22` }}
                >
                  <ActiveIcon
                    className="h-5 w-5 transition-colors duration-500"
                    style={{ color: activeCall.accent }}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-500"
                  style={{ color: activeCall.accent }}
                >
                  {activeCall.industry}
                </span>
              </div>

              <p
                key={activeCall.id}
                className="mt-5 max-w-[46ch] text-[1.0625rem] font-light leading-[1.7] text-[#c3d8f3] md:text-[1.125rem]"
              >
                {activeCall.explanation}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2" role="list">
                {activeCall.steps.map((step) => (
                  <li
                    key={step}
                    className="rounded-lg border px-2.5 py-1.5 text-[0.82rem] transition-colors duration-500"
                    style={{
                      borderColor: `${activeCall.accent}38`,
                      backgroundColor: `${activeCall.accent}12`,
                      color: '#dbe8f8',
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-7 max-w-[46ch] text-[1.0625rem] font-light leading-[1.7] text-[#c3d8f3]">
              This is one ordinary night across six different trades. Every one of these
              calls is a job that goes to whoever picks up the phone first.
            </p>
          )}
        </div>

        {/* Right: the call log. */}
        <div
          className="call-ledger-panel overflow-hidden rounded-[1.75rem] border border-white/10 p-5 md:p-7"
          style={{
            background: 'linear-gradient(165deg, rgba(11,52,120,0.62), rgba(6,24,58,0.82))',
            boxShadow: '0 30px 80px rgba(2,12,38,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8fb2e4]">
              Call log — one night
            </p>
            <p className="tabular text-[0.78rem] text-[#8fb2e4]">
              {pinned ? `${active + 1} / ${urgentCalls.length}` : `${urgentCalls.length} calls`}
            </p>
          </div>

          <ol className="flex flex-col gap-1" role="list">
            {urgentCalls.map((call, index) => {
              const Icon = icons[call.id] ?? Droplets;
              // When pinned, only the active call is lit. When not pinned
              // (mobile / reduced motion) every call is shown resolved.
              const isActive = !pinned || index === active;
              const isPast = pinned && index < active;

              return (
                <li
                  key={call.id}
                  className="flex items-center gap-3 rounded-xl border px-3 py-3 transition-all duration-500 md:px-3.5"
                  style={{
                    borderColor: isActive ? `${call.accent}40` : 'rgba(255,255,255,0.06)',
                    backgroundColor: isActive
                      ? `${call.accent}16`
                      : isPast
                        ? 'rgba(255,255,255,0.025)'
                        : 'transparent',
                    opacity: isActive ? 1 : isPast ? 0.62 : 0.4,
                  }}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-500"
                    style={{
                      backgroundColor: isActive ? `${call.accent}26` : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    <Icon
                      className="h-4 w-4 transition-colors duration-500"
                      style={{ color: isActive ? call.accent : 'rgba(255,255,255,0.45)' }}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="tabular text-[0.82rem] text-[#8fb2e4]">{call.time}</span>
                      <span className="text-[0.94rem] font-medium leading-snug text-white">
                        {call.summary}
                      </span>
                    </span>
                    <span className="mt-0.5 block text-[0.8rem] text-[#8fb2e4]">
                      {call.industry} · {call.value}
                    </span>
                  </span>

                  <span
                    className="shrink-0 rounded-md px-2 py-1 text-[0.7rem] font-semibold transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? `${call.accent}22` : 'transparent',
                      color: isActive ? call.accent : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    {isActive ? call.outcome : 'ringing'}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/**
 * Small helper so the component body stays readable. Creates the pinned,
 * scrubbed trigger and reports normalised progress back to React.
 */
function ScrollTriggerFor(
  element: HTMLElement | null,
  onProgress: (progress: number) => void,
) {
  if (!element) return null;

  return gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: '+=320%',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => onProgress(self.progress),
    },
  }).scrollTrigger;
}
