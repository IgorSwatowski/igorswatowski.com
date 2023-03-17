import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

const CTAAboutSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='cta-about-me'>
      <div className='cta-about-me-wrapper container-box'>
        <h2
          className='cta-about-me-wrapper-heading heading-big'
          data-aos='fade-down'
          data-aos-delay='50'
        >
          {t.ctaHeading}
          <span className='underline'>{t.ctaHeadingUnderline}</span>
        </h2>
        <p
          className='cta-about-me-wrapper-text paragraph-primary'
          data-aos='fade-down'
          data-aos-delay='100'
        >
          {t.ctaTextFirst}
        </p>
        <p
          className='cta-about-me-wrapper-text--second paragraph-primary'
          data-aos='fade-down'
          data-aos-delay='150'
        >
          {t.ctaTextSecond}
        </p>
      </div>
    </section>
  );
};

export default CTAAboutSection;
