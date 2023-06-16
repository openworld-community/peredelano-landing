import { ElementType } from 'react'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import type { PolymorphicComponentProp } from '@/types'

import styles from './Button.module.css'

type ButtonStyleProps = VariantProps<typeof buttonStyle>

const buttonStyle = cva(styles.button, {
	variants: {
		variant: {
			primary: styles['button--primary'],
			secondary: styles['button--secondary'],
			default: styles['button--default'],
		},
		size: {
			medium: styles['button--medium'],
			small: styles['button--small'],
		},
	},
})

type ButtonProps<C extends ElementType> = PolymorphicComponentProp<C, ButtonStyleProps>

function Button<C extends ElementType = 'button'>({
	className,
	variant = 'default',
	size = 'medium',
	as,
	children,
	...props
}: ButtonProps<C>) {
	const Component = as ?? 'button'

	return (
		<Component
			type={Component === 'button' ? 'button' : undefined}
			className={buttonStyle({ variant, className, size })}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Button
