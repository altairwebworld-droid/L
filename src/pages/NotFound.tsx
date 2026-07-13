import { Link } from 'react-router-dom';
import { site } from '../siteData';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-widest text-stone-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Page Not Found</h1>
      <p className="mt-6 text-lg text-stone-300">
        The page you requested does not exist or has moved. Explore LYCORE services for service businesses or request a
        free lead system review.
      </p>
      <nav aria-label="Helpful links" className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/" className="underline">
          Home
        </Link>
        <Link to="/what-we-build" className="underline">
          What We Build
        </Link>
        <Link to={site.auditPath} className="underline">
          {site.primaryCta}
        </Link>
      </nav>
    </section>
  );
}
