import { useRouter } from 'next/router';
import Link from 'next/link';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import OfferIncludedList from '@/components/Packages/components/OfferIncludedList';
import React from 'react';

interface OfferCardProps {
  title: string;
  description: string;
  problemSetting?: string;
  goals?: string;
  analysis?: string;
  content?: string;
  informationArchitecture?: string;
  concept?: string;
  designPatterns?: string;
  wireframing?: string;
  preLaunch?: string;
  testing?: string;
  seo?: string;
  technology?: string;
  domain?: string;
  implementation?: string;
  links?: string;
}

const OfferCard = ({ title, description, ...props }: OfferCardProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <div
      className='prices-wrapper-list-item'
      data-aos='fade-up'
      data-aos-delay='50'
    >
      <h3 className='prices-wrapper-list-item-heading heading-third'>
        {title}
      </h3>
      <p className='prices-wrapper-list-item-text paragraph-primary'>
        {description}
      </p>
      <div className='small-line'></div>
      <OfferIncludedList {...props} />
    </div>
  );
};

export default OfferCard;
