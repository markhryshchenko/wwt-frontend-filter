import { FormEvent, useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFiltersQuery } from '@/shared/api/filters/useFiltersQuery'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'
import { Spinner } from '@/shared/ui/Spinner'

import { useFilterStore } from '../model/store'
import { toggleOption } from '../model/toggleOption'
import { FilterGroup } from './FilterGroup'

type FilterModalProps = {
	onClose: () => void
}

/** Mounted only while open, so the draft is re-initialised from the store on every opening. */
export const FilterModal = ({ onClose }: FilterModalProps) => {
	const { t } = useTranslation('filter')
	const formId = useId()

	const applied = useFilterStore(state => state.applied)
	const apply = useFilterStore(state => state.apply)
	// Local draft: changes stay here until the user applies them
	const [draft, setDraft] = useState(applied)

	const { data: groups, isPending, isError, refetch } = useFiltersQuery()

	const handleToggle = (groupId: string, optionId: string) => {
		setDraft(prev => toggleOption(prev, groupId, optionId))
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		apply(draft)
		onClose()
	}

	const renderContent = () => {
		if (isPending) {
			return <Spinner className="py-16" />
		}

		if (isError) {
			return (
				<div
					role="alert"
					className="flex flex-col items-center gap-4 py-16"
				>
					<p>{t('loadError')}</p>
					<Button
						variant="secondary"
						onClick={() => refetch()}
					>
						{t('retry')}
					</Button>
				</div>
			)
		}

		return (
			<form
				id={formId}
				onSubmit={handleSubmit}
			>
				{groups.map(group => (
					<FilterGroup
						key={group.id}
						group={group}
						selectedIds={draft[group.id] ?? []}
						onToggle={optionId => handleToggle(group.id, optionId)}
					/>
				))}
			</form>
		)
	}

	return (
		<Modal
			onClose={onClose}
			title={t('title')}
			footer={
				// `form` links the button to the form, which lives in the scrollable body
				<Button
					type="submit"
					form={formId}
					disabled={!groups}
					className="w-full sm:w-auto"
				>
					{t('apply')}
				</Button>
			}
		>
			{renderContent()}
		</Modal>
	)
}
