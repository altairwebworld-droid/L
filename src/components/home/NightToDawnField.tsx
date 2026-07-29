import { ReactNode } from 'react';

/**
 * The continuous page field.
 *
 * Earlier this cut to a hard cream band partway down, which produced exactly
 * the two problems the design brief calls out: harsh section boundaries, and
 * light-on-light text wherever a section did not opt into the cream token set.
 * It is now one uninterrupted deep-cobalt field whose temperature drifts
 * slowly — indigo through cobalt and back — so adjacent sections dissolve into
 * each other instead of stacking as slides.
 *
 * Sections that want a light surface now carry their own cream background with
 * faded edges (see Section.tsx), so they are self-consistent no matter where
 * they land on the page.
 */
export function NightToDawnField({ children }: { children: ReactNode }) {
  return (
    <div className="lycore-signal-field relative isolate">
      {/* Base field. Long, low-contrast stops — no visible banding edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            'linear-gradient(',
            'to bottom,',
            '#061b42 0%,',
            '#08265a 22%,',
            '#0a2f6e 44%,',
            '#082a60 68%,',
            '#071f4a 86%,',
            '#061b42 100%',
            ')',
          ].join(' '),
        }}
      />

      {/* Ambient depth. Two fixed radial fields keep the page from reading as
          a flat wash without introducing another hard edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            'radial-gradient(ellipse 60% 30% at 85% 8%, rgba(47,131,245,0.16), transparent 70%)',
            'radial-gradient(ellipse 50% 25% at 10% 52%, rgba(139,124,232,0.10), transparent 70%)',
            'radial-gradient(ellipse 55% 28% at 90% 78%, rgba(79,176,164,0.08), transparent 70%)',
          ].join(', '),
        }}
      />

      {children}
    </div>
  );
}
