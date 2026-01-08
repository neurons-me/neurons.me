import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const CodeBreakersPage = () => {
  return (
    <div style={{ padding: '1.16rem', textAlign: 'center' }}>
      <Link to="/" style={imageLinkStyle}>
        <img src="https://neurons.me/neurons.me.png" alt="Neurons Logo" style={imageStyle} />
      </Link>
      <h1>C0deBreakers</h1>
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
        C0deBreakers is our dedicated development team, building decentralized, open-source technologies that push boundaries.
      </p>
      <div style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '24px' }}>
        解码 未来的系统
      </div>
      <div style={{ marginTop: '42px' }}>
        <Button
          component={Link}
          to="/about"
          variant="outlined"
          sx={{
            marginRight: '12px',
            marginTop: '12px',
            marginBottom: '12px',
            textTransform: 'none',
          }}
        >
          About Neurons.me
        </Button>
        <Button
          component={Link}
          to="/team"
          variant="outlined"
          sx={{
            marginRight: '12px',
            marginTop: '12px',
            marginBottom: '12px',
            textTransform: 'none',
          }}
        >
          Meet the Team
        </Button>
        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          sx={{
            marginRight: '12px',
            marginTop: '12px',
            marginBottom: '12px',
            textTransform: 'none',
          }}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

const iconLinkStyle = {
  fontSize: '28px',
  opacity: 0.9,
  transition: 'opacity 0.3s ease, color 0.3s ease',
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

const iconContainerStyle = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

export default CodeBreakersPage;