'use client';

import Image from 'next/image';
import formBckg from 'public/images/contact-form-bckg.webp';
import { ChangeEvent, useState } from 'react';

import './ContactFormSection.scss';

interface ContactFormModel {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
}

const DEFAULT_FORM: ContactFormModel = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	message: ''
};

export function ContactFormSection() {
	const [contactForm, setContactForm] = useState<ContactFormModel>(DEFAULT_FORM);

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputKey: keyof ContactFormModel) => {
		setContactForm((prevVal) => ({
			...prevVal,
			[inputKey]: e.target.value
		}));
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO change this later to fit the other mail office@planaseldbe.com
		fetch('https://formsubmit.co/ajax/zivojinovicn13@gmail.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(contactForm)
		})
			.then((response) => response.json())
			.then((data) => {
				alert('Mejl uspešno poslat!');
				setContactForm(DEFAULT_FORM);
			})
			.catch((error) => console.log(error));
	};

	return (
		<section className="ContactForm">
			<Image
				src={formBckg}
				placeholder="blur"
				fill
				sizes="100vw"
				quality={100}
				style={{
					objectFit: 'cover',
					zIndex: -1
				}}
				alt="Background"
			/>
			<div className="ContactForm__text">
				<h3>Besplatna procena</h3>
				<p>
					Kontaktirajte nas za besplatnu procenu naših usluga. Takodje možete nam postaviti pitanje ako imate nedoumica. Naš tim će vam
					odgovoriti u što kraćem roku.
				</p>
			</div>
			<div className="ContactForm__wrapper">
				<form className="ContactForm__form" onSubmit={onSubmit}>
					<div className="ContactForm__items">
						<label>
							<span>Ime</span>
							<input type="text" name="firstName" onChange={(e) => onChange(e, 'firstName')} value={contactForm.firstName} />
						</label>

						<label>
							<span>Prezime</span>
							<input type="text" name="lastName" onChange={(e) => onChange(e, 'lastName')} value={contactForm.lastName} />
						</label>

						<label>
							<span>Email*</span>
							<input type="email" name="email" onChange={(e) => onChange(e, 'email')} value={contactForm.email} required />
						</label>

						<label>
							<span>Broj telefona * preporučljivo zbog lakše komunikacije</span>
							<input type="phone" name="phone" onChange={(e) => onChange(e, 'phone')} value={contactForm.phone} />
						</label>
					</div>

					<label className="ContactForm__message">
						<span>Poruka</span>
						<textarea onChange={(e) => onChange(e, 'message')} value={contactForm.message} name="message" />
					</label>
					<button type="submit" className="ContactForm__btn">
						Pošalji
					</button>
				</form>
			</div>
		</section>
	);
}
