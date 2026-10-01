/**
 * Home.jsx — landing page.
 * Shows a welcome message, mission statement and buttons to other pages.
 * If the visitor was redirected here from the Contact form, a thank-you
 * banner displays the name they submitted (passed via router state).
 */
import { Link, useLocation } from 'react-router-dom';
import { homeContent, ownerProfile } from '../data/siteContent.js';

export default function Home() {
  const location = useLocation();
  // Set by Contact.jsx after a successful form submission.
  const submittedContact = location.state?.submittedContact;

  return (
    <section className="home">
      {submittedContact && (
        <div className="notice" role="status">
          Thanks, {submittedContact.firstName}! Your message was received. I&apos;ll reply to{' '}
          <strong>{submittedContact.emailAddress}</strong> soon.
        </div>
      )}

      <div className="hero">
        <p className="eyebrow">{ownerProfile.jobTitle} · {ownerProfile.location}</p>
        <h1 className="hero-title">{homeContent.welcomeHeading}</h1>
        <p className="hero-intro">{homeContent.welcomeIntro}</p>
        <div className="button-row">
          <Link to="/about" className="button primary">About Me</Link>
          <Link to="/projects" className="button secondary">View My Projects</Link>
        </div>
      </div>

      <blockquote className="mission">
        <span className="mission-label">Mission</span>
        <p>{homeContent.missionStatement}</p>
      </blockquote>

      {/* Quick links into the rest of the site */}
      <div className="quick-links">
        <Link to="/education" className="quick-link"><span>01</span> Education</Link>
        <Link to="/services" className="quick-link"><span>02</span> Services</Link>
        <Link to="/contact" className="quick-link"><span>03</span> Contact Me</Link>
      </div>
    </section>
  );
}
