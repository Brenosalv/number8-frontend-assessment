'use client'

import { useFilterContext } from '@/contexts/FilterContext'
import { Property } from '@/types/Property'
import { filterProperty } from '@/utils/filterProperty'
import { Card } from './Card'

interface ListProps {
  properties: Property[]
}

export function List({ properties }: ListProps) {
  const { filterState } = useFilterContext()

  let filteredProperties = properties

  const { storedFilter, ...rest } = filterState || {}

  if (storedFilter) {
    filteredProperties = filteredProperties.filter((property) =>
      filterProperty(property, storedFilter),
    )
  } else if (Object.keys(rest).length > 0) {
    filteredProperties = filteredProperties.filter((property) =>
      filterProperty(property, rest),
    )
  }

  return (
    <div className='flex items-center justify-center'>
      {filteredProperties.length > 0 ? (
        <ul className='grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProperties.map((property) => (
            <Card
              key={property.Id}
              id={property.Id}
              location={property.Location}
              title={property.Title}
              bedrooms={property.Bedrooms}
              bathrooms={property.Bathrooms}
              price={property['Sale Price']}
              thumbnailUrl={property.PictureURL}
            />
          ))}
        </ul>
      ) : (
        <span className='sm:mt-32 text-center'>
          Empty. Please try another filter.
        </span>
      )}
    </div>
  )
}
