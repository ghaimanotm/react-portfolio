/**
 * NotFound.jsx — shown for any unknown URL.
 */
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="button primary">Back to Home</Link>
    </section>
  );
}
