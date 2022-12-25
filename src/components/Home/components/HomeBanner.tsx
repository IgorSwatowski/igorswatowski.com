import { useRouter } from 'next/router';
import Image from 'next/image';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';

import GammasoftLogo from '../../../assets/trusted/gammasoft.png';
import AionlineLogo from '../../../assets/trusted/aionline.png';
import CodemaLogo from '../../../assets/trusted/codema.png';
import MeImg from '../../../assets/me.png';

const HomeBanner = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <section className="banner container-box">
      <div className="banner-block-left" data-aos="fade-up">
        <h1 className="banner-block-left--title heading-primary">{t.hero}</h1>
        <p className="banner-block-left--sub paragraph-primary">{t.heroText}</p>
        <p className="banner-block-left--sub paragraph-primary">{t.heroTextSecond}</p>
        <div className="banner-block-left-buttons">
          <a href="about.html" className="banner-block-left-buttons-first btn-primary">
            <span>{t.heroBtn}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        <div className="banner-block-left-trusted">
          <span className="banner-block-left-trusted--small">{t.trustedBy}</span>
          <div className="banner-block-left-trusted-logos">
            <Image loading="lazy" src={GammasoftLogo} alt="Gammasoft" width={100} height={100} />
            <Image loading="lazy" src={AionlineLogo} alt="aoinline" width={100} height={100} />
            <Image loading="lazy" src={CodemaLogo} alt="Codema" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="banner-block-right" data-aos="fade-up">
        <div className="banner-block-right-img">
          <Image src={MeImg} alt="Personal photo" />
          <span className="circle"></span>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
