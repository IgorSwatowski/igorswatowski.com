import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

import GammasoftLogo from '../../../assets/trusted/gammasoft.png';
import AionlineLogo from '../../../assets/trusted/aionline.png';
import CodemaLogo from '../../../assets/trusted/codema.png';
import MeImg from '../../../assets/me.png';
import TriangleElement from '../../../assets/elements/triangle.png';
import CurvedLinesElement from '../../../assets/elements/curved-lines.png';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import PageLoader from '../../PageLoader/PageLoader';

const HomeBanner = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionFirstRef = useRef(null);
  const descriptionSecondRef = useRef(null);
  const buttonRef = useRef(null);
  const trustedClients = useRef(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      document.body.classList.remove('loading');
    }
  }, [loading]);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 2 },
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 2.4 },
    );
    gsap.fromTo(
      descriptionFirstRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 2.8 },
    );
    gsap.fromTo(
      descriptionSecondRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 3.2 },
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 3.6 },
    );
    gsap.fromTo(
      trustedClients.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 4 },
    );
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <section className='banner container-box'>
        <Image
          loading='lazy'
          src={TriangleElement}
          alt=''
          className='banner-triangle-first'
        />
        <Image
          loading='lazy'
          src={TriangleElement}
          alt=''
          className='banner-triangle-second'
        />
        <Image
          loading='lazy'
          src={CurvedLinesElement}
          alt=''
          className='banner-curved-lines-first'
        />
        <div className='banner-block-left' data-aos='fade-up'>
          <h1
            className='banner-block-left-heading heading-primary'
            ref={titleRef}
          >
            {t.hero}
            <span className='underline'>{t.heroUnderline}</span>
          </h1>
          <p
            className='banner-block-left--sub paragraph-primary'
            ref={descriptionFirstRef}
          >
            {t.heroText}
          </p>
          <p
            className='banner-block-left--sub paragraph-primary'
            ref={descriptionSecondRef}
          >
            {t.heroTextSecond}
          </p>
          <div className='banner-block-left-buttons' ref={buttonRef}>
            <Link
              href='/about'
              className='banner-block-left-buttons-first btn-primary'
            >
              <span>{t.heroBtn}</span>
              <svg width='13px' height='10px' viewBox='0 0 13 10'>
                <path d='M1,5 L11,5'></path>
                <polyline points='8 1 12 5 8 9'></polyline>
              </svg>
            </Link>
          </div>
          <div className='banner-block-left-trusted' ref={trustedClients}>
            <span className='banner-block-left-trusted--small'>
              {t.trustedBy}
            </span>
            <div className='banner-block-left-trusted-logos'>
              <Image
                src={GammasoftLogo}
                alt='Gammasoft'
                width={100}
                height={100}
                priority
              />
              <Image
                priority
                src={AionlineLogo}
                alt='aoinline'
                width={100}
                height={100}
              />
              <Image
                priority
                src={CodemaLogo}
                alt='Codema'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className='banner-block-right' data-aos='fade-up'>
          <div className='banner-block-right-img'>
            <Image priority src={MeImg} alt='Personal photo' ref={imageRef} />
            <span className='circle'></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
