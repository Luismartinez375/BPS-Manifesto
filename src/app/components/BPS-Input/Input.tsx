export interface IInput {
  sampleTextProp: string;
}
type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  error: any;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  name,
  placeholder,
  value,
  error,
  onValueChange,
}: InputProps) {
  return (
    <div className=" w-4/5 h-10 rounded outline outline-1">
      <input
        className=" px-2 py-2 w-full h-full bg-inherit focus:outline-none"
        placeholder={placeholder}
        type="text"
        id={name}
        name={name}
        value={value}
        required
        onChange={onValueChange}
      />
      {error && <div className="text-red-600 text-xs p-1">{error}</div>}
    </div>
  );
}
