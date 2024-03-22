"use client"

import { Dispatch, createContext, useContext, useReducer } from "react"
import { filterReducer } from "./reducers"
import { FilterAction, FilterContextProviderProps, FilterContextType } from "./types"

const FilterContext = createContext<{
  filterState: FilterContextType
  dispatch: Dispatch<FilterAction>
} | undefined>(undefined)

let initialState: FilterContextType

export function FilterContextProvider({ children }: FilterContextProviderProps) {
  const [filterState, dispatch] = useReducer(filterReducer, initialState)

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