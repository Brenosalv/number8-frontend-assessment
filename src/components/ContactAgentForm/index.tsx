'use client'

import { contactAgentFormValidationSchema } from '@/schemas/contactAgentForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

export function ContactAgentForm() {
  const [isMessageSent, setIsMessageSent] = useState(false)

  const form = useForm({
    resolver: yupResolver(contactAgentFormValidationSchema),
  })

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = form

  function onSubmit() {
    if (isValid) {
      setIsMessageSent(true)
      reset()
    }
  }

  return (
    <FormProvider {...form}>
      <form
        className='bg-gray-200 border border-gray-300 flex flex-col gap-4 p-8 min-h-96'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className='text-center text-xl'>Contact Agent</h4>

        <Input placeholder='Full Name *' name='fullName' />
        <Input name='email' placeholder='Email *' />
        <Input name='phoneNumber' placeholder='Phone Number *' />
        <Textarea name='comments' placeholder='Comments *' cols={30} rows={5} />

        {isMessageSent ? (
          <span className='text-green-500 text-center'>
            Message sent successfully
          </span>
        ) : (
          <Button.Primary className='w-fit mx-auto' type='submit'>
            Contact Now
          </Button.Primary>
        )}
      </form>
    </FormProvider>
  )
}
