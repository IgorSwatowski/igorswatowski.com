import React from 'react'
import Link from 'next/link'

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
        <Link href="/about" data-c="About me"
        aria-label="About me">About me</Link>
      </div>
      <div className="menu-item" data-c="Packages" aria-label="Packages">
        <Link href="/packages">Packages</Link>
      </div>
      <div className="menu-item">
        <Link href="/contact"  data-c="Contact" aria-label="Contact">Contact</Link>
      </div>
      <div className="menu-contact">
        <Link href="mailto: hello@igorswatowski.com" data-c="Inquire here" aria-label="Inquire here" className="btn-secondary">Inquire here</Link>
      </div>
    </div>
    </header>
  )
}

export default Navbar