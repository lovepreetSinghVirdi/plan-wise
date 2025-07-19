import { createTheme } from '@mui/material/styles';

const PlanWiseCustomTheme2 = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00E5FF' },
    secondary: { main: '#FF5252' },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h4: { fontWeight: 600, color: '#00E5FF' },
    body1: { color: '#E0E0E0' },
  },
});
export default PlanWiseCustomTheme2;