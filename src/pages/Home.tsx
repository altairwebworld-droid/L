import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CallLedger from '../components/home/CallLedger';
import HeroSection from '../components/home/HeroSection';
import { NightToDawnField } from '../components/home/NightToDawnField';

const DeferredHomeBody = lazy(() => import('../components/home/DeferredHomeBody'));

/**
 * Homepage narrative:
 *   magnetic hero   — what LYCORE does and the four service entry points
 *   call ledger     — the cost, made concrete across six trades (signature)
 *   connected story — services, team support, about and industries as one route
 *   gallery         — proof of the website work
 *   install stack   — setup stages and the structured handoff report
 *   faq             — practical detail
 *   final cta       — the ask
 */
export default function Home() {
  const { hash } = useLocation();

  return (
    <NightToDawnField>
      <HeroSection />
      <CallLedger />
      <DeferredSections preload={Boolean(hash)} />
    </NightToDawnField>
  );
}

function DeferredSections({ preload }: { preload: boolean }) {
  const markerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (preload) {
      setReady(true);
      return;
    }

    const marker = markerRef.current;
    if (!marker || ready) return;
    if (!('IntersectionObserver' in window)) {
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: '800px 0px' },
    );
    observer.observe(marker);
    return () => observer.disconnect();
  }, [preload, ready]);

  return (
    <div ref={markerRef} className="home-deferred-sections">
      {ready ? (
        <Suspense fallback={<div className="home-deferred-sections__loading" aria-hidden="true" />}>
          <DeferredHomeBody />
        </Suspense>
      ) : null}
    </div>
  );
}
