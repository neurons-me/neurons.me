// src/themes/ThemeContext.jsx
import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../themes/theme';

const ThemeToggleContext = createContext();
export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

export function CustomThemeProvider({ children }) {
  // Check localStorage for a saved theme; default to light if not found
  const storedTheme = localStorage.getItem('theme') === 'dark';
  const [isDarkMode, setIsDarkMode] = useState(storedTheme);

  // Toggle theme and save the new preference to localStorage
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  const theme = useMemo(() => {
    const selectedTheme = isDarkMode ? darkTheme : lightTheme;
    if (!selectedTheme.custom) {
      selectedTheme.custom = {};
    }
    return selectedTheme;
  }, [isDarkMode]);

  return (
        <ThemeToggleContext.Provider value={{ isDarkMode, toggleTheme }}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        </ThemeProvider>
        </ThemeToggleContext.Provider>
  );
}
