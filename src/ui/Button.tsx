

type ButtonProps = {
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export default function Button({ size, onClick, className, children }: ButtonProps) {
  return (
    <button className={`btn ${size} ${className} cursor-pointer`} onClick={onClick}>
        {children}
    </button>
  )
}
