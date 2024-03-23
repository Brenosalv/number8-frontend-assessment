import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonPrimary({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`bg-blue-400 text-white px-4 py-2 hover:bg-blue-500 transition-colors ${rest.className}`}
    >
      {children}
    </button>
  )
}