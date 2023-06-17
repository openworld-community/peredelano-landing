import { Button } from '@/components'

export default function Home() {
	return (
		<>
			<h1>Hello world</h1>
			<Button variant="outlined">TEST 1</Button>
			<Button variant="contained" color="default">
				{' '}
				TEST 2{' '}
			</Button>
			<Button variant="contained" color="primary">
				{' '}
				TEST 2{' '}
			</Button>
			<Button variant="contained" color="secondary">
				{' '}
				TEST 3{' '}
			</Button>
		</>
	)
}
