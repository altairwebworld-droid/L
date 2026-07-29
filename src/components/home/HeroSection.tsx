import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroContent } from '../../content/hero';
import MagneticHeroCards from './MagneticHeroCards';
import { MagneticButton } from './MagneticButton';

export default function HeroSection() {
  return (
    <section className="magnetic-hero" aria-labelledby="home-hero-title">
      <video
        className="magnetic-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/lycore-dispatch-poster.webp"
        aria-hidden="true"
      >
        <source src="/lycore-dispatch-carousel.webm" type="video/webm" />
        <source src="/lycore-dispatch-carousel.mp4" type="video/mp4" />
      </video>
      <div className="magnetic-hero__wash" aria-hidden="true" />

      <div className="magnetic-hero__copy">
        <p className="magnetic-hero__eyebrow">{heroContent.eyebrow}</p>
        <h1 id="home-hero-title">
          Turn every lead into <br />
          <span>the next move.</span>
        </h1>
        <p className="magnetic-hero__body">{heroContent.body}</p>

        <div className="magnetic-hero__actions">
          <MagneticButton>
            <Link to={heroContent.primaryAction.path} className="hero-cta hero-cta--primary" data-track="cta_click">
              {heroContent.primaryAction.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </MagneticButton>
          <Link to={heroContent.secondaryAction.path} className="hero-cta hero-cta--ghost">
            {heroContent.secondaryAction.label}
          </Link>
        </div>
      </div>

      <MagneticHeroCards />
      <p className="magnetic-hero__trust">{heroContent.trust}</p>
    </section>
  );
}
