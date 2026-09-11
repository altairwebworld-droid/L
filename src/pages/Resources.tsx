import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { resourcePages } from '../content/architecture';
import { allPages } from '../siteData';
import { CtaBand, FaqSection } from '../components/PageSections';
import { NightToDawnField } from '../components/home/NightToDawnField';
import ContentDirectory from '../components/ContentDirectory';
import NotFound from './NotFound';

export function ResourcesHub() {
  return <ContentDirectory pages={resourcePages} title="Make the next step clear." description="Practical guides to lead response, booking, reviews and the software that connects them." />;
}

export function ResourceDetail({ page }: { page: (typeof resourcePages)[number] }) {
  return <div className="detail-page"><NightToDawnField>
    <section className="px-6"><div className="mx-auto max-w-6xl">
      <p className="micro-label text-ink-muted">Practical guide</p>
      <h1 className="mt-4 text-white">{page.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">{page.description}</p>
      <div className="mt-7 max-w-4xl border-t border-white/15 pt-6"><h2 className="text-xl text-white">The short answer</h2><p className="mt-3 text-lg leading-relaxed text-ink-muted">{page.answer}</p></div>
    </div></section>
    <section id="workflow" className="px-6"><div className="mx-auto max-w-6xl"><h2 className="section-title">A practical workflow</h2><ol className="detail-workflow">{page.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></div></section>
    <section className="px-6 py-10"><div className="mx-auto max-w-6xl"><h2 className="section-title">Trade-offs and common mistakes</h2><ul className="mt-6 grid gap-5 md:grid-cols-3">{page.tradeoffs.map(item => <li key={item} className="border-t border-white/15 pt-4 leading-7 text-ink-muted">{item}</li>)}</ul><nav aria-label="Related services" className="mt-8 flex flex-wrap gap-3">{page.related.map(path => <Link to={path} key={path} className="btn-secondary">{allPages.find(item => item.path === path)?.label || 'Explore LYCORE'} <ArrowRight className="h-4 w-4" /></Link>)}</nav></div></section>
    <FaqSection faqs={page.faqs} showAllLink={false} /><CtaBand />
  </NightToDawnField></div>;
}

export function ResourcePageRoute() {
  const { resource } = useParams();
  const page = resourcePages.find(item => item.path.endsWith(`/${resource}`));
  return page ? <ResourceDetail page={page} /> : <NotFound />;
}
