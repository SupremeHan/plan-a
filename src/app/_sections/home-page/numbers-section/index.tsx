import Image from "next/image";

import togetherBackground from "public/images/together.webp";
import maxi from "public/images/maxi.webp";
import erste from "public/images/erste.webp";
import ncr from "public/images/ncr.webp";
import continental from "public/images/continental.webp";

import "./NumbersSection.scss";

export function NumbersSection() {
  return (
    <section className="NumbersSection">
      <Image
        src={togetherBackground}
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.25,
        }}
        alt="Background"
        className="NumbersSection__background"
      />
      <div className="NumbersSection__wrapper">
        <h2 className="NumbersSection__title">Više od brojki:</h2>
        <div className="NumbersSection__content">
          <div>
            <h3>Zadovoljnih klijenata</h3>
            <p>1700+</p>
          </div>
          <div>
            <h3>Gradova u Srbiji</h3>
            <p>30+</p>
          </div>
          <div>
            <h3>Zemlje u inostranstvu</h3>
            <p>7+</p>
          </div>
          <div>
            <h3>Godine iskustva</h3>
            <p>10+</p>
          </div>
        </div>

        <div className="NumbersSection__sponsors">
          <Image
            src={continental}
            className="NumbersSection__sponsors__img"
            alt="Continental"
            title="Continental"
          />
          <Image
            src={ncr}
            className="NumbersSection__sponsors__img"
            alt="NCR"
            title="NCR"
          />
          <Image
            src={maxi}
            className="NumbersSection__sponsors__img"
            alt="Maxi"
            title="Maxi"
          />
          <Image
            src={erste}
            className="NumbersSection__sponsors__img"
            alt="Erste"
            title="Erste"
          />
        </div>
      </div>
    </section>
  );
}
