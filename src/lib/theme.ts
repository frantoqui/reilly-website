'use client';
import { createTheme } from '@mui/material/styles';

export const RED = '#E8192C';
export const BLACK = '#000000';
export const WHITE = '#FFFFFF';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: RED,
      light: '#FF3347',
      dark: '#C5111F',
    },
    secondary: {
      main: WHITE,
    },
    background: {
      default: BLACK,
      paper: '#0A0A0A',
    },
    text: {
      primary: WHITE,
      secondary: '#888888',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: 'var(--font-space-grotesk), var(--font-geist-sans), system-ui, sans-serif',
    h1: {
      fontWeight: 700,
      lineHeight: 0.88,
      letterSpacing: '-0.04em',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: '-0.035em',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: '0.01em',
    },
    body2: {
      lineHeight: 1.6,
      color: '#888888',
    },
    caption: {
      fontSize: '0.7rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    overline: {
      fontSize: '0.65rem',
      letterSpacing: '0.18em',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box', margin: 0, padding: 0 },
        'html': { scrollBehavior: 'smooth' },
        'body': { backgroundColor: '#000', color: '#fff', overflowX: 'hidden' },
        '::-webkit-scrollbar': { width: '3px' },
        '::-webkit-scrollbar-track': { background: '#000' },
        '::-webkit-scrollbar-thumb': { background: '#333', borderRadius: '2px' },
        '::selection': { backgroundColor: RED, color: '#fff' },
        'a': { textDecoration: 'none', color: 'inherit' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 700,
          fontSize: '0.75rem',
          padding: '12px 28px',
        },
      },
    },
  },
  shape: { borderRadius: 0 },
});