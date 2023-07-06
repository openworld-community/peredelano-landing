import { PropsWithChildren } from 'react'

import '@/styles/global.css'

import { cx } from 'class-variance-authority'
import { JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'

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
	openGraph: {
		title: 'Акселератор стартапов Peredelano Startups',
		description:
			'Акселератор стартапов для инвестирования и создания команды. Присоединяйся к сообществу Peredelano startups',
		siteName: 'Акселератор стартапов Peredelano Startups',
		locale: 'ru_RU',
		type: 'website',
	},
}

export default function RootLayout({ children = null }: PropsWithChildren<{}>) {
	return (
		<html lang="ru" className={cx([jetBrainsMono.className, jetBrainsMono.variable])}>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-WP0LKMNBD2" />
			<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-WP0LKMNBD2');
				`}
			</Script>
			<body className={styles.body}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
