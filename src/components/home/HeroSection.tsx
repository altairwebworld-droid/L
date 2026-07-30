import { heroContent } from '../../content/hero';
import MagneticHeroCards from './MagneticHeroCards';
import { HeroSignalLayer, HeroTypewriterTitle } from './HeroSignalLayer';

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
      <HeroSignalLayer />

      <div className="reference-hero-layout">
        <div className="reference-hero-meta">
          <span>{heroContent.eyebrow}</span>
          <span>LYCORE service systems</span>
        </div>

        <p className="reference-hero-brand" aria-hidden="true">LYCORE</p>

        <div className="reference-hero-deck">
          <MagneticHeroCards />
        </div>

        <div className="reference-hero-statement">
          <HeroTypewriterTitle />
        </div>

        <p className="sr-only">{heroContent.body}</p>

        <div className="reference-hero-trust">
          <span>Built for service businesses</span>
          <span>{heroContent.trust}</span>
        </div>
      </div>
    </section>
  );
}
