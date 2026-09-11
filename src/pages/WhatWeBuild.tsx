import ContentDirectory from '../components/ContentDirectory';
import { serviceGrowthPages } from '../content/architecture';
export default function WhatWeBuild() {
 return <ContentDirectory pages={serviceGrowthPages} title="Connect the next step." description="Find new leads, answer enquiries, follow up on estimates, and bring customers back. Choose the part of your customer journey that needs attention." />;
}
