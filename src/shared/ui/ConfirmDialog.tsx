import { useId } from 'react'

import { Button } from './Button'
import { CloseButton } from './CloseButton'
import { useModalDialog } from './useModalDialog'

type ConfirmDialogProps = {
	title: string
	confirmLabel: string
	cancelLabel: string
	onConfirm: () => void
	onCancel: () => void
	onClose: () => void
}

export const ConfirmDialog = ({
	title,
	confirmLabel,
	cancelLabel,
	onConfirm,
	onCancel,
	onClose
}: ConfirmDialogProps) => {
	const dialogProps = useModalDialog(onClose)
	const titleId = useId()

	return (
		<dialog
			{...dialogProps}
			role="alertdialog"
			aria-labelledby={titleId}
			className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent backdrop:bg-black/10 backdrop:backdrop-blur-sm sm:mx-auto sm:mt-40 sm:h-fit sm:max-w-popup"
		>
			<div className="flex h-full flex-col bg-white px-8 py-6 text-ink sm:rounded-2xl">
				<header className="relative flex items-center justify-center">
					<h2
						id={titleId}
						className="text-xl font-medium sm:text-2xl"
					>
						{title}
					</h2>
					<CloseButton
						onClick={onClose}
						className="absolute right-0"
					/>
				</header>

				<div className="mt-auto flex flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-6">
					<Button
						variant="secondary"
						onClick={onCancel}
						className="w-full sm:w-56"
					>
						{cancelLabel}
					</Button>
					<Button
						onClick={onConfirm}
						className="w-full sm:w-56"
					>
						{confirmLabel}
					</Button>
				</div>
			</div>
		</dialog>
	)
}
