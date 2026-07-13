import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../siteData';
import SocialLinks, { WhatsAppLink } from './SocialLinks';

const footerLinkClass = 'text-sm font-light text-stone-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0f0e0d] pb-10 pt-14 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff8a3d]/55 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[#ff5a1f]/[0.055] blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="lycore-card mb-16 flex flex-col gap-8 rounded-[32px] p-7 md:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="micro-label mb-4 text-[#ffad78]">Talk to LYCORE</p>
            <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">Ready to stop losing leads after the first ring?</h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-stone-300">Tell us what happens when a customer contacts your business. We will help you find the gaps and decide what to fix first.</p>
          </div>
          <WhatsAppLink className="w-full shrink-0 sm:w-auto" />
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-5 lg:pr-12">
            <Link to="/" className="inline-flex items-center gap-4" aria-label="LYCORE home">
              <img src="/lycore-logo.jpeg" alt="LYCORE GROUP logo" className="h-12 w-12 rounded-xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.35)]" />
              <span>
                <span className="block font-display text-xl font-medium tracking-wide">{site.name}</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-stone-400">Customer communication systems</span>
              </span>
            </Link>
            <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-stone-300">{site.coreStatement}</p>
            <Link to={site.auditPath} className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-[#ffad78]">
              Get a free review <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer services">
            <h2 className="micro-label mb-6">Services</h2>
            <ul className="flex flex-col gap-4">
              <li><Link to="/what-we-build#call-answering" className={footerLinkClass}>24/7 Receptionist</Link></li>
              <li><Link to="/what-we-build#conversion-websites" className={footerLinkClass}>Conversion Websites</Link></li>
              <li><Link to="/what-we-build#local-search" className={footerLinkClass}>Local Search Profiles</Link></li>
              <li><Link to="/what-we-build#lead-follow-up" className={footerLinkClass}>Intake &amp; Follow-Up</Link></li>
              <li><Link to="/what-we-build#business-systems" className={footerLinkClass}>Business Systems</Link></li>
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Footer company">
            <h2 className="micro-label mb-6">Company</h2>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className={footerLinkClass}>About</Link></li>
              <li><Link to="/faq" className={footerLinkClass}>FAQ</Link></li>
              <li><Link to="/contact" className={footerLinkClass}>Contact</Link></li>
              <li><Link to="/commitments" className={footerLinkClass}>Commitments</Link></li>
              <li><Link to="/book" className={footerLinkClass}>Book a call</Link></li>
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="micro-label mb-6">Contact</h2>
            <div className="space-y-4 text-sm font-light text-stone-300">
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition-colors hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#ffad78]" aria-hidden="true" />
                <span className="break-all">{site.email}</span>
              </a>
              <p className="flex items-start gap-3 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffad78]" aria-hidden="true" />
                <span>{site.address.street}<br />{site.address.locality}, {site.address.region} {site.address.postalCode}</span>
              </p>
            </div>
            <WhatsAppLink className="mt-6 w-full px-4 text-xs" />
            <h2 className="micro-label mb-4 mt-9">Follow us</h2>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/8 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-light tracking-wide text-stone-400">&copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link to="/privacy" className="text-xs font-light tracking-wide text-stone-400 transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-xs font-light tracking-wide text-stone-400 transition-colors hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
