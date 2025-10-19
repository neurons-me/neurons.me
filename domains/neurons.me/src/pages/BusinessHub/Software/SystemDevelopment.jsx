import React from 'react';
import { Link } from 'react-router-dom';

const SystemDevelopment = () => {
  // Add global styles for ul
  return (
    <>
      <style>
        {`
          ul {
            list-style: none;
            padding-left: 0;
          }
        `}
      </style>
      <div style={{ padding: '1rem 1rem 1rem', maxWidth: '800px', margin: 'auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      {/* Logo Block in Centered Wrapper */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Link to="/">
        <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
        </Link>
      </div>
      <h1>System Development and Administration</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
        All artificial intelligence needs a system in which to operate and propagate.
      </p>
      <section>
        <p>
          At <strong>neurons.me</strong>, we develop and manage clean, reliable systems that grow with your business. 
          Our focus is on clarity, maintainability, and security — no shortcuts, no black boxes.
        </p>
        <p>
          Our team of <strong>software engineers</strong> works with modern tools and industry standards to ensure robust infrastructure. 
          We move fast with trusted technologies and can tailor solutions when needed.
        </p>
      </section>

      <section>
        <h2>What We Deliver</h2>
        <ul>
          <li><strong>API Integrations</strong> and well-documented data flows</li>
          <li><strong>Cloud & On-Prem Infrastructure</strong> that scales and adapts</li>
          <li><strong>Server Administration</strong> with monitoring and backups</li>
          <li><strong>Automation & Dashboards</strong> for real-time visibility</li>
          <li><strong>Security & Compliance</strong> as a core principle</li>
        </ul>
      </section>

      <section>
        <p>
          We don’t just drop off code. We leave you with a system that’s documented, scalable, and future-ready.
        </p>
      </section>
    
      <Link to="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none', color: '#333' }}>
          🔍 Request a Consultation
        </Link>

     

      {/* Navigation Block */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/business/ai" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← AI Integration
        </Link>
        <Link to="/business/cyber-security" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          Cyber Security →
        </Link>
      </div>
    </div>
    </>
  );
};


export default SystemDevelopment;