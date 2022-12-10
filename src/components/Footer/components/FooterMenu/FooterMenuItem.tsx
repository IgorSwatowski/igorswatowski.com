import React from 'react';
import Link from 'next/link';

type FooterMenuProps = {
  children: React.ReactNode;
  target?: string;
  rel?: string;
  href?: string;
};

const FooterMenuItem = ({ children, href, target, rel }: FooterMenuProps) => {
  return (
    <li>
      <Link className="paragraph-primary" href={href || ''} rel={rel} target={target}>
        {children}
      </Link>
    </li>
  );
};

export default FooterMenuItem;
