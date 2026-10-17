import { ArrowUpRight, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="wordmark wordmark-light" to="/" aria-label="Aura Fabrics home">
            <span className="wordmark-main">AURA</span><span className="wordmark-sub">FABRICS</span>
          </Link>
          <p>Beautiful Indian sarees, thoughtfully selected for the moments that matter.</p>
        </div>
        <div className="footer-links-block">
          <span className="footer-label">Explore</span>
          <Link to="/">Home</Link><Link to="/about">Our story</Link><Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact-block">
          <span className="footer-label">A personal invitation</span>
          <p>Have a style in mind? We would love to hear from you.</p>
          <Link className="footer-enquiry" to="/contact">Make an enquiry <ArrowUpRight size={15} /></Link>
          {siteConfig.email && <a className="footer-contact-link" href={`mailto:${siteConfig.email}`}><Mail size={15} />{siteConfig.email}</a>}
          {siteConfig.phone && <a className="footer-contact-link" href={`tel:${siteConfig.phone}`}><Phone size={15} />{siteConfig.phone}</a>}
          {siteConfig.instagramUrl && <a className="footer-social" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Aura Fabrics on Instagram"><Instagram size={18} /></a>}
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Aura Fabrics. All rights reserved.</span><span>Timeless sarees, thoughtfully selected.</span></div>
    </footer>
  );
}
