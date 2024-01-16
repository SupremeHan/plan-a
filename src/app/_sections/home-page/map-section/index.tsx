import "./MapSection.scss";

export function MapSection() {
  return (
    <div className="MapSection">
      <h1 className="MapSection__title">Gde se nalazimo</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.23203454114082!2d20.472410449081796!3d44.80012285720754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707529cf09d1%3A0x31cc9ab8c1693011!2z0JrRg9GA0YHRg9C70LjQvdCwIDc!5e0!3m2!1ssr!2srs!4v1704199077249!5m2!1ssr!2srs"
        width={"100%"}
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
