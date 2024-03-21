import { Property } from "@/types/Property"
import { getArrayByMaxNumber } from "@/utils/getMaxNumber"
import { Button } from "../Button"
import { Filter } from "../Filters"

export async function PropertiesFilterBar() {
  const response = await fetch("https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json")

  const properties: Property[] = await response.json()

  const maxBedroomAmount = Math.max(...properties.map((property) => property.Bedrooms))
  const maxBathroomAmount = Math.max(...properties.map((property) => property.Bathrooms))
  const maxParkingAmount = Math.max(...properties.map((property) => property.Parking))
  const maxPrice = Math.max(...properties.map((property) => property["Sale Price"]))
  const minPrice = Math.min(...properties.map((property) => property["Sale Price"]))

  return (
    <div className="flex items-center gap-x-8">
      <Filter.Number
        label="Bedrooms"
        options={getArrayByMaxNumber(maxBedroomAmount)}
      />

      <Filter.Number
        label="Bathrooms"
        options={getArrayByMaxNumber(maxBathroomAmount)}
      />

      <Filter.Number
        label="Parking"
        options={getArrayByMaxNumber(maxParkingAmount)}
      />

      <Filter.Range
        label="Price Range"
        minPrice={minPrice}
        maxPrice={maxPrice}
      />

      <Button>
        Search
      </Button>
    </div>
  )
}
