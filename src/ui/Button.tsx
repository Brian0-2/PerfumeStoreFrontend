

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export default function Button({ size, onClick, className, children, type, disabled }: ButtonProps) {
  return (
    <button type={type} className={`btn ${size} ${className} ${disabled ? 'cursor-not-allowed opacity-65' : 'cursor-pointer'}`} onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}
