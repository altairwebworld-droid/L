import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Layout() {
  useSmoothScroll();

  return (
    <div className="site-shell flex min-h-screen w-full max-w-full flex-col overflow-x-clip selection:bg-accent/30 selection:text-white">
      <Seo />
      <a href="#main-content" className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-black transition-transform focus:translate-y-0">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
