export interface FilterType {
  maxBedroomAmount: number
  maxBathroomAmount: number
  maxParkingAmount: number
  maxPrice: number
  minPrice: number
}

export interface FilterFormTypes {
  bedrooms?: number
  bathrooms?: number
  parking?: number
  priceRange?: number
}