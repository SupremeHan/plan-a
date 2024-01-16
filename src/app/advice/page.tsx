import './AdvicePage.scss';

import heroBackground from 'public/images/hero-background.webp';
import Image from 'next/image';
import { Card } from '../_components/Card';
import { adviceItems } from '../_utils/content/adviceItems';

export default function Page() {
	return (
		<div className="AdvicePage">
			<Image
				src={heroBackground}
				placeholder="blur"
				fill
				sizes="100vw"
				style={{
					objectFit: 'cover',
					zIndex: -1
				}}
				alt="Background"
				className="AdvicePage__image"
			/>
			<h3 className="AdvicePage__title">Saveti</h3>
			<h5 className="AdvicePage__subTitle">Sve što biste trebali znati za uspešnu selidbu.</h5>

			<div className="AdvicePage__content">
				{adviceItems.map((item, key) => (
					<Card key={key} title={item.title} desc={item.description} icon={item.icon} link="" />
				))}
			</div>
		</div>
	);
}
