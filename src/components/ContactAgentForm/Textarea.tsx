'use client'

import { ContactAgentFormTypes } from '@/types/ContactAgentForm'
import { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: keyof ContactAgentFormTypes
  placeholder?: string
}

export function Textarea({ name, placeholder, ...rest }: TextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactAgentFormTypes>()

  return (
    <div className='flex flex-col'>
      <textarea
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
