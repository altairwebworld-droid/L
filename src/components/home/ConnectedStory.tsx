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
  'Staff occupied with a customer',
  'Second call missed',
  'Notes incomplete',
  'Follow-up delayed',
] as const;

const after = [
  'Overflow handled automatically',
  'Caller information captured',
  'Team receives a full summary',
  'Follow-up continues on its own',
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
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
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
          strokeWidth="10"
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={pathRef}
          d={connectedRoute}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="10"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <section id="services" className="connected-services" aria-labelledby="connected-services-title">
        <header className="connected-story__intro">
          <p>Services / 01-04</p>
          <h2 id="connected-services-title">What LYCORE runs</h2>
          <span>From the first ring to a lead your team can act on.</span>
        </header>

        <ServiceChapter number="01" side="left" reduceMotion={reduceMotion}>
          <ServiceCopy
            eyebrow="Always on"
            icon={PhoneCall}
            title="24/7 reception and call handling"
            body="Every call answered in your business name, with the details your team needs to act captured before the caller hangs up."
            bullets={['Every call answered in seconds', 'Caller details captured before hang-up', 'Booked work routed to your team']}
          />
          <SourceIllustration src="/service-receptionist-girl.webp" alt="Illustrated receptionist answering a call beside a booking calendar and caller checklist" />
        </ServiceChapter>

        <ServiceChapter number="02" side="right" reduceMotion={reduceMotion}>
          <SourceIllustration src="/connected-source/img_2.svg" alt="Original source illustration of a customer connecting with a business online" />
          <ServiceCopy
            eyebrow="Phone-first"
            icon={Globe}
            title="Websites that convert callers"
            body="Built for someone holding a phone in an emergency, not someone browsing on a laptop."
            bullets={['Emergency action above the fold', 'Clear offers and trust signals', 'Traffic turned into booked work']}
          />
        </ServiceChapter>

        <ServiceChapter number="03" side="left" reduceMotion={reduceMotion}>
          <ServiceCopy
            eyebrow="Local search"
            icon={MapPin}
            title="Google Business Profile optimisation"
            body="Help nearby customers find, trust and contact your business when they are ready to act."
            bullets={['Profile information kept complete', 'Review activity made visible', 'Calls and directions easier to reach']}
          />
          <SourceIllustration src="/connected-source/img_3.svg" alt="Original source illustration of a busy team handling messages and information" />
        </ServiceChapter>

        <ServiceChapter number="04" side="right" reduceMotion={reduceMotion}>
          <SourceIllustration src="/connected-source/img_4.svg" alt="Original source illustration of structured support around a person at a laptop" />
          <ServiceCopy
            eyebrow="Runs itself"
            icon={Workflow}
            title="Intake and follow-up systems"
            body="The paperwork behind the call fills itself in, and nothing waits on someone remembering to send it."
            bullets={['Information captured automatically', 'Follow-up sent consistently', 'Team kept informed without chasing']}
          />
        </ServiceChapter>

        <div className="connected-systems-note">
          <Workflow aria-hidden="true" />
          <div>
            <strong>Business systems</strong>
            <p>Less manual coordination, fewer repeated tasks, and less information lost between the people who need it.</p>
          </div>
          <span>In development</span>
        </div>
      </section>

      <section className="connected-team" aria-labelledby="connected-team-title">
        <header>
          <p>Existing teams / overflow</p>
          <h2 id="connected-team-title">If you already have a team</h2>
          <span>Your team does not have to fail for opportunities to be missed.</span>
        </header>

        <p className="connected-team__lead">
          Calls overlap. Staff step away. Night teams become tired. Follow-up gets delayed. LYCORE supports your existing team with overflow coverage, after-hours communication, structured intake and consistent follow-up.
        </p>

        <div className="connected-team__comparison">
          <Comparison title="Today" items={before} positive={false} reduceMotion={reduceMotion} />
          <Comparison title="With LYCORE" items={after} positive reduceMotion={reduceMotion} />
        </div>

        <p className="connected-team__payoff">
          Your team keeps the calls they can take.
          <span>LYCORE catches the ones they cannot.</span>
        </p>
      </section>

      <section id="about" className="connected-about" aria-labelledby="connected-about-title">
        <div>
          <p>About LYCORE</p>
          <h2 id="connected-about-title">Built to keep urgent service businesses moving.</h2>
        </div>
        <div className="connected-about__copy">
          <p>
            LYCORE was created for teams that cannot afford to miss what matters. We provide an always-on response layer that answers every call, captures the right information and moves it forward.
          </p>
          <p>
            Structured intake and practical automation keep work moving when your team is at capacity, so fewer opportunities disappear between the first ring and the next action.
          </p>
        </div>
      </section>

      <section id="industries" className="connected-industries" aria-labelledby="connected-industries-title">
        <header>
          <h2 id="connected-industries-title">Who this is for</h2>
          <p>Built for businesses where delayed responses cost real revenue.</p>
        </header>

        <div className="connected-industries__rail" role="tablist" aria-label="Industries">
          {industries.map((item, index) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              id={`connected-industry-tab-${index}`}
              aria-selected={index === activeIndustry}
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
          role="tabpanel"
          aria-labelledby={`connected-industry-tab-${activeIndustry}`}
          className="connected-industry-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.3 }}
        >
          <div className="connected-industry-panel__problem">
            <IndustryIcon aria-hidden="true" />
            <p>{industry.name}</p>
            <h3>Where the revenue leaks</h3>
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
}: {
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: readonly string[];
}) {
  return (
    <div className="connected-service-copy">
      <p><Icon aria-hidden="true" />{eyebrow}</p>
      <h3>{title}</h3>
      <span>{body}</span>
      <ul role="list">
        {bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" />{bullet}</li>)}
      </ul>
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
