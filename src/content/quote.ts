import { site } from '../siteData';

export const quoteContent = {
  title: 'Get a quote for your business.',
  description: 'Tell LYCORE which services you need and what you want to achieve. Your requirements are reviewed before a quote is prepared for the agreed scope.',
  note: 'Quotes follow a requirements review. This page does not calculate an instant price.',
  emailLabel: 'Email LYCORE for a quote',
  whatsappLabel: 'Request a quote on WhatsApp',
};

export function quoteLinks(route: string) {
  const message = `Hi LYCORE, I would like a quote.\n\nBusiness name:\nServices needed:\nProject details:\n\nPage: ${site.domain}${route}`;
  return {
    email: `mailto:${site.email}?subject=${encodeURIComponent('Quote request for LYCORE services')}&body=${encodeURIComponent(message)}`,
    whatsapp: `${site.socials.whatsapp}?text=${encodeURIComponent(message)}`,
  };
}
