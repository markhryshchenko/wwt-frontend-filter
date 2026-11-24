import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterModal, useSearchRequestFilter } from '@/features/filter'
import { Button } from '@/shared/ui/Button'

export const App = () => {
	const { t } = useTranslation('filter')
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const searchRequestFilter = useSearchRequestFilter()
	const debugTitleId = useId()

	return (
		<main className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 p-8 text-ink">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-center text-6xl text-gray-600">
				WinWinTravel frontend test task
			</h1>

			<Button onClick={() => setIsFilterOpen(true)}>{t('openButton')}</Button>

			<section
				aria-labelledby={debugTitleId}
				className="w-full max-w-2xl"
			>
				<h2
					id={debugTitleId}
					className="mb-2 text-sm font-medium text-gray-500"
				>
					{t('appliedFilter')}
				</h2>
				<pre className="overflow-x-auto rounded-2xl bg-disabled p-4 text-sm">
					{JSON.stringify(searchRequestFilter, null, 2)}
				</pre>
			</section>

			{isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
		</main>
	)
}
