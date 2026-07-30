import { heroContent } from '../../content/hero';
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
        </div>

        <p className="sr-only">{heroContent.body}</p>
      </div>
    </section>
  );
}
