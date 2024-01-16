import "./AboutPage.scss";

import bckgImgLeft from "public/images/about-us.webp";
import bckgImgRight from "public/images/about-background.webp";
import Image from "next/image";

export default function Page() {
  return (
    <div className="AboutPage">
      <div className="AboutPage__content__left">
        <Image
          src={bckgImgLeft}
          alt="Background Image"
          priority
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="AboutPage__imageLeft"
        />
        <h1 className="AboutPage__title">Upoznajte Vaš Plan A za Selidbe</h1>
      </div>
      <div className="AboutPage__content__right">
        <Image
          src={bckgImgRight}
          alt="Background Image"
          priority
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="AboutPage__imageRight"
        />
        <div className="AboutPage__additional">
          <h3 className="AboutPage__additional__title">O Nama</h3>
          <p className="AboutPage__additional__text">
            Mi smo Plan A selidbe, vodeća agencija za selidbe koja pruža usluge
            preseljenja širom Beograda i ostatka zemlje sa fokusom na
            profesionalizam i kvalitet. Sa timom iskusnih i obučenih stručnjaka,
            mi smo posvećeni tome da vaše selidbe budu bez stresa i glatko se
            odvijaju, bez obzira na obim ili udaljenost. Naša misija je da vam
            pružimo visoko personalizovane selidbe koje se prilagođavaju vašim
            individualnim potrebama i zahtevima. Sa reputacijom pouzdanosti,
            efikasnosti i pažnje prema detaljima, Plan A selidbe su vaš pouzdan
            partner za sve vaše selidbene potrebe.
          </p>
          <p className="AboutPage__additional__text">
            Mi smo prisutni u industriji selidbi više od 10 godina, a Plan A je
            naše novo ime koje odražava našu posvećenost kvalitetu i
            profesionalnosti. Iza nas se nalazi dugogodišnje iskustvo u pružanju
            pouzdane usluge selidbe sa pažnjom prema detaljima. Sa novim imenom,
            nastavljamo da pružamo vrhunsku uslugu selidbe i nastojimo da svakom
            klijentu omogućimo bezbrižno preseljenje.
          </p>
        </div>
      </div>
    </div>
  );
}
