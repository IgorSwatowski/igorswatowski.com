import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
};

const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link href={href} className="btn-secondary" data-aos="fade-down" data-aos-delay="150">
      {children}
    </Link>
  );
};

export default Button;
