import { Link } from 'react-router-dom';
import { measurementNote, type ServiceEvidence as Evidence } from '../content/serviceEvidence';

export default function ServiceEvidence({ evidence }: { evidence: Evidence }) {
  return <section className="service-evidence px-6 py-8" aria-label="Scope and measurement">
    <div className="mx-auto max-w-6xl">
      <h2 className="section-title">What to expect</h2>
      <p className="mt-4 max-w-4xl leading-7 text-ink-muted">{evidence.summary}</p>
      {evidence.timeline && <div className="evidence-timeline">
        <div><p className="micro-label">{evidence.timeline.label}</p><p className="mt-2 text-3xl font-semibold">{evidence.timeline.value}</p></div>
        <p className="leading-7 text-ink-muted">{evidence.timeline.explanation}</p>
      </div>}
      {evidence.tools && <div className="mt-8">
        <h3 className="text-2xl">Domains and mailbox tools</h3>
        <p className="mt-3 text-ink-muted">The stack depends on your scope and provider policies. These names describe tools and providers, not partnerships or certifications.</p>
        <dl className="evidence-grid">{evidence.tools.map(tool => <div key={tool.name}><dt><a className="underline underline-offset-4" href={tool.url}>{tool.name}</a></dt><dd>{tool.role}</dd></div>)}</dl>
      </div>}
      <h3 className="mt-8 text-2xl">How to measure the work</h3>
      <p className="mt-3 max-w-4xl text-ink-muted">{measurementNote}</p>
      <dl className="evidence-grid">{evidence.metrics.map(metric => <div key={metric.name}><dt>{metric.name}</dt><dd>{metric.definition}</dd></div>)}</dl>
      {evidence.reference && <p className="mt-5 max-w-4xl leading-7 text-ink-muted">{evidence.reference.text} <a className="underline underline-offset-4" href={evidence.reference.url}>{evidence.reference.label}</a>.</p>}
      <Link to="/resources/measuring-lead-generation-results" className="mt-5 inline-block underline underline-offset-4">Read the lead-generation measurement guide</Link>
    </div>
  </section>;
}
