import { useEffect, useState } from 'react';
import { getAnalyticsConsent, hasGlobalPrivacyControl, initAnalytics, setAnalyticsConsent, type AnalyticsConsent } from '../lib/analytics';

export default function PrivacyControls({ measurementId }: { measurementId?: string }) {
  const [showNotice, setShowNotice] = useState(Boolean(measurementId) && getAnalyticsConsent() === null && !hasGlobalPrivacyControl());

  useEffect(() => {
    const openPreferences = () => setShowNotice(true);
    window.addEventListener('lycore:open-privacy-controls', openPreferences);
    return () => window.removeEventListener('lycore:open-privacy-controls', openPreferences);
  }, []);

  const choose = (consent: AnalyticsConsent) => {
    setAnalyticsConsent(consent);
    setShowNotice(false);
    if (consent === 'granted') initAnalytics(measurementId);
  };

  if (!measurementId || !showNotice) return null;

  return (
    <section className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-2xl border border-white/15 bg-[#181615]/95 p-5 shadow-2xl backdrop-blur-xl" aria-label="Analytics privacy choices">
      <p className="text-sm font-medium text-white">Analytics choice</p>
      <p className="mt-2 text-xs leading-relaxed text-stone-300">
        We use optional analytics to understand how the site is used. Analytics stays off unless you allow it. Your choice is saved in this browser and can be changed from the Privacy Policy.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose('denied')} className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/50">Decline</button>
        <button type="button" onClick={() => choose('granted')} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-stone-200">Allow analytics</button>
      </div>
    </section>
  );
}
