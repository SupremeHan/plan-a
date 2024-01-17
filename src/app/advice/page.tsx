import './AdvicePage.scss';

import heroBackground from 'public/images/hero-background.webp';
import Image from 'next/image';
import AdviceIcon2 from '../_components/icons/AdviceIcon2';
import AdviceIcon1 from '../_components/icons/AdviceIcon1';
import AdviceIcon3 from '../_components/icons/AdviceIcon3';
import { Card } from '../_components/Card';

export default function Page() {
	return (
		<div className="AdvicePage">
			<Image
				src={heroBackground}
				placeholder="blur"
				fill
				sizes="100vw"
				priority
				quality={50}
				style={{
					objectFit: 'cover',
					zIndex: -1,
					filter: 'brightness(50%)'
				}}
				alt="Background"
				className="AdvicePage__image"
			/>
			<h3 className="AdvicePage__title">Saveti</h3>
			<h5 className="AdvicePage__subTitle">Sve što biste trebali znati za uspešnu selidbu.</h5>

			<div className="AdvicePage__content">
				<Card
					title={'Planiranje'}
					desc={`Napravite detaljan inventar: Pregledajte sve svoje stvari i napravite popis inventara kako biste znali šta tačno treba da se seli. Obezbedite kontakt s firmom za selidbe kako biste se usaglasili oko svih detalja. Informišite ih o posebnim predmetima koje treba preseliti i postavite pitanja o njihovom postupku kako biste bili sigurni da su svi detalji pokriveni.`}
					icon={<AdviceIcon1 />}
					link=""
				/>
				<Card
					title={'Priprema'}
					desc={`Priprema je ključna za sigurnu selidbu. Pre selidbe, očistite i organizujte svoje stvari, izbacujući sve što vam više nije potrebno.`}
					icon={<AdviceIcon2 />}
					link=""
				/>
				<Card
					title={'Organizacija za dan selidbe'}
					desc={`Organizacija na dan selidbe je ključna za glatku tranziciju. Osigurajte da su putevi slobodni kako biste olakšali transport kutija i nameštaja.`}
					icon={<AdviceIcon3 />}
					link=""
				/>
			</div>
		</div>
	);
}
