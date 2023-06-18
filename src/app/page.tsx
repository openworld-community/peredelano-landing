import { Link } from '@/components'

export default function Home() {
	return (
		<>
			<h1>Hello world</h1>
			<p style={{ color: '#fff' }}>
				Lorem ipsum dolor sit,{' '}
				<Link as="a" href="#d">
					amet
				</Link>{' '}
				consectetur adipisicing elit. Fugit sit possimus tempora? Quidem , facere maiores,
				provident debitis delectus optio voluptatibus laboriosam neque expedita voluptates
				incidunt repellat, quae molestiae assumenda?
			</p>
		</>
	)
}
