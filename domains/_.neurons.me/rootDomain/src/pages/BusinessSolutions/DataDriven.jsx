import React from 'react';
import { Link } from 'react-router-dom';

const DataDriven = () => {
  return (
    <div style={{ padding: '1rem 1rem 1rem', maxWidth: '800px', margin: 'auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      {/* Logo Image Linked to Home */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Link to="/">
        <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
        </Link>
      </div>

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'left' }}>
        <h1>Get Your Business Data Ready</h1>

        <section>
          <p>
            Before any AI or analytics can add value to your company, your data needs to be clean, structured, and actionable.
            At <strong>neurons.me</strong>, we help businesses organize their data foundation — because data chaos leads to poor decisions.
          </p>
        </section>

        <section>
          <h2>Our Approach</h2>
          <ul>
            <li><strong>Data Collection:</strong> Gather key internal and external sources.</li>
            <li><strong>Cleaning & Validation:</strong> Eliminate noise and fix inconsistencies.</li>
            <li><strong>Structuring:</strong> Format data for integration and scalability.</li>
            <li><strong>Exploration:</strong> Visualize, summarize, and segment.</li>
          </ul>
        </section>

        <section>
          <h2>Why It Matters</h2>
          <p>
            Organized data unlocks growth. It’s the base layer to automate, predict, and scale operations.
          </p>
        </section>

        <section>
          <h2>Let’s Talk</h2>
          <p>
            We’ll audit your current setup, design a custom data pipeline, and get your business ready for AI and data-driven decisions.
          </p>

          <Link to="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none', color: '#333' }}>
          🔍 Request a Consultation
        </Link>

        </section>

        <Link to="/business-solutions" style={backButtonStyle}>← Back to Business Solutions</Link>
        <Link to="/business/ai" style={backButtonStyle}>Next: AI Integration →</Link>
      </div>
    </div>
  );
};

const backButtonStyle = {
  marginTop: '40px',
  display: 'inline-block',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '16px',
};

export default DataDriven;