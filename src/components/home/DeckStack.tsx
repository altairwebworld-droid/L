import { ArrowRight, Check } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../../lib/gsap';

export type DeckStackItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
  note?: string;
  image: string;
  imageAlt: string;
};

/**
 * A pinned service deck adapted from the supplied stack-scroll reference.
 * Cards assemble into a physical stack, then leave one at a time so the next
 * service becomes the focus. Mobile and reduced-motion render as a normal list.
 */
export function DeckStack({ items }: { items: DeckStackItem[] }) {
  const sceneRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.service-stack-card', sceneRef.current);
        const peek = 42;
        const scaleStep = 0.045;
        const pose = (index: number) => ({ y: index * peek, scale: 1 - index * scaleStep });

        cards.forEach((card, index) => {
          gsap.set(card, {
            zIndex: cards.length - index,
            y: window.innerHeight * 0.72 + index * peek,
            scale: pose(index).scale * 0.9,
            rotation: 0,
            transformOrigin: '50% 0%',
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sceneRef.current,
            start: 'top top',
            end: () => `+=${cards.length * window.innerHeight}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          timeline.to(card, { ...pose(index), ease: 'power3.out', duration: 1.35 }, index * 0.06);
        });

        timeline.to({}, { duration: 0.35 });
        const flyStart = timeline.duration();
        cards.slice(0, -1).forEach((card, index) => {
          const time = flyStart + index;
          const behind = cards.slice(index + 1);
          timeline.to(
            card,
            { y: () => -window.innerHeight * 1.15, rotation: -25, scale: 0.94, ease: 'none', duration: 1 },
            time,
          );
          timeline.to(
            behind,
            {
              y: (behindIndex) => pose(behindIndex).y,
              scale: (behindIndex) => pose(behindIndex).scale,
              ease: 'none',
              duration: 1,
            },
            time,
          );
        });

        timeline.to({}, { duration: 0.4 });
        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      return () => media.revert();
    },
    { scope: sceneRef, dependencies: [items.length] },
  );

  return (
    <section id="service-stack" ref={sceneRef} className="service-stack" aria-labelledby="service-stack-title">
      <header className="service-stack__header">
        <p>One connected lead system</p>
        <h2 id="service-stack-title">Services that move work forward.</h2>
      </header>

      <div className="service-stack__stage">
        <div className="service-stack__deck">
          {items.map((item, index) => (
            <article id={item.id} key={item.id} className="service-stack-card" data-tone={(index % 5) + 1}>
              <div className="service-stack-card__content">
                <div className="service-stack-card__top">
                  <h3>{item.title}</h3>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="service-stack-card__description">{item.description}</p>
                {item.note && <p className="service-stack-card__note">{item.note}</p>}
                <ul role="list">
                  {item.details.map((detail) => (
                    <li key={detail}>
                      <Check aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-stack-card__cta" data-track="cta_click">
                  Discuss this service
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>

              <div className="service-stack-card__media">
                <img src={item.image} alt={item.imageAlt} width="640" height="640" loading="lazy" decoding="async" />
                <p aria-hidden="true">{item.title.split(' ')[0]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
