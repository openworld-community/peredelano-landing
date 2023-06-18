import { Button } from '@/components'

import styles from './Vacancies.module.css'

export default function Vacancies() {
	return (
		<section className={styles.vacancies}>
			<div className={styles.vacancies__container}>
				<h2 className={styles.vacancies__title}>Хочешь принять участие в&nbsp;проекте?</h2>
				<p className={styles.vacancies__description}>
					Разработчик, дизайнер, менеджер или кто-то еще&nbsp;&mdash; мы&nbsp;рады любым
					мастерам своего дела, а&nbsp;также новичкам
				</p>
				<Button
					variant="outlined"
					color="primary"
					as="a"
					target="_blank"
					href="https://t.me/peredelanoconfjunior/16468"
				>
					Чат в&nbsp;Telegram
				</Button>
			</div>
		</section>
	)
}
