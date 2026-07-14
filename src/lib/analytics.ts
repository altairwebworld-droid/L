type Attribution = {
  sourcePage: string;
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
};

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
};

const attributionKeys = {
  utm_source: 'utmSource',
  utm_medium: 'utmMedium',
  utm_campaign: 'utmCampaign',
  utm_content: 'utmContent',
  utm_term: 'utmTerm',
} as const;

const storageKey = 'lycore_attribution';
const consentKey = 'lycore_analytics_consent';
let gaInitialized = false;

export type AnalyticsConsent = 'granted' | 'denied';

export function hasGlobalPrivacyControl() {
  return typeof navigator !== 'undefined' && Boolean((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl);
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === 'undefined' || hasGlobalPrivacyControl()) return 'denied';
  try {
    const value = window.localStorage.getItem(consentKey);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(consentKey, consent);
  } catch {
    // A visitor can still use the site if browser storage is unavailable.
  }
}

export function initAnalytics(measurementId?: string) {
  if (typeof window === 'undefined' || !measurementId || gaInitialized || getAnalyticsConsent() !== 'granted') {
    return;
  }

  const analyticsWindow = window as DataLayerWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag =
    analyticsWindow.gtag ||
    function gtag() {
      analyticsWindow.dataLayer?.push(arguments as unknown as Record<string, unknown>);
    };

  const existingScript = document.querySelector(`script[src*="${measurementId}"]`);
  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  analyticsWindow.gtag('js', new Date());
  analyticsWindow.gtag('config', measurementId, {
    page_path: window.location.pathname,
    page_location: window.location.href,
  });
  gaInitialized = true;
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') {
    return emptyAttribution();
  }

  const currentUrl = new URL(window.location.href);
  const stored = readStoredAttribution();
  const next: Attribution = {
    sourcePage: window.location.pathname,
    landingPage: stored.landingPage || window.location.pathname,
    referrer: stored.referrer || document.referrer || '',
    utmSource: stored.utmSource,
    utmMedium: stored.utmMedium,
    utmCampaign: stored.utmCampaign,
    utmContent: stored.utmContent,
    utmTerm: stored.utmTerm,
  };

  Object.entries(attributionKeys).forEach(([queryKey, fieldKey]) => {
    const value = currentUrl.searchParams.get(queryKey);
    if (value) {
      next[fieldKey] = value;
    }
  });

  writeStoredAttribution(next);
  return next;
}

export function trackEvent(name: string, properties: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const analyticsWindow = window as DataLayerWindow;
  const event = { event: name, ...properties };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push(event);

  if (typeof analyticsWindow.gtag === 'function') {
    analyticsWindow.gtag('event', name, properties);
  }
}

function emptyAttribution(): Attribution {
  return {
    sourcePage: '',
    landingPage: '',
    referrer: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmContent: '',
    utmTerm: '',
  };
}

function readStoredAttribution(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(storageKey);
    if (!raw) {
      return emptyAttribution();
    }

    return { ...emptyAttribution(), ...JSON.parse(raw) };
  } catch {
    return emptyAttribution();
  }
}

function writeStoredAttribution(attribution: Attribution) {
  try {
    window.sessionStorage.setItem(storageKey, JSON.stringify(attribution));
  } catch {
    // Attribution is helpful, but form submission should not depend on storage access.
  }
}
