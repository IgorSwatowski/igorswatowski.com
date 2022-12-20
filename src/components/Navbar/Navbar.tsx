import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';
import CustomSelect from '../CustomSelect/CustomSelect';

type ChangeLanguageEvent = React.ChangeEvent<HTMLSelectElement>;

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
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <div className="menu">
        <div className="menu-item">
          <Link href="/about" data-c="About me" aria-label="About me">
            {t.about}
          </Link>
        </div>
        <div className="menu-item" data-c="Packages" aria-label="Packages">
          <Link href="/packages">{t.packages}</Link>
        </div>
        <div className="menu-item" data-c="Blog" aria-label="Blog">
          <Link href="/blog">{t.blog}</Link>
        </div>
        <div className="menu-item">
          <Link href="/contact" data-c="Contact" aria-label="Contact">
            {t.contact}
          </Link>
        </div>
        <div className="menu-contact">
          <Link
            href="mailto: hello@igorswatowski.com"
            data-c="Inquire here"
            aria-label="Inquire here"
            className="btn-secondary"
          >
            {t.inquireMe}
          </Link>
        </div>
        <CustomSelect
          options={['EN', 'PL'].map((option) => option.toUpperCase())}
          defaultValue={locale === 'en' ? 'EN' : 'PL'}
          onChange={changeLanguage}
        />
      </div>
    </header>
  );
};

export default Navbar;
