import { ArrowRight, ArrowUpRight, ScanLine, Sparkles, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SareeImage from '../components/SareeImage.jsx';
import { editorialImages } from '../data/sarees.js';

const principles = [
  { icon: Sparkles, title: 'Timeless Beauty', copy: 'We are drawn to sarees whose elegance feels at home across generations and occasions.' },
  { icon: ScanLine, title: 'Attention to Detail', copy: 'A thoughtful border, a lovely texture, a considered finish the details make the drape.' },
  { icon: UserRound, title: 'Personal Expression', copy: 'A saree is deeply personal. We celebrate the many ways each wearer makes it her own.' },
];

export default function About() {
  return (
    <>
      <SEO title="Our Story | Aura Fabrics" description="Learn about Aura Fabrics and our appreciation for the beauty, versatility and personal expression of Indian sarees." />
      <main className="about-page">
        <section className="about-hero section-space">
          <div className="container about-hero-grid">
            <div className="about-hero-copy"><p className="eyebrow"><span className="eyebrow-mark" /> THE AURA PERSPECTIVE</p><h1>Woven in Tradition. <em>Styled for Today.</em></h1><p>Aura Fabrics celebrates the beauty and versatility of Indian sarees, bringing timeless drapes into the moments that matter.</p><Link className="text-link" to="/#featured">Explore the collection <ArrowRight size={16} /></Link><span className="about-hero-note">A celebration of beauty, detail and self-expression.</span></div>
            <div className="about-hero-visual"><SareeImage src={editorialImages.about} alt="Woman in a traditional Indian sari in a graceful editorial portrait" position="center 24%" loading="eager" /><span className="about-visual-stamp">ROOTED IN<br />TRADITION</span><span className="image-caption">THE BEAUTY OF THE DRAPE</span></div>
          </div>
        </section>

        <section className="essence-section section-space"><div className="container essence-grid"><div className="essence-aside"><span className="section-index">01 <i /> 03</span><span className="vertical-note">A NOTE ON AURA</span><div className="essence-aside-mark">A</div></div><div className="essence-copy"><p className="eyebrow">THE ESSENCE OF AURA</p><h2>Beauty with <em>meaning.</em></h2><p className="lead-copy">At Aura Fabrics, we believe a saree is more than an outfit—it is an expression of heritage, confidence and individuality.</p><p>Our vision is to create a welcoming place to discover Indian sarees that feel beautiful to wear and meaningful to own. From elegant classics to occasion-ready drapes, we celebrate the details that make every saree special.</p><p>Each style can become part of a story: the way a fabric catches the light, the comfort of a familiar drape, or a moment made memorable simply by what you chose to wear.</p></div></div></section>

        <section className="principles-section section-space"><div className="container"><div className="principles-heading"><p className="eyebrow">WHAT GUIDES OUR CURATION</p><h2>Considered, at every <em>fold.</em></h2></div><div className="principles-grid">{principles.map((item, index) => { const Icon = item.icon; return <article className="principle-card" key={item.title}><span className="principle-index">0{index + 1}</span><Icon size={23} strokeWidth={1.4} aria-hidden="true" /><h3>{item.title}</h3><p>{item.copy}</p></article>; })}</div></div></section>

        <section className="drape-section section-space"><div className="container drape-grid"><div className="drape-image"><SareeImage src={editorialImages.story} alt="Intricate traditional saree fabric and woven details" position="center" /><span className="image-caption">A CLOSER LOOK AT THE DETAILS</span></div><div className="drape-copy"><p className="eyebrow">A CELEBRATION OF THE DRAPE</p><h2>One beautiful tradition. <em>So many ways to wear it.</em></h2><p>From meaningful occasions to everyday dressing, a saree can be as expressive as the person who wears it. We love the contrast between a time-honoured silhouette and the unmistakably individual way it comes to life.</p><Link className="text-link" to="/contact">Talk to us about a style <ArrowUpRight size={16} /></Link></div></div></section>

        <section className="about-invitation section-space"><div className="container invitation-inner"><span className="eyebrow">YOUR STORY, YOUR DRAPE</span><h2>Find a saree that <em>feels like you.</em></h2><p>Tell us what you are looking for, or simply share the moment you are dressing for.</p><div className="invitation-actions"><Link className="button button-primary" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link><Link className="text-link" to="/#featured">Browse the edit <ArrowRight size={16} /></Link></div></div></section>
      </main>
    </>
  );
}
