//src/pages/Introduction/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:admin@neurons.me?subject=${encodeURIComponent('neurons.me - Info Request')}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page" style={pageStyle}>
      {/* Logo */}
      <Link to="/" style={imageLinkStyle}>
        <img 
          src="/media/neurons-grey.png" 
          alt="Neurons Logo" 
          style={imageStyle}
        />
      </Link>

      <h1>Contact Us</h1>
      <p>
        Whether you're seeking our services, looking to collaborate, or have questions about our open-source work — we'd love to hear from you. Reach out directly or connect with us through our social platforms.
      </p>

      <form style={formStyle} onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle} 
          required
        />
        <textarea 
          placeholder="Your message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyle}
          required
        ></textarea>
        <button type="submit" style={buttonStyle}>Send</button>
      </form>

      {/* Social Icons */}
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
      <a 
        href="https://wa.me/527291671525?text=neurons.me%20-%20Info%20Request" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          marginTop: '20px',
          display: 'inline-block',
          padding: '10px 20px',
          border: '2px solid rgb(0, 154, 137)',
          color: 'rgb(0, 154, 137)',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          backgroundColor: 'transparent'
        }}
      >
        Chat on WhatsApp
      </a>
    </div>
  );
};

const pageStyle = {
  padding: '42px',
  textAlign: 'center',
  minHeight: '100vh',
  overflowY: 'auto',
};

const imageStyle = {
  width: '120px',
  height: 'auto',
  marginBottom: '5px',
  cursor: 'pointer',
};

const imageLinkStyle = {
  display: 'inline-block',
  marginBottom: '8px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '30px',
};

const inputStyle = {
  width: '100%',
  maxWidth: '400px',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  width: '100%',
  maxWidth: '400px',
  padding: '10px',
  height: '120px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  color: '#111',
  border: 'none',
  cursor: 'pointer',
};

const iconContainerStyle = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const iconLinkStyle = {
  color: '#888',
  fontSize: '28px',
  transition: 'color 0.3s ease',
};

export default Contact;