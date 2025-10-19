import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const ThisDir = () => {
  const theme = useTheme();

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
      <Box component="img" src="/media/all-this/this.dir.png" alt="this.dir" sx={{ maxWidth: '244px', marginBottom: 2 }} />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        This.Dir
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Organize and manage directory structures efficiently across environments.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <Link
          href="https://github.com/neurons-me/this.dir"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '8px 16px',
            border: `1px solid ${theme.palette.text.primary}`,
            borderRadius: '6px',
            color: theme.palette.text.primary,
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#eee',
            },
          }}
        >
          <FaGithub />
          GitHub Repository
        </Link>

        <Link
          href="https://www.npmjs.com/package/this.dir"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '8px 16px',
            border: `1px solid ${theme.palette.text.primary}`,
            borderRadius: '6px',
            color: theme.palette.text.primary,
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#eee',
            },
          }}
        >
          <FaNpm />
          NPM Module
        </Link>
      </Box>

      <Box sx={{ textAlign: 'left', display: 'inline-block', marginTop: '24px' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: '4px' }}>
          Install npm package:
        </Typography>
        <Box sx={commandBoxStyle}>npm i this.dir</Box>

        <Typography variant="body2" sx={{ fontWeight: 600, marginTop: '16px', marginBottom: '4px' }}>
          Import this.dir in your project:
        </Typography>
        <Box sx={commandBoxStyle}>import Dir from 'this.dir'</Box>
      </Box>

      <Typography sx={{ fontSize: '0.9rem', color: '#777', marginTop:'21px'}}>
            Author: suiGn / neurons.me<br />
            License: MIT — <a href="https://www.npmjs.com/package/this.dir">this.dir</a>
          </Typography>
    </Box>
  );
};

export default ThisDir;