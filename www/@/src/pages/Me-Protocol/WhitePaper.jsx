

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import DescriptionIcon from '@mui/icons-material/Description';
import ArchitectureIcon from '@mui/icons-material/AccountTree';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import TimelineIcon from '@mui/icons-material/Timeline';

const WhitePaper = () => {
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

      <h1 style={titleStyle}>Me Protocol Whitepaper</h1>
      <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '24px', marginBottom: '1rem' }}>
        <FaGithub /> View on GitHub
      </a>

      <div style={sectionStyle}>
        <h3><DescriptionIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Abstract</h3>
        <p style={paragraphStyle}>
          The <strong>Me Protocol</strong> is a decentralized, identity-centric protocol designed to unify user interactions across networks.
          It introduces <code>me://</code> as a semantic layer for referencing identities, groups, and contextual actions.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3><TimelineIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Introduction</h3>
        <p style={paragraphStyle}>
          The modern internet lacks a unified, user-centric identity layer. Me Protocol provides a framework where every action,
          from liking a page to transferring digital assets, is tied to a verifiable identity — local or global.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3><ArchitectureIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Architecture</h3>
        <p style={paragraphStyle}>
          Me Protocol operates through local <strong>Monads</strong> and public ledgers like <strong>Cleaker</strong>.
          <br/>Basic flow:<br/>
          - <strong>Local Monad:</strong> Manages private interactions and keys.<br/>
          - <strong>Public Ledgers:</strong> Federated networks resolve global identities (<code>username.cleaker.me</code>).
        </p>
      </div>

      <div style={sectionStyle}>
        <h3><WorkspacesIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Use Cases</h3>
        <p style={paragraphStyle}>
          - Decentralized social interactions.<br/>
          - Ticket ownership verification: <code>me://cleaker.me/ticket:hash</code>.<br/>
          - Group collaboration contexts: <code>me://groupname/project.site</code>.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3><TipsAndUpdatesIcon style={{ verticalAlign: 'middle', marginRight: '6px', color: '#888' }} />Future Development</h3>
        <p style={paragraphStyle}>
          Next steps include publishing a formal RFC, creating SDKs in multiple languages,
          and promoting adoption across decentralized and enterprise ecosystems.
        </p>
      </div>
    </div>
  );
};

export default WhitePaper;