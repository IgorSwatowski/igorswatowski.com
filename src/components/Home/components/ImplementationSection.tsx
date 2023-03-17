import { useRouter } from 'next/router';
import Image from 'next/image';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

import StrategyIcon from '@/assets/horse-icon.svg';
import DesignIcon from '@/assets/design-icon.png';
import DevelopmentIcon from '@/assets/development-icon.png';
import QualityIcon from '@/assets/quality-icon.png';
import React from 'react';

const ImplementationSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='implementation-process container-box'>
      <div className='implementation-process-top'>
        <h2
          className='implementation-process-top-heading heading-secondary'
          data-aos='fade-up'
        >
          {t.designProcess}
        </h2>
        <p
          className='implementation-process-top-text paragraph-primary'
          data-aos='fade-up'
          data-aos-delay='50'
        >
          {t.designProcessText}
        </p>
      </div>
      <div className='implementation-process-list'>
        <div className='implementation-process-list-item' data-aos='fade-up'>
          <div className='implementation-process-list-item-top'>
            <div className='implementation-process-list-item-top-img'>
              <Image
                loading='lazy'
                src={StrategyIcon}
                alt='Strategy icon'
                width={100}
                height={100}
              />
            </div>
            <h3 className='implementation-process-list-item-top-text heading-third'>
              {t.stageFirst}
            </h3>
          </div>
          <div className='implementation-process-list-item-bottom'>
            <p className='implementation-process-list-item-bottom-text paragraph-primary'>
              {t.stageFirstText}
            </p>
          </div>
        </div>
        <div
          className='implementation-process-list-item'
          data-aos='fade-up'
          data-aos-delay='50'
        >
          <div className='implementation-process-list-item-top'>
            <div className='implementation-process-list-item-top-img'>
              <Image
                loading='lazy'
                src={DesignIcon}
                alt='Design icon'
                width={100}
                height={100}
              />
            </div>
            <h3 className='implementation-process-list-item-top-text heading-third'>
              {t.stageSecond}
            </h3>
          </div>
          <div className='implementation-process-list-item-bottom'>
            <p className='implementation-process-list-item-bottom-text paragraph-primary'>
              {t.stageSecondText}
            </p>
          </div>
        </div>
        <div
          className='implementation-process-list-item'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <div className='implementation-process-list-item-top'>
            <div className='implementation-process-list-item-top-img'>
              <Image
                loading='lazy'
                src={DevelopmentIcon}
                alt='Development icon'
                width={100}
                height={100}
              />
            </div>
            <h3 className='implementation-process-list-item-top-text heading-third'>
              {t.stageThird}
            </h3>
          </div>
          <div className='implementation-process-list-item-bottom'>
            <p className='implementation-process-list-item-bottom-text paragraph-primary'>
              {t.stageThirdText}
            </p>
          </div>
        </div>
        <div
          className='implementation-process-list-item'
          data-aos='fade-up'
          data-aos-delay='150'
        >
          <div className='implementation-process-list-item-top'>
            <div className='implementation-process-list-item-top-img'>
              <Image
                loading='lazy'
                src={QualityIcon}
                alt='Quality icon'
                width={100}
                height={100}
              />
            </div>
            <h3 className='implementation-process-list-item-top-text heading-third'>
              {t.stageFourth}
            </h3>
          </div>
          <div className='implementation-process-list-item-bottom'>
            <p className='implementation-process-list-item-bottom-text paragraph-primary'>
              {t.stageFourthText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
