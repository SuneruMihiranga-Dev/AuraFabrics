import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, MoveDownRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SareeCard from '../components/SareeCard.jsx';
import SareeImage from '../components/SareeImage.jsx';
import { editorialImages, sarees } from '../data/sarees.js';

const filters = ['All', 'Silk', 'Festive', 'Everyday'];
const moods = [
  { title: 'Silk Classics', category: 'Silk', copy: 'Graceful textures and timeless appeal.', image: editorialImages.moods.Silk },
  { title: 'Festive Elegance', category: 'Festive', copy: 'A little extra beauty for moments worth celebrating.', image: editorialImages.moods.Festive },
  { title: 'Everyday Grace', category: 'Everyday', copy: 'Beautiful drapes for the rhythm of every day.', image: editorialImages.moods.Everyday },
];

export default function Home() {
  const location = useLocation();
  const initialCategory = new URLSearchParams(location.search).get('category');
  const [activeFilter, setActiveFilter] = useState(filters.includes(initialCategory) ? initialCategory : 'All');
  const visibleSarees = useMemo(() => activeFilter === 'All' ? sarees : sarees.filter((item) => item.category === activeFilter), [activeFilter]);

  useEffect(() => {
    const requested = new URLSearchParams(location.search).get('category');
    if (filters.includes(requested)) setActiveFilter(requested);
  }, [location.search]);

  return (
    <>
      <SEO title="Aura Fabrics | Beautiful Indian Sarees" description="Discover a thoughtfully curated world of beautiful Indian sarees, where timeless artistry meets your individual style." />
      <main>
        <section className="home-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" /> THE ART OF ELEGANCE</p>
              <h1>Draped in Tradition. <em>Defined by Elegance.</em></h1>
              <p className="hero-intro">Discover a thoughtfully curated world of beautiful Indian sarees, where timeless artistry meets your individual style.</p>
              <div className="hero-actions">
                <Link className="button button-primary" to="/#featured">Explore the Collection <ArrowRight size={16} /></Link>
                <Link className="text-link" to="/about">Our Story <ArrowUpRight size={16} /></Link>
              </div>
              <div className="hero-footnote"><span>Beautiful sarees.</span><span>Lasting impressions.</span></div>
            </div>
            <div className="hero-art" aria-label="Editorial saree photography">
              <div className="hero-art-backdrop" />
              <div className="hero-frame-main"><SareeImage src={editorialImages.hero} alt="Model wearing an embroidered royal-blue saree with silver detailing" loading="eager" position="center 28%" /></div>
              <div className="hero-frame-detail"><SareeImage src={editorialImages.heroDetail} alt="Close-up of a saree's intricate fabric and pattern" position="center" /></div>
              <span className="hero-image-label">ROYAL BLUE <span>EMBROIDERED</span></span>
            </div>
          </div>
          <a className="scroll-cue" href="#featured" aria-label="Scroll to the collection"><MoveDownRight size={16} /> SCROLL TO DISCOVER</a>
        </section>

        <section className="collection-section section-space" id="featured">
          <div className="container">
            <div className="collection-heading-row">
              <SectionHeading eyebrow="SELECTED FOR YOU" title="The Aura Edit" copy="Discover sarees selected for their graceful drape, intricate details and enduring appeal." />
              <span className="section-index">01 <i /> 04</span>
            </div>
            <div className="filters" role="group" aria-label="Filter sarees by category">
              {filters.map((filter) => <button key={filter} className={`filter-chip${activeFilter === filter ? ' is-active' : ''}`} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="product-grid" aria-live="polite">
              {visibleSarees.map((saree, index) => <SareeCard key={saree.id} saree={saree} index={index} />)}
            </div>
            {visibleSarees.length === 0 && <p className="empty-state">There are no pieces in this selection just yet. Browse all sarees instead.</p>}
            <p className="placeholder-disclaimer">Photography and pieces shown are editorial placeholders, not confirmed Aura Fabrics stock.</p>
          </div>
        </section>

        <section className="moods-section section-space">
          <div className="container">
            <div className="moods-header"><SectionHeading eyebrow="A WAY TO BEGIN" title="Find your kind of drape." copy="Explore by feeling, occasion or the details that draw you in." /><Link className="text-link desktop-link" to="/#featured">View the edit <ArrowRight size={16} /></Link></div>
            <div className="mood-grid">
              {moods.map((mood, index) => <Link className={`mood-card mood-card-${index + 1}`} key={mood.category} to={`/?category=${mood.category}#featured`}>
                <div className="mood-image"><SareeImage src={mood.image} alt={`${mood.category} saree editorial placeholder`} position="center 25%" /></div>
                <div className="mood-copy"><span className="eyebrow">0{index + 1} / COLLECTION MOOD</span><h3>{mood.title}</h3><p>{mood.copy}</p><span className="mood-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span></div>
              </Link>)}
            </div>
          </div>
        </section>

        <section className="story-teaser section-space">
          <div className="container story-grid">
            <div className="story-image-wrap"><SareeImage src={editorialImages.story} alt="Close-up view of traditional saree fabric" position="center" /><span className="image-caption">TEXTURE / TRADITION / TODAY</span></div>
            <div className="story-panel"><span className="story-number">02</span><p className="eyebrow">OUR STORY</p><h2>More than a saree. <em>A feeling.</em></h2><p>Every drape carries its own quiet poetry—woven into celebrations, everyday rituals and the way we choose to express ourselves.</p><p>At Aura Fabrics, we celebrate the beauty of Indian sarees and the personal stories each one can hold.</p><Link className="button button-outline-light" to="/about">Discover our story <ArrowUpRight size={16} /></Link><span className="story-panel-mark">A</span></div>
          </div>
        </section>

        <section className="closing-cta section-space">
          <div className="container closing-inner"><div className="closing-ornament" aria-hidden="true">A</div><p className="eyebrow">A PERSONAL INVITATION</p><h2>Your next beautiful drape <em>starts here.</em></h2><p>Looking for something for a celebration, a meaningful gift, or simply your everyday elegance? We would love to hear from you.</p><Link className="button button-white" to="/contact">Get in Touch <ArrowUpRight size={16} /></Link><span className="closing-side-note">AURA FABRICS · THE ART OF ELEGANCE</span></div>
        </section>
      </main>
    </>
  );
}
