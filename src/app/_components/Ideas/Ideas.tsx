import { Button } from '@/components'

import styles from './Ideas.module.css'

export default function Ideas() {
	return (
		<section className={styles.ideas}>
			<div className={styles.ideas__container}>
				<h2 className={styles.ideas__title}>Есть идея, которая может изменить мир?</h2>
				<p className={styles.ideas__description}>
					Если у&nbsp;тебя есть идеи проектов&nbsp;&mdash; смело пиши, что хочешь сделать,
					а&nbsp;мы&nbsp;поможем реализовать и&nbsp;собрать команду
				</p>
				<Button
					variant="contained"
					color="secondary"
					as="a"
					target="_blank"
					href="https://t.me/peredelanoconfjunior/12272"
				>
					Чат в&nbsp;Telegram
				</Button>
			</div>
		</section>
	)
}
