
export default function Container({children}: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#000000e6_20%,#6b21a8_80%)] p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}
