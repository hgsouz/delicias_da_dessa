interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
}

export const Input = ({ id, label, placeholder }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        required
        className=" border border-(--terdiary-color) p-2 rounded-2xl mb-10"
      />
    </>
  );
};
