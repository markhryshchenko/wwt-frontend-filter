import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterModal } from '@/features/filter'
import { Button } from '@/shared/ui/Button'

export const App = () => {
	const { t } = useTranslation('filter')
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	return (
		<main className="flex h-dvh w-full flex-col items-center justify-center gap-8 text-ink">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600">
				WinWinTravel frontend test task
			</h1>

			<Button onClick={() => setIsFilterOpen(true)}>{t('openButton')}</Button>

			<FilterModal
				isOpen={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
			/>
		</main>
	)
}
