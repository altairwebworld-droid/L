import type { PageMeta } from '../siteData';

export function breadcrumbsFor(page: PageMeta) {
  const hubs: Record<string, { name: string; path: string }> = {
    services: { name: 'Services', path: '/what-we-build' },
    industries: { name: 'Industries', path: '/industries' },
    integrations: { name: 'Integrations', path: '/integrations' },
    resources: { name: 'Resources', path: '/resources' },
  };
  const segments = page.path.split('/').filter(Boolean);
  const hub = segments.length > 1 ? hubs[segments[0]] : undefined;
  return [{ name: 'Home', path: '/' }, ...(hub ? [hub] : []), ...(page.path !== '/' ? [{ name: page.label, path: page.path }] : [])];
}
