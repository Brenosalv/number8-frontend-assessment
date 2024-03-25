'use client'

import { ContactAgentFormTypes } from '@/types/ContactAgentForm'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof ContactAgentFormTypes
  placeholder?: string
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactAgentFormTypes>()

  return (
    <div className='flex flex-col'>
      <input
        className='p-2'
        placeholder={placeholder}
        {...rest}
        {...register(name)}
      />
      {errors[name] && (
        <span className='text-red-500 text-sm'>{errors[name]?.message}</span>
      )}
    </div>
  )
}
