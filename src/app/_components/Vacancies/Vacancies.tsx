import { Button } from '@/components'

import styles from './Vacancies.module.css'

export default function Vacancies() {
	return (
		<section className={styles.vacancies} id="vacancies">
			<div className={styles.vacancies__container}>
				<h2 className={styles.vacancies__title}>Хочешь принять участие в&nbsp;проекте?</h2>
				<p className={styles.vacancies__description}>
					Разработчик, дизайнер, менджер, предприниматель&nbsp;&mdash; нам нужны все,
					не&nbsp;зависимо от&nbsp;навыков. Выбирай стартап из&nbsp;списка или переходи
					в&nbsp;чат
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
