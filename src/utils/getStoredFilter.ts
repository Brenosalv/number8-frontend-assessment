import { FilterFormTypes } from '@/types/Filter'
import { FILTER } from './constants'

export function getStoredFilter() {
  if (typeof window !== 'undefined') {
    const locallyStoredFilterStr = localStorage.getItem(FILTER)
    const locallyStoredFilterObj: FilterFormTypes = locallyStoredFilterStr
      ? JSON.parse(locallyStoredFilterStr)
      : null

    return locallyStoredFilterObj
  }
}
