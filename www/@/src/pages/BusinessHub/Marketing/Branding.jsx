import React from 'react';
import { Link } from 'react-router-dom';

const Branding = () => {
  const containerStyle = {
    padding: '1rem',
    maxWidth: '900px',
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageLinkStyle = {
    marginBottom: '1rem',
  };

  const imageStyle = {
    width: '150px',
    height: 'auto',
  };

  const textBlockStyle = {
    textAlign: 'left',
    width: '100%',
  };

  const backButtonStyle = {
    marginTop: '2rem',
    display: 'inline-block',
    padding: '12px 24px',
    border: '1px solid currentColor',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    alignSelf: 'flex-start',
  };

  return (
    <div style={containerStyle}>
      {/* Logo Image Linked to Home */}
      <Link to="/" style={imageLinkStyle}>
      <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
      </Link>

      <div style={textBlockStyle}>
        <h1>Professional Branding and Digital Presence</h1>
        <blockquote><em>“A brand isn’t just how you look — it’s how you’re remembered.”</em></blockquote>

        <p>
          Whether you're starting from scratch or looking to bring order to your existing image, <strong>neurons.me</strong> helps businesses refine and optimize their entire digital identity. We focus on clarity, consistency, and strategy — across all platforms.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li><strong>Logo and Visual Identity</strong> — From logos and typography to icons and layouts that feel clean and modern.</li>
          <li><strong>Website Optimization</strong> — Faster loads, better UX, responsive designs that perform.</li>
          <li><strong>Content Consistency</strong> — Unify your tone, messaging, and look across channels.</li>
          <li><strong>Social Media Presence</strong> — Strengthen how you're seen and remembered online.</li>
          <li><strong>Platform Readiness</strong> — Tailor your assets and visuals for all media formats.</li>
        </ul>

        <p>
          We’ll work closely with you to craft or polish your brand into something people recognize and trust.
        </p>

        <Link to="/contact" style={{ display: 'inline-block', margin: '1.5rem 0', padding: '0.75rem 1.25rem', border: '1px solid #ccc', borderRadius: '5px', textDecoration: 'none', color: '#333' }}>
          ✍️ Request a Branding Consultation
        </Link>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Link to="/business/marketing" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
            ← Marketing Solutions
          </Link>
          <Link to="/business-solutions" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
            Back to Business Solutions →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Branding;