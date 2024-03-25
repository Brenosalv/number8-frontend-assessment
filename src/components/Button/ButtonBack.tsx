'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function ButtonBack() {
  const router = useRouter()

  function handleArrowLeftClick() {
    router.back()
  }

  return (
    <ArrowLeft
      className='cursor-pointer stroke-gray-500 hover:stroke-gray-800 transition-colors'
      onClick={handleArrowLeftClick}
    />
  )
}
