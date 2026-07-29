import { TriangleAlert } from 'lucide-react';
import { site } from '../siteData';
import { BrutalistCard, BrutalistCardLink } from '../components/ui/brutalist-card';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <BrutalistCard
        icon={<TriangleAlert aria-hidden="true" />}
        alert="404"
        message="The page you requested does not exist or has moved. Explore LYCORE services for service businesses or request a free lead system review."
      >
        <BrutalistCardLink to="/">Home</BrutalistCardLink>
        <BrutalistCardLink to="/what-we-build">What We Build</BrutalistCardLink>
        <BrutalistCardLink to={site.auditPath} primary>
          {site.primaryCta}
        </BrutalistCardLink>
      </BrutalistCard>
    </section>
  );
}
