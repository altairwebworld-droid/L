import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { resourcePages } from '../content/architecture';
import { CtaBand, FaqSection, Hero } from '../components/PageSections';
import { NightToDawnField } from '../components/home/NightToDawnField';

export function ResourcesHub() {
  return <NightToDawnField><Hero title="Resources for clearer customer journeys" copy="Practical guides for service businesses deciding how to respond faster, follow up consistently, and connect the tools they already use." /><Directory /><CtaBand /></NightToDawnField>;
}

export function ResourceDetail({ page }: { page: (typeof resourcePages)[number] }) {
  return <NightToDawnField><Hero title={page.h1} copy={page.description} />
    <section className="px-6 py-16 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><p className="micro-label text-ink-muted">Direct answer</p><p className="max-w-3xl text-xl font-light leading-relaxed text-ink-muted">{page.answer}</p></div></section>
    <section className="surface-cream px-6 py-16 text-[#082f68] md:py-24"><div className="mx-auto max-w-7xl"><p className="micro-label text-[#3d6ea9]">A practical workflow</p><ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{page.steps.map((step, index) => <li key={step} className="rounded-2xl border border-[#082f68]/15 bg-white p-6"><b className="text-sm text-[#3d6ea9]">{String(index + 1).padStart(2, '0')}</b><p className="mt-5 text-base leading-7">{step}</p></li>)}</ol></div></section>
    <section className="px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl"><p className="micro-label text-ink-muted">Trade-offs and common mistakes</p><ul className="mt-8 grid gap-4 md:grid-cols-3">{page.tradeoffs.map((item) => <li key={item} className="lycore-card rounded-2xl p-6 text-base font-light leading-7 text-ink-muted">{item}</li>)}</ul><div className="mt-10 flex flex-wrap gap-3">{page.related.map((path) => <Link to={path} key={path} className="btn-secondary">Related LYCORE system <ArrowRight className="h-4 w-4" /></Link>)}</div></div></section><FaqSection faqs={page.faqs} showAllLink={false} /><CtaBand />
  </NightToDawnField>;
}

export function ResourcePageRoute() {
  const { resource } = useParams();
  const page = resourcePages.find((item) => item.path.endsWith(`/${resource}`));
  return page ? <ResourceDetail page={page} /> : null;
}

function Directory() { return <section className="px-6 py-16 md:py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{resourcePages.map((page) => <Link to={page.path} key={page.path} className="lycore-card rounded-3xl p-7 no-underline"><p className="micro-label text-ink-muted">Guide</p><h2 className="mt-5 text-2xl leading-tight">{page.label}</h2><p className="mt-4 text-sm font-light leading-6 text-ink-muted">{page.description}</p><span className="mt-7 inline-block text-sm font-semibold">Read guide →</span></Link>)}</div></section>; }
