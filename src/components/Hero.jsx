import { useLang } from "../i18n.jsx";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className="lead">{t.hero.lead}</p>
        <div className="hero-actions">
          <a href="#rezervacija" className="btn">{t.hero.cta1}</a>
          <a href="#smjestaj" className="btn btn-ghost">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}
