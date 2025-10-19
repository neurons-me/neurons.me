import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { API_Neurobot } from '../../config/configAPI';

const ConnectMedia = () => {
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState('');

  const handleAuthRedirect = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_Neurobot}/reddit/auth-url`);
      const data = await response.json();
      setAuthUrl(data.authUrl);
      setLoading(false);
      window.location.href = data.authUrl; // Redirect to Reddit Auth
    } catch (error) {
      console.error('Error fetching auth URL:', error);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Connect Your Media Accounts
      </Typography>
      <Typography variant="body1" gutterBottom>
        Start by connecting to Reddit to fetch media content.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAuthRedirect}
        disabled={loading}
        sx={{ marginTop: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Connect to Reddit'}
      </Button>
    </Box>
  );
};

export default ConnectMedia;