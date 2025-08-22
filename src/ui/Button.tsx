
type ButtonProps = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({ size = "md", onClick, className = "", children, type = "button", disabled }: ButtonProps) {
  
  const sizeClasses: Record<string, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`${sizeClasses[size]} ${className} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} rounded-md transition`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

