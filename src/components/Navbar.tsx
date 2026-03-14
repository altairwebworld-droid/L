import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full transition-all duration-500 ${
      scrolled ? 'bg-black/40 backdrop-blur-xl border border-white/10 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-b from-white/10 to-transparent group-hover:border-white/40 transition-colors">
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter">Lycore</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {['Services', 'Bail Bonds', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`} 
              className="px-5 py-2 text-[11px] tracking-[0.15em] uppercase font-bold text-ink-muted hover:text-ink transition-all relative group"
            >
              {item === 'Bail Bonds' && <Link to="/bail-bonds" className="hidden" />}
              {item}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all group-hover:w-4 rounded-full" />
            </Link>
          ))}
          <a href="mailto:services@lycore.org" className="btn-3d px-6 py-2.5 ml-4 text-[10px]">
            Book Strategy
          </a>
        </div>

        <button className="md:hidden text-ink-muted p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 bg-black/80 backdrop-blur-2xl rounded-[32px] border border-white/10 p-8 flex flex-col gap-6 shadow-2xl"
        >
          {['Services', 'Bail Bonds', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`} 
              onClick={() => setIsOpen(false)} 
              className="text-lg tracking-wide font-medium text-ink-muted hover:text-ink transition-colors"
            >
              {item}
            </Link>
          ))}
          <a href="mailto:services@lycore.org" className="btn-3d px-6 py-4 mt-4 w-full text-center">
            Book Strategy
          </a>
        </motion.div>
      )}
    </nav>
  );
}

