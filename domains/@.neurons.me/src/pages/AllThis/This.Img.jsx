import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const ThisImg = () => {
  const theme = useTheme();

  const iconLinkStyle = {
    color: theme.palette.text.primary,
    fontSize: '26px',
    marginRight: '16px',
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
      <Box component="img" src="/media/all-this/this.img.png" alt="this.wallet" sx={{ maxWidth: '277px', marginBottom: 2 }} />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>This.Img</Typography>
      <Typography variant="subtitle1" gutterBottom> Designed to standardize image data, transforming it into a structured format that is readily accessible and interpretable by machine learning models.</Typography>

      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <a href="https://github.com/neurons-me/this.img" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          border: `1px solid ${theme.palette.text.primary}`,
          borderRadius: '5px',
          color: theme.palette.text.primary,
          textDecoration: 'none',
          fontSize: '14px',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}>
          <FaGithub style={{ fontSize: '18px' }} />
          GitHub Repository
        </a>
        <a href="https://www.npmjs.com/package/this.img" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          border: `1px solid ${theme.palette.text.primary}`,
          borderRadius: '5px',
          color: theme.palette.text.primary,
          textDecoration: 'none',
          fontSize: '14px',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}>
          <FaNpm style={{ fontSize: '18px' }} />
          npm Module
        </a>
      </Box>

      <Box sx={{ textAlign: 'left', display: 'inline-block', marginTop: '24px' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: '4px' }}>
          Install npm package:
        </Typography>
        <Box sx={commandBoxStyle}>npm i this.img</Box>

        <Typography variant="body2" sx={{ fontWeight: 600, marginTop: '16px', marginBottom: '4px' }}>
          Import this.img in your project:
        </Typography>
        <Box sx={commandBoxStyle}>import Img from 'this.img'</Box>
      </Box>

      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/all-this/this-wallet" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← this.wallet
        </Link>
        <Link to="/all-this/this-audio" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          this.audio →
        </Link>
      </Box>

      <Typography sx={{ fontSize: '0.9rem', color: '#777', marginTop:'21px'}}>
            Author: suiGn / neurons.me<br />
            License: MIT — <a href="https://www.npmjs.com/package/this.img">this.img</a>
          </Typography>
    </Box>
  );
};

export default ThisImg;