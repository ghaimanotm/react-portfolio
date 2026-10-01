/**
 * App.jsx — top-level layout.
 * Renders the shared Navbar and Footer around a routed page area.
 */
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<p>Portfolio coming soon.</p>} />
    </Routes>
  );
}
