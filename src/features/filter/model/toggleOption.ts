import { SelectedFilters } from './store'

/** Returns a new selection with the option added to or removed from its group. */
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
