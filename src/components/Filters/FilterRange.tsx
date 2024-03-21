"use client"

import { ChangeEvent, useEffect, useState } from "react"
import { FilterRoot } from "./FilterRoot"

interface FilterRangeProps {
  label: string
  minPrice: number
  maxPrice: number
}

export function FilterRange({ label, maxPrice, minPrice }: FilterRangeProps) {
  const [currentValue, setCurrentValue] = useState<number | null>(null)

  useEffect(() => {
    setCurrentValue(minPrice)
  }, [minPrice])

  function handleRangeValueChange(event: ChangeEvent<HTMLInputElement>) {
    setCurrentValue(Number(event.target.value))
  }

  return (
    <FilterRoot label={label}>
      <div className="flex items-center gap-2 relative">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentValue || 0}
          onChange={handleRangeValueChange}
        />

        <span
          id="currentValue"
          className="text-gray-600 text-xs w-24 absolute top-4 left-12"
        >
          Max: ${currentValue}
        </span>
      </div>
    </FilterRoot>
  )
}
