import Link from 'next/link'

import { Button } from '@/components'

export default function Home() {
	return (
		<>
			<h1>Hello world</h1>
			<Button as={Link} variant="default" href="/ebala">
				Click me
			</Button>
		</>
	)
}
