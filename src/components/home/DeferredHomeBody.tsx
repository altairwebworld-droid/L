import ConceptGallery from './ConceptGallery';
import ConnectedStory from './ConnectedStory';
import FinalCta from './FinalCta';
import HomeFaq from './HomeFaq';
import ImplementationSteps from './ImplementationSteps';
import JourneyDirectory from './JourneyDirectory';

export default function DeferredHomeBody() {
  return (
    <>
      <ConnectedStory />
      <JourneyDirectory />
      <ConceptGallery />
      <ImplementationSteps />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
