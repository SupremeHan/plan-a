'use client';

import Image from 'next/image';
import './ContactPage.scss';

import contactBackg from 'public/images/contact-background.webp';
import image1 from 'public/images/services-8.webp';
import image2 from 'public/images/services-2.webp';
import image3 from 'public/images/Movers.webp';

export default function Page() {
	return (
		<div className="ContactPage">
			<Image
				src={contactBackg}
				alt="Background Image"
				placeholder="blur"
				priority
				quality={50}
				fill
				style={{
					objectFit: 'cover',
					zIndex: -1,
					filter: 'blur(3px)'
				}}
			/>
			<div>
				<h1 className="ContactPage__title">Kontakt</h1>
				<div className="ContactPage__content">
					<div className="ContactPage__content__container">
						<Image
							src={image1}
							alt="Background Image"
							placeholder="blur"
							quality={100}
							style={{
								objectFit: 'cover'
							}}
							className="ContactPage__content__container__image"
						/>

						<div className="ContactPage__content__container__title">
							<h3>Adresa</h3>
						</div>
						<div className="ContactPage__content__container__text">
							<p>Kursulina 7,</p>
							<p>11000 Beograd</p>
						</div>
					</div>

					<div className="ContactPage__content__container">
						<Image
							src={image2}
							alt="Background Image"
							placeholder="blur"
							quality={100}
							style={{
								objectFit: 'cover'
							}}
							className="ContactPage__content__container__image"
						/>

						<div className="ContactPage__content__container__title">
							<h3>Kontakt</h3>
						</div>
						<div className="ContactPage__content__container__text">
							<p>
								<a href={`tel:+381613931885`}>061/3931885</a>
							</p>
							<p>
								<a
									href="#"
									onClick={(e) => {
										window.location.href = 'mailto:office@planaselidbe.com';
										e.preventDefault();
									}}>
									office@planaselidbe.com
								</a>
							</p>
						</div>
					</div>

					<div className="ContactPage__content__container">
						<Image
							src={image3}
							alt="Background Image"
							placeholder="blur"
							quality={100}
							style={{
								objectFit: 'cover'
							}}
							className="ContactPage__content__container__image"
						/>

						<div className="ContactPage__content__container__title">
							<h3>Radno Vreme</h3>
						</div>
						<div className="ContactPage__content__container__text">
							<p>24h uz Vas.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <h1>Kontaktirajte nas</h1>
        <div className="ContactPage__content__wrapper">
          <div className="ContactPage__content__text">
            <h3>Adresa</h3>
            <p>Kursulina 7,</p>
            <p>11000 Beograd</p>
          </div>
          <div className="ContactPage__content__text">
            <h3>Kontakt</h3>
            <p>061/3931885</p>
            <p>office@planaselidbe.com</p>
          </div>
          <div className="ContactPage__content__text">
            <h3>Radno Vreme</h3>
            <p>24h uz Vas.</p>
          </div>
        </div> */
}
