
export default function Container({children}: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,hsl(260,15%,8%)_0%,hsl(280,50%,25%)_50%,hsl(290,60%,35%)_100%)] p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}
