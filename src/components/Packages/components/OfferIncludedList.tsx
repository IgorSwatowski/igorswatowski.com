import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import OfferIncludedItem from '@/components/Packages/components/OfferIncludedItem';
import React from 'react';

interface OfferIncludedListProps {
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

const OfferIncludedList = ({
  problemSetting,
  goals,
  analysis,
  content,
  informationArchitecture,
  concept,
  wireframing,
  designPatterns,
  preLaunch,
  testing,
  seo,
  technology,
  implementation,
  domain,
  links,
}: OfferIncludedListProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <div className='offer-whats-included-list'>
      <OfferIncludedItem>{problemSetting}</OfferIncludedItem>
      <OfferIncludedItem>{goals}</OfferIncludedItem>
      <OfferIncludedItem>{analysis}</OfferIncludedItem>
      <OfferIncludedItem>{content}</OfferIncludedItem>
      <OfferIncludedItem>{informationArchitecture}</OfferIncludedItem>
      <OfferIncludedItem>{concept}</OfferIncludedItem>
      <OfferIncludedItem>{wireframing}</OfferIncludedItem>
      <OfferIncludedItem>{designPatterns}</OfferIncludedItem>
      <OfferIncludedItem>{technology}</OfferIncludedItem>
      <OfferIncludedItem>{seo}</OfferIncludedItem>
      <OfferIncludedItem>{testing}</OfferIncludedItem>
      <OfferIncludedItem>{preLaunch}</OfferIncludedItem>
      <OfferIncludedItem>{implementation}</OfferIncludedItem>
      <OfferIncludedItem>{domain}</OfferIncludedItem>
      <OfferIncludedItem>{links}</OfferIncludedItem>
    </div>
  );
};

export default OfferIncludedList;
