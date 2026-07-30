import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Droplets,
  KeyRound,
  Scale,
  Truck,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { urgentCalls } from '../../content/calls';

const icons: Record<string, LucideIcon> = {
  plumbing: Droplets,
  towing: Truck,
  locksmith: KeyRound,
  hvac: Wind,
  restoration: Building2,
  bail: Scale,
};

const cardThemes = [
  { background: '#ff6b22', ink: '#090909' },
  { background: '#f4efe4', ink: '#171513' },
  { background: '#f1b47f', ink: '#171513' },
  { background: '#171615', ink: '#fffdf9' },
  { background: '#d8cfc3', ink: '#171513' },
  { background: '#ff915a', ink: '#171513' },
] as const;

/**
 * Split-screen overlapping call swiper adapted from the supplied Smooothy
 * reference. Desktop page scroll drives a momentum-smoothed track whose
 * passed cards pin, rotate, and shrink at the leading edge. Mobile uses a
 * native snap carousel so all six calls remain easy to reach.
 */
export default function CallLedger() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const goToRef = useRef<(index: number) => void>(() => undefined);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!viewport || !track || !section) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nativeMode = window.innerWidth < 768;

    const setActiveCard = (index: number) => {
      const bounded = Math.max(0, Math.min(cards.length - 1, index));
      if (bounded === activeRef.current) return;
      activeRef.current = bounded;
      setActive(bounded);
    };

    if (nativeMode) {
      const updateActiveFromScroll = () => {
        const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
        let nearest = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;
        cards.forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(cardCenter - viewportCenter);
          if (distance < nearestDistance) {
            nearest = index;
            nearestDistance = distance;
          }
        });
        setActiveCard(nearest);
      };

      goToRef.current = (index) => {
        const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
        viewport.scrollTo({ left: card.offsetLeft - 16, behavior: reducedMotion ? 'auto' : 'smooth' });
      };

      viewport.addEventListener('scroll', updateActiveFromScroll, { passive: true });
      updateActiveFromScroll();

      return () => viewport.removeEventListener('scroll', updateActiveFromScroll);
    }

    let current = 0;
    let target = 0;
    let maximumScroll = 0;
    let velocity = 0;
    let dragging = false;
    let startX = 0;
    let startTarget = 0;
    let previousX = 0;
    let previousTime = performance.now();
    let frame = 0;

    const clampTarget = (value: number) => Math.max(maximumScroll, Math.min(0, value));

    const measure = () => {
      maximumScroll = -cards[cards.length - 1].offsetLeft;
      target = clampTarget(target);
      current = clampTarget(current);
      updateFromPageScroll();
    };

    const updateFromPageScroll = () => {
      if (dragging) return;
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
      target = maximumScroll * progress;
      velocity = 0;
    };

    const updateCards = () => {
      const stackOffset = viewport.clientWidth * 0.1;
      let nearest = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft + current;
        const isLast = index === cards.length - 1;
        const distance = Math.abs(cardLeft);

        if (distance < nearestDistance) {
          nearest = index;
          nearestDistance = distance;
        }

        if (cardLeft < 0 && !isLast) {
          const ratio = Math.min(1, Math.abs(cardLeft) / cardWidth);
          const translateX = current + Math.abs(cardLeft) + ratio * stackOffset;
          card.style.transformOrigin = 'left 80%';
          card.style.transform = `translate3d(${translateX}px, 0, 0) rotate(${-15 * ratio}deg) scale(${1 - ratio * 0.4})`;
        } else {
          card.style.transformOrigin = 'center';
          card.style.transform = `translate3d(${current}px, 0, 0)`;
        }

        card.style.zIndex = String(index + 1);
      });

      setActiveCard(nearest);
    };

    const animate = () => {
      current = reducedMotion ? target : current + (target - current) * 0.08;
      if (!dragging && Math.abs(velocity) > 0.08) {
        target = clampTarget(target + velocity);
        velocity *= 0.93;
      }
      updateCards();
      frame = requestAnimationFrame(animate);
    };

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      velocity = 0;
      startX = event.clientX;
      previousX = event.clientX;
      previousTime = performance.now();
      startTarget = target;
      viewport.setPointerCapture(event.pointerId);
      viewport.dataset.dragging = 'true';
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const now = performance.now();
      const elapsed = Math.max(16, now - previousTime);
      const delta = event.clientX - previousX;
      velocity = (delta / elapsed) * 16 * 1.35;
      target = clampTarget(startTarget + event.clientX - startX);
      previousX = event.clientX;
      previousTime = now;
    };

    const releasePointer = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      target = clampTarget(target + velocity * 10);
      viewport.dataset.dragging = 'false';
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      target = clampTarget(target - event.deltaX);
      velocity = -event.deltaX * 0.18;
    };

    goToRef.current = (index) => {
      const bounded = Math.max(0, Math.min(cards.length - 1, index));
      const cardTarget = clampTarget(-cards[bounded].offsetLeft);
      const progress = maximumScroll === 0 ? 0 : cardTarget / maximumScroll;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      window.scrollTo({ top: sectionTop + progress * scrollDistance, behavior: 'smooth' });
      target = cardTarget;
      velocity = 0;
      setActiveCard(bounded);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', releasePointer);
    viewport.addEventListener('pointercancel', releasePointer);
    viewport.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', updateFromPageScroll, { passive: true });
    measure();
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', releasePointer);
      viewport.removeEventListener('pointercancel', releasePointer);
      viewport.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', updateFromPageScroll);
      cards.forEach((card) => {
        card.style.transform = '';
        card.style.transformOrigin = '';
        card.style.zIndex = '';
      });
    };
  }, []);

  const activeCall = urgentCalls[active];
  const ActiveIcon = icons[activeCall.id] ?? Droplets;

  return (
    <section ref={sectionRef} id="call-ledger" className="call-swiper-section" aria-labelledby="call-swiper-title">
      <div className="call-swiper-copy">
        <h2 id="call-swiper-title">
          Every night,
          <span>somewhere</span>
        </h2>
        <p className="call-swiper-kicker">Every unanswered call can become someone else&apos;s job.</p>

        <div className="call-swiper-active" aria-live="polite">
          <div className="call-swiper-active__label">
            <ActiveIcon aria-hidden="true" />
            <span>{activeCall.industry}</span>
          </div>
          <p>{activeCall.explanation}</p>
          <ul role="list">
            {activeCall.steps.map((step) => <li key={step}>{step}</li>)}
          </ul>
        </div>

        <div className="call-swiper-controls">
          <span className="call-swiper-count">{active + 1} / {urgentCalls.length}</span>
          <div>
            <button
              type="button"
              onClick={() => goToRef.current(active - 1)}
              disabled={active === 0}
              aria-label="Show previous call"
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goToRef.current(active + 1)}
              disabled={active === urgentCalls.length - 1}
              aria-label="Show next call"
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div ref={viewportRef} className="call-swiper-viewport" data-dragging="false">
        <p className="call-swiper-log-label">Call log — one night</p>
        <ol ref={trackRef} className="call-swiper-track" role="list">
          {urgentCalls.map((call, index) => {
            const Icon = icons[call.id] ?? Droplets;
            const theme = cardThemes[index % cardThemes.length];
            return (
              <li
                key={call.id}
                className="call-swiper-card"
                style={{ backgroundColor: theme.background, color: theme.ink }}
              >
                <div className="call-swiper-card__top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{call.time}</span>
                </div>

                <div className="call-swiper-card__content">
                  <span className="call-swiper-card__icon"><Icon aria-hidden="true" /></span>
                  <p>{call.industry}</p>
                  <h3>{call.summary}</h3>
                  <span>{call.industry} · {call.value}</span>
                </div>

                <div className="call-swiper-card__status">
                  <span>{index === 0 ? call.outcome : 'ringing'}</span>
                  <i aria-hidden="true" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
