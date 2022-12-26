import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';
import CustomSelect from '../CustomSelect/CustomSelect';
import NavbarItem from './components/NavbarItem';
import Button from '../Button/Button';

const Navbar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const closeMenu = () => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(false);
  //     console.log(isMenuOpen);
  //     const element = document.getElementById('menu');
  //     element!.style.display = 'none';
  //   }
  // };

  // const closeMenu = () => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(false);
  //     console.log(isMenuOpen);
  //     const element = document.getElementById('menu');
  //     element!.classList.toggle('menu');
  //   }
  // };

  const changeLanguage = async (locale: string) => {
    const { pathname, query } = router;
    const oldLanguageMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
    const oldLanguage = oldLanguageMatch ? oldLanguageMatch[1] : null;
    let newPathname = pathname;
    if (oldLanguage && oldLanguage !== locale.toLowerCase()) {
      newPathname = pathname.replace(new RegExp(`^\/${oldLanguage}(\/|$)`), '/');
    } else if (!oldLanguage) {
      newPathname = `/${locale.toLowerCase()}${pathname}`;
    }
    // Extract dynamic path parameter from URL and append it to new URL
    const dynamicPathMatch = pathname.match(/^\/[a-z]{2}\/(.+?)\/([^\/]+)$/);
    if (dynamicPathMatch) {
      const dynamicPath = dynamicPathMatch[1];
      const dynamicValue = dynamicPathMatch[2];
      newPathname = `/${locale.toLowerCase()}/${dynamicPath}/${dynamicValue}`;
    }
    router.replace({ pathname: newPathname, query });
  };

  useEffect(() => {
    changeLanguage(locale as string);
  }, [locale]);

  return (
    <header className="header" id="menu-header">
      <Link href="/" className="logo">
        Igor. <span className="bolden">Swatowski</span>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" onClick={toggleMenu} />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <div className="menu" id="menu">
        {/* <NavbarItem href="/about" aria-label="About me" onClick={closeMenu}>
          {t.about}
        </NavbarItem>
        <NavbarItem href="/packages" aria-label="Packages" onClick={closeMenu}>
          {t.packages}
        </NavbarItem>
        <NavbarItem href="/blog" aria-label="Blog">
          {t.blog}
        </NavbarItem>
        <NavbarItem href="/contact" aria-label="Contact" onClick={closeMenu}>
          {t.contact}
        </NavbarItem> */}
        <CustomSelect
          options={['EN', 'PL'].map((option) => option.toUpperCase())}
          defaultValue={locale === 'en' ? 'EN' : 'PL'}
          onChange={changeLanguage}
        />
        <div className="menu-contact">
          <Button href="mailto: hello@igorswatowski.com" aria-label="Inquire here">
            {t.inquireMe}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
