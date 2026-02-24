// NOTE: All styles now inherited from theme or external CSS.
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { FaGithub, FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';

const Ecosystem = () => {
  const theme = useTheme();
  const dynamicButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '5px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    backgroundColor: 'transparent',
  };
  const iconLinkStyle = {
    fontSize: '22px',
    color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)',
  };

  return (
    <div className="open-source-page">
   <h1 className="open-source-title">Neurons.me Ecosystem</h1>
      <p className="open-source-intro">
        Welcome to neurons.me — an open-source initiative that gives users full control over how intelligent systems are built and used. <strong>Instead of allowing algorithms to silently shape your experience without your awareness or consent</strong>, neurons.me puts you in charge through a decentralized identity system called <Link to="/all-this/this-me" style={{ textDecoration: 'underline' }}><strong>this.me</strong></Link>.
        <br /><br />
        With your <strong>public key</strong>, you can decrypt the data you've stored across compatible systems, explore how your <strong>.me identity</strong> evolves, and interact with AI on <strong>your own terms</strong>.
      </p>

      <div className="open-source-algorithmic-section" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 className="open-source-section-title">Go Algorithmic</h2>
          <p className="open-source-intro" style={{ marginBottom: '1rem' }}>
           In this environment, every process is designed to be <strong>transparent</strong> and <strong>user-guided</strong>.
          </p>
          <p className="open-source-intro">
           
            <strong>Your data, your logic, your results.</strong> Build systems that align with your goals, ensuring clarity and trust through open source.
          </p>
          <div style={{ marginTop: '0.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/open-source/contributing" style={dynamicButtonStyle}>Contribute</Link>
            <Link to="/contact" style={dynamicButtonStyle}>Contact</Link>
          </div>
        </div>
        <div style={{ flex: '0 1 300px', maxWidth: '300px', marginTop: '-1rem' }}>
          <img src="https://docs.neurons.me/media/neurons-me.png" alt="neurons.me overview" style={{ width: '115%', height: 'auto', borderRadius: '4px' }} />
        </div>
      </div>

      <div className="open-source-core-projects">
        <h2 className="open-source-section-title">Core Projects</h2>
        <table className="open-source-table">
          <tbody>
          <tr
            className="ecosystem-row"
            style={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '12px',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
              <td style={{ border: 'none' }}>
                <img src="https://docs.neurons.me/media/netget.webp" alt="Netget" style={{ width: '110px', height: '110px', objectFit: 'contain' }} />
              </td>
              <td style={{ border: 'none', width: '100%' }}>
                <div>
                  <div>
                    <strong>Netget</strong><br />
                    Networking solutions for fully independent networks and domain management.
                  </div>
                  <a href="https://netget.me" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.primary, fontSize: '14px', textDecoration: 'underline', marginTop: '4px', marginBottom: '4px' }}>
                      Stable Version Released 2.6.33
                  </a>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem', gap: '10px' }}>
                    <a href="https://github.com/neurons-me/netget" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/netget.me/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaFacebookF />
                    </a>
                    <a href="https://instagram.com/netget.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaInstagram />
                    </a>
                    <a href="https://netget.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGlobe />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              className="ecosystem-row"
              style={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              <td style={{ border: 'none' }}>
                <img src="https://docs.neurons.me/media/all.this.webp" alt="All.This" style={{ width: '110px', height: '110px', objectFit: 'contain' }} />
              </td>
              <td style={{ border: 'none', width: '100%' }}>
                <div>
                  <div>
                    <strong>All.This</strong><br />
                    A framework for modular data structuring, optimizing ML pipelines.
                  </div>
                  <div style={{ color: '#d38800', fontSize: '14px', fontWeight: 500, marginTop: '4px', marginBottom: '4px' }}>
                    Under Heavy Development – Coming Soon
                  </div>
                  <div style={{ marginTop: '6px' }}>
                    <Link to="/all-this" style={{ textDecoration: 'underline', fontSize: '14px', color: theme.palette.text.primary }}>
                      Learn More
                    </Link>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem', gap: '10px' }}>
                    <a href="https://github.com/neurons-me/all.this" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/all.this.stuff/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              className="ecosystem-row"
              style={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              <td style={{ border: 'none' }}>
                <img src="https://docs.neurons.me/media/neurons.me.dev.webp" alt="neurons.me" style={{ width: '110px', height: '110px', objectFit: 'contain' }} />
              </td>
              <td style={{ border: 'none', width: '100%' }}>
                <div>
                  <div>
                    <strong>neurons.me</strong><br />
                    The intelligence core — providing visibility into AI processes and dataset evolution.
                  </div>
                  <div style={{ color: '#d38800', fontSize: '14px', fontWeight: 500, marginTop: '4px', marginBottom: '4px' }}>
                    Under Heavy Development – Coming Soon
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem', gap: '10px' }}>
                    <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGithub />
                    </a>
                    <a href="https://facebook.com/neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaFacebookF />
                    </a>
                    <a href="https://instagram.com/neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaInstagram />
                    </a>
                    <a href="https://neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGlobe />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              className="ecosystem-row"
              style={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              <td style={{ border: 'none' }}>
                <img src="https://docs.neurons.me/media/i.mlearning.webp" alt="i.mLearning" style={{ width: '110px', height: '110px', objectFit: 'contain' }} />
              </td>
              <td style={{ border: 'none', width: '100%' }}>
                <div>
                  <div>
                    <strong>i.mLearning</strong><br />
                    Create, manage, and refine datasets for ML.
                  </div>
                  <div style={{ color: '#d38800', fontSize: '14px', fontWeight: 500, marginTop: '4px', marginBottom: '4px' }}>
                    Under Heavy Development – Coming Soon
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem', gap: '10px' }}>
                    <a href="https://github.com/neurons-me/i.mLearning" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGithub />
                    </a>
                    <a href="https://mlearning.studio" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGlobe />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              className="ecosystem-row"
              style={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              <td style={{ border: 'none' }}>
                <img src="/media/cleaker-logo.png" alt="Cleaker" style={{ width: '110px', height: '110px', objectFit: 'contain' }} />
              </td>
              <td style={{ border: 'none', width: '100%' }}>
                <div>
                  <div>
                    <strong>Cleaker</strong><br />
                    A decentralized identity and authentication system.
                  </div>
                  <div style={{ color: '#d38800', fontSize: '14px', fontWeight: 500, marginTop: '4px', marginBottom: '4px' }}>
                    Under Heavy Development – Coming Soon
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem', gap: '10px' }}>
                    <a href="https://github.com/neurons-me/Cleaker" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/cleaker.me/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaFacebookF />
                    </a>
                    <a href="https://cleaker.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
                      <FaGlobe />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
  {/* Ecosystem row hover effect */}
  <style>
    {`
      .ecosystem-row:hover {
        transform: scale(1.025);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1;
        position: relative;
      }
    `}
  </style>
</div>
  );
};

export default Ecosystem;