import { getPropertiesData } from '@/utils/getPropertiesData'
import { ErrorMessage } from '../ErrorMessage'
import { FilterForm } from './FilterForm'

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
    return <ErrorMessage message={(error as Error).message} />
  }
}
