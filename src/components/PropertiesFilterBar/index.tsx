import { getPropertiesData } from "@/utils/getPropertiesData"
import { FilterForm } from "./FilterForm"

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
      <FilterForm
        maxBedroomAmount={maxBedroomAmount}
        maxBathroomAmount={maxBathroomAmount}
        maxParkingAmount={maxParkingAmount}
        maxPrice={maxPrice}
        minPrice={minPrice}
      />
    )
  } catch (error) {
    alert(error) // TODO: Implement a snackbar to show the error to the user.
  }
}
