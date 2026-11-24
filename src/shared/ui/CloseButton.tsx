import { useTranslation } from 'react-i18next'

import CloseIcon from '@/shared/assets/icons/close.svg'

type CloseButtonProps = {
	onClick: () => void
	className?: string
}

export const CloseButton = ({ onClick, className = '' }: CloseButtonProps) => {
	const { t } = useTranslation('common')

	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={t('close')}
			className={`cursor-pointer rounded-lg p-1 hover:bg-disabled ${className}`}
		>
			<CloseIcon aria-hidden="true" />
		</button>
	)
}
