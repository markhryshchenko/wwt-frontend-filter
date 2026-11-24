import { FilterItem } from '@/shared/api/types/Filter'

type FilterGroupProps = {
	group: FilterItem
	selectedIds: string[]
	onToggle: (optionId: string) => void
}

export const FilterGroup = ({
	group,
	selectedIds,
	onToggle
}: FilterGroupProps) => (
	<fieldset className="border-divider py-6 not-last:border-b">
		<legend className="float-left mb-4 w-full text-xl font-medium">
			{group.name}
		</legend>

		<div className="clear-left grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
			{group.options.map(option => (
				<label
					key={option.id}
					title={option.description}
					className="flex cursor-pointer items-center gap-3 text-sm"
				>
					<input
						type="checkbox"
						name={group.id}
						value={option.id}
						checked={selectedIds.includes(option.id)}
						onChange={() => onToggle(option.id)}
						className="size-4 shrink-0 cursor-pointer accent-ink"
					/>
					{option.name}
				</label>
			))}
		</div>
	</fieldset>
)
