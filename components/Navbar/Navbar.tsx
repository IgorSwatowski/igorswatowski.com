import React from 'react'

import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };
    
  
  return (
    <header
    className="header"
    id="menu-header"
  >
    <a href="/" className="logo">Igor. <span className="bolden">Swatowski</span></a>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn"
      ><span className="navicon"></span
    ></label>
    <div className="menu">
      <div className="menu-item">
      <button onClick={() => changeLanguage('en')}>English</button>
    <button onClick={() => changeLanguage('pl')}>Polish</button>
        <a
          href="about.html"
          data-c="About me"
          aria-label="About me"
        >
          About me
        </a>
      </div>
      <div className="menu-item">
        <a href="packages.html" data-c="Packages" aria-label="Packages">
          Packages
        </a>
      </div>
      <div className="menu-item">
        <a href="contact.html" data-c="Contact" aria-label="Contact">
          Contact
        </a>
      </div>
      <div className="menu-contact">
        <a href="mailto: hello@igorswatowski.com" data-c="Inquire here" aria-label="Inquire here" className="btn-secondary">
          Inquire here
        </a>
      </div>
    </div>
    </header>
  )
}

export default Navbar