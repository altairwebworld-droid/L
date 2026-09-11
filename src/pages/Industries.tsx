import ContentDirectory from '../components/ContentDirectory';
import { industryGrowthPages } from '../content/architecture';
export default function Industries() {
  return <ContentDirectory pages={industryGrowthPages} title="Find your industry." description="From spa bookings and dental enquiries to property viewings and urgent repairs, see how LYCORE fits the way your business works. Every industry has its own page and practical workflow." />;
}
