import "./AdvicePage.scss";

import AdviceIcon2 from "../_components/icons/AdviceIcon2";
import AdviceIcon1 from "../_components/icons/AdviceIcon1";
import AdviceIcon3 from "../_components/icons/AdviceIcon3";

import heroBackground from "public/images/hero-background.webp";
import Image from "next/image";
import { Card } from "../_components/Card";

export const adviceItems = [
  {
    title: "Planiranje",
    description:
      "Napravite detaljan inventar: Pregledajte sve svoje stvari i napravite popis inventara kako biste znali šta tačno treba da se seli. Obezbedite kontakt s firmom za selidbe kako biste se usaglasili oko svih detalja. Informišite ih o posebnim predmetima koje treba preseliti i postavite pitanja o njihovom postupku kako biste bili sigurni da su svi detalji pokriveni.",
    icon: <AdviceIcon1 />,
  },
  {
    title: "Priprema",
    description:
      "Priprema je ključna za sigurnu selidbu. Pre selidbe, očistite i organizujte svoje stvari, izbacujući sve što vam više nije potrebno.",
    icon: <AdviceIcon2 />,
  },
  {
    title: "Organizacija za dan selidbe",
    description:
      "Organizacija na dan selidbe je ključna za glatku tranziciju. Osigurajte da su putevi slobodni kako biste olakšali transport kutija i nameštaja.",
    icon: <AdviceIcon3 />,
  },
];

export default function Page() {
  return (
    <div className="AdvicePage">
      <Image
        src={heroBackground}
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
        alt="Background"
        className="AdvicePage__image"
      />
      <h3 className="AdvicePage__title">Saveti</h3>
      <h5 className="AdvicePage__subTitle">
        Sve što biste trebali znati za uspešnu selidbu.
      </h5>

      <div className="AdvicePage__content">
        {adviceItems.map((item, key) => (
          <Card
            key={key}
            title={item.title}
            desc={item.description}
            icon={item.icon}
            link=""
          />
        ))}
      </div>
    </div>
  );
}
