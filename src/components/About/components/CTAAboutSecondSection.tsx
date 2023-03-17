import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import React from 'react';

import ColorfulThreeLinesSvg from '@/assets/colorful-three-lines.png';
import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

const CTAAboutSecondSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='cta-second-about-me'>
      <div className='cta-second-about-me-wrapper container-box'>
        <div className='cta-second-about-me-wrapper-left'>
          <Image loading='lazy' src={ColorfulThreeLinesSvg} alt='' />
        </div>
        <div className='cta-second-about-me-wrapper-right'>
          <h2
            className='cta-second-about-me-wrapper-right-heading heading-secondary'
            data-aos='fade-down'
            data-aos-delay='50'
          >
            {t.aboutCtaSecondHeading}
          </h2>
          <p
            className='cta-second-about-me-wrapper-right-text paragraph-primary'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {t.aboutCtaSecondText}
          </p>
          <Button href='/packages'>{t.aboutCtaSecondBtn}</Button>
        </div>
      </div>
    </section>
  );
};
export default CTAAboutSecondSection;
