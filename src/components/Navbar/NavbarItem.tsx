import React from 'react';
import Link from 'next/link';

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
  return (
    <li className='menu-item'>
      <Link href={href} aria-label={ariaLabelText} onClick={onClick} scroll>
        {children}
      </Link>
    </li>
  );
};

export default NavbarItem;
