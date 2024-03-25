import { FilterFormTypes } from '@/types/Filter'
import { FILTER } from '@/utils/constants'
import { getStoredFilter } from '@/utils/getStoredFilter'
import { Reducer } from 'react'
import { FilterAction, FilterContextType } from '../types'

export const filterReducer: Reducer<FilterFormTypes | null, FilterAction> = (
  state: FilterContextType | null,
  action: FilterAction,
): FilterContextType | null => {
  const storedFilter = getStoredFilter()

  switch (action.type) {
    case 'SET_BEDROOMS':
      return { ...state, bedrooms: action.payload }
    case 'SET_BATHROOMS':
      return { ...state, bathrooms: action.payload }
    case 'SET_PARKING':
      return { ...state, parking: action.payload }
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload }
    case 'UPDATE_STORED_FILTER': {
      return { ...state, storedFilter }
    }
    case 'UPDATE_ALL': {
      localStorage.setItem(FILTER, JSON.stringify(action.payload))
      return { ...action.payload, storedFilter: action.payload }
    }
    case 'DELETE_ALL': {
      localStorage.removeItem(FILTER)
      return { storedFilter: null }
    }
    default:
      return state
  }
}
