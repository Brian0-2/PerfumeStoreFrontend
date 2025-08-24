
type CardProps = {
    children: React.ReactNode,
    className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`w-full rounded-2xl p-6 shadow-lg flex flex-col items-center ${className}`}>
      {children}
    </div>
  )
}
