import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';

const MeProtocolRFC = () => {
  const canvasRef = useRef(null);

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

  const canvasStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  const sectionStyle = {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '1.2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#444',
    lineHeight: '1.5rem',
  };

  return (
    <div style={pageStyle}>
      <canvas ref={canvasRef} style={canvasStyle}></canvas>

      <Link to="/" style={{ marginBottom: '1rem' }}>
        <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
      </Link>

      <h1 style={titleStyle}>Me Protocol RFC Draft</h1>
      <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '24px', marginBottom: '1rem' }}>
        <FaGithub /> View on GitHub
      </a>

      <div style={sectionStyle}>
        <h3><DescriptionIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Introduction</h3>
        <p style={paragraphStyle}>
          The <strong>Me Protocol</strong> defines a user-centric way to represent identities and interactions on the web. 
          It uses <code>me://</code> URLs to express relationships semantically, allowing both local and global identity resolution.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3><LanguageIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Goals</h3>
        <p style={paragraphStyle}>
          - Provide a unified identity protocol for decentralized and centralized networks.<br/>
          - Enable semantic interactions expressed as URLs.<br/>
          - Be open-source and easily implementable across networks.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3><TimelineIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />URL Structure</h3>
        <p style={paragraphStyle}>
          The basic structure is: <br/>
          <code>me://[identity]/[context]/[path]</code><br/><br/>
          Examples: <br/>
          <code>me://this.me/netget.site</code> — interact locally.<br/>
          <code>me://username.cleaker.me/wikipedia.org/dogs</code> — interact globally with a public identity.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3><BuildIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Resolution Rules</h3>
        <p style={paragraphStyle}>
          - If no identity is provided, <code>this.me</code> is assumed.<br/>
          - Domains with <code>.cleaker.me</code> resolve through the public Cleaker ledger.<br/>
          - Other domains are resolved locally or through networks that implement the protocol.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3>Future Work</h3>
        <p style={paragraphStyle}>
          - Draft a full RFC document with formal specifications.<br/>
          - Publish SDKs for multiple languages.<br/>
          - Encourage adoption across decentralized networks.
        </p>
      </div>
    </div>
  );
};

export default MeProtocolRFC;