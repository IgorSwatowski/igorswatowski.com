import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

import Image from 'next/image';

import TrustedLinesImg from '@/assets/trusted-lines-about.png';

import GammasoftLogo from '@/assets/trusted/gammasoft.png';
import CodemaLogo from '@/assets/trusted/codema.png';
import AionlineLogo from '@/assets/trusted/aionline.png';
import React from 'react';

const TrustedBySection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className='trusted-by'>
      <div className='trusted-by-wrapper container-box'>
        <p className='trusted-by-wrapper-text' data-aos='fade-right'>
          {t.trustedBy}
          <Image loading='lazy' src={TrustedLinesImg} alt='' />
        </p>
        <div className='trusted-by-wrapper-companies'>
          <Image loading='lazy' src={GammasoftLogo} alt='' data-aos='fade-in' />
          <Image loading='lazy' src={CodemaLogo} alt='' data-aos='fade-in' />
          <Image loading='lazy' src={AionlineLogo} alt='' data-aos='fade-in' />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
