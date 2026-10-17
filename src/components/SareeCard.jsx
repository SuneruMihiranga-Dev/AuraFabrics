import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SareeImage from './SareeImage.jsx';

export default function SareeCard({ saree, index = 0 }) {
  const enquiry = `/contact?saree=${encodeURIComponent(saree.name)}`;
  return (
    <article className="saree-card" style={{ '--card-delay': `${index * 55}ms` }}>
      <Link className="saree-card-image" to={enquiry} aria-label={`Enquire about ${saree.name}`}>
        <SareeImage src={saree.image} alt={saree.alt} position={saree.position} />
        <span className="image-arrow"><ArrowUpRight size={19} /></span>
      </Link>
      <div className="saree-card-meta"><span>{saree.category}</span><span className="placeholder-note">Editorial placeholder</span></div>
      <h3>{saree.name}</h3>
      <div className="saree-card-bottom"><span>{saree.priceLabel}</span><Link to={enquiry}>Enquire <ArrowUpRight size={14} /></Link></div>
    </article>
  );
}
