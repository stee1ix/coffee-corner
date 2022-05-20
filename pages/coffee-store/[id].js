import Link from 'next/link';
import { useRouter } from 'next/router';

function CoffeeStore() {
	const router = useRouter();

	console.log(router.query.id);

	return (
		<div>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</div>
	);
}

export default CoffeeStore;
