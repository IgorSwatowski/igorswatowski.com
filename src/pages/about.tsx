import React from 'react';
import Image from 'next/image';
import Button from '../components/Button/Button';

import { useRouter } from 'next/router';

import { en } from '../i18n/locales/en';
import { pl } from '../i18n/locales/pl';

import LinesImg from '../assets/lines.png';
import NumberFirstImg from '../assets/number_first.png';
import NumberSecondImg from '../assets/number_second.png';
import NumberThirdImg from '../assets/number_third.png';
import LinesSvg from '../assets/lines.svg';
import TrustedLinesImg from '../assets/trusted-lines-about.png';

import GammasoftLogo from '../assets/trusted/gammasoft.png';
import CodemaLogo from '../assets/trusted/codema.png';
import AionlineLogo from '../assets/trusted/aionline.png';

import ColorfulThreeLinesSvg from '../assets/colorful-three-lines.png';
import InstagramIcon from '../assets/icons/instagram-icon.png';
import MeAboutImg from '../assets/about-igor.webp';
import FacebookIcon from '../assets/icons/facebook-icon.png';
import LinkedinIcon from '../assets/icons/linkedin-icon.png';

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <main>
      <section className="banner-text">
        <div className="banner-text-wrapper container-box">
          <h1
            className="banner-text-wrapper-heading heading-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.bannerHeading}
            <br />
            {t.bannerHeadingSecond}
          </h1>
          <Image loading="lazy" src={LinesImg} alt="" data-aos="fade-down" data-aos-delay="50" />
          <p
            className="banner-text-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {t.bannerText}
          </p>
        </div>
      </section>
      <section className="introduce-me">
        <div className="introduce-me-wrapper">
          <h2
            className="introduce-me-wrapper-heading heading-secondary"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            {t.timeToIntroduceHeading}
          </h2>
          <p
            className="introduce-me-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.timeToIntroduceText}
          </p>
          <h3
            className="introduce-me-wrapper-subheading heading-fourth"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.timeToIntroduceHeadingSecond}
          </h3>
          <div className="introduce-me-wrapper-list">
            <div
              className="introduce-me-wrapper-list-item"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Image
                loading="lazy"
                src={NumberFirstImg}
                alt=""
                className="introduce-me-wrapper-list-item-img"
              />
              <p className="introduce-me-wrapper-list-item-text paragraph-primary">
                {t.timeToIntroduceStageFirst}
              </p>
            </div>
            <div
              className="introduce-me-wrapper-list-item"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <Image
                loading="lazy"
                src={NumberSecondImg}
                alt=""
                className="introduce-me-wrapper-list-item-img"
              />
              <p className="introduce-me-wrapper-list-item-text paragraph-primary">
                {t.timeToIntroduceStageSecond}
              </p>
            </div>
            <div
              className="introduce-me-wrapper-list-item"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <Image
                loading="lazy"
                src={NumberThirdImg}
                alt=""
                className="introduce-me-wrapper-list-item-img"
              />
              <p className="introduce-me-wrapper-list-item-text paragraph-primary">
                {t.timeToIntroduceStageThird}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-about-me">
        <div className="cta-about-me-wrapper container-box">
          <div className="cta-about-me-wrapper-lines-img">
            <Image loading="lazy" src={LinesSvg} alt="" width={100} height={100} />
          </div>
          <h2
            className="cta-about-me-wrapper-heading heading-big"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.ctaHeading}
            <span className="underline">{t.ctaHeadingUnderline}</span>
          </h2>
          <p
            className="cta-about-me-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {t.ctaTextFirst}
          </p>
          <p
            className="cta-about-me-wrapper-text--second paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            {t.ctaTextSecond}
          </p>
        </div>
      </section>
      <section className="trusted-by">
        <div className="trusted-by-wrapper container-box">
          <p className="trusted-by-wrapper-text" data-aos="fade-right">
            {t.trustedBy}
            <Image loading="lazy" src={TrustedLinesImg} alt="" />
          </p>
          <div className="trusted-by-wrapper-companies">
            <Image loading="lazy" src={GammasoftLogo} alt="" data-aos="fade-in" />
            <Image loading="lazy" src={CodemaLogo} alt="" data-aos="fade-in" />
            <Image loading="lazy" src={AionlineLogo} alt="" data-aos="fade-in" />
          </div>
        </div>
      </section>
      <section className="who-i-am container-box">
        <div className="who-i-am-left">
          <h2
            className="who-i-am-left-heading heading-secondary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.whoIAm}
          </h2>
          <p
            className="who-i-am-left-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.whoIAmText}
          </p>
          <p
            className="who-i-am-left-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.whoIAmTextSecond}
          </p>
          <p
            className="who-i-am-left-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t.whoIAmTextThird}
          </p>
          <div className="social-links" data-aos="fade-down" data-aos-delay="70">
            <a href="https://github.com/IgorSwatowski">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 21.9999V18.1299C15.0375 17.6531 14.9731 17.1737 14.811 16.7237C14.6489 16.2737 14.3929 15.8634 14.06 15.5199C17.2 15.1699 20.5 13.9799 20.5 8.51994C20.4997 7.12376 19.9627 5.78114 19 4.76994C19.4559 3.54844 19.4236 2.19829 18.91 0.999938C18.91 0.999938 17.73 0.649938 15 2.47994C12.708 1.85876 10.292 1.85876 8 2.47994C5.27 0.649938 4.09 0.999938 4.09 0.999938C3.57638 2.19829 3.54414 3.54844 4 4.76994C3.03013 5.78864 2.49252 7.1434 2.5 8.54994C2.5 13.9699 5.8 15.1599 8.94 15.5499C8.611 15.8899 8.35726 16.2953 8.19531 16.7399C8.03335 17.1844 7.96681 17.658 8 18.1299V21.9999M8 18.9999C3 20.4999 3 16.4999 1 15.9999L8 18.9999Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href="https://instagram.com/igor.websites" target="_blank" rel="noreferrer">
              <Image loading="lazy" src={InstagramIcon} alt="" />
            </a>
            <a href="https://facebook/igor.websites" target="_blank" rel="noreferrer">
              <Image loading="lazy" src={FacebookIcon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/igorSwatowski" target="_blank" rel="noreferrer">
              <Image loading="lazy" src={LinkedinIcon} alt="" width="24" height="24" />
            </a>
          </div>
        </div>
        <div className="who-i-am-right" data-aos="fade-down" data-aos-delay="50">
          <Image loading="lazy" src={MeAboutImg} alt="" />
        </div>
      </section>
      <section className="cta-second-about-me">
        <div className="cta-second-about-me-wrapper container-box">
          <div className="cta-second-about-me-wrapper-left">
            <Image loading="lazy" src={ColorfulThreeLinesSvg} alt="" />
          </div>
          <div className="cta-second-about-me-wrapper-right">
            <h2
              className="cta-second-about-me-wrapper-right-heading heading-secondary"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              {t.aboutCtaSecondHeading}
            </h2>
            <p
              className="cta-second-about-me-wrapper-right-text paragraph-primary"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {t.aboutCtaSecondText}
            </p>
            <Button buttonHref="packages">{t.aboutCtaSecondBtn}</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
