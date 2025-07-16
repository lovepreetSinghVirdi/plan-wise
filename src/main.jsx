import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';


// Create a default MUI theme (customize if needed)
const theme = createTheme();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);