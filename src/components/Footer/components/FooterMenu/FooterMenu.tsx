import React from 'react';
import FooterMenuItem from '@/components/Footer/components/FooterMenu/FooterMenuItem';

import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

const FooterMenu = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <div className='footer-wrapper-menu'>
      <ul className='footer-wrapper-menu-left'>
        <h3 className='heading-fourth'>Menu</h3>
        <FooterMenuItem href='/about' data-c='About me' aria-label='About me'>
          {t.about}
        </FooterMenuItem>
        <FooterMenuItem
          href='/packages'
          data-c='Packages'
          aria-label='Packages'
        >
          {t.packages}
        </FooterMenuItem>
        <FooterMenuItem href='/contact' data-c='Contact' aria-label='Contact'>
          {t.contact}
        </FooterMenuItem>
      </ul>
      <ul className='footer-wrapper-menu-right'>
        <h3 className='heading-fourth'>{t.followMeOn}</h3>
        <FooterMenuItem
          href='https://dribbble.com/IgorSwatowski'
          target='_blank'
          rel='noreferrer'
        >
          Dribbble
        </FooterMenuItem>
        <FooterMenuItem
          href='https://instagram.com/igor.websites'
          target='_blank'
          rel='noreferrer'
        >
          Instagram
        </FooterMenuItem>
        <FooterMenuItem
          href='https://www.linkedin.com/in/igorSwatowski'
          target='_blank'
          rel='noreferrer'
        >
          Linkedin
        </FooterMenuItem>
        <FooterMenuItem
          href='https://github.com/igorswatowski'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </FooterMenuItem>
      </ul>
    </div>
  );
};

export default FooterMenu;
