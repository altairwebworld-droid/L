import ConceptGallery from './ConceptGallery';
import ConnectedStory from './ConnectedStory';
import FinalCta from './FinalCta';
import HomeFaq from './HomeFaq';
import ImplementationSteps from './ImplementationSteps';
import JourneyDirectory from './JourneyDirectory';
import OperationsBridge from './OperationsBridge';

export default function DeferredHomeBody() {
  return (
    <>
      <ConnectedStory />
      <OperationsBridge />
      <JourneyDirectory />
      <ConceptGallery />
      <ImplementationSteps />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
