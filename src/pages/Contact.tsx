import { Mail } from 'lucide-react';
import AuditLeadForm from '../components/AuditLeadForm';
import { FaqSection, Hero } from '../components/PageSections';
import { globalFaqs, site } from '../siteData';

export default function Contact() {
  return (
    <>
      <Hero
        compact
        title="Request Your Free Bail Bond Lead System Audit"
        copy="Review how your agency captures calls, website visitors, forms, chat leads, CRM records, follow-up, and source tracking."
      />
      <section className="pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div className="space-y-8">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <Mail className="mb-5 text-white/80" />
            <h2 className="text-3xl font-medium mb-4">Contact LyCore</h2>
            <p className="text-stone-300 font-light leading-relaxed mb-5">
              Use the audit form for the cleanest lead-system review request. Email remains available for general inquiries.
            </p>
            <a href={`mailto:${site.email}`} className="text-xl hover:text-white/70 transition-colors font-light">
              {site.email}
            </a>
            <p className="text-xs text-stone-400 mt-6 leading-relaxed">
              Physical address, phone, CRM, analytics, booking, and chatbot integrations require manual setup or verification before production claims are made.
            </p>
          </div>
        </div>
        <AuditLeadForm />
      </section>
      <FaqSection faqs={[globalFaqs[5], globalFaqs[7], globalFaqs[4]]} />
    </>
  );
}
