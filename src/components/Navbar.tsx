import { ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNavigation } from '../content/navigation';
import { gsap } from '../lib/gsap';
import { site } from '../siteData';

/**
 * Standard top navigation bar. Small logo mark on the left (no wordmark —
 * "Home" is a link like everything else), links centre-left, one rounded CTA
 * on the right. Transparent over the hero, tinted glass once scrolled.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spotlightOn, setSpotlightOn] = useState(false);
  const { pathname, hash } = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const ambience = useRef({ x: 0 });
  const lightTopRoutes = ['/', '/what-we-build', '/vision', '/industries/towing', '/about', '/faq', '/contact', '/book'];
  const usesLightTop = !scrolled && lightTopRoutes.includes(pathname);

  useEffect(() => setIsOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mouse-follow spotlight over the link row (fine-pointer devices only).
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      nav.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
      setSpotlightOn(true);
    };
    const onLeave = () => setSpotlightOn(false);

    nav.addEventListener('mousemove', onMove);
    nav.addEventListener('mouseleave', onLeave);
    return () => {
      nav.removeEventListener('mousemove', onMove);
      nav.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // A persistent accent "ambience" light springs to whichever link is active,
  // so the current page stays marked even when nothing is hovered.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const active = nav.querySelector<HTMLElement>('a.is-active');
    if (!active) {
      nav.style.setProperty('--ambience-x', '-200px');
      return;
    }

    const navBox = nav.getBoundingClientRect();
    const activeBox = active.getBoundingClientRect();
    const target = activeBox.left - navBox.left + activeBox.width / 2;

    gsap.to(ambience.current, {
      x: target,
      duration: 0.6,
      ease: 'elastic.out(1, 0.65)',
      onUpdate: () => nav.style.setProperty('--ambience-x', `${ambience.current.x}px`),
    });
  }, [pathname, hash, scrolled]);

  return (
    <nav className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}${usesLightTop ? ' site-nav--light-top' : ''}`} aria-label="Primary navigation">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand" aria-label="Home">
          <img src="/favicon-96x96.png" alt="" width="96" height="96" aria-hidden="true" />
        </Link>

        <div ref={navRef} className={`site-nav__links${spotlightOn ? ' is-spotlit' : ''}`}>
          <span className="site-nav__spotlight" aria-hidden="true" />
          <span className="site-nav__ambience" aria-hidden="true" />
          {primaryNavigation.map((item) => item.path.includes('#') ? (
            <Link
              key={item.path}
              to={item.path}
              className={pathname === '/' && Boolean(hash) && item.path.endsWith(hash) ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (
                item.path === '/'
                  ? pathname === '/' && !hash ? 'is-active' : ''
                  : isActive ? 'is-active' : ''
              )}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="site-nav__actions">
          <Link to={site.auditPath} className="site-nav__demo" data-track="cta_click">
            Get a free review
            <ArrowRight aria-hidden="true" />
          </Link>
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
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="site-nav__mobile"
          data-lenis-prevent
        >
          {primaryNavigation.map((item) => item.path.includes('#') ? (
            <Link
              key={item.path}
              to={item.path}
              className={pathname === '/' && Boolean(hash) && item.path.endsWith(hash) ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (
                item.path === '/'
                  ? pathname === '/' && !hash ? 'is-active' : ''
                  : isActive ? 'is-active' : ''
              )}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="site-nav__mobile-divider" />
          <Link to="/book">Book a strategy call</Link>
          <p className="site-nav__mobile-meta">{site.email}</p>
        </motion.div>
      )}
    </nav>
  );
}
