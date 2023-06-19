import { PropsWithChildren } from 'react'

import '@/styles/global.css'

import { cx } from 'class-variance-authority'
import { JetBrains_Mono } from 'next/font/google'

import Header from '@/layout/Header'

import styles from './styles.module.css'

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-family',
})

export const metadata = {
	title: 'Peredelano Landing',
	description: 'Generated by create next app',
}

export default function RootLayout({ children = null }: PropsWithChildren<{}>) {
	return (
		<html lang="ru" className={cx([jetBrainsMono.className, jetBrainsMono.variable])}>
			<body className={styles.body}>
				<Header />
				{children}
			</body>
		</html>
	)
}
