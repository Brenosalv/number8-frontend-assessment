import { FilterFormTypes } from '@/types/Filter'
import { Property } from '@/types/Property'

export function filterProperty(property: Property, filter: FilterFormTypes) {
  return (
    (!filter.bedrooms || property.Bedrooms === filter.bedrooms) &&
    (!filter.bathrooms || property.Bathrooms === filter.bathrooms) &&
    (!filter.parking || property.Parking === filter.parking) &&
    (!filter.priceRange || property['Sale Price'] <= filter.priceRange)
  )
}
