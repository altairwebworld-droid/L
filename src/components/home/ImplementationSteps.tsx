import { BarChart3, Check, PhoneCall, Route, Search, Settings2 } from 'lucide-react';
import { useRef } from 'react';
import { implementationSteps, reportFields } from '../../content/implementation';
import { gsap, useGSAP } from '../../lib/gsap';

const tones = ['orange', 'cream', 'tan', 'stone', 'ink'] as const;
const icons = [Search, Settings2, Route, BarChart3] as const;

export default function ImplementationSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const deck = deckRef.current;
      if (!section || !deck) return;

      const media = gsap.matchMedia();
      media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const cards = Array.from(deck.querySelectorAll<HTMLElement>('.install-stack-card'));
        const peek = 38;
        const scaleStep = 0.042;
        const stackPose = (index: number) => ({
          y: index * peek,
          scale: 1 - index * scaleStep,
        });

        cards.forEach((card, index) => {
          gsap.set(card, {
            zIndex: cards.length - index,
            y: window.innerHeight * 0.72 + index * peek,
            scale: stackPose(index).scale * 0.9,
            rotate: 0,
            transformOrigin: '50% 0%',
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.max(cards.length * 540, window.innerHeight * 3.25)}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          timeline.to(card, { ...stackPose(index), ease: 'power3.out', duration: 1.35 }, index * 0.06);
        });

        timeline.to({}, { duration: 0.35 });
        const flyAt = timeline.duration();

        cards.slice(0, -1).forEach((card, index) => {
          const time = flyAt + index;
          const behind = cards.slice(index + 1);
          timeline.to(card, {
            y: () => -window.innerHeight * 1.15,
            rotate: -25,
            scale: 0.94,
            ease: 'none',
            duration: 1,
          }, time);
          timeline.to(behind, {
            y: (behindIndex) => stackPose(behindIndex).y,
            scale: (behindIndex) => stackPose(behindIndex).scale,
            ease: 'none',
            duration: 1,
          }, time);
        });

        timeline.to({}, { duration: 0.4 });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="install-stack" aria-labelledby="install-stack-title">
      <header className="install-stack__header">
        <p>How it gets set up</p>
        <h2 id="install-stack-title">Start with a 15-minute call. Approve everything before launch.</h2>
      </header>

      <div className="install-stack__stage">
        <div ref={deckRef} className="install-stack__deck">
          {implementationSteps.map((step, index) => {
            const Icon = icons[index] ?? Search;
            return (
              <article key={step.title} className="install-stack-card" data-tone={tones[index]}>
                <div className="install-stack-card__content">
                  <div className="install-stack-card__top">
                    <h3>{step.title}</h3>
                    <span>0{index + 1}</span>
                  </div>
                  <p className="install-stack-card__lede">{step.body}</p>
                  <p className="install-stack-card__note">You approve the questions, rules and texts before anything goes live.</p>
                </div>
                <div className="install-stack-card__media">
                  <InstallVisual index={index} icon={Icon} />
                </div>
              </article>
            );
          })}

          <article className="install-stack-card install-stack-card--report" data-tone={tones[4]}>
            <div className="install-stack-card__content">
              <div className="install-stack-card__top">
                <h3>What you get after each call</h3>
                <span>05</span>
              </div>
              <p className="install-stack-card__lede">A clear summary, not a half-heard voicemail.</p>
              <p className="install-stack-card__note">Each line is something the receptionist asks or records on the call. Nothing here is a made-up dashboard or a promised result.</p>
            </div>
            <div className="install-stack-card__media">
              <div className="install-report">
                <p>Summary sent to you after each call</p>
                <dl>
                  {reportFields.map(([field, value]) => (
                    <div key={field}><dt>{field}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function InstallVisual({ index, icon: Icon }: { index: number; icon: typeof Search }) {
  if (index === 0) {
    return (
      <div className="install-visual install-visual--review">
        <Icon aria-hidden="true" />
        <span /><span /><span />
        <ul role="list"><li>Calls</li><li>Website journey</li><li>Follow-up</li><li>Lead sources</li></ul>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="install-visual install-visual--configure">
        <PhoneCall aria-hidden="true" />
        {['Your greeting', 'Service area', 'After-hours rules', 'When to call you'].map((field) => (
          <div key={field}><span>{field}</span><Check aria-hidden="true" /></div>
        ))}
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="install-visual install-visual--route">
        <span>Incoming call</span><Route aria-hidden="true" /><span>Summary to you</span><Route aria-hidden="true" /><span>You or your team</span>
      </div>
    );
  }

  return (
    <div className="install-visual install-visual--configure">
      {['Answered calls', 'Booked or routed requests', 'Where leads came from'].map((field) => (
        <div key={field}><span>{field}</span><Check aria-hidden="true" /></div>
      ))}
    </div>
  );
}
