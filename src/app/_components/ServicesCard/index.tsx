import Image from 'next/image';
import './ServicesCard.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Button } from '../Button';

interface ServicesCardModel {
	src: string | StaticImport;
	width: number;
	height: number;
	title: string;
	text: string;
}

export function ServicesCard({ src, width, height, title, text }: ServicesCardModel) {
	return (
		<div
			style={{
				// width: `${width}px`,
				height: `${height}px`
			}}
			className="ServicesCard">
			<Image
				src={src}
				style={{
					objectFit: 'cover',
					width: '100%',
					height: '100%'
				}}
				alt={title}
				className="ServicesCard__image"
			/>
			<h3 className="ServicesCard__title">{title}</h3>
			<p className="ServicesCard__text">{text}</p>

			<Button size="medium" className="ServicesCard__btn">
				<a href={`tel:+381613931885`}>Kontaktirajte nas</a>
			</Button>
		</div>
	);
}
