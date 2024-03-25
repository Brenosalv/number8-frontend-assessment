'use client'

import { Property } from '@/types/Property'
import { SAVED_PROPERTIES } from '@/utils/constants'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Card } from '../PropertiesList/Card'

interface SavePropertyProps {
  newPropertyToSave?: Property
}

export function SaveProperty({ newPropertyToSave }: SavePropertyProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const savedPropertiesStr = localStorage.getItem(SAVED_PROPERTIES)
  const savedProperties: Property[] = savedPropertiesStr
    ? JSON.parse(savedPropertiesStr)
    : []

  const isPropertySaved = savedProperties.find(
    (property) => property.Id === newPropertyToSave?.Id,
  )

  function handleSavePropertyButtonClick() {
    if (isPropertySaved) {
      localStorage.setItem(
        SAVED_PROPERTIES,
        JSON.stringify(
          savedProperties.filter(
            (property) => property.Id !== newPropertyToSave?.Id,
          ),
        ),
      )
    } else {
      localStorage.setItem(
        SAVED_PROPERTIES,
        JSON.stringify([newPropertyToSave, ...savedProperties]),
      )
    }

    setIsModalOpen(true)
  }

  function handleModalClose() {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button.Primary
        className='flex gap-2 items-center ml-auto font-bold text-sm'
        onClick={handleSavePropertyButtonClick}
      >
        {isPropertySaved ? (
          <Heart size={16} fill='red' stroke='red' />
        ) : (
          <Heart size={16} />
        )}
        <span>{isPropertySaved ? 'Saved Property' : 'Save Property'}</span>
      </Button.Primary>

      <Modal
        title='Saved Properties'
        isOpen={isModalOpen}
        onClose={handleModalClose}
      >
        {savedProperties.length > 0 ? (
          <ul className='flex flex-col gap-6'>
            {savedProperties?.map((property) => (
              <Card
                key={property.Id}
                id={property.Id}
                location={property.Location}
                title={property.Title}
                bedrooms={property.Bedrooms}
                bathrooms={property.Bathrooms}
                price={property['Sale Price']}
                thumbnailUrl={property.PictureURL}
                onViewDetailsClick={handleModalClose}
              />
            ))}
          </ul>
        ) : (
          <div className='text-center'>
            <span>No saved properties.</span>
          </div>
        )}
      </Modal>
    </>
  )
}
