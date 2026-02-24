import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import CampaignIcon from '@mui/icons-material/Campaign';
import BrushIcon from '@mui/icons-material/Brush';

const BusinessSolutions = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const businessSolutionsStyle = {
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

  const imageLinkStyle = {
    marginBottom: '1rem',
  };

  const imageStyle = {
    width: '150px',
    height: 'auto',
  };

  const contactButtonStyle = {
    display: 'inline-block',
    margin: '1rem 0 2rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#009a89',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    width: '100%',
  };

  const backButtonStyle = {
    color: '#009a89',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const clientLogoStyle = {
    height: '42px',
    width: 'auto',
    opacity: 0.6,
    transition: 'opacity 0.3s',
    cursor: 'pointer',
  };

  const handleGridClick = (slug) => {
    navigate(`/${slug}`);
  };

  return (
    <div style={businessSolutionsStyle}>
      {/* Canvas for Particles */}
      <canvas ref={canvasRef} style={canvasStyle}></canvas>

      {/* Logo Image Linked to Home */}
      <Link to="/" style={imageLinkStyle}>
      <img src="/neurons.me.png" alt="Neurons Logo" style={{ width: '103px', height: 'auto' }} />
      </Link>

      <h1>Business Solutions</h1>
      <div style={{
        marginTop: '2px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaGithub />
        </a>
        <a href="https://instagram.com/neurons.me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaInstagram />
        </a>
        <a href="https://facebook.com/neurons.me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com/company/neurons-me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaLinkedinIn />
        </a>
      </div>
      <p>Discover how <strong>neurons.me</strong> can help your business integrate decentralized solutions and drive innovation. We offer tools, APIs, and strategies tailored for enterprises seeking <strong>algorithmic</strong> and user-centric technology.</p>

      {/* Elegant Grid Section with Links to MDX */}
      <div style={gridContainerStyle}>

      <div className="grid-item" onClick={() => handleGridClick('business/data')}>
          <h3><BarChartIcon style={{ verticalAlign: 'middle', marginRight: '8px', color: '#888' }} />Getting Your Data Ready.</h3>
          <p>We help you collect, clean, and structure your business data — the first step toward becoming data-driven and ready for AI integration.</p>
        </div>

      <div className="grid-item" onClick={() => handleGridClick('business/ai')}>
          <h3><SmartToyIcon style={{ verticalAlign: 'middle', marginRight: '8px', color: '#888' }} />AI Integration</h3>
          <p>Turn structured data into smart decisions by integrating AI to automate, optimize, and grow.</p>
        </div>

        <div className="grid-item" onClick={() => handleGridClick('business/system-development')}>
          <h3><BuildIcon style={{ verticalAlign: 'middle', marginRight: '8px', color: '#888' }} />System Development and Administration</h3>
          <p>Custom development and administrative solutions to ensure your systems are scalable and secure.</p>
        </div>

        <div className="grid-item" onClick={() => handleGridClick('business/cyber-security')}>
        <h3><SecurityIcon style={{ verticalAlign: 'middle', marginRight: '8px', color: '#888' }} />Cyber Security and Infrastructure Protection</h3>
        <p>Ensure the integrity and security of your digital assets with modern infrastructure and cybersecurity strategies.</p>
      </div>

        <div className="grid-item" onClick={() => handleGridClick('business/marketing')}>
          <h3><CampaignIcon style={{ verticalAlign: 'middle', marginRight: '8px', color: '#888' }} />Marketing Solutions in the Digital World</h3>
          <p>Boost visibility, engagement, and conversion through data-driven digital marketing strategies.</p>
        </div>

        <div className="grid-item" onClick={() => handleGridClick('business/branding')}>
          <h3><BrushIcon style={{ verticalAlign: 'middle', marginRight: '8px', color: '#888' }} />Professional Branding and Guidelines</h3>
          <p>Craft a cohesive brand identity that resonates with your audience and stands out in the market.</p>
        </div>
      </div>

      <div style={{ marginTop: '8px' }}>
        <p style={{ marginBottom: '21px', fontWeight: 'bold' }}>Trusted by forward-thinking teams</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '21px',
        }}>
          <a href="https://davidlachapelleamor.com/exposicion/#colaboradores" target="_blank" rel="noopener noreferrer">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniversal/7WVN43LAWJC23MRHXYKYOFWNLA.jpg" alt="David LaChapelle" style={clientLogoStyle} />
          </a>
          <a href="https://www.linkedin.com/company/auto-traslados-sin-rodar/" target="_blank" rel="noopener noreferrer">
            <img src="/media/auto_traslados_sin_rodar_logo_neurons_me-removebg-preview.png" alt="Auto Traslados Sin Rodar" style={clientLogoStyle} />
          </a>
          <a href="https://www.flaunt.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://d3g9pb5nvr3u7.cloudfront.net/sites/53d11ffdc15252005dffeb73/1497222710/256.jpg" alt="Flaunt Magazine" style={clientLogoStyle} />
          </a>
          <a href="https://www.linkedin.com/company/fulltrailer/" target="_blank" rel="noopener noreferrer">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQGI7dNK-Y2QQg/company-logo_100_100/B56ZWvKMXUHEAQ-/0/1742400441107/fulltrailer_logo?e=1754524800&amp;v=beta&amp;t=fJTY6ajDfVa219pO87twAA5AclbEzG2u41jBng0s_sQ" alt="Fulltrailer" style={clientLogoStyle} />
          </a>
          <a href="https://www.hyundaisureste.mx" target="_blank" rel="noopener noreferrer">
            <img src="/media/hyundai.png" alt="Hyundai Sureste México" style={clientLogoStyle} />
          </a>
          <a href="https://www.facebook.com/MexicoEncuestaOficial/" target="_blank" rel="noopener noreferrer">
            <img src="/media/mexicoEncuesta.png" alt="México Encuesta Oficial" style={clientLogoStyle} />
          </a>
        </div>
      </div>

      <Link to="/contact" style={contactButtonStyle}>Contact Us</Link>

      <style>
        {`
          .grid-item {
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: transform 0.2s ease;
            border: 1px solid #ddd;
          }

          .grid-item:hover {
            transform: scale(1.03);
          }
        `}
      </style>
    </div>
  );
};

export default BusinessSolutions;
