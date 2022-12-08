import React from 'react';

type FooterMenuProps = {
  children: React.ReactNode;
  target?: string;
  rel?: string;
  footerMenuLink?: string;
};

const FooterMenuItem = ({ children, footerMenuLink, target, rel }: FooterMenuProps) => {
  return (
    <li>
      <a className="paragraph-primary" href={footerMenuLink} rel={rel} target={target}>
        {children}
      </a>
    </li>
  );
};

export default FooterMenuItem;
