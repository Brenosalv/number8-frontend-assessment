'use client'

import { FilterFormTypes } from '@/types/Filter'
import { getStoredFilter } from '@/utils/getStoredFilter'
import { Dispatch, createContext, useContext, useReducer } from 'react'
import { filterReducer } from './reducers/filterReducer'
import {
  FilterAction,
  FilterContextProviderProps,
  FilterContextType,
} from './types'

const FilterContext = createContext<
  | {
      filterState: FilterContextType | null
      dispatch: Dispatch<FilterAction>
    }
  | undefined
>(undefined)

export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const storedFilter = getStoredFilter()

  const initialState: FilterContextType | null = {
    storedFilter,
  }

  const [filterState, dispatch] = useReducer<
    React.Reducer<FilterFormTypes | null, FilterAction>
  >(filterReducer, initialState)

  return (
    <FilterContext.Provider value={{ filterState, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilterContext() {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }

  return context
}
