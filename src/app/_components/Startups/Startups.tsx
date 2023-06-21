import { Button } from '@/components'
import { startups } from '@/constants'

import styles from './Startups.module.css'

export default function Startups() {
	return (
		<section className={styles.startups}>
			<div className={styles.startups__container}>
				<h2 className={styles.startups__title}>Наши стартапы</h2>
				<div className={styles.startups__list}>
					{startups.map(({ id, title, description, donationLink }) => (
						<div className={styles.card} key={id}>
							<div>
								<h3 className={styles.card__title}>{title}</h3>
								<p className={styles.card__description}>{description}</p>
							</div>
							<div>
								<Button color="primary" as="a" href={donationLink} target="_blank">
									Задонатить
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
