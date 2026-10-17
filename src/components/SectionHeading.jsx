export default function SectionHeading({ eyebrow, title, copy, centered = false, light = false }) {
  return (
    <div className={`section-heading${centered ? ' is-centered' : ''}${light ? ' is-light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
