import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon

// Updated pages array without Docs
const pages = [
  { title: 'All.This', link: '/all.this' },
  { title: 'i.mLearning', link: '/i.mlearning/index.html' },
  { title: 'neurons.me', link: '/neurons.me/index.html' },
  { title: 'Cleaker', link: '/cleaker/index.html' },
  { title: 'NetGet', link: '/netget/index.html' },
];

function NeuronsAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Open the menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Close the menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link
            href="https://neurons.me"
            target="_blank"
            underline="none"
      >
            <img
              src="/neurons.me.webp"
              alt="neurons.me"
              style={{
                display: 'flex',
                width: 40,
                height: 40,
                marginRight: 8,
              }}
            />
          </Link>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
                display: { xs: 'none', md: 'block' },
              }}
            >
              docs.neurons.me
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.link}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
            {/* Add Home Icon at the end */}
            <IconButton
              component={Link}
              to="/"
              sx={{
                color: 'white',
                marginLeft: 2,
              }}
            >
              <HomeIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={page.link}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit', // Match current theme
                    }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
              {/* Add Home Icon in the mobile menu */}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NeuronsAppBar;
