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
			default: styles['button--default'],
		},
	},
})

type ButtonProps<C extends ElementType> = PolymorphicComponentProp<C, ButtonStyleProps>

function Button<C extends ElementType = 'button'>({
	className,
	variant = 'default',
	as,
	children,
	...props
}: ButtonProps<C>) {
	const Component = as ?? 'button'

	return (
		<Component
			type={Component === 'button' ? 'button' : undefined}
			className={buttonStyle({ variant, className })}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Button
