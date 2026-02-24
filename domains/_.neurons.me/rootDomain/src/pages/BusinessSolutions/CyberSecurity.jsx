

import React from 'react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  return (
    <div style={{ padding: '1rem 1rem 1rem', maxWidth: '800px', margin: 'auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Link to="/">
        <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
        </Link>
      </div>
      <h1>Cyber Security and Infrastructure Protection</h1>
      <blockquote style={{ fontStyle: 'italic', margin: '0.3rem 0' }}>
        “Security isn’t optional — it’s foundational.”
      </blockquote>

      <section>
        <h2>Ongoing Protection for Your Systems</h2>
        <p>
          At <strong>neurons.me</strong>, we continuously monitor and audit infrastructure to ensure it does not expose sensitive data to attackers. Our security checkups are proactive and thorough, aiming to detect vulnerabilities before they can be exploited.
        </p>
      </section>

      <section>
        <h2>Protecting Business Information and Privacy</h2>
        <p>
          We implement best practices in encryption, authentication, and access control to protect your business data. Whether it’s customer records, internal systems, or proprietary tools, our mission is to uphold privacy and prevent unauthorized access.
        </p>
      </section>

      <p>
        Our engineering team combines robust tools with a custom approach — so you're not left with black-box solutions no one can maintain. We secure your present and future, without locking you in.
      </p>

      <Link to="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none', color: '#333' }}>
        🔐 Request a Security Review
      </Link>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/business/system-development" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← System Development and Admin
        </Link>
        <Link to="/business/marketing" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          Marketing Solutions →
        </Link>
      </div>
    </div>
  );
};

export default CyberSecurity;