import CallLedger from '../components/home/CallLedger';
import ConnectedStory from '../components/home/ConnectedStory';
import ConceptGallery from '../components/home/ConceptGallery';
import FinalCta from '../components/home/FinalCta';
import HeroSection from '../components/home/HeroSection';
import HomeFaq from '../components/home/HomeFaq';
import ImplementationSteps from '../components/home/ImplementationSteps';
import { NightToDawnField } from '../components/home/NightToDawnField';
import ReportingCard from '../components/home/ReportingCard';

/**
 * Homepage narrative:
 *   magnetic hero   — what LYCORE does and the four service entry points
 *   call ledger     — the cost, made concrete across six trades (signature)
 *   connected story — services, team support, about and industries as one route
 *   gallery + steps — proof and process
 *   reporting + faq — detail
 *   final cta       — the ask
 */
export default function Home() {
  return (
    <NightToDawnField>
      <HeroSection />
      <CallLedger />
      <ConnectedStory />
      <ConceptGallery />
      <ImplementationSteps />
      <ReportingCard />
      <HomeFaq />
      <FinalCta />
    </NightToDawnField>
  );
}
