import Image from 'next/image';
import forYou from 'public/images/for-you.webp';

import './ForYouSection.scss';

export function ForYouSection() {
	return (
		<section className="ForYouSection">
			<Image
				src={forYou}
				placeholder="blur"
				fill
				quality={100}
				sizes="100vw"
				style={{
					objectFit: 'cover',
					zIndex: -1
				}}
				alt="Background"
			/>
			<div className="ForYouSection__content">
				<h3 className="ForYouSection__title">Tu smo za vas!</h3>
				<p className="ForYouSection__description">
					Plan A je vaša pouzdana opcija za bezbrižnu selidbu. Naš tim iskusnih profesionalaca posvećen je tome da vam pruži brzu i efikasnu
					uslugu selidbe. Bez obzira na vaš budžet, mi vam pružamo konkurentne cene i fleksibilne opcije koje se prilagođavaju vašim
					potrebama.
				</p>
				<button role="button" className="ForYouSection__btn">
					<a href={`tel:+381613931885`}>Pozovite nas</a>
				</button>
			</div>
		</section>
	);
}
