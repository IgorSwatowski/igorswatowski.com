import OfferCardList from './OfferCardList';
import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

const PricesSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='prices'>
      <div className='prices-wrapper container-box'>
        <h2
          className='prices-wrapper-heading heading-secondary'
          data-aos='fade-down'
          data-aos-delay='50'
        >
          {t.currentPricesHeading}
        </h2>
        <OfferCardList />
      </div>
    </section>
  );
};

export default PricesSection;
