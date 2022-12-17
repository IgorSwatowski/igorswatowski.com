import React from 'react';

interface CustomTextareaProps {
  name?: string;
  id?: string;
  className?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const CustomTextarea = ({ name, id, className, value, onChange }: CustomTextareaProps) => {
  return <textarea name={name} id={id} className={className} value={value} onChange={onChange} />;
};
