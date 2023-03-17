import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
}

const CustomInput = ({
  value,
  onChange,
  id,
  name,
  type,
  label,
  placeholder,
  error = false,
  errorMessage = '',
  ...props
}: InputProps) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className='alert-danger'>*{errorMessage}</p>}
    </>
  );
};

export default CustomInput;
