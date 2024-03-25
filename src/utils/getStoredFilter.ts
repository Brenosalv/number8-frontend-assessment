import { FilterFormTypes } from '@/types/Filter'
import { FILTER } from './constants'

export function getStoredFilter() {
  const locallyStoredFilterStr = localStorage.getItem(FILTER)
  const locallyStoredFilterObj: FilterFormTypes = locallyStoredFilterStr
    ? JSON.parse(locallyStoredFilterStr)
    : null

  return locallyStoredFilterObj
}
