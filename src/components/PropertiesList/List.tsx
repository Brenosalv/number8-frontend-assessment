"use client"

import { useFilterContext } from "@/contexts/FilterContext"
import { Property } from "@/types/Property"
import { Card } from "./Card"

interface ListProps {
  properties: Property[]
}

export function List({ properties }: ListProps) {
  const { filterState } = useFilterContext()

  const filteredProperties = filterState ? properties.filter((property) => (
    property.Bedrooms === filterState.bedrooms &&
    property.Bathrooms === filterState.bathrooms &&
    property.Parking === filterState.parking &&
    property["Sale Price"] <= (filterState.priceRange ?? 0)
  )) : properties

  return (
    <div className="grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProperties.map((property) => (
        <Card
          key={property.Id}
          location={property.Location}
          title={property.Title}
          bedrooms={property.Bedrooms}
          bathrooms={property.Bathrooms}
          price={property["Sale Price"]}
          thumbnailUrl={property.PictureURL}
        />
      ))}
    </div>
  )
}