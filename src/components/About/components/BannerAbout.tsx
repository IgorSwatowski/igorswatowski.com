import { useRouter } from 'next/router';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';

import BannerMeImg from '../../../assets/about-igor.jpeg';
import Image from 'next/image';
import Button from '../../Button/Button';

const BannerAbout = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className="banner-text">
      <div className="banner-text-wrapper container-box">
        <div className="banner-text-wrapper-left">
          <h1
            className="banner-text-wrapper-heading heading-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.bannerHeading}
          </h1>
          <p
            className="banner-text-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {t.bannerText}
          </p>
          <p
            className="banner-text-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {t.bannerTextSecond}
          </p>
          <p
            className="banner-text-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {t.bannerTextThird}
          </p>
          <Button href="packages">{t.aboutCtaSecondBtn}</Button>
        </div>
        <div className="banner-text-wrapper-right">
          <Image src={BannerMeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
