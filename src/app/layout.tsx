import { PropsWithChildren } from 'react'

import '@/styles/global.css'

import { cx } from 'class-variance-authority'
import { JetBrains_Mono } from 'next/font/google'

import { Footer, Header } from '@/layouts'

import styles from './styles.module.css'

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-family',
})

export const metadata = {
	title: 'Акселератор стартапов Peredelano Startups',
	description:
		'Акселератор стартапов для инвестирования и создания команды. Присоединяйся к сообществу Peredelano startups',
}

export default function RootLayout({ children = null }: PropsWithChildren<{}>) {
	return (
		<html lang="ru" className={cx([jetBrainsMono.className, jetBrainsMono.variable])}>
			<body className={styles.body}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
