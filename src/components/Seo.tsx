import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { allPages, globalFaqs, site } from '../siteData';
import { trackEvent } from '../lib/analytics';

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const page = allPages.find((item) => item.path === location.pathname);
    const title = page ? page.title : 'Page Not Found — LYCORE';
    const pageDescription = page
      ? page.description
      : 'The page you requested does not exist. Explore LYCORE services for small service businesses or request a free lead system review.';
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
    // Organization schema
    const orgSchema = document.querySelector<HTMLScriptElement>('#lycore-organization-schema') || document.createElement('script');
    orgSchema.id = 'lycore-organization-schema';
    orgSchema.type = 'application/ld+json';
    orgSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${site.domain}/#organization`,
      name: site.legalName,
      alternateName: site.name,
      url: site.domain,
      email: site.email,
      logo: {
        '@type': 'ImageObject',
        url: `${site.domain}/lycore-logo.jpeg`,
        contentUrl: `${site.domain}/lycore-logo.jpeg`,
        width: 1254,
        height: 1254,
      },
      image: `${site.domain}${site.ogImage}`,
      areaServed: 'US',
      description: 'LYCORE answers calls 24/7, builds phone-first websites, and recovers missed leads for small service businesses across the United States.',
      sameAs: Object.values(site.socials),
      contactPoint: {
        '@type': 'ContactPoint',
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
    document.head.appendChild(orgSchema);

    // Service schemas
    const services = [
      { name: '24/7 AI Receptionist for Small Business', description: 'Round-the-clock AI-powered call answering service for small service businesses including towing, plumbing, HVAC, and more.' },
      { name: 'Phone-First Website Design', description: 'Fast, mobile-optimized website design for service businesses, built to convert urgent callers.' },
      { name: 'Google Business Profile Optimization', description: 'Google Business Profile optimization service for local service businesses to improve visibility in local search results.' },
    ];
    services.forEach((svc, i) => {
      const id = `lycore-service-schema-${i}`;
      const el = document.querySelector<HTMLScriptElement>(`#${id}`) || document.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      el.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: svc.name,
        description: svc.description,
        provider: { '@id': `${site.domain}/#organization` },
        areaServed: 'US',
      });
      document.head.appendChild(el);
    });

    // FAQPage schema on /faq
    const faqSchemaEl = document.querySelector<HTMLScriptElement>('#lycore-faq-schema') || document.createElement('script');
    faqSchemaEl.id = 'lycore-faq-schema';
    faqSchemaEl.type = 'application/ld+json';
    faqSchemaEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: globalFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
    document.head.appendChild(faqSchemaEl);
  }, []);

  return null;
}
