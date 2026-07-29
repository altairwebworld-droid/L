import CallLedger from '../components/home/CallLedger';
import ConceptGallery from '../components/home/ConceptGallery';
import ExistingTeam from '../components/home/ExistingTeam';
import FinalCta from '../components/home/FinalCta';
import HeroSection from '../components/home/HeroSection';
import HomeFaq from '../components/home/HomeFaq';
import ImplementationSteps from '../components/home/ImplementationSteps';
import IndustrySelector from '../components/home/IndustrySelector';
import { NightToDawnField } from '../components/home/NightToDawnField';
import ReportingCard from '../components/home/ReportingCard';
import ServiceModules from '../components/home/ServiceModules';

/**
 * Homepage narrative:
 *   magnetic hero   — what LYCORE does and the four service entry points
 *   call ledger     — the cost, made concrete across six trades (signature)
 *   service modules — the mechanism
 *   existing team   — the objection, answered
 *   industries      — is this me?
 *   gallery + steps — proof and process
 *   reporting + faq — detail
 *   final cta       — the ask
 */
export default function Home() {
  return (
    <NightToDawnField>
      <HeroSection />
      <CallLedger />
      <ServiceModules />
      <ExistingTeam />
      <IndustrySelector />
      <ConceptGallery />
      <ImplementationSteps />
      <ReportingCard />
      <HomeFaq />
      <FinalCta />
    </NightToDawnField>
  );
}
