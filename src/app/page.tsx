import Link from 'next/link'

import { Button } from '@/components'

export default function Home() {
	return (
		<>
			<h1>Hello world</h1>
			<Button as={Link} variant="default" href="/ebala">
				TEST 1
			</Button>
			<Button variant="primary"> TEST 2 </Button>
			<Button variant="secondary"> TEST 3 </Button>
		</>
	)
}
