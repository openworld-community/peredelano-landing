import { ElementType } from 'react'

import { cx } from 'class-variance-authority'

import type { PolymorphicComponentProp } from '@/types'

import styles from './Link.module.css'

type LinkProps<C extends ElementType> = PolymorphicComponentProp<C, {}>

function Link<C extends ElementType = 'a'>({
	className,
	as,
	href,
	children,
	...props
}: LinkProps<C>) {
	const Component = as ?? 'a'

	// const handleClick: any = (e: MouseEvent) => {
	// 	e.preventDefault()
	// 	console.log('тест')
	// }

	return (
		<Component className={cx([styles.link, className])} href={href} {...props}>
			{children}
		</Component>
	)
}
export default Link
