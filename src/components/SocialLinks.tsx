import { FaInstagram, FaThreads, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { site } from '../siteData';

// Monochrome by default, single locked accent (#e8a54b) on hover only —
// no brand-color slabs (Instagram gradient, WhatsApp green, etc).
const socialProfiles = [
  { href: site.socials.x, label: 'LYCORE GROUP on X', Icon: FaXTwitter, imageSrc: null },
  { href: site.socials.facebookLycore, label: 'LYCORE GROUP on Facebook', Icon: null, imageSrc: '/social/facebook-icons8.png' },
  { href: site.socials.facebookBrenda, label: 'Brenda LYCORE on Facebook', Icon: null, imageSrc: '/social/facebook-icons8.png' },
  { href: site.socials.instagram, label: 'Brenda LYCORE on Instagram', Icon: FaInstagram, imageSrc: null },
  { href: site.socials.threads, label: 'Brenda LYCORE on Threads', Icon: FaThreads, imageSrc: null },
  { href: site.socials.linkedin, label: 'LYCORE GROUP on LinkedIn', Icon: null, imageSrc: '/social/linkedin-icons8.png' },
  { href: site.socials.whatsapp, label: 'Message us on WhatsApp', Icon: FaWhatsapp, imageSrc: null },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="LYCORE social profiles">
      {socialProfiles.map(({ href, label, Icon, imageSrc }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors duration-200 hover:border-[#e8a54b]/50 hover:bg-[#e8a54b]/10 hover:text-[#e8a54b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
        >
          {imageSrc ? (
            <img src={imageSrc} alt="" className="h-[18px] w-[18px] object-contain opacity-70 grayscale transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" draggable={false} />
          ) : Icon ? (
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          ) : null}
        </a>
      ))}
    </div>
  );
}

export function WhatsAppLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={site.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:border-[#e8a54b]/50 hover:text-[#e8a54b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white ${className}`}
    >
      <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
      <span>Message us on WhatsApp</span>
    </a>
  );
}
