import { useQuery } from '@tanstack/react-query'

import { FilterItem } from '@/shared/api/types/Filter'

export const FILTERS_QUERY_KEY = ['filters'] as const

const getFilters = async (): Promise<FilterItem[]> => {
	const { default: data } = await import('@/shared/temp/filterData.json')

	return data.filterItems as FilterItem[]
}

export const useFiltersQuery = () =>
	useQuery({
		queryKey: FILTERS_QUERY_KEY,
		queryFn: getFilters,
		staleTime: Infinity
	})
