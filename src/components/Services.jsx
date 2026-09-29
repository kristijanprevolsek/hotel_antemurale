import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Services() {
  const { t } = useLang();
  const s = t.services;
  return (
    <section id="usluge" className="section section-dark">
      <div className="container">
        <SectionHead eyebrow={s.eyebrow} title={s.title} />
        <div className="services">
          {s.items.map(item => (
            <Reveal className="service" key={item.icon}>
              <span className="icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
