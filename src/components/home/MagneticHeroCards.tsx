import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

const stages = [
  {
    title: 'Websites',
    src: '/hero-card-websites.webp',
    alt: 'Illustrated website interface surrounded by blue, green, orange, and black paper-cut shapes',
  },
  {
    title: 'AI Receptionist',
    src: '/hero-card-receptionist.webp',
    alt: 'Illustrated receptionist answering a call beside a booking calendar and caller checklist',
  },
  {
    title: 'Lead Systems',
    src: '/hero-card-lead-systems.webp',
    alt: 'Illustrated lead system routing messages, calls, and bookings through one funnel',
  },
  {
    title: 'Booking',
    src: '/hero-card-booking.webp',
    alt: 'Illustrated booking calendar and phone with a confirmed appointment',
  },
] as const;

type CardPhysics = {
  element: HTMLElement;
  restX: number;
  restY: number;
  restRotation: number;
  x: number;
  y: number;
  rotation: number;
  vx: number;
  vy: number;
  vr: number;
};

/** Cursor-driven spring physics on desktop; a stable fan on touch/reduced motion. */
export default function MagneticHeroCards() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const field = fieldRef.current;
      if (!field) return;

      const media = gsap.matchMedia();
      media.add('(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.magnetic-stage-card', field);
        const layout = {
          rotation: [6, -5, 5, -8],
          x: [-318, -108, 108, 318],
          y: [18, -12, 20, -10],
        };
        const cursor = { x: 0, y: 0, vx: 0, vy: 0, active: false };
        let visible = true;
        let previousX = 0;
        let previousY = 0;

        const visibilityObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
        });
        visibilityObserver.observe(field);

        const physics: CardPhysics[] = cards.map((element, index) => {
          gsap.set(element, {
            x: layout.x[index],
            y: layout.y[index],
            rotation: layout.rotation[index],
            xPercent: -50,
            yPercent: -50,
            zIndex: index + 1,
          });

          return {
            element,
            restX: layout.x[index],
            restY: layout.y[index],
            restRotation: layout.rotation[index],
            x: layout.x[index],
            y: layout.y[index],
            rotation: layout.rotation[index],
            vx: 0,
            vy: 0,
            vr: 0,
          };
        });

        const onMove = (event: PointerEvent) => {
          cursor.vx = cursor.vx * 0.75 + (event.clientX - previousX) * 0.25;
          cursor.vy = cursor.vy * 0.75 + (event.clientY - previousY) * 0.25;
          previousX = cursor.x = event.clientX;
          previousY = cursor.y = event.clientY;
          cursor.active = true;
        };

        const onLeave = () => {
          cursor.vx = 0;
          cursor.vy = 0;
          cursor.active = false;
        };

        const tick = () => {
          if (!visible) return;
          const rect = field.getBoundingClientRect();
          const forces = physics.map((card) => {
            if (!cursor.active) return { x: 0, y: 0 };
            const cardX = rect.left + rect.width / 2 + card.restX;
            const cardY = rect.top + rect.height / 2 + card.restY;
            const distance = Math.hypot(cursor.x - cardX, cursor.y - cardY);
            if (distance > 500) return { x: 0, y: 0 };
            const weight = (1 - distance / 500) ** 3;
            return { x: cursor.vx * 9 * weight, y: cursor.vy * 9 * weight };
          });

          physics.forEach((card, index) => {
            let forceX = forces[index].x;
            let forceY = forces[index].y;
            forces.forEach((force, neighborIndex) => {
              if (neighborIndex === index) return;
              const influence = 0.2 ** Math.abs(neighborIndex - index);
              forceX += force.x * influence;
              forceY += force.y * influence * 0.6;
            });

            card.vx = (card.vx + (card.restX + forceX - card.x) * 0.05) * 0.85;
            card.vy = (card.vy + (card.restY + forceY - card.y) * 0.05) * 0.85;
            card.vr = (card.vr + (card.restRotation + forceX * 0.08 - card.rotation) * 0.05) * 0.85;
            card.x += card.vx;
            card.y += card.vy;
            card.rotation += card.vr;
            gsap.set(card.element, { x: card.x, y: card.y, rotation: card.rotation });
          });
        };

        field.addEventListener('pointermove', onMove);
        field.addEventListener('pointerleave', onLeave);
        gsap.ticker.add(tick);

        return () => {
          field.removeEventListener('pointermove', onMove);
          field.removeEventListener('pointerleave', onLeave);
          visibilityObserver.disconnect();
          gsap.ticker.remove(tick);
        };
      });

      return () => media.revert();
    },
    { scope: fieldRef },
  );

  return (
    <div ref={fieldRef} className="magnetic-card-field" role="list" aria-label="The LYCORE lead flow">
      {stages.map(({ title, src, alt }, index) => (
        <article key={title} className="magnetic-stage-card" role="listitem">
          <h2 className="sr-only">{title}</h2>
          <img
            src={src}
            alt={alt}
            width="640"
            height="640"
            loading="eager"
            decoding="async"
            fetchPriority={index < 2 ? 'high' : 'auto'}
          />
        </article>
      ))}
    </div>
  );
}
