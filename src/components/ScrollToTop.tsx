import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let observer: MutationObserver | undefined;
    let timeout: number | undefined;

    const scrollToHashTarget = () => {
      if (!hash) return false;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return false;

      target.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
      return true;
    };

    const frame = window.requestAnimationFrame(() => {
      if (scrollToHashTarget()) return;

      if (!hash) {
        window.scrollTo(0, 0);
        return;
      }

      window.scrollTo(0, 0);

      observer = new MutationObserver(() => {
        if (!scrollToHashTarget()) return;
        observer?.disconnect();
        if (timeout) window.clearTimeout(timeout);
      });
      observer.observe(document.body, { childList: true, subtree: true });
      timeout = window.setTimeout(() => observer?.disconnect(), 5000);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      if (timeout) window.clearTimeout(timeout);
    };
  }, [pathname, hash]);

  return null;
}
