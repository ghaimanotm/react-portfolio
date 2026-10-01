/**
 * Services.jsx — short list of services offered, each with an illustration.
 */
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { serviceOfferings } from '../data/siteContent.js';

export default function Services() {
  return (
    <section>
      <PageHeader
        eyebrow="Services"
        title="How I can help"
        subtitle="Freelance and contract work I'm available for."
      />

      <div className="card-grid services">
        {serviceOfferings.map((service) => (
          <article key={service.id} className="card service-card">
            <img src={service.imagePath} alt="" className="service-icon" aria-hidden="true" />
            <h2>{service.name}</h2>
            <p>{service.summary}</p>
          </article>
        ))}
      </div>

      <div className="cta-panel">
        <p>Have a project in mind?</p>
        <Link to="/contact" className="button primary">Get in touch</Link>
      </div>
    </section>
  );
}
