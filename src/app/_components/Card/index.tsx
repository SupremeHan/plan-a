import { Button } from "../Button";
import "./Card.scss";

interface CardProps {
  title: string;
  desc: string;
  link: string;
  number?: number;
  icon?: JSX.Element;
}

export function Card({ number, title, desc, link, icon }: CardProps) {
  return (
    <div className="Card">
      {icon ? <div className="Card__icon">{icon}</div> : null}
      {number ? <div className="Card__number">{number}</div> : null}
      <h3 className="Card__title">{title}</h3>
      <p className="Card__desc">{desc}</p>
      {link ? (
        <Button size="medium" className="Card__btn">
          <a href={link}>Kontaktirajte nas</a>
        </Button>
      ) : null}
    </div>
  );
}
