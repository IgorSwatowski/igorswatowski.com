import Image from 'next/image';
import { useRouter } from 'next/router';

import { en } from '../i18n/locales/en';
import { pl } from '../i18n/locales/pl';

import StrategyIcon from '../assets/horse-icon.svg';
import DesignIcon from '../assets/design-icon.png';
import DevelopmentIcon from '../assets/development-icon.png';
import QualityIcon from '../assets/quality-icon.png';
import GammasoftLogo from '../assets/trusted/gammasoft.png';
import AionlineLogo from '../assets/trusted/aionline.png';
import CodemaLogo from '../assets/trusted/codema.png';
import MeImg from '../assets/me.png';
import LinesSvg from '../assets/lines.svg';
import ArrowDownSvg from '../assets/arrow.svg';
import QuoteSvg from '../assets/quote.png';
import ColorfulThreeLinesSvg from '../assets/colorful-three-lines.png';
import MeSecondPng from '../assets/me-second.webp';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <main>
      <section className="banner container-box">
        <div className="banner-block-left" data-aos="fade-up">
          <h1 className="banner-block-left--title heading-primary">{t.hero}</h1>
          <p className="banner-block-left--sub paragraph-primary">
            {t.heroText}
            <br />
            <br />
            {t.heroTextSecond}
          </p>
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
      <section className="collaborate container-box">
        <div className="collaborate-wrapper">
          <div className="collaborate-wrapper-lines-img">
            <Image loading="lazy" src={LinesSvg} alt="" width={100} height={100} />
          </div>
          <h2 className="collaborate-wrapper-heading heading-big" data-aos="fade-up">
            {t.collaborate}
            <span className="underline">{t.collaborateText}</span>
            <span className="underline">{t.collaborateSecond}</span>
          </h2>
          <p
            className="collaborate-wrapper-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {t.collaborateTextMain}
          </p>
          <div className="collaborate-wrapper-arrow-img">
            <Image loading="lazy" src={ArrowDownSvg} alt="" width={100} height={100} />
          </div>
        </div>
      </section>
      <section className="implementation-process container-box">
        <div className="implementation-process-top">
          <h2 className="implementation-process-top-heading heading-secondary" data-aos="fade-up">
            {t.designProcess}
          </h2>
          <p
            className="implementation-process-top-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {t.designProcessText}
          </p>
        </div>
        <div className="implementation-process-list">
          <div className="implementation-process-list-item" data-aos="fade-up">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image loading="lazy" src={StrategyIcon} alt="" width={100} height={100} />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">
                {t.stageFirst}
              </h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                {t.stageFirstText}
              </p>
            </div>
          </div>
          <div className="implementation-process-list-item" data-aos="fade-up" data-aos-delay="50">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image loading="lazy" src={DesignIcon} alt="" width={100} height={100} />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">
                {t.stageSecond}
              </h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                {t.stageSecondText}
              </p>
            </div>
          </div>
          <div className="implementation-process-list-item" data-aos="fade-up" data-aos-delay="100">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image loading="lazy" src={DevelopmentIcon} alt="" width={100} height={100} />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">
                {t.stageThird}
              </h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                {t.stageThirdText}
              </p>
            </div>
          </div>
          <div className="implementation-process-list-item" data-aos="fade-up" data-aos-delay="150">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image loading="lazy" src={QualityIcon} alt="" width={100} height={100} />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">
                {t.stageFourth}
              </h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                {t.stageFourthText}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="should-work container-box">
        <h2 className="should-work-heading heading-secondary" data-aos="fade-up">
          {t.weShouldWorkHeading}
        </h2>
        <div className="should-work-list">
          <div className="should-work-list-item" data-aos="fade-up" data-aos-delay="50">
            <h3 className="should-work-list-item-heading heading-third">{t.weShouldWorkFirst}</h3>
            <p className="should-work-list-item-text paragraph-primary">
              {t.weShouldWorkFirstText}
            </p>
          </div>
          <div className="should-work-list-item" data-aos="fade-up" data-aos-delay="50">
            <h3 className="should-work-list-item-heading heading-third">{t.weShouldWorkSecond}</h3>
            <p className="should-work-list-item-text paragraph-primary">
              {t.weShouldWorkSecondText}
            </p>
          </div>
        </div>
        <p className="should-work-end-text" data-aos="fade-up" data-aos-delay="50">
          {t.weShouldWorkCTA}
        </p>
        <a
          href="about.html"
          className="should-work-end-link btn-primary"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <span>{t.weShouldWorkBtn}</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </section>
      <section className="references container-box">
        <div className="references-wrapper">
          <div className="references-wrapper-left">
            <h3 className="references-wrapper-left-heading heading-references" data-aos="fade-up">
              {t.reference}
            </h3>
            <div className="references-wrapper-left-author" data-aos="fade-up" data-aos-delay="100">
              <div className="references-wrapper-left-author-top">
                <Image loading="lazy" src={QuoteSvg} alt="" width={100} height={100} />
                <h4 className="heading-fourth">Agnieszka</h4>
              </div>
              <p className="references-wrapper-left-author-company">CEO | Agavaske AS</p>
            </div>
          </div>
          <div className="references-wrapper-right">
            <Image loading="lazy" src={ColorfulThreeLinesSvg} alt="" width={100} height={100} />
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="cta-wrapper container-box">
          <p className="cta-wrapper-text paragraph-primary" data-aos="fade-up">
            {t.ctaFirstText}
          </p>
          <p className="cta-wrapper-text paragraph-primary" data-aos="fade-up">
            {t.ctaSecondText}
          </p>
        </div>
      </section>
      <section className="short-personal-info container-box">
        <div className="short-personal-info-left">
          <h2 className="short-personal-info-left-heading heading-secondary" data-aos="fade-up">
            {t.meetIgor}
          </h2>
          <p
            className="short-personal-info-left-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t.meetIgorTextFirst}
          </p>
          <p
            className="short-personal-info-left-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {t.meetIgorTextSecond}
          </p>
          <a
            href="about.html"
            className="more-about-me-end-link btn-primary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>{t.meetIgorBtn}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        <div className="short-personal-info-right" data-aos="fade-down">
          <Image loading="lazy" src={MeSecondPng} alt="" />
        </div>
      </section>
      <section className="cta-second">
        <div className="cta-second-wrapper container-box">
          <p className="cta-second-text paragraph-primary" data-aos="fade-down">
            {t.ctaSecondFirstText}
            <br />
            <br />
            {t.ctaSecondSecondText}
          </p>
          <h3 className="cta-second-heading heading-third" data-aos="fade-down" data-aos-delay="50">
            {t.ctaSecondThirdText}
          </h3>
          <a
            href="packages.html"
            className="btn-secondary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.ctaSecondBtn}
          </a>
        </div>
      </section>
    </main>
  );
}
