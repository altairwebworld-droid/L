import { Link } from 'react-router-dom';
import { servicePages, site } from '../siteData';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-alt/50 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-8" aria-label="LyCore home">
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-b from-white/10 to-transparent">
              <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
            <span className="font-display font-medium text-xl tracking-wide">LyCore</span>
          </Link>
          <p className="text-ink-muted text-sm max-w-md leading-relaxed font-light">{site.coreStatement}</p>
          <p className="text-ink-muted text-xs max-w-md leading-relaxed font-light mt-5">{site.aiDisclaimer}</p>
        </div>

        <div>
          <h2 className="micro-label mb-6">Solutions</h2>
          <ul className="flex flex-col gap-4">
            {servicePages.map((page) => (
              <li key={page.path}>
                <Link to={page.path} className="text-sm text-ink-muted hover:text-ink transition-colors font-light">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="micro-label mb-6">Company</h2>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-sm text-ink-muted hover:text-ink transition-colors font-light">About</Link></li>
            <li><Link to="/bail-bonds" className="text-sm text-ink-muted hover:text-ink transition-colors font-light">Bail bonds</Link></li>
            <li><Link to={site.auditPath} className="text-sm text-ink-muted hover:text-ink transition-colors font-light">Free audit</Link></li>
            <li><Link to="/contact" className="text-sm text-ink-muted hover:text-ink transition-colors font-light">Contact</Link></li>
            <li><a href={`mailto:${site.email}`} className="text-sm text-ink-muted hover:text-ink transition-colors font-light">{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-muted font-light tracking-wide">
          &copy; {new Date().getFullYear()} LyCore Group. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <Link to="/privacy" className="text-xs text-ink-muted hover:text-ink transition-colors font-light tracking-wide">Privacy Policy</Link>
          <Link to="/terms" className="text-xs text-ink-muted hover:text-ink transition-colors font-light tracking-wide">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
