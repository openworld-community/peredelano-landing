import { Button } from '@/components'

import styles from './Hero.module.css'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__content}>
					<h1 className={styles.hero__title}>Peredelano Startups</h1>
					<p className={styles.hero__description}>
						Мы в комьюнити Peredelano собираемся в команды и запускаем стартапы. Вы
						можете создай свой и позвать других людей или присоединиться к любому уже
						действующему из списка ниже.
					</p>
					<Button color="primary">Список проектов</Button>
				</div>
				<img
					className={styles.hero__image}
					src="/images/hero/hero-image.svg"
					aria-hidden
					alt=""
				/>
			</div>
		</section>
	)
}
