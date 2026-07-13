import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import AuditLeadForm from '../components/AuditLeadForm';
import { Hero } from '../components/PageSections';
import { site } from '../siteData';

export default function Contact() {
  return (
    <>
      <Hero
        compact
        title="Get in Touch"
        copy="Tell us about your business. We will send back a plain-English breakdown of where leads are slipping away and what to fix first."
      />
      <section className="pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div className="space-y-8">
          <div className="glass-panel rounded-[32px] border border-white/10 p-8">
            <Mail className="mb-5 text-white/80" />
            <h2 className="text-3xl font-medium mb-4">Contact LYCORE</h2>
            <p className="text-stone-300 font-light leading-relaxed mb-5">
              Use the form for a free review of your calls, website, and follow-up. Email or call for general questions.
            </p>
            <a href={`mailto:${site.email}`} className="text-xl hover:text-white/70 transition-colors font-light">
              {site.email}
            </a>
            <div className="mt-8 space-y-5 text-sm text-stone-300">
              <p className="flex gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
                <span>{site.legalName}</span>
              </p>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="flex gap-3 hover:text-white transition-colors">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
                <span>{site.phone}</span>
              </a>
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
                <span>
                  {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}
                </span>
              </p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-sm font-medium text-white">Follow LYCORE</h3>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex text-sm text-stone-300 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
              >
                LYCORE on Instagram
              </a>
            </div>
          </div>
        </div>
        <AuditLeadForm />
      </section>
    </>
  );
}
