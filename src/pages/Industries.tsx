import {
  ArrowRight,
  Bug,
  Building2,
  CalendarCheck,
  Car,
  Check,
  Droplets,
  Flame,
  Globe2,
  HeartPulse,
  KeyRound,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Scale,
  Truck,
  UtensilsCrossed,
  Wind,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { CtaBand, FaqSection } from '../components/PageSections';
import { industries } from '../content/industries';
import { globalFaqs, site } from '../siteData';

const industryIcons: Record<string, LucideIcon> = {
  'Auto repair': Car,
  'Bail bonds': Scale,
  Electrical: Zap,
  HVAC: Wind,
  Locksmiths: KeyRound,
  'Pest control': Bug,
  Plumbing: Droplets,
  Restaurants: UtensilsCrossed,
  Restoration: Building2,
  Roofing: Flame,
  Towing: Truck,
  'Urgent care': HeartPulse,
};

const connectedSystem = [
  {
    icon: PhoneCall,
    title: '24/7 call handling',
    copy: 'Calls are answered in your business name using the hours, service area and escalation rules you approve.',
  },
  {
    icon: Globe2,
    title: 'Phone-first website',
    copy: 'Urgent visitors can understand the offer and reach the right action without searching through a complicated site.',
  },
  {
    icon: MessageSquareText,
    title: 'Structured intake',
    copy: 'The customer, service request, location and urgency arrive in a consistent summary your team can use.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking and follow-up',
    copy: 'Appointment requests, confirmations and configured follow-up keep moving when your team is occupied.',
  },
] as const;

const slugFor = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Industries() {
  return (
    <div className="industries-page">
      <section className="industries-hero" aria-labelledby="industries-title">
        <div className="industries-hero__copy">
          <p className="industries-eyebrow">Industries LYCORE serves</p>
          <h1 id="industries-title">Different calls. One reliable response system.</h1>
          <p>
            LYCORE supports service businesses where a delayed response can cost a booking, a customer or an urgent job. Every industry below receives the same attention, adapted to its own call flow and operating rules.
          </p>
          <div className="industries-hero__actions">
            <Link to="/contact" className="industries-primary-action" data-track="cta_click">
              Tell us what you need fixed <ArrowRight aria-hidden="true" />
            </Link>
            <Link to="/book" className="industries-secondary-action" data-track="book_call_click">
              Book a discovery call
            </Link>
          </div>
        </div>

        <div className="industries-hero__ledger" aria-label="Industries overview">
          <span><strong>{industries.length}</strong> industries represented equally</span>
          <span><strong>24/7</strong> configured call coverage</span>
          <span><strong>4</strong> connected customer systems</span>
          <span><strong>1</strong> structured route to your team</span>
        </div>
      </section>

      <section className="industries-system" aria-labelledby="industries-system-title">
        <header>
          <p className="industries-eyebrow">What every business can receive</p>
          <h2 id="industries-system-title">The system stays consistent. The intake changes with the industry.</h2>
        </header>
        <div className="industries-system__grid">
          {connectedSystem.map(({ icon: Icon, title, copy }, index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="industry-directory" aria-labelledby="industry-directory-title">
        <header className="industry-directory__header">
          <div>
            <p className="industries-eyebrow">Industry directory</p>
            <h2 id="industry-directory-title">Why they need it—and what they get.</h2>
          </div>
          <p>
            Choose your industry or review every call path. The page does not rank one trade above another.
          </p>
        </header>

        <nav className="industry-directory__index" aria-label="Jump to an industry">
          {industries.map((industry) => (
            <a key={industry.name} href={`#${slugFor(industry.name)}`}>{industry.name}</a>
          ))}
        </nav>

        <div className="industry-directory__grid">
          {industries.map((industry, index) => {
            const Icon = industryIcons[industry.name] ?? Workflow;
            return (
              <article
                key={industry.name}
                id={slugFor(industry.name)}
                className="industry-entry"
                style={{ '--industry-accent': industry.accent } as CSSProperties}
              >
                <header className="industry-entry__title">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" />
                  <h3>{industry.name}</h3>
                </header>

                <div className="industry-entry__answer">
                  <p>Why they need it</p>
                  <strong>{industry.pain}</strong>
                </div>

                <div className="industry-entry__answer">
                  <p>What LYCORE handles</p>
                  <strong>{industry.need}</strong>
                </div>

                <ol className="industry-entry__workflow" aria-label={`${industry.name} call workflow`}>
                  {industry.workflow.map((step, stepIndex) => (
                    <li key={step}>
                      <b>{stepIndex + 1}</b>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <footer className="industry-entry__outcome">
                  <Check aria-hidden="true" />
                  <div>
                    <p>What they get</p>
                    <strong>{industry.outcome}</strong>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>

        <div className="industry-directory__other">
          <MapPin aria-hidden="true" />
          <div>
            <h2>Do not see your industry?</h2>
            <p>LYCORE can review other service businesses with repeatable call, intake, booking and follow-up needs. We will tell you plainly whether the system fits.</p>
          </div>
          <a href={site.socials.whatsapp} target="_blank" rel="noreferrer">
            Ask about your industry <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <FaqSection faqs={[globalFaqs[0], globalFaqs[1], globalFaqs[4], globalFaqs[6], globalFaqs[9]]} />
      <CtaBand />
    </div>
  );
}
