import CTASecondSection from './components/CTASecondSection';
import ShortPersonalSection from './components/ShortPersonalSection';
import CTASection from './components/CTASection';
import ReferencesSection from './components/ReferencesSection';
import ShouldWorkSection from './components/ShouldWorkSection';
import ImplementationSection from './components/ImplementationSection';
import HomeBanner from './components/HomeBanner';
import CollaborateSection from './components/CollaborateSection';

const HomePage = () => {
  return (
    <main>
      <HomeBanner />
      <CollaborateSection />
      <ImplementationSection />
      {/* <ShouldWorkSection /> */}
      <ReferencesSection />
      <CTASection />
      <ShortPersonalSection />
      <CTASecondSection />
    </main>
  );
};

export default HomePage;
