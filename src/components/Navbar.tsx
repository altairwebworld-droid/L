import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-transparent rounded-full">
      <div className="px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-b from-white/10 to-transparent">
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="font-display font-medium text-2xl tracking-wide">Lycore</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link to="/services" className="text-xs tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">Services</Link>
          <Link to="/bail-bonds" className="text-xs tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">Bail Bonds</Link>
          <Link to="/about" className="text-xs tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">About</Link>
          <Link to="/contact" className="text-xs tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">Contact</Link>
          <a href="mailto:services@lycore.org" className="btn-3d px-6 py-3">
            Book Strategy
          </a>
        </div>

        <button className="md:hidden text-ink-muted" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-0 right-0 glass-panel rounded-3xl border border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl"
        >
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">Services</Link>
          <Link to="/bail-bonds" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">Bail Bonds</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.1em] uppercase font-medium text-ink-muted hover:text-ink transition-colors">Contact</Link>
          <a href="mailto:services@lycore.org" className="btn-3d px-6 py-4 mt-4">
            Book Strategy
          </a>
        </motion.div>
      )}
    </nav>
  );
}
