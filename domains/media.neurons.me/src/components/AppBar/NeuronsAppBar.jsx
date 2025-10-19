import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy'; // Icon for Neurobot
import CollectionsIcon from '@mui/icons-material/Collections'; // Icon for All Medias

const pages = [
  { title: 'Medias', link: '/media', icon: <CollectionsIcon /> },
  { title: 'Neurobot', link: '/neurobot', icon: <SmartToyIcon /> },
  { title: 'Home', link: 'https://neurons.me', icon:  <HomeIcon /> },

];

export default function NeuronsAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isMobile = useMediaQuery('(max-width:987px)');

  // Menu handlers
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'background.nav',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 16px',
          }}
        >
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img
                src="/neurons.me.png"
                alt="neurons.me"
                style={{ width: 34, height: 34, marginRight: 8 }}
              />
            </Link>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              media.neurons.me
            </Typography>
          </Box>

          {/* Desktop Links */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
            {/* Standard Page Links */}
            {pages.map((page) => (
            <Button
              key={page.title}
              component={Link}
              to={page.link}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.2)', // Faint border
                  paddingLeft: 2, // Adds spacing after the border
                  gap: 1, // Ensures space between icon and text
                  }}
                >
            {page.icon && <span style={{ marginRight: 4 }}>{page.icon}</span>}
            {page.title}
          </Button>
            ))}

            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map((page) => (
          <MenuItem key={page.title} onClick={handleCloseNavMenu}>
            <Typography
              textAlign="center"
              component={Link}
              to={page.link}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {page.title}
            </Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography
            textAlign="center"
            component={Link}
            to="/neurobot"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SmartToyIcon sx={{ marginRight: 1 }} /> Neurobot
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography
            textAlign="center"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <HomeIcon sx={{ marginRight: 1 }} /> Home
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}