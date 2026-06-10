import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { allPages, servicePages, site, type PageMeta } from '../src/siteData';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const esc = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));

const absoluteUrl = (route: string) => `${site.domain}${route === '/' ? '' : route}`;
const robotsFor = (page: PageMeta) => (page.kind === 'system' ? 'noindex,follow' : 'index,follow');
const present = (value: string | undefined): value is string => Boolean(value);

function schemaFor(page: PageMeta) {
  const blocks: unknown[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: site.name,
      legalName: site.legalName,
      url: site.domain,
      description: site.coreStatement,
      email: site.email,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    },
  ];
  if (page.path === '/') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      url: site.domain,
      publisher: { '@type': 'Organization', name: site.name, url: site.domain },
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
      provider: { '@type': 'Organization', name: site.name, url: site.domain },
      audience: { '@type': 'BusinessAudience', audienceType: 'Bail bond agencies' },
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
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" href="/favicon.png" />
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
    <meta property="og:site_name" content="${site.name}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="${image}" />
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
          'Families looking for help may call, click, fill out a form, or leave within minutes. LyCore creates pages, intake questions, source tracking, and CRM-ready handoff paths so agency teams can respond with cleaner context while licensed professionals stay responsible for legal, financial, client, and bail outcome decisions.',
          'Services include bail bond website design, bail bond SEO services, AI receptionist support, intake automation, CRM integration, follow-up automation, dashboards, appointment-setting workflows, mobile apps, and web UI apps. Rankings, revenue, client volume, legal outcomes, and bail outcomes are never guaranteed.',
        ]
      : [page.description, service?.problem, service?.explanation].filter(present);
  const faqItems = page.faqs?.slice(0, 3) || [];

  return `<main class="seo-fallback" aria-label="${esc(page.h1)}">
        <section>
          <p>${esc(site.name)}</p>
          <h1>${esc(page.h1)}</h1>
          ${paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('\n          ')}
          ${page.path === '/' ? '<h2>Bail bonds lead capture built for urgent decisions</h2>' : ''}
          ${
            faqItems.length
              ? `<h2>Common Questions</h2>
          ${faqItems.map((faq) => `<h3>${esc(faq.question)}</h3>\n          <p>${esc(faq.answer)}</p>`).join('\n          ')}`
              : ''
          }
          <nav aria-label="Primary crawl links">
            <a href="${site.auditPath}">${esc(site.primaryCta)}</a>
            <a href="/services">${esc(site.secondaryCta)}</a>
            <a href="/bail-bonds">Bail Bonds Lead Systems</a>
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

async function writeCrawlFiles(targetDir: string) {
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, 'sitemap.xml'), sitemapXml(), 'utf8');
  await writeFile(path.join(targetDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`, 'utf8');
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
}

main();
