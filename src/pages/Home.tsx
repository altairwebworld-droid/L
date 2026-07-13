import { Link } from 'react-router-dom';
import { CtaBand, FaqSection, Hero, ProcessSection, ShowcaseSection } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

const industries = [
  'Towing', 'Plumbing', 'Roofing', 'HVAC', 'Electrical',
  'Restaurants', 'Urgent Care', 'Bail Bonds', 'Locksmiths',
  'Restoration', 'Auto Repair', 'Pest Control',
];

export default function Home() {
  return (
    <>
      <Hero title="Stop losing jobs to missed calls" copy={site.heroCopy} />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="micro-label mb-4">The problem LYCORE fixes</p>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight leading-tight mb-6">
              A missed call is a lost job. Every time.
            </h2>
            <p className="text-white text-lg leading-relaxed font-light">
              Your phone rings at 2 a.m. and goes to voicemail. A homeowner with a burst pipe, a driver stranded on the highway, a patient looking for help — they do not leave a message. They call the next number. That job is gone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['The 2 a.m. call nobody answered', 'A tow truck driver misses the call. A plumber misses the call. The customer calls someone else. Our receptionist picks up, captures the details, and your team gets a clean summary before the next ring.'],
              ['A website that just sits there', 'Your site looks fine on desktop but on a phone at midnight, the number is buried. We build sites where the first thing a caller sees is a tappable phone number.'],
              ['No idea which marketing works', 'Every lead arrives tagged with its source — so you know whether the call came from Google, a yard sign, or a referral.'],
              ['Follow-up that depends on memory', 'The caller is captured, the summary is sent, and the follow-up fires automatically. No sticky notes, no forgotten callbacks.'],
            ].map(([title, body]) => (
              <article key={title} className="glass-panel rounded-[24px] border border-white/10 p-6">
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-sm text-stone-300 font-light leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What LYCORE does — the five offerings */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-normal mb-5">More answered calls. More booked jobs. No lost leads.</h2>
          <p className="text-white font-light leading-relaxed">
            LYCORE handles the chain from ring to revenue: your calls get answered, your website earns the call, your listing gets found, and the paperwork takes care of itself.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ['24/7 Receptionist', 'Every call answered, day or night. Caller details captured and sent to your team. Live transfers when it matters. Missed calls become booked jobs.', '/what-we-build'],
            ['Websites That Convert Callers', 'Fast, phone-first sites built so an urgent searcher taps and calls. Your number is tappable from the first screen, and every page is built to earn the call.', '/what-we-build'],
            ['Google Business Profile', 'The listing that decides whether you get found and called in local search. We optimize categories, photos, hours, and service areas so the right searches find you.', '/what-we-build'],
            ['Intake + Follow-Up Automation', 'The paperwork behind the call fills itself. Confirmations and follow-ups send themselves. A monthly report shows what the system brought in. Currently rolling out.', '/what-we-build'],
            ['Business Systems', 'The longer arc: one system per industry that runs the office end to end — from the first call through dispatch, invoicing, and repeat business. This is where we are building toward.', '/vision'],
          ].map(([title, body, link]) => (
            <article key={title} className="glass-panel rounded-[28px] border border-white/10 p-7 flex flex-col min-h-[260px]">
              <h3 className="text-2xl font-medium mb-4 tracking-wide">{title}</h3>
              <p className="text-stone-300 font-light leading-relaxed flex-grow">{body}</p>
              <Link to={link!} className="mt-8 text-sm uppercase tracking-[0.12em] font-bold hover:text-white/70 transition-colors">
                How it works
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Industries strip */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-8 max-w-3xl">
          <p className="micro-label mb-4">Built for businesses like yours</p>
          <h2 className="text-4xl md:text-5xl font-normal mb-5">Any service business where a missed call is lost revenue</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((industry) => (
            <div key={industry} className="glass-panel rounded-xl border border-white/10 px-4 py-3 text-sm text-stone-200">
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </section>

      <ShowcaseSection />
      <ProcessSection />
      <FaqSection faqs={globalFaqs.slice(0, 6)} />
      <CtaBand />
    </>
  );
}
