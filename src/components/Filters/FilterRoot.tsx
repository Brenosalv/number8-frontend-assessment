import { ReactNode } from "react"

interface FilterRootProps {
  label: string
  children: ReactNode
}

export function FilterRoot({ label, children }: FilterRootProps) {
  return (
    <div className="flex gap-2 items-center">
      <label>{label}:</label>
      {children}
    </div>
  )
}
