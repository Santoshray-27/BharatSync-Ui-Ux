export default function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="text-center mb-10">
      {eyebrow && <p className="chip mb-3">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  )
}
