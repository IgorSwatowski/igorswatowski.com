import React from 'react';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
}

const CustomTextarea = ({
  className,
  value,
  onChange,
  id,
  name,
  label,
  placeholder,
  error,
  errorMessage,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <textarea
        name={name}
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        rows={5}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className='alert-danger'>*{errorMessage}</p>}
    </>
  );
};

export default CustomTextarea;
