import Reveal from "./Reveal.jsx";

export default function SectionHead({ eyebrow, title, lead }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </Reveal>
  );
}
