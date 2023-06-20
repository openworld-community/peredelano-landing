import { Button } from '@/components'

import styles from './Hero.module.css'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__content}>
					<h1 className={styles.hero__title}>
						Добро пожаловать в сообщество Peredelano Startups!
					</h1>
					<p className={styles.hero__description}>
						Тут мы объединяемся, чтобы вместе делать проекты. Рынок и мир сейчас
						сложные, с работой туго, со смыслами тоже&nbsp;&mdash; поэтому мы решили
						делать и то и другое сами.
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
