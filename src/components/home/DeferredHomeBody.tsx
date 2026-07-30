import ConceptGallery from './ConceptGallery';
import ConnectedStory from './ConnectedStory';
import FinalCta from './FinalCta';
import HomeFaq from './HomeFaq';
import ImplementationSteps from './ImplementationSteps';

export default function DeferredHomeBody() {
  return (
    <>
      <ConnectedStory />
      <ConceptGallery />
      <ImplementationSteps />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
