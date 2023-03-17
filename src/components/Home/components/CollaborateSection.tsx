import LinesSvg from '@/assets/lines.svg';
import ArrowDownSvg from '@/assets/arrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';

const CollaborateSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <section className='collaborate'>
      <div className='collaborate-wrapper container-box'>
        <div className='collaborate-wrapper-lines-img'>
          <Image loading='lazy' src={LinesSvg} alt='Lines image' />
        </div>
        <h2 className='collaborate-wrapper-heading heading-big'>
          {t.collaborate}
        </h2>
        <p className='collaborate-wrapper-text paragraph-primary'>
          {t.collaborateTextMain}
        </p>
        <div className='collaborate-wrapper-arrow-img'>
          <Image loading='lazy' src={ArrowDownSvg} alt='Arrow image' />
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
