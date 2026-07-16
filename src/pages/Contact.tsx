import { ArrowUpRight, Building2, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuditLeadForm from '../components/AuditLeadForm';
import SocialLinks, { WhatsAppLink } from '../components/SocialLinks';
import { site } from '../siteData';

const reviewPoints = [
  'Where enquiries are being lost',
  'What to improve first',
  'Which systems are worth adding',
];

export default function Contact() {
  return (
    <main className="px-6 pb-24 pt-36 md:pt-44">
      <header className="mx-auto mb-14 grid max-w-7xl gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
        <div>
          <p className="micro-label mb-5 text-white">Contact LYCORE</p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-tight md:text-7xl">Get in touch. We’ll map what to fix next.</h1>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          <p className="text-lg font-light leading-relaxed text-stone-300">Tell us how customers reach your business today. We’ll review the path from first enquiry to follow-up and give you a practical place to start.</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-300">
            {reviewPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8dc2ff]" aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <aside className="space-y-6 lg:sticky lg:top-32">
          <div className="lycore-card rounded-[32px] p-7 md:p-8">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <img src="/lycore-logo.jpeg" alt="LYCORE GROUP logo" className="h-12 w-12 rounded-xl object-cover" />
              <div>
                <p className="font-display text-xl font-medium">{site.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-400">Customer communication systems</p>
              </div>
            </div>

            <div className="py-7">
              <p className="micro-label mb-3">General enquiries</p>
              <a href={`mailto:${site.email}`} className="group flex items-center justify-between gap-4 rounded-2xl bg-white/[0.055] p-4 transition-colors hover:bg-white/[0.09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">
                <span className="flex min-w-0 items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#8dc2ff]" aria-hidden="true" />
                  <span className="truncate text-sm text-stone-200">{site.email}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <WhatsAppLink className="mt-4 w-full px-4 text-xs" />
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6 text-sm font-light text-stone-300">
              <p className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8dc2ff]" aria-hidden="true" />
                <span>{site.legalName}</span>
              </p>
              <p className="flex items-start gap-3 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8dc2ff]" aria-hidden="true" />
                <span>{site.address.street}<br />{site.address.locality}, {site.address.region} {site.address.postalCode}</span>
              </p>
            </div>
          </div>

          <div className="lycore-card rounded-[28px] p-7">
            <p className="micro-label mb-3 text-white">Follow us</p>
            <p className="mb-5 text-sm font-light leading-relaxed text-stone-300">Keep up with what LYCORE is building and how we think about customer communication.</p>
            <SocialLinks />
          </div>

          <Link to="/book" className="group inline-flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.14em] text-stone-300 transition-colors hover:text-white">
            Prefer a scheduled conversation? Book a call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </aside>

        <AuditLeadForm />
      </section>
    </main>
  );
}
