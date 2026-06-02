import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-blue/30 selection:text-white">
      <Seo />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
