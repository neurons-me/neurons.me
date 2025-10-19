import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGithub, FaNpm } from 'react-icons/fa';

const ThisPixel = () => {
  const theme = useTheme();

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
      <Box
        component="img"
        src="/media/all-this/this.pixel.png"
        alt="this.pixel"
        sx={{
          maxWidth: '277px',
          height: 'auto',
          marginBottom: 2,
          filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
        }}
      />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        This.Pixel
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Pixel-level control utilities. Manipulate canvas, pixel streams, or render matrices with precision tools.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 3 }}>
        <a
          href="https://github.com/neurons-me/this.pixel"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '6px',
            color: theme.palette.text.primary,
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'background-color 0.3s ease',
          }}
        >
          <FaGithub style={{ marginRight: '8px' }} />
          GitHub Repository
        </a>
        <a
          href="https://www.npmjs.com/package/this.pixel"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '6px',
            color: theme.palette.text.primary,
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'background-color 0.3s ease',
          }}
        >
          <FaNpm style={{ marginRight: '8px' }} />
          npm Module
        </a>
      </Box>

      <Box sx={{ textAlign: 'left', display: 'inline-block', marginTop: '24px' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: '4px' }}>
          Install npm package:
        </Typography>
        <Box sx={{
          backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '6px',
          padding: '12px',
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          color: theme.palette.text.primary,
        }}>
          npm i this.pixel
        </Box>

        <Typography variant="body2" sx={{ fontWeight: 600, marginTop: '16px', marginBottom: '4px' }}>
          Import this.pixel in your project:
        </Typography>
        <Box sx={{
          backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '6px',
          padding: '12px',
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          color: theme.palette.text.primary,
        }}>
          import Pixel from 'this.pixel'
        </Box>
      </Box>

      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/all-this/this-blockchain" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← this.blockchain
        </Link>
        <Link to="/all-this/this-video" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          this.video →
        </Link>
      </Box>
      <Typography sx={{ fontSize: '0.9rem', color: '#777', marginTop:'21px'}}>
            Author: suiGn / neurons.me<br />
            License: MIT — <a href="https://www.npmjs.com/package/this.pixel">this.pixel</a>
          </Typography>
    </Box>
  );
};

export default ThisPixel;
