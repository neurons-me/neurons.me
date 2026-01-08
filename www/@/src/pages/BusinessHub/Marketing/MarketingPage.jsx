import React from 'react';
import { Link } from 'react-router-dom';

const MarketingSolutions = () => {
  return (
    <div style={pageStyle}>
      <Link to="/" style={logoLinkStyle}>
      <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
      </Link>

      <h1>Digital Marketing & SEO Consulting</h1>
      <blockquote style={{ fontStyle: 'italic', margin: '0.5rem 0' }}>
        “Visibility is nothing without relevance. We help you grow both.”
      </blockquote>

      <section>
        <h2>Drive Results with Strategy, Not Just Ads</h2>
        <p>
          At <strong>neurons.me</strong>, we help companies build digital visibility that converts. From <strong>SEO optimization</strong> to <strong>data-driven ad campaigns</strong>, we structure and launch systems that bring in qualified traffic — and results.
        </p>
        <p>
          Whether you need to improve your ranking on Google, run social campaigns, or refine your conversion funnels, our team delivers targeted, actionable strategies that work.
        </p>
        <p>
          Hire us for a full-scope consultation and let us design, run, and optimize your digital marketing engine.
        </p>
      </section>

      <Link to="/contact" style={contactButtonStyle}>📈 Request Marketing Consultation</Link>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Link to="/business/branding" style={backButtonStyle}>← Professional Branding</Link>
        <Link to="/business-solutions" style={backButtonStyle}>Back to Business Solutions</Link>
      </div>
    </div>
  );
};

const pageStyle = {
  padding: '1rem',
  maxWidth: '900px',
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
};

const logoStyle = {
  width: '150px',
  height: 'auto',
};

const logoLinkStyle = {
  marginBottom: '1rem',
};

const backButtonStyle = {
  color: '#009a89',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const contactButtonStyle = {
  display: 'inline-block',
  marginTop: '1.5rem',
  padding: '0.75rem 1.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  textDecoration: 'none',
  color: '#333',
};

export default MarketingSolutions;