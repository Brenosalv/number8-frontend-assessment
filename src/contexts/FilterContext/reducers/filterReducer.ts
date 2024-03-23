import { FilterFormTypes } from "@/types/Filter"
import { Reducer } from "react"
import { FilterAction } from "../types"

export const filterReducer: Reducer<FilterFormTypes | null, FilterAction> = (state: FilterFormTypes | null, action: FilterAction): FilterFormTypes | null => {
  switch (action.type) {
    case "SET_BEDROOMS":
      return { ...state, bedrooms: action.payload }
    case "SET_BATHROOMS":
      return { ...state, bathrooms: action.payload }
    case "SET_PARKING":
      return { ...state, parking: action.payload }
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload }
    case "UPDATE_ALL": {
      localStorage.setItem("@filter", JSON.stringify(action.payload))
      return { ...action.payload }
    }
    case "DELETE_ALL": {
      localStorage.removeItem("@filter")
      return null
    }
    default:
      return state
  }
}