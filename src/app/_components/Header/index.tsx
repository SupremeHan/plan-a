'use client';

import Link from 'next/link';
import './header.scss';
import Image from 'next/image';
import logo from 'public/images/logo.webp';
import { useCallback, useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

export function Header() {
	const [showNav, setShowNav] = useState<boolean>(false);

	const handleShowNavbar = useCallback(() => {
		setShowNav((prevShowNav) => !prevShowNav);
	}, []);

	// TODO: showNav makes the whole ul to rerender find a better solution

	return (
		<nav className="Navbar">
			<div className="Navbar__container">
				<div className="Navbar__container__logo">
					<Link href={'/'}>
						<Image src={logo} alt="logo" width={80} />
					</Link>
				</div>
				<div className="Navbar__container__menu__icon">
					<button role="button" onClick={handleShowNavbar}>
						{showNav ? <MdClose /> : <MdMenu />}
					</button>
				</div>
				<div className={`Navbar__container__elements ${showNav ? 'Navbar__container__elements--active' : ''}`}>
					<ul>
						<li>
							<Link href={'/'} onClick={handleShowNavbar}>
								Pocetna
							</Link>
						</li>
						<li>
							<Link href={'/services'} onClick={handleShowNavbar}>
								Usluge
							</Link>
						</li>
						<li>
							<Link href={'/prices'} onClick={handleShowNavbar}>
								Cenovnik
							</Link>
						</li>
						<li>
							<Link href={'/advice'} onClick={handleShowNavbar}>
								Saveti
							</Link>
						</li>
						<li>
							<Link href={'/about'} onClick={handleShowNavbar}>
								O Nama
							</Link>
						</li>
						<li>
							<Link href={'/contact'} onClick={handleShowNavbar}>
								Kontakt
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
