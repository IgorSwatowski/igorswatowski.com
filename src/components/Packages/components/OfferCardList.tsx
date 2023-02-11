import OfferCard from './OfferCard';

import { useRouter } from 'next/router';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';
const OfferCardList = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <div className="prices-wrapper-list">
      <OfferCard
        title={t.webDesign}
        description={t.webDesignText}
        customMobileText={t.customMobile}
        orientedDesign={t.orientedDesign}
        customDesignedWeb={t.customDesignedWeb}
        strategicDirection={t.strategicDirection}
        creatingDesign={t.creatingDesign}
        colorFontPhoto={t.colorFontPhoto}
        timeline={t.timeline}
        revisions={t.revisions}
      />
      <OfferCard
        title={t.webDesignAndDev}
        description={t.webDesignAndDevText}
        customMobileText={t.customMobile}
        orientedDesign={t.orientedDesign}
        customDesignedWeb={t.customDesignedWeb}
        strategicDirection={t.strategicDirection}
        creatingDesign={t.creatingDesign}
        colorFontPhoto={t.colorFontPhoto}
        linksAndDomain={t.linksAndDomain}
        animationStepByStep={t.animationStepByStep}
        support={t.support}
        frontEndDevelopmentTechnology={t.frontEndDevelopmentTechnology}
        basicSeo={t.basicSeo}
        optimized={t.optimized}
        timelineWebDevDesign={t.timelineWebDevDesign}
        revisions={t.revisions}
      />
      <OfferCard
        title={t.webDevelopment}
        description={t.webDevelopmentText}
        linksAndDomain={t.linksAndDomain}
        animationStepByStep={t.animationStepByStep}
        support={t.support}
        frontEndDevelopmentTechnology={t.frontEndDevelopmentTechnology}
        basicSeo={t.basicSeo}
        optimized={t.optimized}
        timelineWebDev={t.timelineWebDev}
        revisions={t.revisions}
      />
    </div>
  );
};

export default OfferCardList;
