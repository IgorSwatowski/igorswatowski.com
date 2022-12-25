interface CustomTextareaProps {
  name?: string;
  id?: string;
  className?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}

export const CustomTextarea = ({
  name,
  id,
  className,
  value,
  onChange,
  error,
}: CustomTextareaProps) => {
  return (
    <>
      <textarea name={name} id={id} className={className} value={value} onChange={onChange} />
      {error && <span className="custom-input-error">{error}</span>}
    </>
  );
};
