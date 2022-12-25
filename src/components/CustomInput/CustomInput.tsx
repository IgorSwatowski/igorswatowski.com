interface CustomInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id?: string;
  name?: string;
  type?: string;
  error?: string;
}

export const CustomInput = ({ value, onChange, id, name, type, error }: CustomInputProps) => {
  return (
    <>
      <input id={id} name={name} type={type} value={value} onChange={onChange} />
      {error && <span className="custom-input-error">{error}</span>}
    </>
  );
};
