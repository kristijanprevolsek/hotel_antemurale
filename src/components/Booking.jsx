import { useState } from "react";
import { useLang } from "../i18n.jsx";
import { CONTACT } from "../content.js";
import Reveal from "./Reveal.jsx";

const EMPTY = { name: "", email: "", arrival: "", departure: "", guests: "2", type: "0", message: "" };
const REQUIRED = ["name", "email", "arrival", "departure"];

export default function Booking() {
  const { t } = useLang();
  const b = t.booking;
  const f = b.form;
  const [values, setValues] = useState(EMPTY);
  const [invalid, setInvalid] = useState([]);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function update(e) {
    const { name, value } = e.target;
    setValues(v => {
      const next = { ...v, [name]: value };
      if (name === "arrival" && next.departure && next.departure <= value) next.departure = "";
      return next;
    });
    setInvalid(list => list.filter(n => n !== name));
  }

  function submit(e) {
    e.preventDefault();
    const missing = REQUIRED.filter(n => !values[n].trim());
    if (missing.length) {
      setInvalid(missing);
      return setError(f.errRequired);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setInvalid(["email"]);
      return setError(f.errEmail);
    }
    if (values.departure <= values.arrival) {
      setInvalid(["departure"]);
      return setError(f.errDates);
    }
    setError("");

    const rows = [
      [f.name, values.name],
      [f.email, values.email],
      [f.arrival, values.arrival],
      [f.departure, values.departure],
      [f.guests, values.guests],
      [f.type, t.rooms.items[values.type].title],
      [f.message, values.message]
    ];
    const body = rows.map(([label, value]) => `${label}: ${value.trim()}`).join("\n");
    const subject = `${f.subject} – ${values.arrival} / ${values.departure}`;
    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const cls = name => (invalid.includes(name) ? "invalid" : undefined);

  return (
    <section id="rezervacija" className="section">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">{b.eyebrow}</p>
          <h2>{b.title}</h2>
          <p>{b.text}</p>
          <ul className="contact-list">
            <li><span>{b.phone}</span><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><span>{b.email}</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><span>{b.reception}</span><span>{b.hours}</span></li>
          </ul>
        </Reveal>

        <Reveal as="form" className="booking-form" onSubmit={submit} noValidate>
          <div className="row">
            <label>{f.name}
              <input type="text" name="name" autoComplete="name" required
                value={values.name} onChange={update} className={cls("name")} />
            </label>
            <label>{f.email}
              <input type="email" name="email" autoComplete="email" required
                value={values.email} onChange={update} className={cls("email")} />
            </label>
          </div>
          <div className="row">
            <label>{f.arrival}
              <input type="date" name="arrival" min={today} required
                value={values.arrival} onChange={update} className={cls("arrival")} />
            </label>
            <label>{f.departure}
              <input type="date" name="departure" min={values.arrival || today} required
                value={values.departure} onChange={update} className={cls("departure")} />
            </label>
          </div>
          <div className="row">
            <label>{f.guests}
              <select name="guests" value={values.guests} onChange={update}>
                {["1", "2", "3", "4", "5+"].map(n => <option key={n}>{n}</option>)}
              </select>
            </label>
            <label>{f.type}
              <select name="type" value={values.type} onChange={update}>
                {t.rooms.items.map((room, i) => <option key={i} value={i}>{room.title}</option>)}
              </select>
            </label>
          </div>
          <label>{f.message}
            <textarea name="message" rows="4" value={values.message} onChange={update} />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" className="btn">{f.submit}</button>
          <p className="form-note">{f.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
