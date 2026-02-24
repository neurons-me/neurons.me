import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <Toolbar />
        <Box
          sx={{
            flex: 1,
            maxWidth: '800px',
            margin: '0 auto',
            padding: { xs: 2, sm: 3 },
            width: '100%',
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;