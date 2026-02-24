import React from 'react'
import { Link } from 'react-router-dom'
import AllThisOptions from "../../components/AllThis/AllThisOptions";
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import { useTheme } from '@mui/material/styles';

export default function AllThis() {
  const theme = useTheme();

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: theme.palette.mode === 'dark' ? '#2c1a00' : '#fff8e1',
        border: '1px solid #f4b400',
        color: '#f4b400',
        padding: '10px 16px',
        borderRadius: '4px',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        This repository is in continuous development and may be unstable.
      </div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
          <img
            src="/media/all-this/webp/all.this.webp"
            alt="Neurons Logo"
            style={{ width: '300px', height: 'auto', filter: 'var(--image-filter)' }}
          />
        </Link>
      </div>
      <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
        All.This Library
      </h1>
      <blockquote style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#555' }}>
        “A modular system to make data usable and intelligent by design.”
      </blockquote>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '2rem' }}>
        <a href="https://github.com/neurons-me/all.this" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaGithub />
        </a>
        <a href="https://www.npmjs.com/package/all.this" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <SiNpm />
        </a>
        <a href="https://www.facebook.com/all.this.stuff" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
          <FaFacebookF />
        </a>
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          What is all.this? 
        </h2>
        <p>
          <code>all.this</code> is a collection of modular JavaScript libraries designed to handle various types of data — from audio and images to text and blockchain interactions. It's the foundation for preparing and normalizing input for machine learning and AI applications.
        </p>
        <div style={{
          marginTop: '12px',
          backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '6px',
          padding: '12px',
          width: '55%',
          display: 'inline-block',
          textAlign: 'left',
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          color: theme.palette.text.primary,
        }}>
          <div>npm install all.this</div>
        </div>
  
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Explore Submodules
        </h2>
        <AllThisOptions />
      </section>
    </div>
  )
}