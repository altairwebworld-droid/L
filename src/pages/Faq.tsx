import { FaqSection } from '../components/PageSections';
import { globalFaqs } from '../siteData';

export default function Faq() {
  return (
    <>
      <section className="pt-36 pb-6 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.98] text-glow-strong">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-white font-light leading-relaxed max-w-3xl">
          LYCORE answers calls 24/7, builds phone-first websites, and handles intake for small service businesses. Here are direct answers to the questions we hear most.
        </p>
      </section>
      <FaqSection faqs={globalFaqs} />
    </>
  );
}
