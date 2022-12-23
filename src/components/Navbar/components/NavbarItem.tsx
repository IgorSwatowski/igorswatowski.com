import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en } from '../../../i18n/locales/en';
import { pl } from '../../../i18n/locales/pl';

interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
  ariaLabelText?: string;
}

const NavbarItem = ({ children, ariaLabelText, href }: NavbarItemProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <div className="menu-item">
      <Link href={href} aria-label={ariaLabelText}>
        {children}
      </Link>
    </div>
  );
};

export default NavbarItem;
