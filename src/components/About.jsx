import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="o-nama" className="section">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">{a.eyebrow}</p>
          <h2>{a.title}</h2>
          {a.p.map((text, i) => <p key={i}>{text}</p>)}
        </Reveal>
        <ul className="highlights">
          {a.highlights.map(h => (
            <Reveal as="li" key={h.title}>
              <strong>{h.title}</strong>
              <span>{h.text}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
