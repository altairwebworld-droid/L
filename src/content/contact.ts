import { site } from '../siteData';

export const contactActions = {
  review: { label: site.primaryCta, path: site.auditPath },
  whatsapp: { label: 'Message LYCORE on WhatsApp', href: site.socials.whatsapp },
  email: { label: site.email, href: `mailto:${site.email}` },
} as const;

