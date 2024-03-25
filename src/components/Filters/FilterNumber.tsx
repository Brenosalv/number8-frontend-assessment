'use client'

import { SelectHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface FilterNumberProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: number[]
  name: string
}

export function FilterNumber({ options, ...rest }: FilterNumberProps) {
  const { register } = useFormContext()

  return (
    <select
      defaultValue={options[0]}
      className='border min-w-12 text-center'
      {...rest}
      {...register(rest.name)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
