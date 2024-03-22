"use client"

import { SelectHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"
import { FilterRoot } from "./FilterRoot"

interface FilterNumberProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: number[]
  name: string
}

export function FilterNumber({ label, options, ...rest }: FilterNumberProps) {
  const { register } = useFormContext()

  return (
    <FilterRoot label={label}>
      <select defaultValue={options[0]} className="border min-w-12 text-center" {...rest} {...register(rest.name)}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </FilterRoot>
  )
}
