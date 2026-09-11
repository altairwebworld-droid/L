import { Link } from 'react-router-dom';
import { industryMeasurementNote, messagingNote, playbookNote, type IndustryPlaybook as Playbook } from '../content/industryPlaybooks';

export default function IndustryPlaybook({ playbook }: { playbook: Playbook }) {
  return <section id="workflow" aria-labelledby="industry-playbook-title" className="scroll-mt-24 px-6 pb-14 md:pb-20"><div className="mx-auto max-w-6xl">
    <p className="micro-label text-ink-muted">Workflow detail</p>
    <h2 id="industry-playbook-title" className="section-title mt-4">From request to next step.</h2>
    <p className="mt-5 max-w-3xl text-ink-muted leading-relaxed">{playbookNote}</p>
    <div className="mt-8 grid gap-5 md:grid-cols-2">{playbook.workflows.map((workflow, index) => <article key={workflow.name} data-industry-workflow className="rounded-2xl border border-white/15 bg-white/[.045] p-6 md:p-8">
      <p className="micro-label text-ink-muted">Workflow {String(index + 1).padStart(2, '0')}</p>
      <h3 className="mt-3 font-display text-2xl text-white">{workflow.name}</h3>
      <dl className="mt-6 space-y-5">{[['Starts when', workflow.trigger], ['Automation', workflow.action], ['Person takes over', workflow.handoff]].map(([label, text]) => <div key={label}><dt className="text-sm font-medium text-white">{label}</dt><dd className="mt-2 text-ink-muted leading-relaxed">{text}</dd></div>)}</dl>
    </article>)}</div>
    <p className="mt-5 max-w-4xl text-sm leading-relaxed text-ink-muted">{messagingNote}</p>
    <div className="mt-10 grid gap-10 border-t border-white/15 pt-8 lg:grid-cols-2">
      <div><h3 className="font-display text-2xl text-white">What to measure</h3><p className="mt-3 text-sm leading-relaxed text-ink-muted">{industryMeasurementNote}</p><dl className="mt-5 space-y-5">{playbook.metrics.map(metric => <div key={metric.name}><dt className="font-medium text-white">{metric.name}</dt><dd className="mt-2 leading-relaxed text-ink-muted">{metric.definition}</dd></div>)}</dl><Link className="mt-5 inline-block text-white underline underline-offset-4" to="/resources/measuring-lead-generation-results">How measurement works</Link></div>
      <div><h3 className="font-display text-2xl text-white">Bring these details for a quote</h3><ul className="mt-5 list-disc space-y-3 pl-5 text-ink-muted">{playbook.quoteInputs.map(input => <li key={input}>{input}</li>)}</ul><p className="mt-5 leading-relaxed text-ink-muted">LYCORE checks connection options and agrees the build, software costs, testing and support scope before work starts.</p><a href="#quote" className="btn-primary mt-6">Request a scoped quote</a><p className="mt-4 text-sm"><Link to="/about" className="text-ink-muted underline underline-offset-4">See the delivery checklist</Link></p></div>
    </div>
  </div></section>;
}
