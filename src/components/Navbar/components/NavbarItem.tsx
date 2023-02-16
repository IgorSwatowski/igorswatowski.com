import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en } from '@/i18n/locales/en';
import { pl } from '@/i18n/locales/pl';

interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
  ariaLabelText?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavbarItem = ({
  children,
  ariaLabelText,
  href,
  onClick,
}: NavbarItemProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;
  return (
    <li className='menu-item'>
      <Link href={href} aria-label={ariaLabelText} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarItem;
