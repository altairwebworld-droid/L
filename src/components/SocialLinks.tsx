import { FaInstagram, FaThreads, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { site } from '../siteData';

const socialProfiles = [
  { href: site.socials.x, label: 'LYCORE GROUP on X', Icon: FaXTwitter, imageSrc: null, brandClass: 'border-white/25 bg-black text-white hover:border-white/60 hover:bg-[#111111]' },
  { href: site.socials.facebookLycore, label: 'LYCORE GROUP on Facebook', Icon: null, imageSrc: '/social/facebook-icons8.png', brandClass: 'border-transparent bg-transparent hover:border-white/35' },
  { href: site.socials.facebookBrenda, label: 'Brenda Lycore on Facebook', Icon: null, imageSrc: '/social/facebook-icons8.png', brandClass: 'border-transparent bg-transparent hover:border-white/35' },
  { href: site.socials.instagram, label: 'Brenda Lycore on Instagram', Icon: FaInstagram, imageSrc: null, brandClass: 'border-[#e4405f] bg-[linear-gradient(135deg,#833ab4_0%,#e1306c_48%,#f77737_100%)] text-white hover:border-[#ff6681]' },
  { href: site.socials.threads, label: 'Brenda Lycore on Threads', Icon: FaThreads, imageSrc: null, brandClass: 'border-white/25 bg-black text-white hover:border-white/60 hover:bg-[#111111]' },
  { href: site.socials.linkedin, label: 'LYCORE GROUP on LinkedIn', Icon: null, imageSrc: '/social/linkedin-icons8.png', brandClass: 'border-transparent bg-transparent hover:border-white/35' },
  { href: site.socials.whatsapp, label: 'Message us on WhatsApp', Icon: FaWhatsapp, imageSrc: null, brandClass: 'border-[#25D366] bg-[#25D366] text-white hover:border-[#45e17d] hover:bg-[#20bd5a]' },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="LYCORE social profiles">
      {socialProfiles.map(({ href, label, Icon, imageSrc, brandClass }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_8px_20px_rgba(0,0,0,0.24)] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white active:translate-y-0 ${brandClass}`}
        >
          {imageSrc ? (
            <img src={imageSrc} alt="" className="h-11 w-11 object-contain" aria-hidden="true" draggable={false} />
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
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-[#071d0f] shadow-[0_10px_30px_rgba(37,211,102,0.22)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#45e17d] hover:shadow-[0_14px_34px_rgba(37,211,102,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white active:translate-y-0 ${className}`}
    >
      <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
      <span>Message us on WhatsApp</span>
    </a>
  );
}
