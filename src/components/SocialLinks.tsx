import { FaFacebookF, FaInstagram, FaLinkedinIn, FaThreads, FaXTwitter } from 'react-icons/fa6';
import { site } from '../siteData';

const socialProfiles = [
  { href: site.socials.x, label: 'LYCORE GROUP on X', Icon: FaXTwitter },
  { href: site.socials.facebookLycore, label: 'LYCORE GROUP on Facebook', Icon: FaFacebookF },
  { href: site.socials.facebookBrenda, label: 'Brenda Lycore on Facebook', Icon: FaFacebookF },
  { href: site.socials.instagram, label: 'Brenda Lycore on Instagram', Icon: FaInstagram },
  { href: site.socials.threads, label: 'Brenda Lycore on Threads', Icon: FaThreads },
  { href: site.socials.linkedin, label: 'LYCORE GROUP on LinkedIn', Icon: FaLinkedinIn },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="LYCORE social profiles">
      {socialProfiles.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.035] text-ink/85 transition-[transform,border-color,background-color,color] duration-200 hover:-translate-y-0.5 hover:border-[#ff8a3d]/70 hover:bg-[#ff8a3d]/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white active:translate-y-0"
        >
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
