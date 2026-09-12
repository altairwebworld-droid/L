import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { allPages, site } from '../src/siteData';
import { quoteContent, quoteLinks } from '../src/content/quote';
import { growthPages, resourcePages } from '../src/content/architecture';
import { serviceEvidence, measurementNote } from '../src/content/serviceEvidence';
import { industryPlaybooks, industryMeasurementNote, messagingNote, playbookNote } from '../src/content/industryPlaybooks';
import { deliveryStandards } from '../src/content/deliveryStandards';
import { breadcrumbsFor } from '../src/content/breadcrumbs';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const errors: string[] = [];

const esc = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));

const stripHtml = (value: string) =>
  value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const wordCount = (value: string) => {
  const words = value.match(/\b[\w'-]+\b/g);
  return words ? words.length : 0;
};

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
  expect(html.includes(esc(quoteContent.title)), `${page.path}: missing quote section`);
  expect(html.includes(esc(quoteLinks(page.path).email)), `${page.path}: missing quote email destination`);
  expect(html.includes(esc(quoteLinks(page.path).whatsapp)), `${page.path}: missing quote WhatsApp destination`);
  const detail = growthPages.find(item => item.path === page.path);
  const guide = resourcePages.find(item => item.path === page.path);
  const evidence = page.kind === 'service' ? serviceEvidence[page.path.split('/').pop()!] : undefined;
  const playbook = page.kind === 'industry' ? industryPlaybooks[page.path.split('/').pop()!] : undefined;
  if (page.kind === 'industry' && detail) {
    expect(playbook, `${page.path}: missing industry playbook`);
    if (playbook) {
      expect(playbook.workflows.length >= 2 && new Set(playbook.workflows.map(item => item.name)).size === playbook.workflows.length, `${page.path}: expected distinct workflow examples`);
      expect(playbook.quoteInputs.length >= 3 && playbook.metrics.length >= 2, `${page.path}: insufficient quote or measurement detail`);
      for (const value of [playbookNote, industryMeasurementNote, messagingNote, playbook.boundary, ...playbook.quoteInputs, ...playbook.workflows.flatMap(item => [item.name, item.trigger, item.action, item.handoff]), ...playbook.metrics.flatMap(item => [item.name, item.definition])]) {
        expect(html.includes(esc(value)), `${page.path}: missing crawlable industry detail: ${value}`);
      }
      expect(html.includes('id="workflow"'), `${page.path}: missing workflow anchor`);
    }
  }
  if (page.path === '/about') for (const step of deliveryStandards) expect(html.includes(esc(step.detail)), 'About: missing delivery standard');
  if (page.path === '/contact') {
    for (const text of ['Message and data rates may apply.', 'Reply STOP to opt out or HELP for help.', 'Consent is optional and not required to submit this form.', 'href="/terms#sms"', 'href="/privacy-policy#sms"']) expect(html.includes(text), `Contact: missing SMS consent disclosure ${text}`);
  }
  for (const faq of page.faqs || []) expect(html.includes(`<p>${esc(faq.answer)}</p>`), `${page.path}: FAQ answer missing from visible HTML`);
  if (evidence) {
    const evidenceText = [evidence.summary, measurementNote, ...evidence.metrics.flatMap(metric => [metric.name, metric.definition]), ...(evidence.tools || []).flatMap(tool => [tool.name, tool.role]), ...(evidence.timeline ? [evidence.timeline.value, evidence.timeline.explanation] : []), ...(evidence.reference ? [evidence.reference.text] : [])];
    for (const value of evidenceText) expect(html.includes(esc(value)), `${page.path}: missing crawlable measurement or scope content`);
    expect(html.includes('href="/resources/measuring-lead-generation-results"'), `${page.path}: missing measurement guide link`);
  }
  for (const text of detail ? [detail.problem, ...detail.builds, ...(playbook ? [] : detail.workflow), detail.control] : guide ? [guide.answer, ...guide.steps, ...guide.tradeoffs] : []) {
    expect(html.includes(esc(text)), `${page.path}: missing crawlable detail content: ${text}`);
  }
  expect((html.match(/<h1[\s>]/g) || []).length === 1, `${page.path}: expected one crawlable H1`);
  expect((html.match(/<title>/g) || []).length === 1, `${page.path}: expected one title`);
  expect(html.includes(esc(page.title)), `${page.path}: title mismatch`);
  expect(!page.title.includes('|'), `${page.path}: title should use a non-pipe delimiter`);
  expect(html.includes(`name="description"`), `${page.path}: missing description`);
  expect(html.includes(`rel="canonical" href="${site.domain}${page.path === '/' ? '' : page.path}"`), `${page.path}: missing canonical`);
  const robots = page.kind === 'system' ? 'noindex,follow' : 'index,follow';
  expect(html.includes(`name="robots" content="${robots}"`), `${page.path}: missing robots meta`);
  expect(html.includes('property="og:title"'), `${page.path}: missing og:title`);
  expect(html.includes('name="twitter:card"'), `${page.path}: missing twitter card`);
  expect((html.match(/application\/ld\+json/g) || []).length > 0, `${page.path}: missing JSON-LD`);
  for (const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const block = JSON.parse(match[1]);
      if (block['@type'] === 'BreadcrumbList') expect(block.itemListElement.length === breadcrumbsFor(page).length, `${page.path}: breadcrumb hierarchy mismatch`);
    } catch {
      errors.push(`${page.path}: invalid JSON-LD`);
    }
  }
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const target = localTarget(match[1]);
    if (target) expect(existsSync(target), `${page.path}: broken generated internal link ${match[1]}`);
  }

  if (page.path === '/') {
    const rootBody = html.match(/<div id="root">([\s\S]*?)<\/div>/)?.[1] || '';
    const visibleText = stripHtml(rootBody).toLowerCase();
    expect(page.title.includes('LYCORE'), '/: title must identify LYCORE');
    expect((rootBody.match(/<h1[\s>]/gi) || []).length >= 1, '/: raw HTML must include an H1 fallback');
    expect(rootBody.includes(`<h1>${esc(page.h1)}</h1>`), '/: raw HTML H1 must match the homepage heading');
    expect(visibleText.includes('service businesses'), '/: raw HTML body content must identify the intended audience');
    expect(wordCount(visibleText) >= 100, '/: raw HTML fallback content should contain at least 100 crawlable words');
  }
}

expect(existsSync(path.join(distDir, 'sitemap.xml')), 'Missing dist/sitemap.xml');
expect(existsSync(path.join(distDir, 'robots.txt')), 'Missing dist/robots.txt');
expect(existsSync(path.join(root, 'public', 'og-image.png')), 'Missing public/og-image.png');
expect(existsSync(path.join(root, 'api', 'leads.ts')), 'Missing Vercel Function api/leads.ts');
expect(existsSync(path.join(root, 'api', 'chat.ts')), 'Missing Vercel Function api/chat.ts');
expect(existsSync(path.join(root, 'src', 'server', 'leadRouting.ts')), 'Missing shared server lead routing logic');

if (existsSync(path.join(distDir, 'sitemap.xml'))) {
  const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
  expect(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'sitemap.xml must start with an XML declaration');
  expect(sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'), 'sitemap.xml missing urlset namespace');
  for (const page of allPages.filter((item) => item.kind !== 'system')) {
    expect(sitemap.includes(`<loc>${site.domain}${page.path === '/' ? '' : page.path}</loc>`), `sitemap missing public page ${page.path}`);
  }
  for (const page of allPages.filter((item) => item.kind === 'system')) {
    expect(!sitemap.includes(`<loc>${site.domain}${page.path}</loc>`), `sitemap should not include system page ${page.path}`);
  }
  expect(!sitemap.includes('/api/'), 'sitemap should not include API routes');
}

if (existsSync(path.join(distDir, 'robots.txt'))) {
  const robots = await readFile(path.join(distDir, 'robots.txt'), 'utf8');
  expect(robots.includes(`Sitemap: ${site.domain}/sitemap.xml`), 'robots.txt missing canonical sitemap URL');
  expect(!robots.includes('Disallow: /'), 'robots.txt should not block public pages');
}

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
