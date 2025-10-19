import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const ThisEnv = () => {
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
      <Box
        component="img"
        src="/media/all-this/this.env.png"
        alt="this.env"
        sx={{ maxWidth: '277px', marginBottom: 2 }}
      />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        This.Env
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        A robust utility to inspect, hash, and manage your runtime environment securely and consistently.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <a
          href="https://github.com/neurons-me/this.env"
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
          href="https://www.npmjs.com/package/this.env"
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
        <Box sx={commandBoxStyle}>npm i this.env</Box>

        <Typography variant="body2" sx={{ fontWeight: 600, marginTop: '16px', marginBottom: '4px' }}>
          Import this.env in your project:
        </Typography>
        <Box sx={commandBoxStyle}>import Env from 'this.env'</Box>
      </Box>

      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <RouterLink to="/this.GUI" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← this.GUI
        </RouterLink>
        <RouterLink to="/All.This" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          All.This →
        </RouterLink>
      </Box>

      <Typography sx={{ fontSize: '0.9rem', color: '#777', marginTop:'21px'}}>
            Author: suiGn / neurons.me<br />
            License: MIT — <a href="https://www.npmjs.com/package/this.env">this.env</a>
          </Typography>
    </Box>
  );
};

export default ThisEnv;