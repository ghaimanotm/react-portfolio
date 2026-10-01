/**
 * Logo.jsx — custom hexagon logo with the owner's initials.
 * Drawn as inline SVG so it scales crisply and inherits theme colours.
 */
import { ownerProfile } from '../data/siteContent.js';

export default function Logo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={`${ownerProfile.initials} logo`}
      className="site-logo"
    >
      {/* Outer filled hexagon */}
      <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="var(--color-ink)" />
      {/* Inner accent outline for depth */}
      <polygon
        points="50,14 83,32 83,68 50,86 17,68 17,32"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="3"
      />
      {/* Initials centred in the hexagon */}
      <text
        x="50"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="700"
        fontSize="32"
        fill="var(--color-paper)"
      >
        {ownerProfile.initials}
      </text>
    </svg>
  );
}
