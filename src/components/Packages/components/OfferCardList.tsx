import OfferCard from './OfferCard';

import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import React from 'react';
const OfferCardList = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <div className='prices-wrapper-list'>
      <OfferCard
        title={t.planning}
        description={t.planningText}
        problemSetting={t.problemSetting}
        goals={t.goals}
        analysis={t.analysis}
        content={t.content}
      />
      <OfferCard
        title={t.design}
        description={t.designText}
        informationArchitecture={t.informationArchitecture}
        concept={t.concept}
        wireframing={t.wireframeing}
        designPatterns={t.designPatterns}
      />
      <OfferCard
        title={t.development}
        description={t.developmentText}
        technology={t.technology}
        seo={t.seo}
        testing={t.testing}
        preLaunch={t.preLaunch}
      />
      <OfferCard
        title={t.implementation}
        description={t.implementationText}
        domain={t.domain}
        links={t.links}
      />
    </div>
  );
};

export default OfferCardList;
