import { getArrayByMaxNumber } from "@/utils/getMaxNumber"
import { getPropertiesData } from "@/utils/getPropertiesData"
import { Button } from "../Button"
import { Filter } from "../Filters"

export async function PropertiesFilterBar() {
  try {
    const {
      maxBedroomAmount,
      maxBathroomAmount,
      maxParkingAmount,
      maxPrice,
      minPrice,
    } = await getPropertiesData()

    return (
      <div className="flex flex-row gap-x-8 w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-6">
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
  } catch (error) {
    alert(error) // TODO: Implement a snackbar to show the error to the user.
  }
}
