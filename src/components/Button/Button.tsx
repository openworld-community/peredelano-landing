import { ElementType } from 'react'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import type { PolymorphicComponentProp } from '@/types'

import styles from './Button.module.css'

type ButtonStyleProps = VariantProps<typeof buttonStyle>

const buttonStyle = cva(styles.button, {
	variants: {
		variant: {
			outlined: styles['button--variant-outlined'],
			contained: styles['button--variant-contained'],
		},
		color: {
			default: styles['button--color-default'],
			primary: styles['button--color-primary'],
			secondary: styles['button--color-secondary'],
		},
		size: {
			small: styles['button--size-small'],
			medium: styles['button--size-medium'],
		},
	},
})

type ButtonProps<C extends ElementType> = PolymorphicComponentProp<C, ButtonStyleProps>

function Button<C extends ElementType = 'button'>({
	className,
	variant = 'contained',
	color = 'default',
	size = 'small',
	as,
	children,
	...props
}: ButtonProps<C>) {
	const Component = as ?? 'button'

	return (
		<Component
			type={Component === 'button' ? 'button' : undefined}
			className={buttonStyle({ variant, color, size, className })}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Button
