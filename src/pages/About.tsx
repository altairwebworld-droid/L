import { CtaBand, FaqSection, Hero } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function About() {
  return (
    <>
      <Hero compact title="About LYCORE" copy={site.coreStatement} />
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-10">
        <div>
          <h2 className="text-4xl font-normal mb-5">Built around the missed-call problem</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            LYCORE GROUP LLC builds customer communication and workflow systems for service businesses. The work starts with a practical problem: when a call goes unanswered or follow-up is delayed, the customer often moves on.
          </p>
          <p className="text-white text-lg leading-relaxed font-light mt-5">
            Our systems support 24/7 call handling, lead capture, appointment booking, customer follow-up, SMS automation, CRM integration and related business workflows. Each setup is shaped around the way the client actually operates.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-normal mb-5">Industry experience, broader direction</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            LYCORE first learned these operational patterns through work in bail bonds and towing. Today the company serves the broader service-business market, including home services, roadside services, clinics, restaurants and other teams where timely communication matters.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-normal mb-5">Measurement, not marketing claims</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            We do not guarantee rankings, revenue, or call volume. What we do is measure: answered calls, booked jobs, lead sources, and system performance. The numbers tell the story.
          </p>
        </div>
      </section>
      <FaqSection faqs={[globalFaqs[0], globalFaqs[10]]} />
      <CtaBand />
    </>
  );
}
