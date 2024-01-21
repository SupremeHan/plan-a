import Link from 'next/link';

export default function NotFound() {
	return (
		<div
			style={{
				width: '100%',
				height: 'calc(100dvh - 100px)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}>
			<h2
				style={{
					marginBottom: '20px'
				}}>
				Stranica nije pronadjena!
			</h2>
			<Link
				href={'/'}
				style={{
					textDecoration: 'underline',
					cursor: 'pointer'
				}}>
				Vrati se na početnu stranu!
			</Link>
		</div>
	);
}
