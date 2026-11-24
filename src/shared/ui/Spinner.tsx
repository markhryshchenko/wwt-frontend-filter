import { useTranslation } from 'react-i18next'

type SpinnerProps = {
	className?: string
}

export const Spinner = ({ className = '' }: SpinnerProps) => {
	const { t } = useTranslation('common')

	return (
		<div
			role="status"
			className={`flex justify-center ${className}`}
		>
			<div
				aria-hidden="true"
				className="size-8 animate-spin rounded-full border-4 border-disabled border-t-primary"
			/>
			<span className="sr-only">{t('loading')}</span>
		</div>
	)
}
