import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { RefObject } from 'react';

export function SliderControls({ railRef, label }: { railRef: RefObject<HTMLElement | null>; label: string }) {
  const move = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: rail.clientWidth * 0.82 * direction, behavior: 'smooth' });
  };

  return (
    <div className="signal-slider__controls" aria-label={`${label} slider controls`}>
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
        <ArrowLeft aria-hidden="true" />
      </button>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`}>
        <ArrowRight aria-hidden="true" />
      </button>
    </div>
  );
}
