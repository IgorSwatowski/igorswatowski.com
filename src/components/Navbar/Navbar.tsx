import React from 'react';
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

  const changeLanguage = (locale: string) => {
    router.push('/', '/', { locale: locale.toLowerCase() });
  };

  return (
    <header className="header" id="menu-header">
      <a href="/" className="logo">
        Igor. <span className="bolden">Swatowski</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <div className="menu">
        <div className="menu-item">
          <Link href="/about" data-c="About me" aria-label="About me">
            About me
          </Link>
        </div>
        <div className="menu-item" data-c="Packages" aria-label="Packages">
          <Link href="/packages">Packages</Link>
        </div>
        <div className="menu-item">
          <Link href="/contact" data-c="Contact" aria-label="Contact">
            Contact
          </Link>
        </div>
        <div className="menu-contact">
          <Link
            href="mailto: hello@igorswatowski.com"
            data-c="Inquire here"
            aria-label="Inquire here"
            className="btn-secondary"
          >
            Inquire here
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
