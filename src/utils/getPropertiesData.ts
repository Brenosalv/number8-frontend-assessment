import { FilterType } from '@/types/Filter'
import { Property } from '@/types/Property'

interface PropertiesData extends FilterType {
  id?: string
  properties: Property[]
}

export async function getPropertiesData(): Promise<PropertiesData> {
  try {
    const response = await fetch(
      process.env.API_URL ||
        'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json',
      { next: { revalidate: 3600 } },
    )

    const properties: Property[] = await response.json()

    const maxBedroomAmount = Math.max(
      ...properties.map((property) => property.Bedrooms),
    )
    const maxBathroomAmount = Math.max(
      ...properties.map((property) => property.Bathrooms),
    )
    const maxParkingAmount = Math.max(
      ...properties.map((property) => property.Parking),
    )
    const maxPrice = Math.max(
      ...properties.map((property) => property['Sale Price']),
    )
    const minPrice = Math.min(
      ...properties.map((property) => property['Sale Price']),
    )

    return {
      properties,
      maxBedroomAmount,
      maxBathroomAmount,
      maxParkingAmount,
      maxPrice,
      minPrice,
    }
  } catch (error) {
    throw new Error(`Failed to fetch filter data: ${(error as Error).message}`)
  }
}
