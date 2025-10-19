import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaApple, FaWindows, FaLinux } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

export default function InstallMe() {
  const theme = useTheme();

  const dynamicButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '6px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    backgroundColor: 'transparent',
    minWidth: '200px',
  };

  const containerStyle = {
    padding: '1.16rem',
    textAlign: 'center',
    maxWidth: '680px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '8px' }}>
        <img
          src="https://neurons.me/neurons.me.png"
          alt="Neurons Logo"
          style={{
            width: '111px',
            maxWidth: '100%',
            height: 'auto',
            marginBottom: '5px',
            cursor: 'pointer',
            filter: 'var(--image-filter)',
          }}
        />
      </Link>

      <h1 style={{ fontWeight: 'bold', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
        Install Neurons.me Ecosystem
      </h1>

      <blockquote
        style={{
          fontStyle: 'italic',
          marginBottom: '1.25rem',
          color: theme.palette.mode === 'dark' ? '#aaa' : '#555',
          fontSize: '0.9rem',
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        “Your gateway to a decentralized and user-centric digital identity.”
      </blockquote>

      <p style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>
        The <strong>neurons.me</strong> ecosystem allows you to manage your digital identities, interact securely with applications, and keep everything under your control.
      </p>

      <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        Select your operating system and install all required components in one step.
      </p>

       <div
        style={{
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '6px',
          padding: '10px',
          margin: '0 auto 1.5rem',
          maxWidth: '400px',
          fontFamily: 'monospace',
          fontSize: '0.85rem',
          color: theme.palette.text.primary,
          lineHeight: '1.4',
        }}
      >
        <div>1. Download the installer for your OS</div>
        <div>2. Follow the installation wizard</div>
        <div>3. Restart your browser to enable the Cleaker extension</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '1.5rem',
        }}
      >
       <a
  href="https://downloads.neurons.me/mac/neurons-me-installer.dmg"
  style={dynamicButtonStyle}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaApple style={{ marginRight: '8px' }} /> Download for MacOS
</a>

<a
  href="https://downloads.neurons.me/windows/neurons-me-installer.exe"
  style={dynamicButtonStyle}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWindows style={{ marginRight: '8px' }} /> Download for Windows
</a>

<a
  href="https://downloads.neurons.me/linux/neurons-me-installer.tar.gz"
  style={dynamicButtonStyle}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinux style={{ marginRight: '8px' }} /> Download for Linux
</a>
      </div>

     
    </div>
  );
}