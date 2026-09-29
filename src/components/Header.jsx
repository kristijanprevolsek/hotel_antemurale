import { useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";

const LINKS = [
  ["o-nama", "about"],
  ["smjestaj", "rooms"],
  ["kuce", "houses"],
  ["usluge", "services"],
  ["galerija", "gallery"],
  ["lokacija", "location"]
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const classes = ["site-header", scrolled && "scrolled", open && "menu-open"].filter(Boolean).join(" ");

  return (
    <header className={classes} id="top">
      <div className="container nav-wrap">
        <a href="#top" className="logo" aria-label="Hotel Antemurale" onClick={close}>
          <span className="logo-mark">A</span>
          <span className="logo-text">Antemurale<small>{t.logoSub}</small></span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={t.menu}
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="main-nav" className={`main-nav${open ? " open" : ""}`}>
          {LINKS.map(([id, key]) => (
            <a key={id} href={`#${id}`} onClick={close}>{t.nav[key]}</a>
          ))}
          <a href="#rezervacija" className="btn btn-small" onClick={close}>{t.nav.book}</a>
          <div className="lang-switch" role="group" aria-label="Jezik / Language">
            {["hr", "en"].map(l => (
              <button
                key={l}
                type="button"
                className={lang === l ? "active" : ""}
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
