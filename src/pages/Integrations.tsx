import ContentDirectory from '../components/ContentDirectory';
import { integrationGrowthPages } from '../content/architecture';
export default function Integrations() {
 return <ContentDirectory pages={integrationGrowthPages} title="Work with the tools you know." description="Explore workflow planning around your existing software. Connection methods and account access are checked before implementation; a listing does not imply a native integration or partnership." />;
}
