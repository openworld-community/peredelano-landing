import Image from 'next/image'

import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<a className={styles.header__logoLink} href="/" aria-label="На главную страницу">
					<Image
						className={styles.header__logo}
						src="/images/logo/logo.svg"
						aria-hidden
						alt="logo"
						width={203}
						height={63}
					/>
				</a>

				<nav className={styles.header__nav}>
					<ul className={styles.header__navList}>
						<li className={styles.header__navItem}>
							<a className={styles.header__navLink} href="/">
								запустить свой стартап
							</a>
						</li>
						<li className={styles.header__navItem}>
							<a className={styles.header__navLink} href="/">
								принять участие
							</a>
						</li>
						<li className={styles.header__navItem}>
							<a className={styles.header__navLink} href="/">
								список стартапов
							</a>
						</li>
						<li className={styles.header__navItem}>
							<a className={styles.header__navLink} href="/">
								контакты
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
