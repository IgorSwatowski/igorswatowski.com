import { useRouter } from 'next/router';
import Link from 'next/link';

import TriangleColor from '@/assets/triangle-color.png';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import BannerMeImg from '@/assets/about-igor.webp';
import Image from 'next/image';
import React from 'react';

const BannerAbout = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='banner-text'>
      <Image src={TriangleColor} alt='' />
      <div className='banner-text-wrapper container-box'>
        <div className='banner-text-wrapper-left'>
          <h1
            className='banner-text-wrapper-left-heading heading-primary'
            data-aos='fade-down'
            data-aos-delay='50'
          >
            {t.bannerHeading}
            <span className='underline'>{t.bannerHeadingSecond}</span>
          </h1>
          <p
            className='banner-text-wrapper-left-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {t.bannerText}
          </p>
          <p
            className='banner-text-wrapper-left-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {t.bannerTextSecond}
          </p>
          <p
            className='banner-text-wrapper-left-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {t.bannerTextThird}
          </p>
          <div className='banner-text-wrapper-left-buttons'>
            <Link href='/packages' className='btn-primary'>
              <span>{t.aboutCtaSecondBtn}</span>
              <svg width='13px' height='10px' viewBox='0 0 13 10'>
                <path d='M1,5 L11,5'></path>
                <polyline points='8 1 12 5 8 9'></polyline>
              </svg>
            </Link>
          </div>
        </div>
        <div className='banner-text-wrapper-right'>
          <Image loading='lazy' src={BannerMeImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
