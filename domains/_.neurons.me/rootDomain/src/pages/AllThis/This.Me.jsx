import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { FaGithub, FaNpm } from 'react-icons/fa';

export default function ThisMePage() {
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
  

  const codeBlockStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f5f5f5',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '6px',
    padding: '12px',
    fontFamily: 'monospace',
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    overflowX: 'auto',
    width: '100%',
    marginTop: '8px',
  };

  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 4 }, py: { xs: 4, md: 6 } }}>
      <Box textAlign="center">
        <Box
          component="img"
          src="/media/all-this/this.me.png"
          alt="this.me"
          sx={{
            maxWidth: 277,
            width: '100%',
            margin: '0 auto',
            mb: 2,
          }}
        />

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          this.me
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            fontStyle: 'italic',
            color: 'text.secondary',
            maxWidth: 400,
            mx: 'auto',
            mb: 2,
          }}
        >
          "When a user declares &quot;I am .me,&quot; their digital existence is affirmed and recorded in the system."
        </Typography>

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
    href="https://github.com/neurons-me/this.me"
    target="_blank"
    rel="noopener noreferrer"
    sx={buttonStyle}
  >
    <FaGithub style={{ marginRight: '8px' }} />
    GitHub Repository
  </Box>
  <Box
    component="a"
    href="https://www.npmjs.com/package/this.me"
    target="_blank"
    rel="noopener noreferrer"
    sx={buttonStyle}
  >
    <FaNpm style={{ marginRight: '8px' }} />
    npm Module
  </Box>
</Box>


        {/* Installation & CLI */}
        <Box sx={{ textAlign: 'left', mx: 'auto', maxWidth: 600, mb: 4 }}>
          <Typography variant="body2" fontWeight={600} gutterBottom>
            Install npm package globally:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It must be installed globally because <code>this.me</code> runs on localhost to store and hash identities securely in your local environment.
          </Typography>
          <Box sx={codeBlockStyle}>npm i -g this.me</Box>

          <Typography variant="body2" fontWeight={600} mt={3} gutterBottom>
            Run in your terminal:
          </Typography>
          <Box sx={codeBlockStyle}>me</Box>
        </Box>

    {/* Tagline */}
    <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            fontSize: { xs: '1.6rem', sm: '2rem' },
            mb: 2,
            maxWidth: 300,
            mx: 'auto',
          }}
        >
          I am .Me
        </Typography>

        <Typography
          component="blockquote"
          sx={{
            fontStyle: 'italic',
            color: '#555',
            maxWidth: 610,
            textAlign: 'left',
            mx: 'auto',
            mb: 4,
          }}
        >
          <strong>.me</strong> is the subject. It’s the one who says “I”. It is the private key, the biography, the will.
          <br />
          <strong>.me</strong> is local, silent, static. It doesn’t “live” or listen. It is only queried — and it affirms.
        </Typography>
        <Box sx={{ textAlign: 'left', mx: 'auto', maxWidth: 600, mb: 4 }}>
          <Typography>
          <strong>.me</strong> is your identity that lives on your machine, under your control. 
          It holds attributes, relationships, and keys that define who you are—and crucially, <strong>how you relate to others</strong>.
        Each <strong>.me</strong> instance can pair with other authorities or identities using its <strong>cryptographic keys</strong>, establishing <strong>trust through signatures and endorsements</strong>. 
        Instead of logging in through third-party services, you can validate your identity or vouch for someone else’s using these key exchanges.
         This enables a decentralized trust model where relationships are verifiable, persistent, and portable.
      </Typography>
        </Box>

        <Box sx={{ textAlign: 'left', mx: 'auto', maxWidth: 600, mt: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Command Line Options:
          </Typography>

          <Box sx={codeBlockStyle}>me create</Box>
          <Typography variant="body2" gutterBottom>
            <strong>Description:</strong> Creates a new .me identity.
            <br />
            <strong>Flow:</strong> Prompts for username and hash (secret key), then saves an encrypted file at ~/.this/me/username.me.
          </Typography>

          <Box sx={{ my: 2, borderBottom: '1px dashed', borderColor: 'divider' }} />

          <Box sx={codeBlockStyle}>me show [username]</Box>
          <Typography variant="body2" gutterBottom>
            <strong>Description:</strong> Shows the decrypted contents of an identity.
            <br />
            <strong>Flow:</strong>
            <ul style={{ marginTop: 0 }}>
              <li>If [username] is not provided, it prompts for it.</li>
              <li>Always prompts for the hash to unlock the identity.</li>
              <li>If successful, prints the identity as JSON.</li>
            </ul>
          </Typography>

          <Box sx={{ my: 2, borderBottom: '1px dashed', borderColor: 'divider' }} />

          <Box sx={codeBlockStyle}>me list</Box>
          <Typography variant="body2" gutterBottom>
            <strong>Description:</strong> Lists all local .me identities.
            <br />
            <strong>Flow:</strong> Reads the ~/.this/me directory and prints all .me files (usernames).
          </Typography>
        </Box>
      </Box>

      {/* Main content text */}
      <Box sx={{ textAlign: 'left', mt: 2 }}>
        <Box sx={{ my: 5, borderBottom: '1px solid', borderColor: 'divider' }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          The Problem: Decentralized Yet Trustworthy
        </Typography>
        <Typography paragraph>
          Identity, by its nature, is both <strong>personal</strong> and <strong>relational</strong>. On the one hand, we want the <strong>freedom to define ourselves</strong> without <strong>external constraints</strong>. On the other, our identities must often be <strong>validated by trusted authorities</strong> to engage in <strong>meaningful transactions</strong>, whether signing a digital contract or interacting with a service.
        </Typography>
        <Typography paragraph>
          How can we create an identity system that respects <strong>personal sovereignty</strong> while ensuring <strong>trust</strong> and <strong>usability</strong> in a <strong>networked world</strong>?
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Enter This.Me:
        </Typography>
        <Typography paragraph>
          This.Me offers a framework for identity creation and interaction that revolves around two core principles:
        </Typography>
        <ol style={{ paddingLeft: '1.2rem' }}>
          <li>
            <strong>Freedom to Declare:</strong> Anyone can create a <code>.me</code> instance and define their identity without external permissions.
          </li>
          <li>
            <strong>Trust Anchors:</strong> Central authorities (like Cleaker) can validate the identity as needed, without compromising sovereignty.
          </li>
        </ol>
        <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/all-this" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          ← all.this
        </Link>
        <Link to="/all-this/this-wallet" style={{ color: '#009a89', textDecoration: 'none', fontWeight: 'bold' }}>
          this.wallet →
        </Link>
      </Box>
        {/* You can add the remaining sections as-is but wrap them similarly in `Box` with `sx={{ mb: 4 }}` and responsive widths */}
      </Box>

      <Typography
        sx={{
          fontSize: '0.85rem',
          color: '#777',
          mt: 6,
          textAlign: 'center',
        }}
      >
        Author: suiGn / neurons.me <br />
        License: MIT —{' '}
        <a href="https://www.npmjs.com/package/this.me" target="_blank" rel="noopener noreferrer">
          this.me
        </a>
      </Typography>
    </Container>
  );
}
