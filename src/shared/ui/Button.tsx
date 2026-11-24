import { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ComponentProps<'button'> & {
	variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
	secondary:
		'border border-primary bg-white text-primary hover:border-primary-active hover:text-primary-active active:bg-primary active:text-white'
}

export const Button = ({
	variant = 'primary',
	type = 'button',
	className = '',
	...props
}: ButtonProps) => (
	<button
		type={type}
		className={`inline-flex h-12 min-w-44 cursor-pointer items-center justify-center rounded-2xl px-6 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-disabled disabled:text-gray-500 ${variantClasses[variant]} ${className}`}
		{...props}
	/>
)
