import { Property } from "@/types/Property"

export async function getPropertiesData() {
  try {
    const response = await fetch("https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json")

    const properties: Property[] = await response.json()

    const maxBedroomAmount = Math.max(...properties.map((property) => property.Bedrooms))
    const maxBathroomAmount = Math.max(...properties.map((property) => property.Bathrooms))
    const maxParkingAmount = Math.max(...properties.map((property) => property.Parking))
    const maxPrice = Math.max(...properties.map((property) => property["Sale Price"]))
    const minPrice = Math.min(...properties.map((property) => property["Sale Price"]))

    return {
      properties,
      maxBedroomAmount,
      maxBathroomAmount,
      maxParkingAmount,
      maxPrice,
      minPrice,
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch filter data: ${error.message}`)
  }
}