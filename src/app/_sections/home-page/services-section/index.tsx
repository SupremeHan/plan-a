import Image from "next/image";
import servicesBackground from "public/images/services-background.webp";
import Box from "public/images/Box.webp";
import Movers from "public/images/Movers.webp";
import Moving from "public/images/Moving.webp";
import Truck from "public/images/Truck.webp";
import Worker from "public/images/Worker.webp";

import "./ServicesSection.scss";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="ServicesSection">
      <Image
        src={servicesBackground}
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
        alt="Background"
        className="ServicesSection__background"
      />
      <h2 className="ServicesSection__title">Naše Usluge</h2>
      <p className="ServicesSection__desc">
        Pružamo širok spektar usluga selidbe kako bismo vam omogućili glatku i
        bezbrižnu tranziciju u vaš novi dom ili poslovni prostor. Bez obzira na
        obim selidbe ili udaljenost, mi smo tu da vam pomognemo.
      </p>

      <div className="ServicesSection__content">
        <div className="ServicesSection__wrapper">
          <Link href={"/services"}>
            <Image
              src={Movers}
              className="ServicesSection__img"
              alt="Selidbe"
            />
            <h5 className="ServicesSection__text">Selidbe</h5>
          </Link>
        </div>
        <div className="ServicesSection__wrapper">
          <Link href={"/services"}>
            <Image src={Truck} className="ServicesSection__img" alt="Selidbe" />
            <h5 className="ServicesSection__text">Transport</h5>
          </Link>
        </div>
        <div className="ServicesSection__wrapper">
          <Link href={"/services"}>
            <Image
              src={Worker}
              className="ServicesSection__img"
              alt="Selidbe"
            />
            <h5 className="ServicesSection__text">Demontaža</h5>
          </Link>
        </div>
        <div className="ServicesSection__wrapper">
          <Link href={"/services"}>
            <Image src={Box} className="ServicesSection__img" alt="Selidbe" />
            <h5 className="ServicesSection__text">Prodaja opreme za selidbe</h5>
          </Link>
        </div>
        <div className="ServicesSection__wrapper">
          <Link href={"/services"}>
            <Image
              src={Moving}
              className="ServicesSection__img"
              alt="Selidbe"
            />
            <h5 className="ServicesSection__text">Selidbe Beograd</h5>
          </Link>
        </div>
      </div>
    </section>
  );
}
