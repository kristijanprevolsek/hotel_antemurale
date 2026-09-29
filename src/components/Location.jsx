import { useLang } from "../i18n.jsx";
import { CONTACT, MAP_QUERY } from "../content.js";
import Reveal from "./Reveal.jsx";

const q = encodeURIComponent(MAP_QUERY);

export default function Location() {
  const { lang, t } = useLang();
  const l = t.location;
  const mapSrc = `https://maps.google.com/maps?q=${q}&z=15&hl=${lang}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <section id="lokacija" className="section section-alt">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">{l.eyebrow}</p>
          <h2>{l.title}</h2>
          <p>{l.text}</p>
          <address className="address">
            <strong>Hotel Antemurale</strong><br />
            {CONTACT.address}<br />
            {CONTACT.place}
          </address>
          <a className="btn" href={directionsHref} target="_blank" rel="noopener noreferrer">
            {l.directions}
          </a>
          <ul className="distances">
            {l.distances.map(d => (
              <li key={d.label}><span>{d.label}</span><strong>{d.value}</strong></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="map">
          <iframe
            title={l.mapTitle}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
