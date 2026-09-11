import { site } from '../siteData';

export const quoteContent = {
  title: 'Get a quote for your business.',
  description: 'Tell our support team which services you need and what you want to achieve. We will review your requirements and prepare a quote for the agreed scope.',
  note: 'Quotes are prepared by our team after review, rather than calculated automatically on this page.',
  emailLabel: 'Email support for a quote',
  whatsappLabel: 'Request a quote on WhatsApp',
};

export function quoteLinks(route: string) {
  const message = `Hi LYCORE, I would like a quote.\n\nBusiness name:\nServices needed:\nProject details:\n\nPage: ${site.domain}${route}`;
  return {
    email: `mailto:${site.email}?subject=${encodeURIComponent('Quote request for LYCORE services')}&body=${encodeURIComponent(message)}`,
    whatsapp: `${site.socials.whatsapp}?text=${encodeURIComponent(message)}`,
  };
}
