/**
 * Navbar.jsx — main site navigation.
 * Shows the custom logo plus links to all six pages. On small screens the
 * links collapse behind a menu toggle button.
 */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { ownerProfile } from '../data/siteContent.js';

// Each entry maps a route path to its visible label.
const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/education', label: 'Education' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact Me' },
];

export default function Navbar() {
  // Tracks whether the mobile menu is expanded.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <Logo />
          <span className="navbar-name">{ownerProfile.legalName}</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav id="primary-navigation" className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
          {navigationLinks.map((navItem) => (
            <NavLink
              key={navItem.path}
              to={navItem.path}
              end={navItem.path === '/'}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {navItem.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
