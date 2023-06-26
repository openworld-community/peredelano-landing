import { ElementType } from 'react'

import { cx } from 'class-variance-authority'
import NextLink from 'next/link'

import type { PolymorphicComponentProp } from '@/types'

import styles from './Link.module.css'

type LinkProps<C extends ElementType> = PolymorphicComponentProp<C>

/**
 * Используется для внутритекстовых ссылок
 */

function Link<C extends ElementType = typeof NextLink>({
	className,
	as,
	href,
	children,
	...props
}: LinkProps<C>) {
	const Component = as ?? NextLink

	return (
		<Component className={cx([styles.link, className])} href={href} {...props}>
			{children}
		</Component>
	)
}
export default Link
