import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import 'keen-slider/keen-slider.min.css';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';

import App from './App';


const darkTheme = createTheme({

  palette: {
    secondary: {
      main: '#F1D0B6',     // PlanWise orange
      light: '#FFE4C0',
      dark: '#C98738',
      contrastText: '#fff',
    },
    primary: {
      main: '#646CFF',     // your link blue
      light: '#A3ABFF',
      dark: '#3E4ABF',
      contrastText: '#fff',
    },
    background: {
      default: '#242424',  // matches your CSS body bg
      paper: '#fff',
    },
  },
  components: {
    // 1) Re‑enable pointer events on all disabled ButtonBases:
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            pointerEvents: 'auto',
          },
        },
      },
    },

    // 2) Override your contained Buttons’ disabled styles:
    MuiButton: {
      styleOverrides: {
        contained: {
          '&.Mui-disabled': {
            backgroundColor: '#9E9E9E',     // your opaque grey
            cursor: 'not-allowed',           // default cursor
            '&:hover': {
              backgroundColor: '#9E9E9E',   // keep same on hover
              cursor: 'not-allowed',         // blocked cursor on hover
            },
          },
        },
        // if you use outlined/text variants too, repeat similarly under `outlined` / `text`
      },
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />

  </ThemeProvider>
);
