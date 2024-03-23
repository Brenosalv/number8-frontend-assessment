import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function ButtonSecondary({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`underline text-gray-400 hover:text-gray-800 ${rest.className}`}
    >
      {children}
    </button>
  )
}