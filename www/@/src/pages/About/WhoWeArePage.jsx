import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// 'topic' is now passed from the route and used in the layout; no reference needed here
const WhoWeArePage = () => {
  const [showOutput, setShowOutput] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOutput(true);
    }, 3700);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div style={{ padding: '1.16rem', textAlign: 'center' }}>
      <Link to="/" style={imageLinkStyle}>
        <img src="https://neurons.me/neurons.me.png" alt="Neurons Logo" style={imageStyle} />
      </Link>
      <h1 style={{ fontFamily: 'monospace', whiteSpace: 'nowrap', overflow: 'hidden', borderRight: '0.15em solid orange', animation: 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite' }}>{'>'} whois neurons.me</h1>
      {showOutput && (
        <div
          id="whois-output"
          style={{
            marginTop: '18px',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            textAlign: 'left',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            animation: 'fadeIn 1s ease-in-out forwards',
          }}
        >
         <div style={iconContainerStyle}>
        <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaGithub />
        </a>
        <a href="https://instagram.com/neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaInstagram />
        </a>
        <a href="https://facebook.com/neurons.me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com/company/neurons-me" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
          <FaLinkedinIn />
        </a>
      </div>
        <p>
        <b>neurons.me</b> is a technology firm focused on developing <b>open-source</b> solutions and delivering <b>IT and media services</b>. 
        Our mission is to empower users and organizations with tools that are adaptable to their unique goals.</p>
      <p>
      Driven by the idea that <b>intelligence</b> should be <b>visible</b>, <b>explainable</b>, and shaped by those it serves.
      </p>
      </div>
      )}
    </div>
  );
};

const imageStyle = {
  width: '111px',
  height: 'auto',
  marginBottom: '5px',
  cursor: 'pointer',
};

const imageLinkStyle = {
  display: 'inline-block',
  marginBottom: '8px',
};

  const iconLinkStyle = {
    fontSize: '28px',
    opacity: 0.9,
    transition: 'opacity 0.3s ease, color 0.3s ease',
  };

const iconContainerStyle = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const clientSectionStyle = {
  marginTop: '42px',
};

const clientLogoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '21px',
};

const clientLogoStyle = {
  height: '42px',
  width: 'auto',
  opacity: 0.6,
  transition: 'opacity 0.3s',
  cursor: 'pointer',
};


export default WhoWeArePage;

// Add typing effect CSS animations
if (typeof document !== 'undefined' && document.styleSheets && document.styleSheets.length > 0) {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: orange }
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    @keyframes fadeIn {
      from { opacity: 0 }
      to { opacity: 1 }
    }
  `, styleSheet.cssRules.length);
}