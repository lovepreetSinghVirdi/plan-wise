import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';

import App from './App';
import PlanWiseCustomTheme1 from './theme1';
import PlanWiseCustomTheme2 from './theme2';
import PlanWiseCustomTheme3 from './theme3';


const darkTheme = createTheme({

  palette: {
    secondary: {
      main: '#FDAD5E',     // PlanWise orange
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
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />

  </ThemeProvider>
);
