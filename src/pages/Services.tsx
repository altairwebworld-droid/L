import { CtaBand, FaqSection, Hero, ServiceGrid, TrustSection } from '../components/PageSections';
import { globalFaqs } from '../siteData';

export default function Services() {
  return (
    <>
      <Hero
        compact
        title="Bail Bond Lead Capture Services"
        copy="Explore LyCore services for SEO websites, AI call answering, automated intake, CRM integration, and follow-up workflows."
      />
      <ServiceGrid />
      <TrustSection />
      <FaqSection faqs={globalFaqs.slice(0, 5)} />
      <CtaBand />
    </>
  );
}
