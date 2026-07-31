import { useRef, useState } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { Container } from './Section';

/**
 * Replaces the banned "three white cards + numbered circles" pattern.
 * Principles crossfade one at a time as the section is pinned and scrubbed,
 * with a thin single-accent progress line growing alongside. No cards.
 */
export function PrincipleScrub({
  eyebrow,
  principles,
}: {
  eyebrow: string;
  principles: { title: string; body: string }[];
}) {
  const sceneRef = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add('(max-width: 767px), (prefers-reduced-motion: reduce)', () => {
        setReduced(true);
      });

      media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        setReduced(false);
        const slides = gsap.utils.toArray<HTMLElement>('.principle-slide');

        gsap.set(slides.slice(1), { autoAlpha: 0 });
        gsap.set('.principle-progress', { scaleY: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sceneRef.current,
            start: 'top top',
            end: '+=220%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        slides.forEach((slide, index) => {
          if (index > 0) {
            tl.to(slides[index - 1], { autoAlpha: 0, duration: 0.3 }, index - 0.35)
              .to(slide, { autoAlpha: 1, duration: 0.3 }, index - 0.35);
          }
        });

        tl.to('.principle-progress', { scaleY: 1, duration: slides.length, ease: 'none' }, 0);

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => media.revert();
    },
    { scope: sceneRef },
  );

  return (
    <section
      ref={sceneRef}
      className="relative isolate overflow-hidden py-24 md:py-0 md:min-h-screen md:flex md:items-center"
      style={{ backgroundColor: 'rgba(14, 50, 108, 0.6)', '--color-ink': '#ffffff', '--color-ink-muted': '#a9c5ec' } as React.CSSProperties}
    >
      <Container className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:items-center">
        <div className="flex items-center gap-5 lg:flex-col lg:items-start">
          <p className="micro-label text-ink-muted">{eyebrow}</p>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/10 lg:h-64 lg:w-1 lg:flex-none">
            <div
              className="principle-progress absolute inset-0 origin-top rounded-full"
              style={{ backgroundColor: '#e8a54b', transform: reduced ? 'scaleY(1)' : undefined }}
            />
          </div>
        </div>

        <div className="relative min-h-[14rem]">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`principle-slide ${index === 0 || reduced ? '' : 'absolute inset-0'}`}
              style={reduced ? { marginBottom: index < principles.length - 1 ? '3rem' : 0 } : undefined}
            >
              <span className="micro-label" style={{ color: '#e8a54b' }}>0{index + 1} / 0{principles.length}</span>
              <h3 className="section-title mt-3 max-w-2xl text-ink">{principle.title}</h3>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-ink-muted md:text-lg">{principle.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
