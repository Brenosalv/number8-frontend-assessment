"use client"

import { useFilterContext } from "@/contexts/FilterContext"
import { filterValidationSchema } from "@/schemas/filterForm"
import { FilterFormTypes, FilterType } from "@/types/Filter"
import { FILTER } from "@/utils/constants"
import { getArrayByMaxNumber } from "@/utils/getMaxNumber"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
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
  const locallyStoredFilterStr = localStorage.getItem(FILTER)
  const locallyStoredFilterObj: FilterFormTypes | null = locallyStoredFilterStr ? JSON.parse(locallyStoredFilterStr) : null

  const initialValues = {
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    priceRange: maxPrice
  }

  const form = useForm<FilterFormTypes>({
    defaultValues: locallyStoredFilterObj || initialValues,
    resolver: yupResolver(filterValidationSchema)
  })

  const {
    reset,
    handleSubmit
  } = form

  const { filterState, dispatch } = useFilterContext()

  const [isFilterActive, setIsFilterActive] = useState(false)

  function onSubmit(data: FilterFormTypes) {
    dispatch({ type: "UPDATE_ALL", payload: data })
  }

  function handleResetButtonClick() {
    dispatch({ type: "DELETE_ALL" })
    reset()
    setIsFilterActive(false)
  }

  function handleFilterButtonClick() {
    setIsFilterActive(true)
  }

  return (
    <FormProvider {...form}>
      {isFilterActive ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-x-8 w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-6"
        >
          <Filter.Root label="Bedrooms">
            <Filter.Number
              options={getArrayByMaxNumber(maxBedroomAmount)}
              name="bedrooms"
            />
          </Filter.Root>

          <Filter.Root label="Bathrooms">
            <Filter.Number
              options={getArrayByMaxNumber(maxBathroomAmount)}
              name="bathrooms"
            />
          </Filter.Root>

          <Filter.Root label="Parking">
            <Filter.Number
              options={getArrayByMaxNumber(maxParkingAmount)}
              name="parking"
            />
          </Filter.Root>

          <Filter.Root label="Price Range">
            <Filter.Range
              minPrice={minPrice}
              maxPrice={maxPrice}
              name="priceRange"
            />
          </Filter.Root>

          <Button.Primary type="submit">
            Search
          </Button.Primary>

          {(!!filterState || !!locallyStoredFilterObj) &&
            <Button.Secondary type="button" onClick={handleResetButtonClick}>
              Reset
            </Button.Secondary>
          }
        </form>) : (
        <Button.Primary onClick={handleFilterButtonClick}>
          Filter
        </Button.Primary>
      )}
    </FormProvider>
  )
}