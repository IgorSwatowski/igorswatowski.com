import { useRouter } from 'next/router';
import Link from 'next/link';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import OfferIncludedList from '@/components/Packages/components/OfferIncludedList';

interface OfferCardProps {
  title: string;
  description: string;
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
      <Link href='/contact' className='btn-secondary'>
        {t.getStartedBtn}
      </Link>
      <div className='small-line'></div>
      <OfferIncludedList {...props} />
    </div>
  );
};

export default OfferCard;
