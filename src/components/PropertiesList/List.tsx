"use client"

import { useFilterContext } from "@/contexts/FilterContext"
import { FilterFormTypes } from "@/types/Filter"
import { Property } from "@/types/Property"
import { Card } from "./Card"
import { EmptyList } from "./EmptyList"

interface ListProps {
  properties: Property[]
}

export function List({ properties }: ListProps) {
  const { filterState } = useFilterContext()

  const locallyStoredFilterStr = localStorage.getItem("@filter");
  const locallyStoredFilterObj: FilterFormTypes = locallyStoredFilterStr ? JSON.parse(locallyStoredFilterStr) : null

  const filteredProperties = (filterState || locallyStoredFilterObj) ? properties.filter(property => {
    return (
      property.Bedrooms === (locallyStoredFilterObj?.bedrooms || filterState?.bedrooms) &&
      property.Bathrooms === (locallyStoredFilterObj?.bathrooms || filterState?.bathrooms) &&
      property.Parking === (locallyStoredFilterObj?.parking || filterState?.parking) &&
      property["Sale Price"] <= (locallyStoredFilterObj?.priceRange || filterState?.priceRange || 0)
    )
  }) : properties

  return (
    <div className="flex items-center justify-center">
      {filteredProperties.length > 0 ? (
        <div className="grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProperties.map((property) => (
            <Card
              key={property.Id}
              id={property.Id}
              location={property.Location}
              title={property.Title}
              bedrooms={property.Bedrooms}
              bathrooms={property.Bathrooms}
              price={property["Sale Price"]}
              thumbnailUrl={property.PictureURL}
            />
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  )
}