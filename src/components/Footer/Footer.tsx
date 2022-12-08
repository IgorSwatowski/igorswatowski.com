import React from 'react';
import FooterContact from './components/FooterContact/FooterContact';
import FooterMenu from './components/FooterMenu/FooterMenu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper container-box">
        <FooterContact />
        <FooterMenu />
      </div>
    </footer>
  );
};

export default Footer;
