import { MouseEvent, SyntheticEvent, useEffect, useRef } from 'react'

export const useModalDialog = (onClose: () => void) => {
	const ref = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		const dialog = ref.current

		if (dialog && !dialog.open) {
			dialog.showModal()
		}

		return () => dialog?.close()
	}, [])

	const onCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
		event.preventDefault()

		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	const onClick = (event: MouseEvent<HTMLDialogElement>) => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	return { ref, onCancel, onClick }
}
