// File: src/pages/OpenSource/Contributing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contributing = () => {
    return (
        <div style={containerStyle}>
            <Link to="/" style={logoLinkStyle}>
                <img 
                    src="/media/contribute_neurons.png" 
                    alt="Neurons Logo" 
                    style={logoStyle}
                />
            </Link>

            <h1>Contribute to Neurons.me</h1>
            <div style={{ color: 'var(--text-color)', fontWeight: 500 }}>Build; Contribute; Grow;</div>
            <p>
                We welcome contributions from developers, designers, writers, and anyone passionate about building
                a more decentralized and user-centric future.
            </p>
            <p>pero 
                Whether you're fixing bugs, improving documentation, or building new features, your help is appreciated.
            </p>
            <p>
                Visit our <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer">GitHub organization</a> to get started.
            </p>

            <p style={{ marginTop: '40px', fontWeight: 'bold' }}>Follow Us in Our Social Medias</p>
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

            <Link to="/contact-us" style={buttonStyle}>Contact Us</Link>
        </div>
    );
};

const containerStyle = {
    padding: '48px',
    textAlign: 'center',
    color: 'var(--text-color)',
    minHeight: '100vh',
    backgroundColor: 'var(--background-color)',
};

const logoLinkStyle = {
    display: 'inline-block',
    marginBottom: '20px',
};

const logoStyle = {
    width: '300px',
    height: 'auto',
    filter: 'var(--image-filter)',
};

const buttonStyle = {
    marginTop: '30px',
    display: 'inline-block',
    padding: '12px 24px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '16px',
    backgroundColor: 'transparent',
};

const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '28px',
    marginTop: '16px',
};

const iconLinkStyle = {
    color: 'var(--text-color)',
    transition: 'color 0.3s ease',
};

export default Contributing;