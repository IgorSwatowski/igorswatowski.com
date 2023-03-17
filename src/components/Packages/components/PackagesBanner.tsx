import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

const PackagesBanner = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='packages-banner'>
      <div className='packages-banner-wrapper container-box'>
        <div className='packages-banner-wrapper-left'>
          <h1
            className='packages-banner-wrapper-left-heading heading-primary underline'
            data-aos='fade-down'
            data-aos-delay='50'
          >
            {t.bannerStrategic}
          </h1>
          <h1
            className='packages-banner-wrapper-left-heading heading-primary underline'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {t.bannerCreative}
          </h1>
          <h1
            className='packages-banner-wrapper-left-heading heading-primary underline'
            data-aos='fade-down'
            data-aos-delay='150'
          >
            {t.bannerConfidence}
          </h1>
        </div>
        <div className='packages-banner-wrapper-right'>
          <h1
            className='packages-banner-wrapper-right-heading heading-secondary'
            data-aos='fade-down'
            data-aos-delay='50'
          >
            {t.myProcess}
          </h1>
          <p
            className='packages-banner-wrapper-right-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {t.myProcessText}
          </p>
          <p
            className='packages-banner-wrapper-right-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {t.myProcessTextSecond}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesBanner;
