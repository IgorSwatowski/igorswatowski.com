// Components
import BannerAbout from './components/BannerAbout';
import IntroduceMeSection from './components/IntroduceMeSection';
import CTAAboutSection from './components/CTAAboutSection';
import TrustedBySection from './components/TrustedBySection';
import WhoIAmSection from './components/WhoIAmSection';
import CTAAboutSecondSection from './components/CTAAboutSecondSection';

const AboutPage = () => {
  return (
    <main>
      <BannerAbout />
      <IntroduceMeSection />
      <CTAAboutSection />
      <TrustedBySection />
      <WhoIAmSection />
      <CTAAboutSecondSection />
    </main>
  );
};

export default AboutPage;
