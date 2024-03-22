"use client"

import { useFilterContext } from "@/contexts/FilterContext"
import { filterValidationSchema } from "@/schemas/filterForm"
import { FilterFormTypes, FilterType } from "@/types/Filter"
import { getArrayByMaxNumber } from "@/utils/getMaxNumber"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "../Button"
import { Filter } from "../Filters"

export function FilterForm({
  maxBedroomAmount,
  maxBathroomAmount,
  maxParkingAmount,
  maxPrice,
  minPrice,
}: FilterType) {
  const form = useForm<FilterFormTypes>({
    defaultValues: {
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      priceRange: maxPrice
    },
    resolver: yupResolver(filterValidationSchema)
  })

  const { dispatch } = useFilterContext()

  const onSubmit = (data: FilterFormTypes) => {
    dispatch({ type: "UPDATE_ALL", payload: data })
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row gap-x-8 w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-6"
      >
        <Filter.Number
          label="Bedrooms"
          options={getArrayByMaxNumber(maxBedroomAmount)}
          name="bedrooms"
        />

        <Filter.Number
          label="Bathrooms"
          options={getArrayByMaxNumber(maxBathroomAmount)}
          name="bathrooms"
        />

        <Filter.Number
          label="Parking"
          options={getArrayByMaxNumber(maxParkingAmount)}
          name="parking"
        />

        <Filter.Range
          label="Price Range"
          minPrice={minPrice}
          maxPrice={maxPrice}
          name="priceRange"
        />

        <Button type="submit">
          Search
        </Button>
      </form>
    </FormProvider>
  )
}