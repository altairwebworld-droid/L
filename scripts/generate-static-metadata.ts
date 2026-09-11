import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { industries } from '../src/content/industries';
import { growthPages, resourcePages } from '../src/content/architecture';
import { schemaFor } from '../src/content/schema';
import { quoteContent, quoteLinks } from '../src/content/quote';
import { serviceEvidence, measurementNote } from '../src/content/serviceEvidence';
import { industryPlaybooks, industryMeasurementNote, messagingNote, playbookNote } from '../src/content/industryPlaybooks';
import { deliveryStandards } from '../src/content/deliveryStandards';
import { breadcrumbsFor } from '../src/content/breadcrumbs';
import { operationsCategories, operationsFlow } from '../src/content/operations';
import { allPages, globalFaqs, servicePages, site, type PageMeta } from '../src/siteData';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const esc = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));

const absoluteUrl = (route: string) => `${site.domain}${route === '/' ? '' : route}`;
const robotsFor = (page: PageMeta) => (page.kind === 'system' ? 'noindex,follow' : 'index,follow');
const present = (value: string | undefined): value is string => Boolean(value);

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
    <meta name="theme-color" content="#f2f1ed" />
    <meta name="application-name" content="${site.name}" />
    ${schemaFor(page).map((block) => `<script type="application/ld+json" data-lycore-schema>${JSON.stringify(block)}</script>`).join('\n    ')}
    ${assetTags}
  </head>`;
}

function fallbackFor(page: PageMeta) {
  const quote = quoteLinks(page.path);
  const service = servicePages.find((item) => item.path === page.path);
  const paragraphs =
    page.path === '/'
      ? [
          site.coreStatement,
          'Service businesses lose opportunities when calls go unanswered, booking takes too long, or follow-up stops. LYCORE GROUP LLC builds customer communication systems that help teams respond consistently and keep each lead moving.',
          'Services include 24/7 call handling, lead capture, appointment booking, customer follow-up, SMS automation, CRM integration, workflow automation, phone-first websites and related business systems. Rankings, revenue, call volume and client outcomes are never guaranteed.',
        ]
      : ['/what-we-build', '/industries'].includes(page.path) ? [page.description] : [page.description, service?.problem, service?.explanation].filter(present);
  const faqItems = page.faqs || [];
  const detail = growthPages.find(item => item.path === page.path);
  const guide = resourcePages.find(item => item.path === page.path);
  const evidence = page.kind === 'service' ? serviceEvidence[page.path.split('/').pop()!] : undefined;
  const playbook = page.kind === 'industry' ? industryPlaybooks[page.path.split('/').pop()!] : undefined;
  const playbookContent = playbook ? `<section id="workflow"><h2>From request to next step.</h2><p>${esc(playbookNote)}</p>${playbook.workflows.map(workflow => `<article><h3>${esc(workflow.name)}</h3><dl><dt>Starts when</dt><dd>${esc(workflow.trigger)}</dd><dt>Automation</dt><dd>${esc(workflow.action)}</dd><dt>Person takes over</dt><dd>${esc(workflow.handoff)}</dd></dl></article>`).join('')}<p>${esc(messagingNote)}</p><h3>What to measure</h3><p>${esc(industryMeasurementNote)}</p><dl>${playbook.metrics.map(metric => `<dt>${esc(metric.name)}</dt><dd>${esc(metric.definition)}</dd>`).join('')}</dl><a href="/resources/measuring-lead-generation-results">How measurement works</a><h3>Bring these details for a quote</h3><ul>${playbook.quoteInputs.map(input => `<li>${esc(input)}</li>`).join('')}</ul><p>LYCORE checks connection options and agrees the build, software costs, testing and support scope before work starts.</p><a href="#quote">Request a scoped quote</a><a href="/about">See the delivery checklist</a></section>` : '';
  const standardsContent = page.path === '/about' ? `<section><h2>Before a workflow goes live.</h2><p>The checklist below defines what LYCORE agrees, tests and documents before launch.</p><ol>${deliveryStandards.map(step => `<li><h3>${esc(step.title)}</h3><p>${esc(step.detail)}</p></li>`).join('')}</ol></section>` : '';
  const operationsContent = page.path === '/ai-operations' ? `<section id="operations-flow"><h2>From booked customer to completed job.</h2><ol>${operationsFlow.map(step => `<li>${esc(step)}</li>`).join('')}</ol>${operationsCategories.map(category => `<article><h2>${esc(category.title)}</h2><ul>${category.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul></article>`).join('')}<h2>Human control</h2><p>AI can collect information, summarize, update systems, send routine messages, trigger workflows and prepare drafts. People remain responsible for pricing, approvals, unusual situations, sensitive conversations, technical judgment and final decisions.</p></section>` : '';
  const evidenceContent = evidence ? `<section><h2>What to expect</h2><p>${esc(evidence.summary)}</p>
    ${evidence.timeline ? `<h3>${esc(evidence.timeline.label)}: ${esc(evidence.timeline.value)}</h3><p>${esc(evidence.timeline.explanation)}</p>` : ''}
    ${evidence.tools ? `<h3>Domains and mailbox tools</h3><p>The stack depends on your scope and provider policies. These names describe tools and providers, not partnerships or certifications.</p><dl>${evidence.tools.map(tool => `<dt><a href="${tool.url}">${esc(tool.name)}</a></dt><dd>${esc(tool.role)}</dd>`).join('')}</dl>` : ''}
    <h3>How to measure the work</h3><p>${esc(measurementNote)}</p><dl>${evidence.metrics.map(metric => `<dt>${esc(metric.name)}</dt><dd>${esc(metric.definition)}</dd>`).join('')}</dl>
    ${evidence.reference ? `<p>${esc(evidence.reference.text)} <a href="${evidence.reference.url}">${esc(evidence.reference.label)}</a>.</p>` : ''}
    <a href="/resources/measuring-lead-generation-results">Read the lead-generation measurement guide</a></section>` : '';
  const list = (heading: string, items: string[]) => `<h2>${esc(heading)}</h2><ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
  const detailContent = detail ? `<h2>What this solves</h2><p>${esc(detail.problem)}</p>${list('What we build', detail.builds)}${playbook ? playbookContent : list('How it works', detail.workflow)}<h2>What stays under your control</h2><p>${esc(detail.control)}</p>` : guide ? `<h2>Direct answer</h2><p>${esc(guide.answer)}</p>${list('A practical workflow', guide.steps)}${list('Trade-offs and common mistakes', guide.tradeoffs)}` : '';
  const directoryPages = page.path === '/what-we-build' ? growthPages.filter(item => item.kind === 'service') : page.path === '/integrations' ? growthPages.filter(item => item.kind === 'integration') : page.path === '/resources' ? resourcePages : [];
  const directoryContent = directoryPages.map(item => `<article><h2><a href="${item.path}">${esc(item.label)}</a></h2><p>${esc(item.description)}</p></article>`).join('');
  const relatedContent = (detail?.related || guide?.related || []).map(route => `<a href="${route}">${esc(allPages.find(item => item.path === route)?.label || 'Explore LYCORE')}</a>`).join(' ');
  const industryItems = page.path === '/industries'
    ? `<h2>Industries LYCORE serves</h2>
          ${industries.map((industry) => `<article>
            <h3><a href="${industry.path}">${esc(industry.name)}</a></h3>
            <h4>Why this industry needs a reliable response system</h4>
            <p>${esc(industry.pain)}</p>
            <h4>What LYCORE handles</h4>
            <p>${esc(industry.need)}</p>
            <h4>What the business gets</h4>
            <p>${esc(industry.outcome)}</p>
          </article>`).join('\n          ')}`
    : '';

  return `<main class="seo-fallback" aria-label="${esc(page.h1)}">
        <section>
          ${page.path !== '/' ? `<nav aria-label="Breadcrumb">${breadcrumbsFor(page).map(crumb => `<a href="${crumb.path}">${esc(crumb.name)}</a>`).join(' / ')}</nav>` : ''}
          <p>${esc(site.name)}</p>
          <h1>${esc(page.h1)}</h1>
          ${paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('\n          ')}
          ${page.path === '/' ? '<h2>Customer communication systems for service businesses</h2>' : ''}
          ${industryItems}
          ${detailContent}${evidenceContent}${standardsContent}${operationsContent}${directoryContent}${relatedContent}
          ${
            faqItems.length
              ? `<h2>Common Questions</h2>
          ${faqItems.map((faq) => `<h3>${esc(faq.question)}</h3>\n          <p>${esc(faq.answer)}</p>`).join('\n          ')}`
              : ''
          }
          <section id="quote"><h2>${esc(quoteContent.title)}</h2><p>${esc(quoteContent.description)}</p><p>${esc(quoteContent.note)}</p><a href="${esc(quote.email)}">${esc(quoteContent.emailLabel)}</a><a href="${esc(quote.whatsapp)}">${esc(quoteContent.whatsappLabel)}</a></section>
          <nav aria-label="Primary crawl links">
            <a href="${site.auditPath}">${esc(site.primaryCta)}</a>
            <a href="/what-we-build">${esc(site.secondaryCta)}</a>
            <a href="/industries">Industries</a><a href="/integrations">Integrations</a><a href="/resources">Resources</a>
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
    <div id="boot-loader" aria-hidden="true">
      <div class="boot-loader__spinner">
        <svg viewBox="0 0 80 80"><circle r="32" cy="40" cx="40"></circle></svg>
      </div>
      <p class="boot-loader__wordmark">LYCORE</p>
    </div>
    <div id="root">
      ${fallbackFor(page)}
    </div>
  </body>`;
}

function sitemapXml() {
  const urls = allPages
    .filter((page) => page.kind !== 'system')
    .map((page) => `  <url><loc>${absoluteUrl(page.path)}</loc>${page.updatedAt ? `<lastmod>${page.updatedAt}</lastmod>` : ''}<changefreq>monthly</changefreq><priority>${page.path === '/' ? '1.0' : '0.8'}</priority></url>`)
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
  const serviceLines = growthPages.filter(page => page.kind === 'service')
    .map((page) => `- [${page.h1}](${absoluteUrl(page.path)}): ${page.description}`)
    .join('\n');
  const companyPages = allPages.filter((page) => ['legacy', 'home', 'audit', 'commitment'].includes(page.kind) && page.path !== '/');
  const companyLines = companyPages
    .map((page) => `- [${page.label}](${absoluteUrl(page.path)}): ${page.description}`)
    .join('\n');
  const learningPages = allPages.filter((page) => ['industry', 'integration', 'resource'].includes(page.kind));
  const learningLines = learningPages
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

## Industries, integrations, and guides

${learningLines}

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
  const assetTags = [...template.matchAll(/<(script[^>]+><\/script>|link[^>]+>|style[^>]*>[\s\S]*?<\/style>)/g)]
    .map((match) => match[0])
    .filter((tag) => tag.includes('/assets/') || tag.startsWith('<style'))
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
