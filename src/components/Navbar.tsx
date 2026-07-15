import { Link, NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
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
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-2xl border transition-all duration-300 ${
        scrolled ? 'border-white/10 bg-[#0d0f10]/90 shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
      aria-label="Primary navigation"
    >
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="LYCORE home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-black text-[#17120f] shadow-[0_12px_30px_rgba(255,107,53,0.16)]">
            L
          </div>
          <span className="whitespace-nowrap font-display text-lg font-semibold tracking-[-0.03em]">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `rounded-lg px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${
                isActive ? 'bg-white/[0.06] text-white' : 'text-ink-muted hover:text-white'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to={site.auditPath} className="btn-primary ml-3 min-h-0 px-5 py-3 text-[9px]" data-track="cta_click">
            Free Review
          </Link>
          <Link to="/book" className="btn-secondary ml-1 min-h-0 px-5 py-3 text-[9px]" data-track="book_call_click">
            Book a Call
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-white/5 hover:text-white xl:hidden"
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
          className="absolute left-0 right-0 top-20 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#101213]/95 p-6 shadow-2xl backdrop-blur-2xl xl:hidden"
        >
          {[...navLinks, { label: 'Contact', path: '/contact' }].map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-tight text-ink-muted transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link to={site.auditPath} onClick={() => setIsOpen(false)} className="btn-primary mt-3 w-full" data-track="cta_click">
            {site.primaryCta}
          </Link>
          <Link to="/book" onClick={() => setIsOpen(false)} className="btn-secondary w-full" data-track="book_call_click">
            Book a Call
          </Link>
          <a href={`mailto:${site.email}`} className="text-lg tracking-wide font-medium text-ink hover:text-white transition-colors">
            {site.email}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
