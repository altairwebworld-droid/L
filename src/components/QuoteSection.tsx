import { useLocation } from 'react-router-dom';
import { quoteContent, quoteLinks } from '../content/quote';

export default function QuoteSection() {
  const { pathname } = useLocation();
  const links = quoteLinks(pathname);
  return <section id="quote" className="quote-section" aria-labelledby="quote-heading">
    <div>
      <p className="micro-label">Talk to our support team</p>
      <h2 id="quote-heading">{quoteContent.title}</h2>
      <p>{quoteContent.description}</p>
      <p className="quote-note">{quoteContent.note}</p>
    </div>
    <div className="quote-actions">
      <a href={links.email} className="btn-primary" data-track="quote_email_click">{quoteContent.emailLabel}</a>
      <a href={links.whatsapp} className="btn-secondary" target="_blank" rel="noopener noreferrer" data-track="quote_whatsapp_click">{quoteContent.whatsappLabel}</a>
    </div>
  </section>;
}
