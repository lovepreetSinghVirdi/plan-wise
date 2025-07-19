import { createTheme } from '@mui/material/styles';

const PlanWiseCustomTheme1 = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#00897B' },
    secondary: { main: '#1565C0' },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: { fontWeight: 500 },
    body1: { fontWeight: 400 },
  },
});
export default PlanWiseCustomTheme1;