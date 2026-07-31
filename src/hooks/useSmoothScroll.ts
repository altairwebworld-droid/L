import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';

// Lenis and ScrollTrigger fight each other unless synced through GSAP's own
// ticker — see experiential-web-design/references/scroll-cookbook.md #1.
export function useSmoothScroll() {
  useEffect(() => {
    const media = gsap.matchMedia();

    media.add('(pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
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
    });

    return () => media.revert();
  }, []);
}
