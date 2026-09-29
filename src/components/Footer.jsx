import { useLang } from "../i18n.jsx";
import { CONTACT } from "../content.js";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="logo-text footer-logo">Antemurale<small>{t.logoSub}</small></p>
          <p>{f.tag}</p>
        </div>
        <div>
          <h4>{f.contact}</h4>
          <p>{CONTACT.address}<br />{CONTACT.place}</p>
          <p>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a><br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
        <div>
          <h4>{f.follow}</h4>
          <p>
            <a href={CONTACT.instagram} rel="noopener">Instagram</a><br />
            <a href={CONTACT.facebook} rel="noopener">Facebook</a>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Hotel Antemurale. {f.rights}</p>
      </div>
    </footer>
  );
}
