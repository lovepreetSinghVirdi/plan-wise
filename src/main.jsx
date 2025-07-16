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
    mode: 'light',
  },
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <CssBaseline />


      <App />

  </ThemeProvider>
);
