import { FilterFormTypes } from '@/types/Filter'
import { ReactNode } from 'react'

export interface FilterContextType extends FilterFormTypes {
  storedFilter?: FilterFormTypes | null
}

export interface FilterContextProviderProps {
  children: ReactNode
}

export type FilterAction =
  | { type: 'SET_BEDROOMS'; payload: number }
  | { type: 'SET_BATHROOMS'; payload: number }
  | { type: 'SET_PARKING'; payload: number }
  | { type: 'SET_PRICE_RANGE'; payload: number }
  | { type: 'UPDATE_STORED_FILTER' }
  | { type: 'UPDATE_ALL'; payload: FilterFormTypes }
  | { type: 'DELETE_ALL' }
