/**
 * Projects.jsx — highlights at least three projects, each with an image,
 * my role and the outcome.
 */
import PageHeader from '../components/PageHeader.jsx';
import { projectList } from '../data/siteContent.js';

export default function Projects() {
  return (
    <section>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        subtitle="A few projects I've built, the part I played, and what came of them."
      />

      <div className="card-grid">
        {projectList.map((project) => (
          <article key={project.id} className="card project-card">
            <img src={project.imagePath} alt={`${project.title} screenshot`} className="card-image" />
            <div className="card-body">
              <h2>{project.title}</h2>
              <ul className="tag-list small">
                {project.techStack.map((technology) => (
                  <li key={technology} className="tag">{technology}</li>
                ))}
              </ul>
              <p><strong>My role:</strong> {project.role}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
