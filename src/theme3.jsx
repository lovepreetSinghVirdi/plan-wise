// src/theme/planwiseTheme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',

    // We’ll treat most of the UI as “dark overlay” on your image:
    primary: {
      main: 'rgba(255,255,255,0.9)',    // semi‑opaque white
      contrastText: '#FFFFFF',          // for any filled primary buttons
    },
    secondary: {
      main: '#009688',                  // your teal accent
      contrastText: '#FFFFFF',
    },

    // Keep paper surfaces white
    background: {
      default: 'transparent',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#212121',
      secondary: '#555555',
      // we’ll override white text where needed
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h4: { fontSize: '1.5rem', fontWeight: 500, color: '#FFFFFF' },
    h5: { fontSize: '1.25rem', fontWeight: 500, color: '#FFFFFF' },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6, color: '#FFFFFF' },
    button: { textTransform: 'none', fontWeight: 500, color: '#FFFFFF' },
  },

  shape: { borderRadius: 8 },
  spacing: 8,

  components: {
    // 1) reset CSS, leave background‑image on #root
    MuiCssBaseline: {
      styleOverrides: {
        body: { background: 'none', margin: 0, padding: 0 },
      },
    },

    // 2) AppBar: translucent dark overlay, white text
    MuiAppBar: {
      defaultProps: { elevation: 0, color: 'primary' },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(6px)',
        },
      },
    },

    MuiToolbar: {
      styleOverrides: { root: { minHeight: 64 } },
    },

    // 3) Nav Buttons: text buttons in AppBar
    MuiButton: {
      defaultProps: { disableElevation: true, variant: 'contained' },
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 20px',
        },
        containedPrimary: {
          backgroundColor: '#009688',
          '&:hover': { backgroundColor: '#00675B' },
        },
        containedSecondary: {
          backgroundColor: '#0288D1',
          '&:hover': { backgroundColor: '#01579B' },
        },
      },
    },
    // 4) Hero TextField: white outline + white text
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFFFFF',
            opacity: 0.7,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            opacity: 1,
          },
        },
        input: { color: '#FFFFFF' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          '&.Mui-focused': { color: '#FFFFFF' },
        },
      },
    },

    // 5) Autocomplete suggestions: white paper
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },

    // 6) Cards: translucent white background in hero, solid white elsewhere
    MuiCard: {
      defaultProps: { elevation: 2 },
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(4px)',
        },
      },
    },

    // 7) Sheets/Modals: pure white
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
    },

    // 8) Drawer (mobile menu): solid white
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          width: 240,
        },
      },
    },

    // 9) ListItemButton (drawer links)
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgba(0,150,136,0.1)',
          },
        },
      },
    },

    // 10) Links: secondary color accent
    MuiLink: {
      defaultProps: { underline: 'hover', color: 'secondary' },
    },
  },
});

// enable responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
