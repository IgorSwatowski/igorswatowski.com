import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import NavbarItem from '@/components/Navbar/components/NavbarItem';
import { Button } from '@/components/Button/Button';

const Navbar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  const changeLanguage = async (locale: string) => {
    const { pathname, query } = router;
    const oldLanguageMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
    const oldLanguage = oldLanguageMatch ? oldLanguageMatch[1] : null;
    let newPathname = pathname;
    if (oldLanguage && oldLanguage !== locale.toLowerCase()) {
      newPathname = pathname.replace(
        new RegExp(`^\/${oldLanguage}(\/|$)`),
        '/',
      );
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

  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  const hideMenu = () => {
    (document.querySelector('#checkbox_toggle')! as HTMLInputElement).checked =
      false;
    setMenuActive(false);

    document.querySelectorAll('.nav-links a, .hamburger').forEach(item => {
      item.addEventListener('click', hideMenu);
    });
  };
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link href='/' className='logo' onClick={hideMenu}>
          Igor. <span className='bolden'>Swatowski</span>
        </Link>
      </div>
      <ul className='nav-links'>
        <input type='checkbox' id='checkbox_toggle' onClick={toggleMenu} />
        <label
          htmlFor='checkbox_toggle'
          className={`hamburger ${menuActive ? 'cross' : ''}`}
        >
          &#9776;
        </label>
        <div className='menu'>
          <NavbarItem href='/about' aria-label='About me' onClick={hideMenu}>
            {t.about}
          </NavbarItem>
          <NavbarItem href='/packages' aria-label='Packages' onClick={hideMenu}>
            {t.packages}
          </NavbarItem>
          {/* <NavbarItem
            href='/portfolio'
            aria-label='Portfolio'
            onClick={hideMenu}
          >
            {t.portfolio}
          </NavbarItem> */}
          {/* <NavbarItem href='/blog' aria-label='Blog' onClick={hideMenu}>
            {t.blog}
          </NavbarItem> */}
          <NavbarItem href='/contact' aria-label='Contact' onClick={hideMenu}>
            {t.contact}
          </NavbarItem>
          <CustomSelect
            options={['EN', 'PL'].map(option => option.toUpperCase())}
            defaultValue={locale === 'en' ? 'EN' : 'PL'}
            onChange={changeLanguage}
          />
          <div className='menu-contact'>
            <Button
              href='mailto: hello@igorswatowski.com'
              aria-label='Inquire here'
            >
              {t.inquireMe}
            </Button>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
