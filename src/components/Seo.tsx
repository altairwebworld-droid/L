import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { allPages, site } from '../siteData';
import { trackEvent } from '../lib/analytics';

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const page = allPages.find((item) => item.path === location.pathname);
    const title = page ? page.title : 'Page Not Found - LyCore';
    const pageDescription = page
      ? page.description
      : 'The page you requested does not exist. Explore LyCore services for bail bond agencies or request a free lead system audit.';
    document.title = title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', pageDescription);
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]') || document.createElement('meta');
    robots.name = 'robots';
    robots.content = !page || page.kind === 'system' ? 'noindex,follow' : 'index,follow';
    document.head.appendChild(robots);
    const setProperty = (property: string, content: string) => {
      const tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (tag) tag.setAttribute('content', content);
    };
    const setName = (name: string, content: string) => {
      const tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (tag) tag.setAttribute('content', content);
    };
    const canonicalUrl = `${site.domain}${location.pathname === '/' ? '' : location.pathname}`;
    setProperty('og:title', title);
    setProperty('og:description', pageDescription);
    setProperty('og:url', canonicalUrl);
    setName('twitter:title', title);
    setName('twitter:description', pageDescription);
    trackEvent('service_page_view', { path: location.pathname });
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tracked = target.closest<HTMLElement>('[data-track]');
      if (tracked) {
        trackEvent(tracked.dataset.track || 'cta_click', {
          label: tracked.textContent?.trim().slice(0, 120),
          href: tracked instanceof HTMLAnchorElement ? tracked.href : undefined,
        });
      }
      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      if (link.href.startsWith('mailto:')) trackEvent('email_click', { href: link.href });
      if (link.href.startsWith('tel:')) trackEvent('phone_click', { href: link.href });
      if (link.hostname && link.hostname !== window.location.hostname) trackEvent('outbound_click', { href: link.href });
    };

    let maxDepth = 0;
    const handleScroll = () => {
      const doc = document.documentElement;
      const depth = Math.round(((doc.scrollTop + doc.clientHeight) / doc.scrollHeight) * 100);
      for (const marker of [25, 50, 75, 90]) {
        if (depth >= marker && marker > maxDepth) {
          maxDepth = marker;
          trackEvent('scroll_depth', { percent: marker });
        }
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') || document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `${site.domain}${location.pathname === '/' ? '' : location.pathname}`;
    document.head.appendChild(canonical);
  }, [location.pathname]);

  useEffect(() => {
    const schema = document.querySelector<HTMLScriptElement>('#lycore-organization-schema') || document.createElement('script');
    schema.id = 'lycore-organization-schema';
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${site.domain}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.domain,
      email: site.email,
      telephone: site.phone,
      logo: { '@type': 'ImageObject', url: `${site.domain}/lycore-logo.jpeg` },
      image: `${site.domain}${site.ogImage}`,
      areaServed: 'United States',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phone,
        email: site.email,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    });
    document.head.appendChild(schema);
  }, []);

  return null;
}
