/**
 * PageHeader.jsx — reusable heading block used at the top of each page.
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </div>
  );
}
