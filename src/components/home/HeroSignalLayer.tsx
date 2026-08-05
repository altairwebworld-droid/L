import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

/**
 * Lightweight interpretation of the supplied light-ray and shape-morph demos.
 * The ray field is CSS/SVG (no WebGL dependency) and the three signal shapes
 * hand off to the first headline words as the page becomes readable.
 */
export function HeroSignalLayer() {
  const layerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const layer = layerRef.current;
      if (
        !layer
        || !window.matchMedia('(pointer: fine)').matches
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) return;

      const current = { x: 50, y: 0 };
      const target = { x: 50, y: 0 };
      const onMove = (event: PointerEvent) => {
        target.x = (event.clientX / window.innerWidth) * 100;
        target.y = (event.clientY / window.innerHeight) * 100;
      };
      const tick = () => {
        current.x += (target.x - current.x) * 0.055;
        current.y += (target.y - current.y) * 0.055;
        layer.style.setProperty('--ray-x', `${current.x}%`);
        layer.style.setProperty('--ray-tilt', `${(current.x - 50) * 0.12}deg`);
      };

      window.addEventListener('pointermove', onMove, { passive: true });
      gsap.ticker.add(tick);
      return () => {
        window.removeEventListener('pointermove', onMove);
        gsap.ticker.remove(tick);
      };
    },
    { scope: layerRef },
  );

  return (
    <div ref={layerRef} className="hero-signal-layer" aria-hidden="true">
      <div className="hero-signal-layer__rays" />
      <svg className="hero-signal-layer__geometry" viewBox="0 0 760 400" focusable="false">
        <defs>
          <linearGradient id="hero-grad-triangle" x1="200" y1="300" x2="255" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f8dbb9" />
            <stop offset="0.55" stopColor="#ff6b22" />
          </linearGradient>
          <linearGradient id="hero-grad-square" x1="340" y1="42" x2="240" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#f8dbb9" />
            <stop offset="0.58" stopColor="#ff6b22" />
          </linearGradient>
          <radialGradient id="hero-grad-circle" cx="460" cy="280" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#f8dbb9" />
            <stop offset="0.38" stopColor="#ff6b22" />
          </radialGradient>
        </defs>
        <polygon className="hero-geometry hero-geometry--triangle" fill="url(#hero-grad-triangle)" points="241,242 283,157 326,242" />
        <rect className="hero-geometry hero-geometry--square" fill="url(#hero-grad-square)" x="363" y="157" width="85" height="85" />
        <circle className="hero-geometry hero-geometry--circle" fill="url(#hero-grad-circle)" cx="530" cy="200" r="42.5" />
      </svg>
    </div>
  );
}

export function HeroTypewriterTitle() {
  return (
    <h1 id="home-hero-title">
      <span className="hero-title-line">
        <span className="hero-title-group">Turn every lead</span>
      </span>
      <span className="hero-title-line hero-title-line--accent">
        Into a paying client.
      </span>
    </h1>
  );
}
