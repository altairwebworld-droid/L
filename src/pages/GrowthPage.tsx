import { ArrowRight, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import { allPages } from '../siteData';
import { CtaBand, FaqSection } from '../components/PageSections';
import { growthPages } from '../content/architecture';
import { NightToDawnField } from '../components/home/NightToDawnField';
import ServiceEvidence from '../components/ServiceEvidence';
import { serviceEvidence } from '../content/serviceEvidence';
import IndustryPlaybook from '../components/IndustryPlaybook';
import { industryPlaybooks } from '../content/industryPlaybooks';
import { breadcrumbsFor } from '../content/breadcrumbs';

export default function GrowthPage() {
  const { pathname } = useLocation();
  const page = growthPages.find((item) => item.path === pathname);
  if (!page) return <NotFound />;
  const evidence = page.kind === 'service' ? serviceEvidence[page.path.split('/').pop()!] : undefined;
  const playbook = page.kind === 'industry' ? industryPlaybooks[page.path.split('/').pop()!] : undefined;
  return <div className="detail-page"><NightToDawnField>
    <section className="px-6 pb-14 pt-28 md:pb-20 md:pt-36"><div className="mx-auto max-w-6xl text-center">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted"><ol className="flex flex-wrap justify-center gap-x-2 gap-y-1">{breadcrumbsFor(page).map((crumb, index, crumbs) => <li key={crumb.path}>{index > 0 && <span aria-hidden="true" className="mr-2">/</span>}{index === crumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link className="underline underline-offset-4" to={crumb.path}>{crumb.name}</Link>}</li>)}</ol></nav>
      <p className="micro-label text-ink-muted">{page.eyebrow}</p>
      <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-medium leading-[.98] tracking-tight text-white md:text-6xl">{page.h1}</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-ink-muted md:text-xl">{page.description}</p>
      <div className="detail-actions">{playbook ? <a href="#quote" className="btn-primary">Request a quote</a> : <Link to="/contact" className="btn-primary" data-track="free_audit_click">Get a free growth system audit</Link>}<a href="#workflow" className="btn-secondary">See the workflow</a></div>
      <div className="mt-10 rounded-[1.75rem] border border-white/15 bg-white/[.045] p-6 text-left md:p-8"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><p className="micro-label text-ink-muted">The gap</p><p className="mt-4 text-xl font-light leading-relaxed text-white">{page.problem}</p></div>
        <div className="detail-inclusions">{page.builds.map((item) => <article key={item}><Check aria-hidden="true" /><p>{item}</p></article>)}</div>
      </div></div>
    </div></section>
    {playbook ? <IndustryPlaybook playbook={playbook} /> : <section id="workflow" className="border-t border-white/10 px-6 py-14 md:py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="micro-label text-ink-muted">Example workflow</p><h2 className="section-title mt-4">What happens next.</h2></div><ol className="detail-workflow">{page.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></div></section>}
    <section className="px-6 pb-16 md:pb-24"><div className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12"><p className="micro-label text-ink-muted">What stays under your control</p><p className="mt-5 max-w-4xl text-lg font-light leading-relaxed text-ink-muted">{page.control}</p><div className="mt-8 flex flex-wrap gap-3">{page.related.map((path) => <Link className="btn-secondary" to={path} key={path}>{allPages.find(item => item.path === path)?.label || 'Related service'} <ArrowRight className="h-4 w-4" /></Link>)}</div></div></section>
    {evidence && <ServiceEvidence evidence={evidence} />}
    <FaqSection faqs={page.faqs} showAllLink={false} /><CtaBand />
  </NightToDawnField></div>;
}
