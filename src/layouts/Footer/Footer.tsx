import { cx } from 'class-variance-authority'

import { contactsLinks, navigationLinks, teamLinks } from '@/constants'

import styles from './Footer.module.css'

export default function Vacancies() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__grid}>
					<div>
						<img
							className={styles.footer__logo}
							src="/images/logo.svg"
							alt="Peredelano Startups"
							loading="lazy"
						/>
					</div>
					<div>
						<h2 className={styles.footer__title}>Навигация</h2>
						<ul className={styles.list}>
							{navigationLinks.map(({ id, name, href }) => (
								<li className={styles.list__item} key={id}>
									<a className={styles.list__link} href={href}>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className={styles.footer__title} id="contacts">
							Контакты
						</h2>
						<ul className={styles.list}>
							{contactsLinks.map(({ id, name, href }) => (
								<li className={styles.list__item} key={id}>
									<a
										className={cx(
											styles.list__link,
											styles['list__link--underlined']
										)}
										href={href}
										target="_blank"
										rel="noreferrer"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className={styles.footer__title}>Над сайтом работали</h2>
						<ul className={styles.list}>
							{teamLinks.map(({ id, description, name, href }) => (
								<li className={styles.list__item} key={id}>
									{description}
									<br />
									<a
										className={cx(
											styles.list__link,
											styles['list__link--underlined']
										)}
										href={href}
										target="_blank"
										rel="noreferrer"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<small className={styles.footer__copyright}>
					&copy;&nbsp;Peredelano Startups 2023
				</small>
			</div>
		</footer>
	)
}
