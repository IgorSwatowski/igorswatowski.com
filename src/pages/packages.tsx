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
import TrustedLinesImg from '../assets/trusted-lines-about.png';

import GammasoftLogo from '../assets/trusted/gammasoft.png';
import CodemaLogo from '../assets/trusted/codema.png';
import AionlineLogo from '../assets/trusted/aionline.png';

import ColorfulThreeLinesSvg from '../assets/colorful-three-lines.png';
import InstagramIcon from '../assets/icons/instagram-icon.png';
import MeAboutImg from '../assets/me-second.webp';
import BannerMeImg from '../assets/about-igor.webp';
import FacebookIcon from '../assets/icons/facebook-icon.png';
import LinkedinIcon from '../assets/icons/linkedin-icon.png';
import Link from 'next/link';

const Packages = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <main>
      <section className="packages-banner"></section>
    </main>
  );
};

export default Packages;
