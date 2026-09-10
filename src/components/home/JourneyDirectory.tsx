import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceGrowthPages } from '../../content/architecture';

const stages = [
  ['Find', '/services/outbound-lead-generation'],
  ['Capture', '/services/web-design'],
  ['Respond', '/services/ai-receptionist'],
  ['Qualify', '/services/lead-follow-up'],
  ['Book', '/services/missed-call-text-back'],
  ['Follow up', '/services/crm-automation'],
  ['Review', '/services/review-automation'],
  ['Reactivate', '/services/customer-reactivation'],
] as const;

const featured = ['outbound-lead-generation', 'ai-receptionist', 'reputation-management', 'crm-automation', 'web-design'];

export default function JourneyDirectory() {
  return <section className="relative border-y border-white/10 px-6 py-16 md:py-24" aria-labelledby="journey-title">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
        <div><p className="micro-label text-ink-muted">The LYCORE customer journey</p><h2 id="journey-title" className="section-title mt-5">Find the gap. Connect the next step.</h2></div>
        <p className="max-w-2xl text-lg font-light leading-relaxed text-ink-muted">LYCORE is built around the moments where a service-business customer can disappear: before the enquiry, at the first response, after an estimate, and after the job is complete.</p>
      </div>
      <ol className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{stages.map(([stage, path], index) => <li key={stage}><Link to={path} className="flex min-h-28 items-end justify-between rounded-2xl border border-white/12 bg-white/[.035] p-5 transition hover:border-white/35 hover:bg-white/[.08]"><span><b className="block text-xs tracking-[.16em] text-[#a9c5ec]">{String(index + 1).padStart(2, '0')}</b><span className="mt-3 block text-xl">{stage}</span></span><ArrowRight className="h-5 w-5 text-[#a9c5ec]" aria-hidden="true" /></Link></li>)}</ol>
      <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{serviceGrowthPages.filter((page) => featured.includes(page.path.split('/').at(-1) || '')).map((page) => <Link key={page.path} to={page.path} className="lycore-card rounded-3xl p-6 no-underline"><p className="micro-label text-ink-muted">System</p><h3 className="mt-5 text-2xl leading-tight">{page.label}</h3><p className="mt-4 text-sm font-light leading-6 text-ink-muted">{page.problem}</p><span className="mt-6 inline-block text-sm font-semibold">Explore this system →</span></Link>)}</div>
      <div className="mt-10 flex flex-wrap gap-3"><Link to="/industries" className="btn-secondary">Explore industries</Link><Link to="/integrations" className="btn-secondary">Explore integrations</Link></div>
    </div>
  </section>;
}
