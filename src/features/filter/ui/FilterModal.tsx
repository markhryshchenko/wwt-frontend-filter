import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'

type FilterModalProps = {
	isOpen: boolean
	onClose: () => void
}

export const FilterModal = ({ isOpen, onClose }: FilterModalProps) => {
	const { t } = useTranslation('filter')

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={t('title')}
			footer={<Button className="w-full sm:w-auto">{t('apply')}</Button>}
		>
			{/* Filter groups: next step */}
		</Modal>
	)
}
