import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, site } from '../siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full transition-all duration-500 ${
        scrolled ? 'bg-black/50 backdrop-blur-xl border border-white/10 py-2' : 'bg-transparent py-4'
      }`}
      aria-label="Primary navigation"
    >
      <div className="px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label="LYCORE home">
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-b from-white/10 to-transparent">
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight whitespace-nowrap">{site.name}</span>
        </Link>

        <div className="hidden xl:flex items-center gap-2">
          {navLinks.map((item) => (
            <Link key={item.path} to={item.path} className="px-3 py-2 text-[11px] tracking-[0.12em] uppercase font-bold text-ink-muted hover:text-ink transition-all relative group">
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all group-hover:w-4 rounded-full" />
            </Link>
          ))}
          <Link to={site.auditPath} className="btn-3d px-6 py-2.5 ml-3 text-[10px]" data-track="cta_click">
            Free Review
          </Link>
          <Link to="/book" className="btn-3d-dark px-6 py-2.5 ml-2 text-[10px]" data-track="book_call_click">
            Book a Call
          </Link>
          <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white hover:text-black transition-colors" aria-label={`Call LYCORE at ${site.phone}`}>
            <Phone size={16} />
          </a>
        </div>

        <button
          className="xl:hidden text-ink-muted p-2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-4 right-4 bg-black/85 backdrop-blur-2xl rounded-[32px] border border-white/10 p-8 flex flex-col gap-6 shadow-2xl"
        >
          {[...navLinks, { label: 'Contact', path: '/contact' }].map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-lg tracking-wide font-medium text-ink-muted hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
          <Link to={site.auditPath} onClick={() => setIsOpen(false)} className="btn-3d px-6 py-4 mt-4 w-full text-center" data-track="cta_click">
            {site.primaryCta}
          </Link>
          <Link to="/book" onClick={() => setIsOpen(false)} className="btn-3d-dark px-6 py-4 w-full text-center" data-track="book_call_click">
            Book a Call
          </Link>
          <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="text-lg tracking-wide font-medium text-ink hover:text-white transition-colors">
            Call {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="text-lg tracking-wide font-medium text-ink hover:text-white transition-colors">
            {site.email}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
