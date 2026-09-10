import { ArrowRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CtaBand, FaqSection, Hero } from '../components/PageSections';
import { growthPages } from '../content/architecture';
import { NightToDawnField } from '../components/home/NightToDawnField';

export default function GrowthPage() {
  const { '*': path = '' } = useParams();
  const page = growthPages.find((item) => item.path.slice(1) === path);
  if (!page) return null;
  return <NightToDawnField>
    <Hero title={page.h1} copy={page.description} />
    <section className="px-6 py-16 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
      <div><p className="micro-label text-ink-muted">The gap</p><h2 className="section-title mt-5">Where opportunities get lost.</h2></div>
      <p className="max-w-3xl text-xl font-light leading-relaxed text-ink-muted">{page.problem}</p>
    </div></section>
    <section className="surface-cream px-6 py-16 text-[#082f68] md:py-24"><div className="mx-auto max-w-7xl">
      <p className="micro-label text-[#3d6ea9]">What LYCORE actually builds</p><div className="mt-8 grid gap-4 md:grid-cols-3">{page.builds.map((item) => <article className="rounded-2xl border border-[#082f68]/15 bg-white p-6" key={item}><Check className="h-5 w-5 text-[#ff6b22]" aria-hidden="true" /><p className="mt-5 text-base leading-7">{item}</p></article>)}</div>
    </div></section>
    <section className="px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl"><p className="micro-label text-ink-muted">Example workflow</p><ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{page.workflow.map((step, index) => <li className="lycore-card rounded-2xl p-6" key={step}><span className="text-xs font-bold tracking-[.16em] text-[#a9c5ec]">{String(index + 1).padStart(2, '0')}</span><p className="mt-6 text-lg leading-snug">{step}</p></li>)}</ol></div></section>
    <section className="px-6 pb-16 md:pb-24"><div className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12"><p className="micro-label text-ink-muted">What stays under your control</p><p className="mt-5 max-w-4xl text-lg font-light leading-relaxed text-ink-muted">{page.control}</p><div className="mt-8 flex flex-wrap gap-3">{page.related.map((path) => <Link className="btn-secondary" to={path} key={path}>Explore related system <ArrowRight className="h-4 w-4" /></Link>)}</div></div></section>
    <FaqSection faqs={page.faqs} showAllLink={false} /><CtaBand />
  </NightToDawnField>;
}
