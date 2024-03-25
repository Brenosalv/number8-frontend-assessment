import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center outline-none focus:outline-none mx-4'>
      <div className='relative w-auto max-w-md mx-auto z-50'>
        <div className='relative bg-white flex flex-col h-modal-height'>
          <div className='flex items-center justify-between p-4 border-b border-solid border-gray-300'>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <button
              className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
              onClick={onClose}
            >
              <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                <X />
              </span>
            </button>
          </div>
          <div className='p-6 flex-1 overflow-y-auto'>{children}</div>
        </div>
      </div>
      <div className='fixed inset-0 z-40 bg-black opacity-50'></div>
    </div>
  )
}
