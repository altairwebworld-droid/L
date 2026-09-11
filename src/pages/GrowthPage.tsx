import { ArrowRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CtaBand, FaqSection } from '../components/PageSections';
import { growthPages } from '../content/architecture';
import { NightToDawnField } from '../components/home/NightToDawnField';

export default function GrowthPage() {
  const { '*': path = '' } = useParams();
  const page = growthPages.find((item) => item.path.slice(1) === path);
  if (!page) return null;
  return <NightToDawnField>
    <section className="px-6 pb-14 pt-28 md:pb-20 md:pt-36"><div className="mx-auto max-w-6xl text-center">
      <p className="micro-label text-ink-muted">{page.eyebrow}</p>
      <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-medium leading-[.98] tracking-tight text-white md:text-6xl">{page.h1}</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-ink-muted md:text-xl">{page.description}</p>
      <div className="mt-10 rounded-[1.75rem] border border-white/15 bg-white/[.045] p-6 text-left md:p-8"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><p className="micro-label text-ink-muted">The gap</p><p className="mt-4 text-xl font-light leading-relaxed text-white">{page.problem}</p></div>
        <div className="grid gap-3 sm:grid-cols-3">{page.builds.map((item) => <article className="rounded-2xl border border-white/12 bg-[#0b3478]/60 p-5" key={item}><Check className="h-5 w-5 text-[#ffb07a]" aria-hidden="true" /><p className="mt-4 text-sm leading-6 text-white/85">{item}</p></article>)}</div>
      </div></div>
    </div></section>
    <section className="border-t border-white/10 px-6 py-14 md:py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="micro-label text-ink-muted">Example workflow</p><h2 className="section-title mt-4">What happens next.</h2></div><ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{page.workflow.map((step, index) => <li className="lycore-card rounded-2xl p-6" key={step}><span className="text-xs font-bold tracking-[.16em] text-[#a9c5ec]">{String(index + 1).padStart(2, '0')}</span><p className="mt-6 text-lg leading-snug">{step}</p></li>)}</ol></div></section>
    <section className="px-6 pb-16 md:pb-24"><div className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12"><p className="micro-label text-ink-muted">What stays under your control</p><p className="mt-5 max-w-4xl text-lg font-light leading-relaxed text-ink-muted">{page.control}</p><div className="mt-8 flex flex-wrap gap-3">{page.related.map((path) => <Link className="btn-secondary" to={path} key={path}>Explore related system <ArrowRight className="h-4 w-4" /></Link>)}</div></div></section>
    <FaqSection faqs={page.faqs} showAllLink={false} /><CtaBand />
  </NightToDawnField>;
}
