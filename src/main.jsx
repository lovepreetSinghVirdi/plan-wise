import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import { ThemeProvider } from '@mui/material';

import App from './App';
import PlanWiseCustomTheme1 from './theme1';
import PlanWiseCustomTheme2 from './theme2';
import PlanWiseCustomTheme3 from './theme3';




const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={PlanWiseCustomTheme3}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
