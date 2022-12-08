import React from 'react';
import FooterMenuItem from './FooterMenuItem';

const FooterMenu = () => {
  return (
    <div className="footer-wrapper-menu">
      <ul className="footer-wrapper-menu-left">
        <h3 className="heading-fourth">Menu</h3>
        <FooterMenuItem footerMenuLink="/about">About</FooterMenuItem>
        <FooterMenuItem footerMenuLink="/packages">Packages</FooterMenuItem>
        <FooterMenuItem footerMenuLink="/contact">Contact</FooterMenuItem>
      </ul>
      <ul className="footer-wrapper-menu-right">
        <h3 className="heading-fourth">Follow me on</h3>
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
