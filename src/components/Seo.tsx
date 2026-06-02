import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { allPages, site } from '../siteData';
import { trackEvent } from '../lib/analytics';

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const page = allPages.find((item) => item.path === location.pathname) || allPages[0];
    document.title = page.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', page.description);
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]') || document.createElement('meta');
    robots.name = 'robots';
    robots.content = page.kind === 'system' ? 'noindex,follow' : 'index,follow';
    document.head.appendChild(robots);
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

  return null;
}
