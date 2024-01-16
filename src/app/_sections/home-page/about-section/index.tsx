import { Card } from "@/app/_components/Card";
import { cards } from "../../../_utils/content/cards";
import "./AboutSection.scss";

export function AboutSection() {
  return (
    <section className="Home__aboutUs">
      <h2 className="Home__aboutUs__title">Kako funkcionisemo?</h2>
      <div
        className="Home__aboutUs__wrapper"
        style={{ display: "flex", justifyContent: "center", gap: "30px" }}
      >
        {cards.map((card) => (
          <Card key={card.number} {...card} link={`tel:+381613931885`} />
        ))}
      </div>
    </section>
  );
}
