import { ReactNode, useId } from 'react'

import { CloseButton } from './CloseButton'
import { useModalDialog } from './useModalDialog'

type ModalProps = {
	onClose: () => void
	title: string
	children?: ReactNode
	footer?: ReactNode
}

export const Modal = ({ onClose, title, children, footer }: ModalProps) => {
	const dialogProps = useModalDialog(onClose)
	const titleId = useId()

	return (
		<dialog
			{...dialogProps}
			aria-labelledby={titleId}
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
					<CloseButton
						onClick={onClose}
						className="absolute right-0"
					/>
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
