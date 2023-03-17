import CTASecondSection from '@/components/Home/components/CTASecondSection';
import ShortPersonalSection from '@/components/Home/components/ShortPersonalSection';
import CTASection from '@/components/Home/components/CTASection';
import ReferencesSection from '@/components/Home/components/ReferencesSection';
import ShouldWorkSection from '@/components/Home/components/ShouldWorkSection';
import ImplementationSection from '@/components/Home/components/ImplementationSection';
import HomeBanner from '@/components/Home/components/HomeBanner';
import CollaborateSection from '@/components/Home/components/CollaborateSection';
import React from 'react';

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
