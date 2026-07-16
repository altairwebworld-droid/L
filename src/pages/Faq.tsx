import { FaqSection, Hero } from '../components/PageSections';
import { globalFaqs } from '../siteData';

export default function Faq() {
  return (
    <>
      <Hero
        compact
        title="Frequently Asked Questions"
        copy="Direct answers about LYCORE's 24/7 call handling, phone-first websites, intake, and follow-up systems."
      />
      <FaqSection faqs={globalFaqs} showAllLink={false} />
    </>
  );
}
