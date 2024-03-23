"use client"

import { FilterFormTypes } from "@/types/Filter"
import { Dispatch, createContext, useContext, useReducer } from "react"
import { filterReducer } from "./filterReducer"
import { FilterAction, FilterContextProviderProps, FilterContextType } from "./types"

const FilterContext = createContext<{
  filterState: FilterContextType | null
  dispatch: Dispatch<FilterAction>
} | undefined>(undefined)

const initialState: FilterContextType | null = null

export function FilterContextProvider({ children }: FilterContextProviderProps) {
  const [filterState, dispatch] = useReducer<React.Reducer<FilterFormTypes | null, FilterAction>>(
    filterReducer,
    initialState
  )

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