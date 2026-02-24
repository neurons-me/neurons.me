// src/themes/theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0c343d',
    },
    secondary: {
      main: '#f50057',
    },
    icon: {
      main: '#6d6d6d', // Color sutil para los íconos en modo claro
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
      nav: '#ffffff'
    },
    link: {
      main: 'rgb(0, 154, 137)',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    pxToRem: (size) => `${size / 16}rem`,
  },
  custom: {
    border: 'rgba(0, 0, 0, 0.1)', // subtle border for light mode
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'rgb(0, 154, 137)',
          '&:visited': {
            color: 'rgb(0, 120, 110)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          a: {
            color: 'rgb(0, 154, 137)',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:visited': {
              color: 'rgb(0, 120, 110)',
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'rgb(0, 154, 137)',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
          '&:visited': {
            color: 'rgb(0, 120, 110)',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    icon: {
      main: '#b0b0b0',
    },
    background: {
      default: 'rgb(9, 11, 13)',
      paper: 'rgb(15, 18, 22)',
      nav: 'rgb(17, 20, 22)',
    },
    link: {
      main: 'rgb(0, 154, 137)',
    },
  },
  custom: {
    border: 'rgb(39, 39, 49)', // <- Move here
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    pxToRem: (size) => `${size / 16}rem`,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'rgb(0, 154, 137)',
          '&:visited': {
            color: 'rgb(0, 120, 110)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          a: {
            color: 'rgb(0, 154, 137)',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:visited': {
              color: 'rgb(0, 120, 110)',
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'rgb(0, 154, 137)',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
          '&:visited': {
            color: 'rgb(0, 120, 110)',
          },
        },
      },
    },
  },
});