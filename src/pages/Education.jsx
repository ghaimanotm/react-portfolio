/**
 * Education.jsx — lists educational and professional qualifications
 * as a timeline with dates and credential obtained.
 */
import PageHeader from '../components/PageHeader.jsx';
import { educationHistory } from '../data/siteContent.js';

export default function Education() {
  return (
    <section>
      <PageHeader
        eyebrow="Education"
        title="Qualifications"
        subtitle="My academic and professional credentials, most recent first."
      />

      <ol className="timeline">
        {educationHistory.map((educationEntry) => (
          <li key={educationEntry.credential} className="timeline-item">
            <p className="timeline-dates">
              {educationEntry.startYear} – {educationEntry.endYear}
            </p>
            <div className="timeline-content">
              <h2>{educationEntry.credential}</h2>
              <p className="institution">{educationEntry.institution}</p>
              <p>{educationEntry.details}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
