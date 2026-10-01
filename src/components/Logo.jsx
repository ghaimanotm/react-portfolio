/**
 * Logo.jsx — custom logo image shown in the navigation bar.
 * The image file is stored at public/images/H_M_Portfolio.png.
 */
import { ownerProfile } from '../data/siteContent.js';

export default function Logo() {
  return (
    <img
      src="/images/H_M_Portfolio.png"
      alt={`${ownerProfile.legalName} logo`}
      className="site-logo"
    />
  );
}