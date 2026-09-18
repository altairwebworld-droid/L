import {
  ArrowRight,
  Bug,
  Car,
  Check,
  Droplets,
  Flame,
  Globe,
  HeartPulse,
  KeyRound,
  MapPin,
  PhoneCall,
  Scale,
  Truck,
  UtensilsCrossed,
  Wind,
  Workflow,
  X,
  Zap,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../../content/industries';
import { gsap, useGSAP } from '../../lib/gsap';

const industryIcons: Record<string, LucideIcon> = {
  Towing: Truck,
  Plumbing: Droplets,
  HVAC: Wind,
  Locksmiths: KeyRound,
  Restoration: Building2,
  Roofing: Flame,
  Electrical: Zap,
  'Auto repair': Car,
  'Pest control': Bug,
  'Bail bonds': Scale,
  'Urgent care': HeartPulse,
  Restaurants: UtensilsCrossed,
};

const before = [
  'Staff busy with a customer',
  'The second call rings out',
  'Notes half written on paper',
  'Estimate follow-up slips',
] as const;

const after = [
  'Overflow calls get picked up',
  'Name, number and reason captured',
  'Your team gets a written summary',
  'Approved follow-up goes out',
] as const;

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] as const },
};

const connectedRoute = 'M639.668 100C639.668 100 105.669 100 199.669 601.503C293.669 1103.01 1277.17 691.502 1277.17 1399.5C1277.17 2107.5 -155.332 1968 140.168 1438.5C435.669 909.002 1442.66 2093.5 713.168 2659.5';

export default function ConnectedStory() {
  const storyRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const reduceMotion = Boolean(useReducedMotion());
  const industry = industries[activeIndustry];
  const IndustryIcon = industryIcons[industry.name] ?? Droplets;

  useGSAP(
    () => {
      const path = pathRef.current;
      const story = storyRef.current;
      if (!path || !story) return;

      const length = path.getTotalLength();
      if (reduceMotion) {
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
        return;
      }

      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: story,
          start: 'top 78%',
          end: '65% 45%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: storyRef, dependencies: [reduceMotion], revertOnUpdate: true },
  );

  return (
    <div ref={storyRef} className="connected-story">
      <svg
        className="connected-story__route"
        viewBox="0 0 1378 2760"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="connected-story__route-base"
          d={connectedRoute}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="16"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={pathRef}
          className="connected-story__route-progress"
          d={connectedRoute}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="24"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <section id="services" className="connected-services" aria-labelledby="connected-services-title">
        <header className="connected-story__intro">
          <p>Services / 01-04</p>
          <h2 id="connected-services-title">What LYCORE handles for you</h2>
          <span>From the first ring to a job you can act on.</span>
        </header>

        <ServiceChapter number="01" side="left" reduceMotion={reduceMotion}>
          <ServiceCopy
            eyebrow="Always on"
            icon={PhoneCall}
            title="24/7 AI receptionist and answering service"
            body="Your receptionist answers when you are on a job or asleep. It says it is an AI assistant, asks the questions you approve, then books, transfers or takes a message."
            bullets={['Evenings, weekends and overflow calls', 'Name, number, address and reason captured', 'Booked, transferred live, or left as a message']}
            path="/services/ai-receptionist"
          />
          <SourceIllustration src="/service-receptionist-girl.webp" alt="Illustrated receptionist answering a call beside a booking calendar and caller checklist" />
        </ServiceChapter>

        <ServiceChapter number="02" side="right" reduceMotion={reduceMotion}>
          <SourceIllustration src="/connected-source/img_2.svg" alt="Original source illustration of a customer connecting with a business online" />
          <ServiceCopy
            eyebrow="Phone-first"
            icon={Globe}
            title="A website that gets the call"
            body="Built for someone with a leak or a dead heater and a phone in their hand, not someone browsing on a laptop."
            bullets={['Tap to call right at the top', 'Fast on a phone', 'Calls and forms tracked']}
            path="/services/web-design"
          />
        </ServiceChapter>

        <ServiceChapter number="03" side="left" reduceMotion={reduceMotion}>
          <ServiceCopy
            eyebrow="Local search"
            icon={MapPin}
            title="Google Business Profile management"
            body="Your phone number, hours and service area match your website and other listings, so a customer who finds you can reach you."
            bullets={['You stay the owner and we never ask for passwords', 'Phone, hours, categories and service area corrected', 'Profile matched to your website and listings']}
            path="/services/google-business-profile-management"
          />
          <SourceIllustration src="/connected-source/img_3.svg" alt="Original source illustration of a busy team handling messages and information" />
        </ServiceChapter>

        <ServiceChapter number="04" side="right" reduceMotion={reduceMotion}>
          <SourceIllustration src="/connected-source/img_4.svg" alt="Original source illustration of structured support around a person at a laptop" />
          <ServiceCopy
            eyebrow="Follow-up"
            icon={Workflow}
            title="Missed-call texts and follow-up"
            body="A missed call gets an approved text back, and a quote that goes quiet gets a nudge, so nothing depends on you remembering."
            bullets={['Approved text goes to missed callers', 'Follow-up stops when the customer replies', 'Quiet hours and opt-outs respected']}
            path="/services/lead-follow-up"
          />
        </ServiceChapter>

        <div className="connected-systems-note">
          <Workflow aria-hidden="true" />
          <div>
            <strong>Business systems</strong>
            <p>Less admin between the call and the invoice. Ask on the call what fits your setup.</p>
          </div>
          <span>In development</span>
        </div>
      </section>

      <section className="connected-team" aria-labelledby="connected-team-title">
        <header>
          <p>Existing teams / overflow</p>
          <h2 id="connected-team-title">If you already have a team</h2>
          <span>Good staff still cannot answer two calls at once.</span>
        </header>

        <p className="connected-team__lead">
          Two calls land at once. Someone steps out for lunch. Nobody is in the office at 7 p.m. Your receptionist takes the overflow and after-hours calls, asks the questions you approved and sends your team a summary.
        </p>

        <div className="connected-team__comparison">
          <Comparison title="Today" items={before} positive={false} reduceMotion={reduceMotion} />
          <Comparison title="With LYCORE" items={after} positive reduceMotion={reduceMotion} />
        </div>

        <p className="connected-team__payoff">
          Your team takes the calls it can.
          <span>LYCORE picks up the rest.</span>
        </p>
      </section>

      <section id="about" className="connected-about" aria-labelledby="connected-about-title">
        <div>
          <p>About LYCORE</p>
          <h2 id="connected-about-title">Built for owners who cannot pick up every call.</h2>
        </div>
        <div className="connected-about__copy">
          <p>
            LYCORE is a small, founder-led company based in Albuquerque, NM, working with service businesses across the United States. We set up call answering, missed-call texts and follow-up so a customer who rings while you are on a job still hears back.
          </p>
          <p>
            You approve the questions, transfer rules and texts before launch, and callers can always ask for a person. Outcomes are never guaranteed, so we go through what actually happened with you.
          </p>
        </div>
      </section>

      <section id="industries" className="connected-industries" aria-labelledby="connected-industries-title">
        <header>
          <h2 id="connected-industries-title">Who this is for</h2>
          <p>For owners who lose work every time a call goes unanswered.</p>
        </header>

        <nav className="industry-spotlights" aria-label="All industries">
          {industries.map(item => <Link key={item.path} to={item.path}>{item.name}<span aria-hidden="true">↗</span></Link>)}
        </nav>
        <div className="connected-industries__rail" role="group" aria-label="Industry workflow examples">
          {industries.map((item, index) => (
            <button
              key={item.name}
              type="button"
              id={`connected-industry-tab-${index}`}
              aria-pressed={index === activeIndustry}
              aria-controls="connected-industry-panel"
              onClick={() => setActiveIndustry(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <motion.div
          key={industry.name}
          id="connected-industry-panel"
          role="region"
          aria-labelledby={`connected-industry-tab-${activeIndustry}`}
          className="connected-industry-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.3 }}
        >
          <div className="connected-industry-panel__problem">
            <IndustryIcon aria-hidden="true" />
            <p>{industry.name}</p>
            <h3>Where the calls get lost</h3>
            <span>{industry.pain}</span>
          </div>

          <ol className="connected-industry-panel__workflow" role="list">
            {industry.workflow.map((step, index) => (
              <li key={step}>
                <b>{index + 1}</b>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <p className="connected-industry-panel__outcome">
            <ArrowRight aria-hidden="true" />
            {industry.outcome}
          </p>
        </motion.div>

        <Link to="/industries" className="connected-industries__all">
          See your trade and what happens on its calls <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}

function ServiceChapter({
  number,
  side,
  children,
  reduceMotion,
}: {
  number: string;
  side: 'left' | 'right';
  children: React.ReactNode;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      initial={reduceMotion ? false : reveal.initial}
      whileInView={reduceMotion ? undefined : reveal.whileInView}
      viewport={reveal.viewport}
      transition={reduceMotion ? { duration: 0 } : reveal.transition}
      className={`connected-service-row connected-service-row--${side}`}
    >
      <span className="connected-service-row__number" aria-hidden="true">{number}</span>
      {children}
    </motion.article>
  );
}

function ServiceCopy({
  eyebrow,
  icon: Icon,
  title,
  body,
  bullets,
  path,
}: {
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: readonly string[];
  path: string;
}) {
  return (
    <div className="connected-service-copy">
      <p><Icon aria-hidden="true" />{eyebrow}</p>
      <h3>{title}</h3>
      <span>{body}</span>
      <ul role="list">
        {bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" />{bullet}</li>)}
      </ul>
      <Link to={path} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">See how it works <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
    </div>
  );
}

function SourceIllustration({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="connected-source-illustration">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

function Comparison({
  title,
  items,
  positive,
  reduceMotion,
}: {
  title: string;
  items: readonly string[];
  positive: boolean;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : reveal.initial}
      whileInView={reduceMotion ? undefined : reveal.whileInView}
      viewport={reveal.viewport}
      transition={reduceMotion ? { duration: 0 } : reveal.transition}
      className={positive ? 'is-positive' : ''}
    >
      <h3>{title}</h3>
      <ol role="list">
        {items.map((item, index) => (
          <li key={item}>
            <b>{index + 1}</b>
            {positive ? <Check aria-hidden="true" /> : <X aria-hidden="true" />}
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
