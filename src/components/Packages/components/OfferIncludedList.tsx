import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import OfferIncludedItem from '@/components/Packages/components/OfferIncludedItem';

interface OfferIncludedListProps {
  customMobileText?: string;
  orientedDesign?: string;
  customDesignedWeb?: string;
  strategicDirection?: string;
  creatingDesign?: string;
  colorFontPhoto?: string;
  timeline?: string;

  linksAndDomain?: string;
  animationStepByStep?: string;
  frontEndDevelopmentTechnology?: string;
  support?: string;
  timelineWebDev?: string;
  optimized?: string;
  basicSeo?: string;
  revisions?: string;
  timelineWebDevDesign?: string;
}

const OfferIncludedList = ({
  customMobileText,
  orientedDesign,
  customDesignedWeb,
  creatingDesign,
  strategicDirection,
  colorFontPhoto,
  timeline,
  timelineWebDevDesign,
  revisions,
  basicSeo,
  optimized,
  timelineWebDev,
  support,
  frontEndDevelopmentTechnology,
  animationStepByStep,
  linksAndDomain,
}: OfferIncludedListProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <div className='offer-whats-included-list'>
      <h5 className='offer-whats-included-list-heading heading-fifth'>
        {t.whatsIncluded}
      </h5>
      <OfferIncludedItem>{customMobileText}</OfferIncludedItem>
      <OfferIncludedItem>{orientedDesign}</OfferIncludedItem>
      <OfferIncludedItem>{customDesignedWeb}</OfferIncludedItem>
      <OfferIncludedItem>{creatingDesign}</OfferIncludedItem>
      <OfferIncludedItem>{strategicDirection}</OfferIncludedItem>
      <OfferIncludedItem>{colorFontPhoto}</OfferIncludedItem>
      <OfferIncludedItem>{basicSeo}</OfferIncludedItem>
      <OfferIncludedItem>{optimized}</OfferIncludedItem>
      <OfferIncludedItem>{support}</OfferIncludedItem>
      <OfferIncludedItem>{frontEndDevelopmentTechnology}</OfferIncludedItem>
      <OfferIncludedItem>{animationStepByStep}</OfferIncludedItem>
      <OfferIncludedItem>{linksAndDomain}</OfferIncludedItem>
      <OfferIncludedItem>{timeline}</OfferIncludedItem>
      <OfferIncludedItem>{timelineWebDevDesign}</OfferIncludedItem>
      <OfferIncludedItem>{timelineWebDev}</OfferIncludedItem>
      <OfferIncludedItem>{revisions}</OfferIncludedItem>
    </div>
  );
};

export default OfferIncludedList;
