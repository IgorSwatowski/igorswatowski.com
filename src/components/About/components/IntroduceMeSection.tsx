import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

import Image from 'next/image';

import NumberFirstImg from '@/assets/number_first.png';
import NumberSecondImg from '@/assets/number_second.png';
import NumberThirdImg from '@/assets/number_third.png';
import React from 'react';

const IntroduceMeSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='introduce-me'>
      <div className='introduce-me-wrapper container-box'>
        <h2
          className='introduce-me-wrapper-heading heading-secondary'
          data-aos='fade-down'
          data-aos-delay='150'
        >
          {t.timeToIntroduceHeading}
        </h2>
        <div className='introduce-me-wrapper-list'>
          <div
            className='introduce-me-wrapper-list-item'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            <Image
              loading='lazy'
              src={NumberFirstImg}
              alt=''
              className='introduce-me-wrapper-list-item-img'
            />
            <p className='introduce-me-wrapper-list-item-text paragraph-primary'>
              {t.timeToIntroduceStageFirst}
            </p>
          </div>
          <div
            className='introduce-me-wrapper-list-item'
            data-aos='fade-down'
            data-aos-delay='150'
          >
            <Image
              loading='lazy'
              src={NumberSecondImg}
              alt=''
              className='introduce-me-wrapper-list-item-img'
            />
            <p className='introduce-me-wrapper-list-item-text paragraph-primary'>
              {t.timeToIntroduceStageSecond}
            </p>
          </div>
          <div
            className='introduce-me-wrapper-list-item'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            <Image
              loading='lazy'
              src={NumberThirdImg}
              alt=''
              className='introduce-me-wrapper-list-item-img'
            />
            <p className='introduce-me-wrapper-list-item-text paragraph-primary'>
              {t.timeToIntroduceStageThird}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceMeSection;
