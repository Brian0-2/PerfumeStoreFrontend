
type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  className?: string;
};

export default function Input({ id, type, placeholder, className, ...rest }: InputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md p-2 ${className}`}
      {...rest}
    />
  )
}

