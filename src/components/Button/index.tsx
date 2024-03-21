import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="bg-blue-400 text-white px-4 py-2" {...rest}>
      {children}
    </button>
  )
}
