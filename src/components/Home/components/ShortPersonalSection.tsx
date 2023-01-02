import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';

import MeSecondPng from '../../../assets/personal-photo.webp';

const ShortPersonalSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className="short-personal-info">
      <div className="short-personal-info-wrapper container-box">
        <div className="short-personal-info-wrapper-left">
          <h2
            className="short-personal-info-wrapper-left-heading heading-secondary"
            data-aos="fade-up"
          >
            {t.meetIgor}
          </h2>
          <p
            className="short-personal-info-wrapper-left-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t.meetIgorTextFirst}
          </p>
          <p
            className="short-personal-info-wrapper-left-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {t.meetIgorTextSecond}
          </p>
          <Link
            href="/about"
            className="more-about-me-end-link btn-primary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>{t.meetIgorBtn}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </div>
        <div className="short-personal-info-wrapper-right" data-aos="fade-down">
          <Image loading="lazy" src={MeSecondPng} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ShortPersonalSection;
