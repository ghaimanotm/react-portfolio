/**
 * Logo.jsx — custom logo image shown in the navigation bar.
 * The image file is stored at public/images/H_M_Portfolio.jpeg.
 */
import { ownerProfile } from '../data/siteContent.js';

export default function Logo({ size = 44 }) {
  return (
    <img
      src="/images/H_M_Portfolio.jpeg"
      alt={`${ownerProfile.legalName} logo`}
      width={size}
      height={size}
      className="site-logo"
    />
  );
}