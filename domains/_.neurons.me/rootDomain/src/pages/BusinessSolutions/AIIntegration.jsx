// src/pages/BusinessSolutions/AIIntegration.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AIIntegration = () => {
  return (
    
    <div style={{ padding: '1rem 1rem 1rem', maxWidth: '800px', margin: 'auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Link to="/">
          <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
        </Link>
      </div>
      <h1>Preparing and Integrating Businesses for the Artificial Intelligence Era</h1>
      <blockquote style={{ fontStyle: 'italic', margin: '0.3rem 0' }}>
        “AI isn’t the future — it’s the present. Let’s make it work.”
      </blockquote>

      <section>
        <h2>Embrace Artificial Intelligence</h2>
        
        <p>
          At <strong>neurons.me</strong>, we specialize in guiding businesses through the transformative process of integrating AI-driven strategies that align with <strong>your unique goals</strong>.
        </p>
      </section>

      <section>
        <h2>Discover Where AI Can Work for You</h2>
        <p>
          Don’t try to adopt AI blindly — let’s identify where it can actually move the needle for your business.
          At <strong>neurons.me</strong>, we offer tailored consulting to help you uncover high-impact AI opportunities:
        </p>
        <ul>
          <li><strong>Save time</strong> by automating repetitive processes</li>
          <li><strong>Cut costs</strong> by streamlining operations</li>
          <li><strong>Make smarter decisions</strong> through real-time analytics</li>
          <li><strong>Boost customer satisfaction</strong> with personalization at scale</li>
          <li><strong>Unlock growth</strong> by leveraging scalable AI infrastructure</li>
        </ul>
        <p>
          We’ll analyze your operations and guide you through practical, <strong>high-ROI</strong> applications of AI — with clarity, not jargon.
        </p>
        <Link to="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none', color: '#333' }}>
          🔍 Request an AI Consultation
        </Link>
      </section>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/business/data" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Getting Your Data Ready
        </Link>
        <Link to="/business/system-development" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          System Development and Admin →
        </Link>
      </div>
    </div>
  );
};

export default AIIntegration;