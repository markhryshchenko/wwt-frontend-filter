import {
	MouseEvent,
	ReactNode,
	SyntheticEvent,
	useEffect,
	useId,
	useRef
} from 'react'
import { useTranslation } from 'react-i18next'

import CloseIcon from '@/shared/assets/icons/close.svg'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	title: string
	children?: ReactNode
	footer?: ReactNode
}

export const Modal = ({
	isOpen,
	onClose,
	title,
	children,
	footer
}: ModalProps) => {
	const { t } = useTranslation('common')
	const dialogRef = useRef<HTMLDialogElement>(null)
	const titleId = useId()

	// React has no prop for a *modal* <dialog>: `open` would skip the focus trap and backdrop
	useEffect(() => {
		const dialog = dialogRef.current

		if (!dialog) {
			return
		}

		if (isOpen && !dialog.open) {
			dialog.showModal()
		} else if (!isOpen && dialog.open) {
			dialog.close()
		}
	}, [isOpen])

	// Esc: let React state decide whether the dialog closes
	const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
		event.preventDefault()
		onClose()
	}

	// A click on the dialog element itself (not on its content) is a click on the backdrop
	const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	return (
		<dialog
			ref={dialogRef}
			aria-labelledby={titleId}
			onCancel={handleCancel}
			onClick={handleClick}
			className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent backdrop:bg-black/25 sm:mx-auto sm:mt-20 sm:h-fit sm:max-h-[calc(100dvh-10rem)] sm:max-w-popup"
		>
			<div className="flex h-full flex-col bg-white text-ink sm:max-h-[calc(100dvh-10rem)] sm:rounded-2xl">
				<header className="relative mx-8 flex items-center justify-center border-b border-divider py-6">
					<h2
						id={titleId}
						className="text-2xl font-medium sm:text-3xl"
					>
						{title}
					</h2>
					<button
						type="button"
						onClick={onClose}
						aria-label={t('close')}
						className="absolute right-0 cursor-pointer rounded-lg p-1 hover:bg-disabled"
					>
						<CloseIcon aria-hidden="true" />
					</button>
				</header>

				<div className="flex-1 overflow-y-auto px-8">{children}</div>

				{footer && (
					<footer className="mx-8 flex justify-center border-t border-divider py-6">
						{footer}
					</footer>
				)}
			</div>
		</dialog>
	)
}
