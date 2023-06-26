import { Button } from '@/components'

import styles from './Startups.module.css'

const startups = [
	{
		id: 1,
		title: 'Peredelano Data',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, reprehenderit. Corporis voluptatem officiis dignissimos pariatur tempora voluptatum sed quia provident alias, vitae incidunt nulla, deserunt cumque, ratione est nihil facere?',
		donationLink: 'http://ebala.com/',
	},
	{
		id: 2,
		title: 'Peredelano Data',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium esse minus eaque tempora laborum, repudiandae illum numquam repellat voluptatum vitae aliquid facere adipisci dolores architecto soluta nemo veniam quia blanditiis?',
		donationLink: 'http://ebala.com/',
	},
	{
		id: 3,
		title: 'Peredelano Data',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio repellat, qui, exercitationem maiores, vitae non at illum eius nesciunt nihil molestiae dolore. Eaque dolor vero recusandae ab dolores ipsa itaque!',
		donationLink: 'http://ebala.com/',
	},
	{
		id: 4,
		title: 'Peredelano Data',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident ipsa laboriosam est, saepe voluptatibus suscipit! Amet aut facilis dolor in rem dolorem illo laboriosam, natus doloremque nostrum sint excepturi.',
		donationLink: 'http://ebala.com/',
	},
	{
		id: 5,
		title: 'Peredelano Data',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae a ex ullam cumque, dignissimos, voluptatum perferendis corporis quibusdam consequuntur eius dolorem repudiandae quisquam commodi. Eligendi ducimus nesciunt magni sapiente iusto.',
		donationLink: 'http://ebala.com/',
	},
	{
		id: 6,
		title: 'Peredelano Data',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla aut accusantium modi totam eveniet. Est nulla sint nemo ad aperiam, ullam aut ducimus, esse commodi nihil sed, officia distinctio!',
		donationLink: 'http://ebala.com/',
	},
]

export default function Startups() {
	return (
		<section className={styles.startups} id="startups">
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
