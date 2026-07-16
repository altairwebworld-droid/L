import { CtaBand, FaqSection, Hero, Reveal } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function About() {
  return (
    <>
      <Hero compact title="About LYCORE" copy={site.coreStatement} />
      <section className="about-manifesto section-shell py-20 md:py-28" aria-labelledby="about-principles-title">
        <Reveal className="about-manifesto__lead">
          <p className="micro-label">Why LYCORE exists</p>
          <p className="about-manifesto__statement">
            A good service business should not lose the job simply because everyone was already helping someone else.
          </p>
        </Reveal>

        <div className="about-principles">
          <h2 id="about-principles-title" className="sr-only">How LYCORE works</h2>
          {[
            {
              title: 'Start with the missed-call problem',
              body: 'LYCORE GROUP LLC builds customer communication and workflow systems for service businesses. The work starts where revenue usually disappears: an unanswered call or delayed follow-up.',
            },
            {
              title: 'Shape the system around the operation',
              body: 'Call handling, lead capture, booking, SMS, CRM integration, and follow-up are configured around the way the client actually works—not around a generic software template.',
            },
            {
              title: 'Measure the work honestly',
              body: 'We do not guarantee rankings, revenue, or call volume. We measure answered calls, booked opportunities, lead sources, and system performance so the numbers can tell the story.',
            },
          ].map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06}>
              <article className="about-principle">
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="measurement-strip">
          <div>
            <p className="micro-label mb-3">The operating view</p>
            <h2>Four signals we keep visible.</h2>
          </div>
          <ul role="list">
            {['Answered calls', 'Booked opportunities', 'Lead sources', 'System performance'].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Reveal>
      </section>
      <FaqSection faqs={[globalFaqs[0], globalFaqs[10]]} />
      <CtaBand />
    </>
  );
}
