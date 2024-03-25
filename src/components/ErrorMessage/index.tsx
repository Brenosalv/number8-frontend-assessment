import Link from 'next/link'

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className='flex items-center justify-center h-screen gap-4 flex-col'>
      <h1>{message}</h1>
      <Link href='/' className='text-blue-600 underline'>
        Go back to home
      </Link>
    </div>
  )
}
