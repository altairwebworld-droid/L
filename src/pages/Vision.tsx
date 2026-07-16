import { CtaBand, Hero, Reveal } from '../components/PageSections';

const roadmap = [
  {
    phase: 'Now',
    title: 'Start with the phone',
    body: 'Most small service businesses lose revenue the same way: the phone rings and nobody answers. LYCORE fixes that first with 24/7 call handling, a phone-first website, and structured intake.',
    status: 'Available now',
  },
  {
    phase: 'Next',
    title: 'Automate the paperwork',
    body: 'Call details move into confirmations, routing, follow-up, and reporting without the owner touching a spreadsheet.',
    status: 'Rolling out to early partners',
  },
  {
    phase: 'Direction',
    title: 'Build the operating system',
    body: 'One system per industry, connecting the first call to dispatch, invoicing, repeat-business follow-up, and reporting.',
    status: 'Direction—not a product available today',
  },
  {
    phase: 'Long term',
    title: 'Move beyond the screen',
    body: 'As LYCORE understands each industry more deeply, the ambition can extend into physical infrastructure, logistics, and services that software alone cannot replace.',
    status: 'Long-term ambition',
  },
];

export default function Vision() {
  return (
    <>
      <Hero
        compact
        title="Where We Are Building"
        copy="LYCORE starts with the call. The ambition goes further."
      />
      <section className="vision-roadmap section-shell py-20 md:py-28" aria-labelledby="roadmap-title">
        <header className="vision-roadmap__intro">
          <p className="micro-label mb-5">Build sequence</p>
          <h2 id="roadmap-title" className="section-title">Useful now. Ambitious over time.</h2>
          <p>Each layer earns the right to exist by making the previous one work better.</p>
        </header>
        <ol className="vision-roadmap__steps">
          {roadmap.map((step, index) => (
            <li key={step.phase}>
              <Reveal>
                <article className="vision-step">
                  <div className="vision-step__marker"><span>0{index + 1}</span></div>
                  <div className="vision-step__copy">
                    <p className="micro-label">{step.phase}</p>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  <p className="vision-step__status">{step.status}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
