import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

// Kad dodate fotografije u public/images/, upišite ih ovdje, npr.
// { src: "/images/jezera.jpg", alt: "Pogled na jezera", wide: true }
const PHOTOS = [
  { wide: true }, {}, {}, {}, { wide: true }, {}
];

export default function Gallery() {
  const { t } = useLang();
  const g = t.gallery;
  return (
    <section id="galerija" className="section">
      <div className="container">
        <SectionHead eyebrow={g.eyebrow} title={g.title} />
        <div className="gallery">
          {PHOTOS.map((p, i) => {
            const cls = `${p.wide ? "g-wide" : ""}`;
            return p.src ? (
              <Reveal as="img" key={i} className={cls} src={p.src} alt={p.alt} loading="lazy" />
            ) : (
              <Reveal key={i} className={`ph ph-${i + 1} ${cls}`} role="img" aria-label={`${g.photo} ${i + 1}`} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
