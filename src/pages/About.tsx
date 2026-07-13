import { CtaBand, FaqSection, Hero } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function About() {
  return (
    <>
      <Hero compact title="About LYCORE" copy={site.coreStatement} />
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-10">
        <div>
          <h2 className="text-4xl font-normal mb-5">Started with bail bonds and towing</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            LYCORE began by solving one problem for bail bond agencies and towing companies: every call that went unanswered was a lost job. We built a receptionist that answers those calls 24/7, and websites that make the phone number the first thing a visitor sees.
          </p>
          <p className="text-white text-lg leading-relaxed font-light mt-5">
            Those two industries proved the method. The pattern — urgent caller, missed phone, lost revenue — is the same across plumbing, HVAC, electrical, roofing, restaurants, clinics, locksmiths, and restoration companies. The system works anywhere that pattern exists.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-normal mb-5">Proof of method, not the ceiling</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            Bail bonds and towing are where LYCORE learned the operational patterns of service businesses. They are proof that the approach works — not a limit on where we go next.
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
