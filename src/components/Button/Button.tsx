import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  buttonHref?: string;
};

const Button = ({ children, buttonHref }: ButtonProps) => {
  return (
    <a href={buttonHref} className="btn-secondary" data-aos="fade-down" data-aos-delay="150">
      {children}
    </a>
  );
};

export default Button;
