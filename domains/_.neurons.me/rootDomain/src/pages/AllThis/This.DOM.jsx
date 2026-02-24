

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const ThisDOM = () => {
  const theme = useTheme();

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 16px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '6px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  };

  const commandBoxStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '6px',
    padding: '12px',
    marginTop: '12px',
    fontFamily: 'monospace',
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    display: 'inline-block',
  };

  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
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
      <Box component="img" src="/media/all-this/this.DOM.png" alt="this.DOM" sx={{ maxWidth: '277px', marginBottom: 2 }} />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        This.DOM
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Utilities for intuitive and minimal DOM manipulation, built for simplicity and performance.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <a href="https://github.com/neurons-me/this.DOM" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          <FaGithub style={{ marginRight: '8px' }} />
          GitHub Repository
        </a>
        <a href="https://www.npmjs.com/package/this.DOM" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          <FaNpm style={{ marginRight: '8px' }} />
          npm Module
        </a>
      </Box>

      <Box sx={{ textAlign: 'left', display: 'inline-block', marginTop: '24px' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: '4px' }}>
          Install npm package:
        </Typography>
        <Box sx={commandBoxStyle}>npm i this.DOM</Box>

        <Typography variant="body2" sx={{ fontWeight: 600, marginTop: '16px', marginBottom: '4px' }}>
          Import this.DOM in your project:
        </Typography>
        <Box sx={commandBoxStyle}>import DOM from 'this.DOM'</Box>
      </Box>

      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <RouterLink to="/all-this/this-video" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← this.video
        </RouterLink>
        <RouterLink to="/all-this/this-dictionaries" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          this.dictionaries →
        </RouterLink>
      </Box>

      <Typography sx={{ fontSize: '0.9rem', color: '#777', marginTop:'21px'}}>
            Author: suiGn / neurons.me<br />
            License: MIT — <a href="https://www.npmjs.com/package/this.dom">this.DOM</a>
          </Typography>
    </Box>
  );
};

export default ThisDOM;