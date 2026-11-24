import { FilterType } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import { SelectedFilters } from './store'

export const toSearchRequestFilter = (
	selected: SelectedFilters
): SearchRequestFilter =>
	Object.entries(selected)
		.filter(([, optionsIds]) => optionsIds.length > 0)
		.map(([id, optionsIds]) => ({
			id,
			type: FilterType.OPTION,
			optionsIds
		}))
