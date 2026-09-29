import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Houses() {
  const { t } = useLang();
  const h = t.houses;
  return (
    <section id="kuce" className="section">
      <div className="container">
        <SectionHead eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
        <ol className="houses">
          {h.items.map(house => (
            <Reveal as="li" key={house.num} className={`house${house.num === "R" ? " house-reception" : ""}`}>
              <span className="house-num">{house.num}</span>
              <div>
                <h3>{house.title}</h3>
                <p>{house.text}</p>
                <p className="meta">{h.addr}: {house.address}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
