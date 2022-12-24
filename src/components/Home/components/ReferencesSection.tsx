import { useRouter } from 'next/router';
import Image from 'next/image';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';

import QuoteSvg from '../../../assets/quote.png';
import ColorfulThreeLinesSvg from '../../../assets/colorful-three-lines.png';

const ReferencesSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className="references container-box">
      <div className="references-wrapper">
        <div className="references-wrapper-left">
          <h3 className="references-wrapper-left-heading heading-references" data-aos="fade-up">
            {t.reference}
          </h3>
          <div className="references-wrapper-left-author" data-aos="fade-up" data-aos-delay="100">
            <div className="references-wrapper-left-author-top">
              <Image loading="lazy" src={QuoteSvg} alt="" />
              <h4 className="heading-fourth">Agnieszka</h4>
            </div>
            <p className="references-wrapper-left-author-company">CEO | Agavaske AS</p>
          </div>
        </div>
        <div className="references-wrapper-right">
          <Image loading="lazy" src={ColorfulThreeLinesSvg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;