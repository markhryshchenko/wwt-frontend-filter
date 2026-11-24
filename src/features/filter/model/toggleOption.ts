import { SelectedFilters } from './store'

export const toggleOption = (
	selected: SelectedFilters,
	groupId: string,
	optionId: string
): SelectedFilters => {
	const current = selected[groupId] ?? []
	const next = current.includes(optionId)
		? current.filter(id => id !== optionId)
		: [...current, optionId]

	return { ...selected, [groupId]: next }
}
