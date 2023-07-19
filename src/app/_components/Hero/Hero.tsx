import { Button } from '@/components'

import styles from './Hero.module.css'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__content}>
					<h1 className={styles.hero__title}>Peredelano Startups</h1>
					<p className={styles.hero__description}>
						Мы&nbsp;в&nbsp;комьюнити Peredelano собираемся в&nbsp;команды
						и&nbsp;запускаем стартапы. Вы&nbsp;можете создать свой и&nbsp;позвать других
						людей или присоединиться к&nbsp;любому уже действующему из&nbsp;списка ниже.
					</p>
					<Button as="a" color="primary" href="#startups">
						Список проектов
					</Button>
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
