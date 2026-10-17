import { useEffect, useState } from 'react';
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SareeImage from '../components/SareeImage.jsx';
import { contactFormEndpoint, siteConfig } from '../config/site.js';
import { editorialImages } from '../data/sarees.js';

const getSaree = (params) => params.get('saree') || '';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const selectedSaree = getSaree(searchParams);
  const [form, setForm] = useState({ name: '', email: '', phone: '', interestedIn: selectedSaree ? 'A specific saree' : 'General enquiry', saree: selectedSaree, message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setForm((current) => ({ ...current, saree: selectedSaree, interestedIn: selectedSaree ? 'A specific saree' : current.interestedIn }));
  }, [selectedSaree]);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!contactFormEndpoint) {
      setStatus({ type: 'error', message: 'Enquiries are not connected yet. Please configure the contact form before launch.' });
      return;
    }
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    const formElement = event.currentTarget;
    try {
      const payload = new FormData(formElement);
      const response = await fetch(contactFormEndpoint, { method: 'POST', body: payload, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been received.' });
      setForm({ name: '', email: '', phone: '', interestedIn: 'General enquiry', saree: '', message: '' });
      formElement.reset();
    } catch {
      setStatus({ type: 'error', message: 'Your enquiry could not be sent just now. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  const hasConfiguredDetails = siteConfig.email || siteConfig.phone || siteConfig.whatsapp || siteConfig.instagramUrl || siteConfig.locationLabel;

  return (
    <>
      <SEO title="Contact Aura Fabrics | Saree Enquiries" description="Have a question about a saree or need help finding a style? Contact Aura Fabrics and start a conversation." />
      <main className="contact-page">
        <section className="contact-hero"><div className="container contact-hero-inner"><p className="eyebrow"><span className="eyebrow-mark" /> LET'S TALK SAREES</p><h1>Let's Find Your <em>Perfect Saree.</em></h1><p>Have a question about a style, an upcoming occasion or a saree you love? Reach out—we would be delighted to help.</p></div></section>
        <section className="contact-main section-space"><div className="container contact-grid">
          <aside className="contact-aside"><span className="eyebrow">A PERSONAL NOTE</span><h2>We are here to <em>help you find it.</em></h2><p>Tell us a little about what you have in mind. Whether you are drawn to a particular style or still exploring, we would love to hear from you.</p><div className="contact-image"><SareeImage src={editorialImages.contact} alt="An editorial portrait of a woman wearing an Indian saree" position="center 24%" /><span className="image-caption">THE RIGHT DRAPE IS PERSONAL</span></div><div className="contact-methods"><h3>Contact details</h3>{siteConfig.email && <a href={`mailto:${siteConfig.email}`}><Mail size={17} /><span><small>Email</small>{siteConfig.email}</span><ArrowUpRight size={14} /></a>}{siteConfig.phone && <a href={`tel:${siteConfig.phone}`}><Phone size={17} /><span><small>Phone</small>{siteConfig.phone}</span><ArrowUpRight size={14} /></a>}{siteConfig.whatsapp && <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><Phone size={17} /><span><small>WhatsApp</small>Start a conversation</span><ArrowUpRight size={14} /></a>}{siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /><span><small>Instagram</small>Follow our story</span><ArrowUpRight size={14} /></a>}{siteConfig.locationLabel && <div className="contact-location"><MapPin size={17} /><span><small>Location</small>{siteConfig.locationLabel}</span></div>}{!hasConfiguredDetails && <p className="details-pending">Direct contact details coming soon. You can still send us a message using the form.</p>}</div></aside>
          <div className="contact-form-wrap"><div className="form-heading"><span className="eyebrow">SEND AN ENQUIRY</span><h2>How can we help?</h2><p>Fields marked with an asterisk are required.</p></div>
            <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
              <div className="form-field"><label htmlFor="name">Full name <span>*</span></label><input id="name" name="name" autoComplete="name" required value={form.name} onChange={updateField} placeholder="Your name" /></div>
              <div className="form-row"><div className="form-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField} placeholder="you@example.com" /></div><div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} placeholder="Optional" /></div></div>
              <div className="form-field"><label htmlFor="interestedIn">Interested in</label><select id="interestedIn" name="interestedIn" value={form.interestedIn} onChange={updateField}><option>General enquiry</option><option>Silk sarees</option><option>Festive sarees</option><option>Everyday sarees</option><option>A specific saree</option></select></div>
              <div className="form-field"><label htmlFor="saree">Saree name <span className="optional-label">(optional)</span></label><input id="saree" name="saree" value={form.saree} onChange={updateField} placeholder="Add a saree name if you have one in mind" /></div>
              <div className="form-field"><label htmlFor="message">Your message <span>*</span></label><textarea id="message" name="message" required rows="5" value={form.message} onChange={updateField} placeholder="Tell us what you are looking for…" /></div>
              {status.message && <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>}
              <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send Enquiry'} <ArrowUpRight size={16} /></button>
              <p className="form-privacy-note">Your details are used only to respond to your enquiry. This site does not store form submissions.</p>
            </form>
          </div>
        </div></section>
        <section className="faq-section"><div className="container faq-inner"><p className="eyebrow">A LITTLE GUIDANCE</p><h2>Before you write</h2><div className="faq-grid"><article><h3>How do I ask about a saree?</h3><p>Choose “A specific saree” in the form and add its name. If you came from a saree card, its name will already be included.</p></article><article><h3>Can I ask for help choosing?</h3><p>Of course. Share the occasion, style or colors you have in mind, and we can start a conversation.</p></article></div><Link className="text-link" to="/about">A little more about Aura <ArrowUpRight size={15} /></Link></div></section>
      </main>
    </>
  );
}
