import Image from "next/image";
import heroBackground from "public/images/hero-background.webp";

import "./LandingSection.scss";
import { Button } from "@/app/_components/Button";

export function LandingSection() {
  return (
    <section className="LandingSection">
      <Image
        src={heroBackground}
        placeholder="blur"
        fill
        sizes="100vw"
        quality={100}
        priority
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
        alt="Background"
        className="LandingSection__image"
      />
      <div className="LandingSection__container">
        <h1 className="LandingSection__title">
          Da li ste spremni za nov pocetak?
        </h1>

        <h5 className="LandingSection__subTitle">Preselite se bez stresa</h5>
        <p className="LandingSection__text">
          Dobijanje besplatne ponude za selidbu je prvi korak ka vašem sledećem
          potezu.
        </p>
        <p className="LandingSection__text">
          Već danas možete dobiti cene popunjavanjem našeg jednostavnog online
          formulara!
        </p>
        <Button size="large" className="LandingSection__btn">
          <a href={`tel:+381613931885`}>Pozovite za besplatnu procenu!</a>
        </Button>
      </div>
    </section>
  );
}
