import { Link } from 'react-router-dom';
import { integrationGrowthPages } from '../content/architecture';
import { Hero, CtaBand } from '../components/PageSections';
import { NightToDawnField } from '../components/home/NightToDawnField';

export default function Integrations() {
  return <NightToDawnField><Hero title="Keep the tools your team already uses." copy="LYCORE evaluates practical ways to connect customer-journey workflows around your existing field-service, CRM, and automation tools. A listed platform is not an official partnership or a promise of a native integration." />
    <section className="px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{integrationGrowthPages.map((page) => <Link to={page.path} className="lycore-card rounded-3xl p-7 no-underline" key={page.path}><p className="micro-label text-ink-muted">{page.eyebrow}</p><h2 className="mt-5 text-3xl">{page.label.replace(' workflows', '')}</h2><p className="mt-4 text-base font-light leading-7 text-ink-muted">{page.description}</p><span className="mt-7 inline-block text-sm font-semibold text-white">See possible workflow →</span></Link>)}</div></div></section><CtaBand /></NightToDawnField>;
}
