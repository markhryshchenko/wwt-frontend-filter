import { useMemo } from 'react'

import { toSearchRequestFilter } from './mappers'
import { useFilterStore } from './store'

export const useSearchRequestFilter = () => {
	const applied = useFilterStore(state => state.applied)

	return useMemo(() => toSearchRequestFilter(applied), [applied])
}
