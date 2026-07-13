import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { allPages, globalFaqs, servicePages, site, type PageMeta } from '../src/siteData';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const esc = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));

const absoluteUrl = (route: string) => `${site.domain}${route === '/' ? '' : route}`;
const robotsFor = (page: PageMeta) => (page.kind === 'system' ? 'noindex,follow' : 'index,follow');
const present = (value: string | undefined): value is string => Boolean(value);

const orgId = `${site.domain}/#organization`;
const websiteId = `${site.domain}/#website`;
const buildDate = new Date().toISOString().slice(0, 10);

function schemaFor(page: PageMeta) {
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
        url: `${site.domain}/lycore-logo.jpeg`,
        contentUrl: `${site.domain}/lycore-logo.jpeg`,
        width: 1254,
        height: 1254,
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
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': orgId },
      dateModified: buildDate,
      inLanguage: 'en-US',
      primaryImageOfPage: { '@type': 'ImageObject', url: `${site.domain}${site.ogImage}` },
    },
  ];
  if (page.path === '/') {
    const sitelinkCandidates = [
      { name: 'Home', path: '/' },
      { name: 'What We Build', path: '/what-we-build' },
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
  if (service || page.kind === 'audit') {
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
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
        { '@type': 'ListItem', position: 2, name: page.h1, item: absoluteUrl(page.path) },
      ],
    });
  }
  return blocks;
}

function headFor(page: PageMeta, assetTags: string) {
  const canonical = absoluteUrl(page.path);
  const image = `${site.domain}${site.ogImage}`;
  return `<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="-G--OXjnQTRMBSyXvGwQlQHyUs-A4DWD8AKBNTXSjTQ" />
    <meta name="google-site-verification" content="TCxr48SCxuIbxHZk0cWv4R2bQg83au0NrPyptABI1qI" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="stylesheet" href="/lycore-styles.css" />
    <link rel="stylesheet" href="/form-overrides.css" />
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="${robotsFor(page)}" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="LYCORE logo" />
    <meta property="og:site_name" content="${site.name}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="LYCORE logo" />
    <meta name="theme-color" content="#0c0a09" />
    <meta name="application-name" content="${site.name}" />
    ${schemaFor(page).map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`).join('\n    ')}
    ${assetTags}
  </head>`;
}

function fallbackFor(page: PageMeta) {
  const service = servicePages.find((item) => item.path === page.path);
  const paragraphs =
    page.path === '/'
      ? [
          site.coreStatement,
          'Service businesses lose opportunities when calls go unanswered, booking takes too long, or follow-up stops. LYCORE GROUP LLC builds customer communication systems that help teams respond consistently and keep each lead moving.',
          'Services include 24/7 call handling, lead capture, appointment booking, customer follow-up, SMS automation, CRM integration, workflow automation, phone-first websites and related business systems. Rankings, revenue, call volume and client outcomes are never guaranteed.',
        ]
      : [page.description, service?.problem, service?.explanation].filter(present);
  const faqItems = page.faqs?.slice(0, 3) || [];

  return `<main class="seo-fallback" aria-label="${esc(page.h1)}">
        <section>
          <p>${esc(site.name)}</p>
          <h1>${esc(page.h1)}</h1>
          ${paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('\n          ')}
          ${page.path === '/' ? '<h2>Customer communication systems for service businesses</h2>' : ''}
          ${
            faqItems.length
              ? `<h2>Common Questions</h2>
          ${faqItems.map((faq) => `<h3>${esc(faq.question)}</h3>\n          <p>${esc(faq.answer)}</p>`).join('\n          ')}`
              : ''
          }
          <nav aria-label="Primary crawl links">
            <a href="${site.auditPath}">${esc(site.primaryCta)}</a>
            <a href="/what-we-build">${esc(site.secondaryCta)}</a>
            ${page.path === '/'
                ? `
            <a href="/vision">Where LYCORE Is Building</a>
            <a href="/commitments">LYCORE Commitments</a>
            <a href="/book">Book a Call</a>
            <a href="/about">About LYCORE</a>
            <a href="/contact">Contact</a>`
                : ''
            }
          </nav>
        </section>
      </main>`;
}

function bodyFor(page: PageMeta) {
  return `<body>
    <div id="root">
      ${fallbackFor(page)}
    </div>
  </body>`;
}

function sitemapXml() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = allPages
    .filter((page) => page.kind !== 'system')
    .map((page) => `  <url><loc>${absoluteUrl(page.path)}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${page.path === '/' ? '1.0' : '0.8'}</priority></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function robotsTxt() {
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot',
    'meta-externalagent',
  ];
  const aiSections = aiBots.map((bot) => `User-agent: ${bot}\nAllow: /`).join('\n\n');
  return `User-agent: *\nAllow: /\n\n# AI assistants and answer engines are welcome to read this site.\n# Structured summary for LLMs: ${site.domain}/llms.txt\n\n${aiSections}\n\nSitemap: ${site.domain}/sitemap.xml\n`;
}

function llmsTxt() {
  const legalNameSuffix = site.legalName === site.name ? '' : ` (${site.legalName})`;
  const serviceLines = servicePages
    .map((page) => `- [${page.h1}](${absoluteUrl(page.path)}): ${page.description}`)
    .join('\n');
  const companyPages = allPages.filter((page) => ['legacy', 'home', 'audit', 'commitment'].includes(page.kind) && page.path !== '/');
  const companyLines = companyPages
    .map((page) => `- [${page.label}](${absoluteUrl(page.path)}): ${page.description}`)
    .join('\n');
  const faqLines = globalFaqs.map((faq) => `- Q: ${faq.question}\n  A: ${faq.answer}`).join('\n');
  return `# ${site.name}

> ${site.coreStatement} ${site.expandedServicesStatement}

${site.name}${legalNameSuffix} is based in ${site.address.locality}, ${site.address.region} and works with service businesses across the United States. Contact: ${site.email}. ${site.aiDisclaimer} Rankings, revenue, call volume and client outcomes are never guaranteed.

## Services

${serviceLines}

## Company

${companyLines}

## Frequently Asked Questions

${faqLines}
`;
}

async function writeCrawlFiles(targetDir: string) {
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, 'sitemap.xml'), sitemapXml(), 'utf8');
  await writeFile(path.join(targetDir, 'robots.txt'), robotsTxt(), 'utf8');
  await writeFile(path.join(targetDir, 'llms.txt'), llmsTxt(), 'utf8');
}

async function main() {
  await writeCrawlFiles(path.join(root, 'public'));
  if (!existsSync(path.join(distDir, 'index.html'))) return;

  await writeCrawlFiles(distDir);
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
  const assetTags = [...template.matchAll(/<(script[^>]+><\/script>|link[^>]+>)/g)]
    .map((match) => match[0])
    .filter((tag) => tag.includes('/assets/'))
    .join('\n    ');

  for (const page of allPages) {
    const html = `<!doctype html>\n<html lang="en">\n  ${headFor(page, assetTags)}\n  ${bodyFor(page)}\n</html>\n`;
    const targetDir = page.path === '/' ? distDir : path.join(distDir, page.path.slice(1));
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, 'index.html'), html, 'utf8');
  }

  const notFoundPage: PageMeta = {
    path: '/404',
    label: 'Not Found',
    title: 'Page Not Found | LYCORE GROUP LLC',
    description: 'The page you requested does not exist. Explore LYCORE GROUP LLC customer communication systems or request a free lead system review.',
    h1: 'Page Not Found',
    kind: 'system',
  };
  const notFoundHtml = `<!doctype html>\n<html lang="en">\n  ${headFor(notFoundPage, assetTags)}\n  ${bodyFor(notFoundPage)}\n</html>\n`;
  await writeFile(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
}

main();
