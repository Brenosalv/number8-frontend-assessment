"use client"

import { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"
import { FilterRoot } from "./FilterRoot"

interface FilterRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  minPrice: number
  maxPrice: number
  name: string
}

export function FilterRange({ label, maxPrice, minPrice, ...rest }: FilterRangeProps) {
  const { watch, register } = useFormContext()

  const watchedValue = watch(rest.name)

  const currentValue = watchedValue ? `$${String(watchedValue).slice(0, 3)}k` : ""

  return (
    <FilterRoot label={label}>
      <div className="flex items-center gap-2 relative">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={1000}
          {...rest}
          {...register(rest.name)}
        />

        {currentValue && <span
          id="currentValue"
          className="text-gray-600 text-xs w-24 absolute top-4 left-12"
        >
          Max: {currentValue}
        </span>}
      </div>
    </FilterRoot>
  )
}
