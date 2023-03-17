import { useRouter } from 'next/router';
import Link from 'next/link';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

const CTASecondSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='cta-second'>
      <div className='cta-second-wrapper container-box'>
        <p className='cta-second-text paragraph-primary' data-aos='fade-down'>
          {t.ctaSecondFirstText}
          <br />
          <br />
          {t.ctaSecondSecondText}
        </p>
        <h3
          className='cta-second-heading heading-third'
          data-aos='fade-down'
          data-aos-delay='50'
        >
          {t.ctaSecondThirdText}
        </h3>
        <Link
          href='/packages'
          className='btn-secondary'
          data-aos='fade-down'
          data-aos-delay='50'
        >
          {t.ctaSecondBtn}
        </Link>
      </div>
    </section>
  );
};

export default CTASecondSection;
