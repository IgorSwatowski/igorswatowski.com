import { useRouter } from 'next/router';
import Link from 'next/link';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

const ShouldWorkSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='should-work'>
      <div className='should-work-wrapper container-box'>
        <h2
          className='should-work-wrapper-heading heading-secondary'
          data-aos='fade-up'
        >
          {t.weShouldWorkHeading}
        </h2>
        <div className='should-work-wrapper-list'>
          <div
            className='should-work-wrapper-list-item'
            data-aos='fade-up'
            data-aos-delay='50'
          >
            <h3 className='should-work-wrapper-list-item-heading heading-third'>
              {t.weShouldWorkFirst}
            </h3>
            <p className='should-work-wrapper-list-item-text paragraph-primary'>
              {t.weShouldWorkFirstText}
            </p>
          </div>
          <div
            className='should-work-wrapper-list-item'
            data-aos='fade-up'
            data-aos-delay='50'
          >
            <h3 className='should-work-wrapper-list-item-heading heading-third'>
              {t.weShouldWorkSecond}
            </h3>
            <p className='should-work-wrapper-list-item-text paragraph-primary'>
              {t.weShouldWorkSecondText}
            </p>
          </div>
        </div>
        <p
          className='should-work-wrapper-end-text'
          data-aos='fade-up'
          data-aos-delay='50'
        >
          {t.weShouldWorkCTA}
        </p>
        <Link
          href='/about'
          className='should-work-wrapper-end-link btn-primary'
          data-aos='fade-up'
          data-aos-delay='150'
        >
          <span>{t.weShouldWorkBtn}</span>
          <svg width='13px' height='10px' viewBox='0 0 13 10'>
            <path d='M1,5 L11,5'></path>
            <polyline points='8 1 12 5 8 9'></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ShouldWorkSection;
