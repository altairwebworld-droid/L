import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { allPages, site } from '../src/siteData';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const errors: string[] = [];

const esc = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));

function expect(condition: unknown, message: string) {
  if (!condition) errors.push(message);
}

function distFileFor(route: string) {
  return route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.slice(1), 'index.html');
}

function localTarget(href: string) {
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return null;
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return distFileFor('/');
  if (clean.includes('.')) return path.join(distDir, clean.replace(/^\//, ''));
  return distFileFor(clean);
}

for (const page of allPages) {
  const file = distFileFor(page.path);
  expect(existsSync(file), `Missing generated HTML for ${page.path}`);
  if (!existsSync(file)) continue;
  const html = await readFile(file, 'utf8');
  expect((html.match(/<title>/g) || []).length === 1, `${page.path}: expected one title`);
  expect(html.includes(esc(page.title)), `${page.path}: title mismatch`);
  expect(html.includes(`name="description"`), `${page.path}: missing description`);
  expect(html.includes(`rel="canonical" href="${site.domain}${page.path === '/' ? '' : page.path}"`), `${page.path}: missing canonical`);
  const robots = page.kind === 'system' ? 'noindex,follow' : 'index,follow';
  expect(html.includes(`name="robots" content="${robots}"`), `${page.path}: missing robots meta`);
  expect(html.includes('property="og:title"'), `${page.path}: missing og:title`);
  expect(html.includes('name="twitter:card"'), `${page.path}: missing twitter card`);
  expect((html.match(/application\/ld\+json/g) || []).length > 0, `${page.path}: missing JSON-LD`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch {
      errors.push(`${page.path}: invalid JSON-LD`);
    }
  }
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const target = localTarget(match[1]);
    if (target) expect(existsSync(target), `${page.path}: broken generated internal link ${match[1]}`);
  }
}

expect(existsSync(path.join(distDir, 'sitemap.xml')), 'Missing dist/sitemap.xml');
expect(existsSync(path.join(distDir, 'robots.txt')), 'Missing dist/robots.txt');
expect(existsSync(path.join(root, 'public', 'og-image.png')), 'Missing public/og-image.png');
expect(existsSync(path.join(root, 'api', 'leads.ts')), 'Missing Vercel Function api/leads.ts');
expect(existsSync(path.join(root, 'api', 'chat.ts')), 'Missing Vercel Function api/chat.ts');
expect(existsSync(path.join(root, 'src', 'server', 'leadRouting.ts')), 'Missing shared server lead routing logic');

const requiredDocs = [
  'lycore-baseline-audit.md',
  'lycore-measurement-plan.md',
  'positioning-implementation-report.md',
  'seo-implementation-report.md',
  'aeo-implementation-report.md',
  'geo-implementation-report.md',
  'schema-implementation-report.md',
  'tags-and-metadata-report.md',
  'crawl-indexing-report.md',
  'conversion-implementation-report.md',
  'backend-crm-readiness-report.md',
  'crm-readiness-report.md',
  'chatbot-readiness-report.md',
  'agentic-readiness-report.md',
  'analytics-implementation-report.md',
  'google-search-console-readiness.md',
  'trust-compliance-report.md',
  'accessibility-report.md',
  'performance-report.md',
  'internal-linking-report.md',
  'social-sharing-report.md',
  'optimization-hypothesis-log.md',
  'technical-validation-report.md',
  'before-after-optimization-report.md',
  '30-60-90-optimization-plan.md',
];

for (const doc of requiredDocs) {
  expect(existsSync(path.join(root, 'docs', doc)), `Missing docs/${doc}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${allPages.length} generated routes, JSON-LD, crawl files, internal links, OG asset, and required reports.`);
