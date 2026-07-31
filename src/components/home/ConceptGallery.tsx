import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { websiteConceptDisclaimer, websiteConcepts } from '../../content/websiteConcepts';
import { CylinderCarousel } from '../ui/cylinder-carousel';
import { Container, Section, SectionHeading } from './Section';

export default function ConceptGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <Section tint className="home-concept-gallery">
      <Container>
        <SectionHeading
          eyebrow="Website concepts"
          title="The call action should never be a scavenger hunt."
          lead={websiteConceptDisclaimer}
        />
      </Container>

      {/* Full-bleed: the carousel spans the entire viewport width. */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={reduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.7 }}
        className="w-full max-w-none"
      >
        <CylinderCarousel
          images={websiteConcepts.map((concept) => ({ src: concept.image, alt: concept.alt }))}
          cardWidth={270}
          animationDuration={36}
        />
      </motion.div>

      <Container>
        <div className="mt-6 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-white/50"
          >
            Discuss your website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
