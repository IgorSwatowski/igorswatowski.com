import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

const CTASection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='cta'>
      <div className='cta-wrapper container-box'>
        <p className='cta-wrapper-text paragraph-primary' data-aos='fade-up'>
          {t.ctaFirstText}
        </p>
        <p className='cta-wrapper-text paragraph-primary' data-aos='fade-up'>
          {t.ctaSecondText}
        </p>
      </div>
    </section>
  );
};

export default CTASection;
