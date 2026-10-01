/**
 * Footer.jsx — site footer with copyright and social links.
 */
import { ownerProfile } from '../data/siteContent.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {currentYear} {ownerProfile.legalName}. Built with React.
      </p>
      <p className="footer-links">
        <a href={ownerProfile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        <a href={ownerProfile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${ownerProfile.email}`}>Email</a>
      </p>
    </footer>
  );
}
