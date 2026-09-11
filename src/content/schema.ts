import { site, servicePages, type PageMeta } from '../siteData';
import { breadcrumbsFor } from './breadcrumbs';

const absoluteUrl = (route: string) => `${site.domain}${route === '/' ? '' : route}`;

const orgId = `${site.domain}/#organization`;
const websiteId = `${site.domain}/#website`;

export function schemaFor(page: PageMeta) {
  const canonical = absoluteUrl(page.path);
  const blocks: unknown[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: site.legalName,
      alternateName: site.name,
      legalName: site.legalName,
      url: site.domain,
      description: site.coreStatement,
      email: site.email,
      logo: {
        '@type': 'ImageObject',
        url: `${site.domain}/favicon-96x96.png`,
        contentUrl: `${site.domain}/favicon-96x96.png`,
        width: 96,
        height: 96,
      },
      image: `${site.domain}${site.ogImage}`,
      sameAs: Object.values(site.socials),
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: site.email,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      areaServed: 'United States',
      knowsAbout: [
        '24/7 call handling',
        'lead capture',
        'appointment booking',
        'customer follow-up',
        'SMS automation',
        'CRM integration',
        'workflow automation',
        'phone-first website design',
        'Google Business Profile optimization',
        'customer communication systems for service businesses',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': websiteId,
      name: site.name,
      url: site.domain,
      publisher: { '@id': orgId },
      inLanguage: 'en-US',
    },
    {
      '@context': 'https://schema.org',
      '@type': ['/what-we-build', '/industries', '/integrations', '/resources'].includes(page.path) ? 'CollectionPage' : 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': orgId },
      ...(page.updatedAt ? { dateModified: page.updatedAt } : {}),
      inLanguage: 'en-US',
      primaryImageOfPage: { '@type': 'ImageObject', url: `${site.domain}${site.ogImage}` },
    },
  ];
  if (page.path === '/') {
    const sitelinkCandidates = [
      { name: 'Home', path: '/' },
      { name: 'What We Build', path: '/what-we-build' },
      { name: 'AI Operations', path: '/ai-operations' },
      { name: 'Industries We Serve', path: '/industries' },
      { name: 'Vision', path: '/vision' },
      { name: 'Our Commitments', path: '/commitments' },
      { name: 'Free Lead System Audit', path: site.auditPath },
      { name: 'Book a Call', path: '/book' },
      { name: 'About LYCORE', path: '/about' },
      { name: 'Frequently Asked Questions', path: '/faq' },
      { name: 'Contact', path: '/contact' },
    ];
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: sitelinkCandidates.map((item, index) => ({
        '@type': 'SiteNavigationElement',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    });
  }
  const service = servicePages.find((item) => item.path === page.path);
  if (!['/what-we-build', '/industries'].includes(page.path) && (service || page.kind === 'service' || page.kind === 'audit')) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: page.h1,
      name: page.h1,
      description: service?.explanation || page.description,
      provider: { '@id': orgId },
      audience: { '@type': 'BusinessAudience', audienceType: 'Service businesses' },
      areaServed: 'United States',
      url: absoluteUrl(page.path),
    });
  }
  if (page.kind === 'resource' && page.path !== '/resources') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: canonical,
      author: { '@id': orgId },
      publisher: { '@id': orgId },
      ...(page.updatedAt ? { dateModified: page.updatedAt } : {}),
      inLanguage: 'en-US',
    });
  }
  if (page.faqs?.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }
  if (page.path !== '/') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbsFor(page).map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: absoluteUrl(crumb.path) })),
    });
  }
  return blocks;
}
