import { FilterFormTypes } from "@/types/Filter"
import { FilterAction } from "./types"

export const filterReducer = (state: FilterFormTypes, action: FilterAction): FilterFormTypes => {
  switch (action.type) {
    case 'SET_BEDROOMS':
      return { ...state, bedrooms: action.payload }
    case 'SET_BATHROOMS':
      return { ...state, bathrooms: action.payload }
    case 'SET_PARKING':
      return { ...state, parking: action.payload }
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload }
    case 'UPDATE_ALL':
      return { ...state, ...action.payload }
    default:
      return state
  }
}