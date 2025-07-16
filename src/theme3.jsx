// theme/planwiseTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      light: '#64B5F6',
      main: '#0288D1',
      dark: '#01579B',
      contrastText: '#FFFFFF',
    },

    secondary: {
      light: '#4DB6AC',
      main: '#009688',
      dark: '#00675B',
      contrastText: '#FFFFFF',
    },

    info: { main: '#00ACC1', contrastText: '#FFFFFF' },
    success: { main: '#66BB6A', contrastText: '#FFFFFF' },
    warning: { main: '#FFA000', contrastText: '#000000' },
    error:   { main: '#E53935', contrastText: '#FFFFFF' },

    background: {
      default: '#FFFFFF', // app surface remains white to contrast BG image
      paper: '#FFFFFF',
    },

    text: {
      primary: '#212121',
      secondary: '#555555',
    },
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: { fontWeight: 500, fontSize: '1.5rem' },
    body1: { fontWeight: 400, fontSize: '1rem' },
    button: { textTransform: 'none', fontWeight: 500 },
  },

  shape: { borderRadius: 8 },
  spacing: 8,

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '10px 20px',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        },
      },
    },

    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },

    // Ensure TextField labels and input text are white when placed over a dark BG
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          '&.Mui-focused': { color: '#FFFFFF' },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',           // input text
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.7)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFFFFF',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFFFFF',
          },
        },
        input: {
          color: '#FFFFFF',           // placeholder + typed text
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          backdropFilter: 'blur(5px)',
        },
      },
    },
  },
});

export default theme;