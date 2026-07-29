import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';

// Lenis and ScrollTrigger fight each other unless synced through GSAP's own
// ticker — see experiential-web-design/references/scroll-cookbook.md #1.
export function useSmoothScroll() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    const lenis = new Lenis({
      anchors: true,
      lerp: 0.105,
      smoothWheel: true,
      wheelMultiplier: 0.92,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}
