import { create } from 'zustand'

export type SelectedFilters = Record<string, string[]>

type FilterState = {
	applied: SelectedFilters
	apply: (next: SelectedFilters) => void
}

export const useFilterStore = create<FilterState>()(set => ({
	applied: {},
	apply: next => set({ applied: next })
}))
