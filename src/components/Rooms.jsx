import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Rooms() {
  const { t } = useLang();
  const r = t.rooms;
  return (
    <section id="smjestaj" className="section section-alt">
      <div className="container">
        <SectionHead eyebrow={r.eyebrow} title={r.title} lead={r.lead} />

        <div className="cards">
          {r.items.map((room, i) => (
            <Reveal as="article" className="card" key={i}>
              {/* Zamijenite s <img className="card-img" src="/images/soba-1.jpg" alt={room.title} /> */}
              <div className={`card-img ph ph-${i + 1}`} role="img" aria-label={room.title}></div>
              <div className="card-body">
                <h3>{room.title}</h3>
                <p className="meta">{room.meta}</p>
                <p>{room.text}</p>
                <p className="price">
                  {r.from} <strong>€ {room.price}</strong> / {r.night}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="amenities">
          {r.amenities.map(a => <li key={a}>{a}</li>)}
        </ul>
      </div>
    </section>
  );
}
