import { Link } from '@/components'
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
						width={203}
						height={63}
						loading="lazy"
					/>
				</Link>
				<nav className={styles.header__nav}>
					<ul className={styles['header__nav-list']}>
						{headerNavigationLinks.map(({ id, name, href }) => (
							<li className={styles['header__nav-item']} key={id}>
								<Link className={styles['header__nav-link']} href={href}>
									{name.toLowerCase()}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
