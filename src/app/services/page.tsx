import Image from "next/image";
import { ServicesCard } from "../_components/ServicesCard";
import "./ServicesPage.scss";

import servicesImg1 from "public/images/services-1.webp";
import servicesImg2 from "public/images/services-2.webp";
import servicesImg3 from "public/images/services-3.webp";
import servicesImg4 from "public/images/services-4.webp";
import servicesImg5 from "public/images/services-5.webp";
import servicesImg6 from "public/images/services-6.webp";
import servicesImg7 from "public/images/services-7.webp";
import servicesImg8 from "public/images/services-8.webp";
import servicesBackground from "public/images/services-background.webp";

export default function Page() {
  return (
    <div className="ServicesPage">
      <Image
        src={servicesBackground}
        alt="Background"
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="ServicesPage__content">
        <div className="ServicesPage__section">
          <ServicesCard
            src={servicesImg1}
            width={448}
            height={562}
            title="Selidbe Beograd"
            text="Selidbe Beograd su nam specijalnost i naša najtraženija usluga. Vršimo kompletne usluge selidbi na celoj teritoriji Beograda, kao i na teritoriji cele Srbije i u inostranstvu. Imamo jako veliko iskustvo u selidbama svih tipova, bez obzira kakav tip tereta se prenosi. Kao grad velikih mogućnosti Beograd je mesto gde se radi najviše selidbi u Srbiji. Selidba u Beogradu nikad nije jednostavna, bez obzira o kolikoj selidbi se radi. U velikom gradu kao što je Beograd selidbe mogu biti stresne."
          />
          <ServicesCard
            src={servicesImg3}
            width={448}
            height={521}
            title="Demontaza i montaza namestaja"
            text="Ako vam je potrebna pomoć u prevozu i sklapanju nameštaja, naša ekipa stručnjaka je tu da vam pomogne. Bez obzira na veličinu i vrstu nameštaja, mi ćemo ga pažljivo rasklopiti, transportovati i ponovno sastaviti na odredištu, čime vam olakšavamo proces selidbe."
          />
          <ServicesCard
            src={servicesImg5}
            width={448}
            height={435}
            title="Transport klavira"
            text="Klavir je dragoceni muzički instrument koji zahteva poseban tretman prilikom selidbe. Naša usluga transporta klavira obezbeđuje siguran i profesionalan prenos ovog osetljivog instrumenta. Naši stručnjaci će se pobrinuti da vaš klavir stigne na odredište bez ikakvih oštećenja."
          />
          <ServicesCard
            src={servicesImg7}
            width={448}
            height={597}
            title="Transport luksuznih predmeta"
            text="Bez obzira na udaljenost, naša usluga medjugradskih selidbi vam omogućava da se selite bez stresa i nepotrebnih briga. Naša iskusna ekipa će organizovati sve detalje vaše selidbe, pružajući vam podršku od početka do kraja. Bez obzira da li se selite u drugi grad unutar zemlje ili čak u inostranstvo, možete se osloniti na nas da obezbedimo siguran i efikasan prenos vaših stvari."
          />
        </div>
        <div className="ServicesPage__section">
          <ServicesCard
            src={servicesImg2}
            width={448}
            height={459}
            title="Selidbe"
            text="Bez obzira da li se selite unutar istog grada ili na udaljenu lokaciju, naš tim stručnjaka za selidbe će vam pružiti kompletnu podršku. Pakujemo, utovaramo, transportujemo i istovaramo vaše stvari sa pažnjom i brinemo se da sve stigne na odredište bezbedno i na vreme."
          />
          <ServicesCard
            src={servicesImg4}
            width={448}
            height={554}
            title="Medjugradske selidbe"
            text="Bez obzira na udaljenost, naša usluga medjugradskih selidbi vam omogućava da se selite bez stresa i nepotrebnih briga. Naša iskusna ekipa će organizovati sve detalje vaše selidbe, pružajući vam podršku od početka do kraja. Bez obzira da li se selite u drugi grad unutar zemlje ili čak u inostranstvo, možete se osloniti na nas da obezbedimo siguran i efikasan prenos vaših stvari."
          />
          <ServicesCard
            src={servicesImg6}
            width={448}
            height={572}
            title="Prenos sefova i profesionalne opreme"
            text="Nudimo profesionalne usluge selidbe sefova, bankarske opreme, automata i sličnih delova. Naš tim stručnjaka specijalizovan je za bezbedno i efikasno premeštanje osetljive bankarske opreme i dragocenih predmeta. Bez obzira na veličinu ili težinu, možete se osloniti na nas da pružimo siguran transport i montažu na novoj lokaciji."
          />
          <ServicesCard
            src={servicesImg8}
            width={448}
            height={460}
            title="Usluge skladišta"
            text="Naša skladišta su moderno opremljena i osigurana kako bi vaša roba bila sigurna i zaštićena. Imamo različite vrste skladišnih prostora koji se mogu prilagoditi vašim specifičnim potrebama. Bez obzira na veličinu, oblik ili osjetljivost vaše robe, možemo vam pružiti odgovarajuće rješenje."
          />
        </div>
      </div>
    </div>
  );
}
