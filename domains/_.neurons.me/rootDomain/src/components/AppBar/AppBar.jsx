import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  IconButton,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import CampaignIcon from '@mui/icons-material/Campaign';
import BrushIcon from '@mui/icons-material/Brush';
import PublicIcon from '@mui/icons-material/Public';
import MapIcon from '@mui/icons-material/Map';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useThemeToggle } from '../../context/ThemeContext';

const drawerWidth = 240;

const manualRoutes = {
  "Home": {
    "Home": "/home",
    "About": "/about",
    "Contact": "/contact"
  },
  "Open Source": {
    "Ecosystem": { icon: <PublicIcon sx={{ mr: 1, color: '#888' }} />, path: "/open-source/ecosystem" },
    "Roadmap": { icon: <MapIcon sx={{ mr: 1, color: '#888' }} />, path: "/open-source/roadmap" },
    "How to Contribute": { icon: <VolunteerActivismIcon sx={{ mr: 1, color: '#888' }} />, path: "/open-source/contributing" },
    //"Governance": "/open-source/governance",
  },
  "All.This": {
    "all.this": { icon: <Box component="img" src="/media/all-this/webp/all.this.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />, path: "/all-this/" },
    "this.me": { icon: <Box component="img" src="/media/all-this/webp/this.me.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />, path: "/all-this/this-me" },
    "this.wallet": {
      icon: <Box component="img" src="/media/all-this/webp/this.wallet.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-wallet"
    },
    "this.img": {
      icon: <Box component="img" src="/media/all-this/webp/this.img.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-img"
    },
    "this.audio": {
      icon: <Box component="img" src="/media/all-this/webp/this.audio.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-audio",
    },
    "this.blockchain": {
      icon: <Box component="img" src="/media/all-this/webp/this.blockchain.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-blockchain"
    },
    "this.pixel": {
      icon: <Box component="img" src="/media/all-this/webp/this.pixel.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-pixel"
    },
    "this.video": {
      icon: <Box component="img" src="/media/all-this/webp/this.video.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-video"
    },
    "this.DOM": {
      icon: <Box component="img" src="/media/all-this/webp/this.DOM.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-DOM"
    },
    "this.dictionaries": {
      icon: <Box component="img" src="/media/all-this/webp/this.dictionaries.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-dictionaries"
    },
    "this.env": {
      icon: <Box component="img" src="/media/all-this/webp/this.env.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-env"
    },
    "this.GUI": {
      icon: <Box component="img" src="/media/all-this/webp/this.gui.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-GUI"
    },
    "this.text": {
      icon: <Box component="img" src="/media/all-this/webp/this.text.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-text"
    },
    "this.url": {
      icon: <Box component="img" src="/media/all-this/webp/this.url.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-url"
    },
    "this.dir": {
      icon: <Box component="img" src="/media/all-this/webp/this.dir.webp" sx={{ width: 22, height: 22, mr: 1, opacity: 0.9 }} />,
      path: "/all-this/this-dir"
    }
  },
  "Netget": {
    "Netget": {
      icon: <PublicIcon sx={{ mr: 1, color: '#888' }} />,
      path: "https://netget.me",
      external: true
    }
  },
  "Business Solutions": {
    "Business Solutions": "/business-solutions",
    "Getting your Data Ready": { icon: <BarChartIcon sx={{ mr: 1, color: '#888' }} />, path: "/business/data" },
    "AI Integration": { icon: <SmartToyIcon sx={{ mr: 1, color: '#888' }} />, path: "/business/ai" },
    "System Development": { icon: <BuildIcon sx={{ mr: 1, color: '#888' }} />, path: "/business/system-development" },
    "Cyber Security": { icon: <SecurityIcon sx={{ mr: 1, color: '#888' }} />, path: "/business/cyber-security" },
    "Marketing Solutions": { icon: <CampaignIcon sx={{ mr: 1, color: '#888' }} />, path: "/business/marketing" },
    "Branding": { icon: <BrushIcon sx={{ mr: 1, color: '#888' }} />, path: "/business/branding" }
  }
};

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();

  const { isDarkMode, toggleTheme } = useThemeToggle();

  React.useEffect(() => {
    if (location.pathname.startsWith('/open-source')) {
      setSelectedSection('Open Source');
    } else if (location.pathname.startsWith('/business')) {
      setSelectedSection('Business Solutions');
    } else if (location.pathname.startsWith('/all-this')) {
      setSelectedSection('All.This');
    } else {
      setSelectedSection('Home');
    }
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: { xs: 1, md: 0 } }}>
      <Box sx={{ px: 1.2, py: 3.2, mt: -0 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="section-select-label">Section</InputLabel>
          <Select
            labelId="section-select-label"
            id="section-select"
            value={selectedSection}
            label="Section"
            onChange={(e) => {
              const section = e.target.value;
              setSelectedSection(section);
              if (section === 'Home') navigate('/home');
              else if (section === 'Open Source') navigate('/open-source/ecosystem');
              else if (section === 'All.This') navigate('/all-this');
              else if (section === 'Netget') window.open('https://netget.me', '_blank');
              else if (section === 'Business Solutions') navigate('/business-solutions');
            }}
          >
            <MenuItem value="Home">Home</MenuItem>
            <MenuItem value="Business Solutions">Business Solutions</MenuItem>
            <MenuItem value="Open Source">Open Source Tech</MenuItem>
            <MenuItem value="All.This">All.This</MenuItem>
            <MenuItem value="Netget">Netget</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Divider />

      <List>
        {Object.entries(manualRoutes[selectedSection] || {}).map(([label, value]) => {
          const path = typeof value === 'string' ? value : value.path;
          const icon = typeof value === 'object' && value.icon ? value.icon : null;
          const external = typeof value === 'object' && value.external;
          if (external || path.startsWith('http')) {
            return (
              <a
                key={label}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemButton
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: theme.palette.text.primary,
                      fontWeight: 400,
                      display: 'flex',
                      alignItems: 'center'
                    }
                  }}
                >
                  {icon}
                  <ListItemText primary={label} />
                </ListItemButton>
              </a>
            );
          }
          return (
            <ListItemButton
              key={label}
              component={Link}
              to={path}
              selected={location.pathname === path}
              sx={{
                '& .MuiListItemText-primary': {
                  color: location.pathname === path ? 'rgb(0,154,137)' : theme.palette.text.primary,
                  fontWeight: location.pathname === path ? 500 : 400,
                  display: 'flex',
                  alignItems: 'center'
                }
              }}
            >
              {icon}
              <ListItemText primary={label} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
      <Box sx={{ display: 'flex' }}>
        {/* Top AppBar */}
        <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : theme.palette.background.paper,
          borderBottom: `1px solid ${theme.custom.border}`,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar variant="dense">
        {isMobile && (
        <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
       >
      <MenuIcon sx={{ color: theme.palette.icon.main }} />
      </IconButton>
      )}
    <Link to="/home" style={{ textDecoration: 'none', flexGrow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/media/neurons-grey.png"
          alt="neurons.me logo"
          style={{ height: 42, marginRight: 5 }}
        />
        <Typography variant="h6" noWrap component="div" sx={{ color: theme.palette.text.primary }}>
          neurons.me
        </Typography>
      </Box>
    </Link>
    <IconButton onClick={toggleTheme} sx={{ color: theme.palette.icon.main }}>
      {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
    </IconButton>
      </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Temporary drawer for mobile */}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                mt: 6,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}

        {/* Permanent drawer for desktop */}
        {!isMobile && (
          <Drawer
            variant="permanent"
            open
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { width: drawerWidth, top: 48 },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </Box>
  );
}