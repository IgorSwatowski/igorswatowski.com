import React from 'react';

import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

import PackagesBanner from './components/PackagesBanner';
import PricesSection from './components/PricesSection';
import ReferencesSection from '../Home/components/ReferencesSection';

const PackagesPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <main>
      <PackagesBanner />
      <PricesSection />
      <ReferencesSection />
    </main>
  );
};

export default PackagesPage;
