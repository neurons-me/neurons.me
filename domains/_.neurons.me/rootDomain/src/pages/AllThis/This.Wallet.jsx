import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const ThisWallet = () => {
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
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#eee',
    },
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
      <Box component="img" src="/media/all-this/this.wallet.png" alt="this.wallet" sx={{ maxWidth: '244px', marginBottom: 2 }} />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
      This.Wallet</Typography>
      <Typography variant="subtitle1" gutterBottom>Crypto Wallets for <strong>.me</strong></Typography>

      <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 2,
    mb: 4,
  }}
>
  <Box
    component="a"
    href="https://github.com/neurons-me/this.wallet"
    target="_blank"
    rel="noopener noreferrer"
    sx={buttonStyle}
  >
    <FaGithub style={{ marginRight: '8px' }} />
    GitHub Repository
  </Box>
  <Box
    component="a"
    href="https://www.npmjs.com/package/this.wallet"
    target="_blank"
    rel="noopener noreferrer"
    sx={buttonStyle}
  >
    <FaNpm style={{ marginRight: '8px' }} />
    npm Module
  </Box>
</Box>


      <Box sx={{ textAlign: 'left', display: 'inline-block', marginTop: '24px' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: '4px' }}>
          Install npm package:
        </Typography>
        <Box sx={commandBoxStyle}>npm i this.wallet</Box>

        <Typography variant="body2" sx={{ fontWeight: 600, marginTop: '16px', marginBottom: '4px' }}>
          Import this.wallet in your project:
        </Typography>
        <Box sx={commandBoxStyle}>import Wallet from 'this.wallet'</Box>
      </Box>

      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/all-this/this-me" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← this.me
        </Link>
        <Link to="/all-this/this-img" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          this.img →
        </Link>
      </Box>

      <Typography sx={{ fontSize: '0.9rem', color: '#777', marginTop:'21px'}}>
            Author: suiGn / neurons.me<br />
            License: MIT — <a href="https://www.npmjs.com/package/this.wallet">this.wallet</a>
          </Typography>
    </Box>
  );
};

export default ThisWallet;