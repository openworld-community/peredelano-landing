// import { Link } from '@/components'
import Link from 'next/link'

import { headerNavigationLinks } from '@/constants'

import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Link
					className={styles['header__logo-link']}
					href="/"
					aria-label="На главную страницу"
				>
					<img
						className={styles.header__logo}
						src="/images/logo.svg"
						aria-hidden
						alt="Peredelano Startups"
						loading="lazy"
					/>
				</Link>
				<nav className={styles.header__nav}>
					<ul className={styles['header__nav-list']}>
						{headerNavigationLinks.map(({ id, name, href }) => (
							<li key={id}>
								<Link className={styles['header__nav-link']} href={href}>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
