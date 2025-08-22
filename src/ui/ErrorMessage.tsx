export default function ErrorMessage({children}: {children: React.ReactNode}) {
  return (
    <p className='mb-1 text-red-600 font-bold text-xs'>
        {children}
    </p>
  )
}