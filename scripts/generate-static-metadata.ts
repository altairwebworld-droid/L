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

function schemaFor(page: PageMeta) {
  const blocks: unknown[] = [];
  if (page.path === '/') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.domain,
      description: site.coreStatement,
      email: site.email,
    });
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

function sitemapXml() {
  const urls = allPages
    .filter((page) => page.kind !== 'legal' && page.kind !== 'system')
    .map((page) => `  <url><loc>${absoluteUrl(page.path)}</loc><lastmod>2026-06-02</lastmod><changefreq>monthly</changefreq><priority>${page.path === '/' ? '1.0' : '0.8'}</priority></url>`)
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
  const body = template.match(/<body>[\s\S]*<\/body>/)?.[0] || '<body><div id="root"></div></body>';

  for (const page of allPages) {
    const html = `<!doctype html>\n<html lang="en">\n  ${headFor(page, assetTags)}\n  ${body}\n</html>\n`;
    const targetDir = page.path === '/' ? distDir : path.join(distDir, page.path.slice(1));
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, 'index.html'), html, 'utf8');
  }
}

main();
