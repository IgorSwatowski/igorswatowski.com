import React from 'react';

type AnchorProps = React.AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLElement>;
type MyButtonProps = AnchorProps | ButtonProps;

// Check if the href property exists on the props object
const isAnchor = (props: MyButtonProps): props is AnchorProps => {
  return (props as AnchorProps).href !== undefined;
};

export const Button = (props: MyButtonProps) => {
  // If the props are of type AnchorProps
  if (isAnchor(props)) {
    return <a className='btn-secondary' {...props} />;
  }
  return (
    <button
      type='button'
      className='btn-secondary'
      data-aos='fade-down'
      data-aos-delay='150'
      {...props}
    />
  );
};
