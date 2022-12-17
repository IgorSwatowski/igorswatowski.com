import React from 'react';

interface CustomInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id?: string;
  name?: string;
  type?: string;
}

export const CustomInput = ({ value, onChange, id, name, type }: CustomInputProps) => {
  return (
    <>
      <input id={id} name={name} type={type} value={value} onChange={onChange} />
    </>
  );
};
