import React, { useState } from 'react';
import Link from 'next/link';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import NavbarItem from '@/components/Navbar/NavbarItem';
import { Button } from '@/components/Button/Button';
import { useLanguage } from '@/hooks/useLanguage';

const Navbar = () => {
  const { locale, t, changeLanguage } = useLanguage();

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
    <header>
      <nav className='navbar'>
        <div className='navbar-logo' aria-label='Main navigation'>
          <Link href='/' className='logo' onClick={hideMenu}>
            Igor. <span className='bolden'>Swatowski</span>
          </Link>
        </div>
        <ul className='nav-links'>
          <input
            type='checkbox'
            id='checkbox_toggle'
            onClick={toggleMenu}
            aria-label='Switch menu'
          />
          <label
            htmlFor='checkbox_toggle'
            className={`hamburger ${menuActive ? 'cross' : ''}`}
          >
            &#9776;
          </label>
          <nav className='menu'>
            <NavbarItem href='/about' aria-label='About me' onClick={hideMenu}>
              {t.about}
            </NavbarItem>
            <NavbarItem
              href='/packages'
              aria-label='Packages'
              onClick={hideMenu}
            >
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
              aria-label='Choose language'
            />
            <div className='menu-contact'>
              <Button
                href='mailto: hello@igorswatowski.com'
                aria-label='Inquire here'
              >
                {t.inquireMe}
              </Button>
            </div>
          </nav>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
