import LinesSvg from '../../../assets/lines.svg';
import ArrowDownSvg from '../../../assets/arrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';

const CollaborateSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className="collaborate">
      <div className="collaborate-wrapper container-box">
        <div className="collaborate-wrapper-lines-img">
          <Image loading="lazy" src={LinesSvg} alt="" />
        </div>
        <h2 className="collaborate-wrapper-heading heading-big" data-aos="fade-up">
          {t.collaborate}
          <span className="underline">{t.collaborateText}</span>
        </h2>
        <p
          className="collaborate-wrapper-text paragraph-primary"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {t.collaborateTextMain}
        </p>
        <div className="collaborate-wrapper-arrow-img">
          <Image loading="lazy" src={ArrowDownSvg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
