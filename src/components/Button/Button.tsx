import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className: string;
};

const Button = ({ children, href, className }: ButtonProps) => {
  return (
    <Link href={href} className={className} data-aos="fade-down" data-aos-delay="150">
      {children}
    </Link>
  );
};

export default Button;
