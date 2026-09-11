import { heroContent } from '../../content/hero';
import { Link } from 'react-router-dom';
import MagneticHeroCards from './MagneticHeroCards';
import { HeroSignalLayer, HeroTypewriterTitle } from './HeroSignalLayer';

export default function HeroSection() {
  return (
    <section className="magnetic-hero" aria-labelledby="home-hero-title">
      <div className="magnetic-hero__wash" aria-hidden="true" />
      <HeroSignalLayer />

      <div className="reference-hero-layout">
        <div className="reference-hero-heading">
          <p className="reference-hero-meta">{heroContent.eyebrow}</p>
          <p className="reference-hero-brand" aria-hidden="true">LYCORE</p>
        </div>

        <div className="reference-hero-deck">
          <MagneticHeroCards />
        </div>

        <div className="reference-hero-statement">
          <HeroTypewriterTitle />
          <p className="reference-hero-support">{heroContent.body}</p>
          <div className="reference-hero-actions">
            <Link to={heroContent.primaryAction.path} className="hero-cta hero-cta--primary" data-track="cta_click">{heroContent.primaryAction.label}</Link>
            <Link to={heroContent.secondaryAction.path} className="hero-cta hero-cta--ghost">{heroContent.secondaryAction.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
