import { ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site } from '../siteData';

const primaryLinks = [
  { label: 'Product', path: '/what-we-build' },
  { label: 'Solutions', path: '/vision' },
  { label: 'Customers', path: '/industries/towing' },
  { label: 'Resources', path: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav
      className={`site-nav ${isHome ? 'site-nav--home' : 'site-nav--inner'} ${scrolled ? 'site-nav--scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="site-nav__inner">
        <div className="site-nav__links site-nav__links--left">
          {primaryLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? 'is-active' : ''}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link to="/" className="site-nav__brand" aria-label="LYCORE home">
          {site.name}
        </Link>

        <div className="site-nav__links site-nav__links--right">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'is-active' : ''}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'is-active' : ''}>Contact</NavLink>
          <Link to="/book" className="site-nav__demo" data-track="book_call_click">
            Book a demo <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <button
          className="site-nav__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="site-nav__mobile"
        >
          {[...primaryLinks, { label: 'About', path: '/about' }, { label: 'Contact', path: '/contact' }].map((item) => (
            <Link key={item.path} to={item.path}>{item.label}</Link>
          ))}
          <Link to="/book" className="site-nav__mobile-demo" data-track="book_call_click">
            Book a demo <ArrowRight aria-hidden="true" />
          </Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </motion.div>
      )}
    </nav>
  );
}
