/**
 * About.jsx — About Me page.
 * Displays legal name, headshot, a short bio, core skills and a
 * link to the PDF resume.
 */
import PageHeader from '../components/PageHeader.jsx';
import { ownerProfile, aboutParagraphs, coreSkills } from '../data/siteContent.js';

export default function About() {
  return (
    <section>
      <PageHeader eyebrow="About Me" title={ownerProfile.legalName} subtitle={ownerProfile.jobTitle} />

      <div className="about-layout">
        <img
          src={ownerProfile.headshotPath}
          alt={`Head and shoulders photo of ${ownerProfile.legalName}`}
          className="headshot"
          width="320"
          height="320"
        />

        <div className="about-text">
          {aboutParagraphs.map((paragraphText, index) => (
            <p key={index}>{paragraphText}</p>
          ))}

          <h2 className="section-title">Core skills</h2>
          <ul className="tag-list">
            {coreSkills.map((skillName) => (
              <li key={skillName} className="tag">{skillName}</li>
            ))}
          </ul>

          {/* Opens the resume PDF in a new tab */}
          <a href={ownerProfile.resumePdfPath} target="_blank" rel="noreferrer" className="button primary">
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
