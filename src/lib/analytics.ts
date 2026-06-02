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
