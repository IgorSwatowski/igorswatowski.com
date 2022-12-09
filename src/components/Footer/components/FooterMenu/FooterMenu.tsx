import React from 'react';
import FooterMenuItem from './FooterMenuItem';

import { useRouter } from 'next/router';

import { en } from '../../../../i18n/locales/en';
import { pl } from '../../../../i18n/locales/pl';

const FooterMenu = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <div className="footer-wrapper-menu">
      <ul className="footer-wrapper-menu-left">
        <h3 className="heading-fourth">Menu</h3>
        <FooterMenuItem footerMenuLink="/about">{t.about}</FooterMenuItem>
        <FooterMenuItem footerMenuLink="/packages">{t.packages}</FooterMenuItem>
        <FooterMenuItem footerMenuLink="/contact">{t.contact}</FooterMenuItem>
      </ul>
      <ul className="footer-wrapper-menu-right">
        <h3 className="heading-fourth">{t.followMeOn}</h3>
        <FooterMenuItem
          footerMenuLink="https://dribbble.com/IgorSwatowski"
          target="_blank"
          rel="noreferrer"
        >
          Dribbble
        </FooterMenuItem>
        <FooterMenuItem
          footerMenuLink="https://instagram.com/igor.websites"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </FooterMenuItem>
        <FooterMenuItem
          footerMenuLink="https://www.linkedin.com/in/igorSwatowski"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </FooterMenuItem>
        <FooterMenuItem
          footerMenuLink="https://github.com/igorswatowski"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </FooterMenuItem>
      </ul>
    </div>
  );
};

export default FooterMenu;
