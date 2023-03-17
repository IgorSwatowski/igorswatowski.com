// Components
import BannerAbout from '@/components/About/components/BannerAbout';
import IntroduceMeSection from '@/components/About/components/IntroduceMeSection';
import CTAAboutSection from '@/components/About/components/CTAAboutSection';
import TrustedBySection from '@/components/About/components/TrustedBySection';
import WhoIAmSection from '@/components/About/components/WhoIAmSection';
import CTAAboutSecondSection from '@/components/About/components/CTAAboutSecondSection';
import React from 'react';

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
