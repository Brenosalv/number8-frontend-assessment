import { ReactNode } from "react"

interface FilterRootProps {
  label: string
  children: ReactNode
}

export function FilterRoot({ label, children }: FilterRootProps) {
  return (
    <div className="flex gap-2 items-center w-full flex-wrap">
      <label className="text-nowrap">{label}:</label>
      {children}
    </div>
  )
}
