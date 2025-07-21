import './Footer.css';
import { Container, Link, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box component="footer" className="footer" sx={{ mt: 20 }}>
      <Container maxWidth="lg" className="footer-container">
        <Box className="footer-links">
          <RouterLink to="/aboutus" color="inherit" underline="hover">
            About Us
          </RouterLink>
          <RouterLink to="/aboutus" color="inherit" underline="hover">
            Terms of Service
          </RouterLink>
          <RouterLink to="/aboutus" color="inherit" underline="hover">
            Privacy Policy
          </RouterLink>
        </Box>
        <Box className="footer-social">
          <Link to="https://github.com/lovepreetSinghVirdi" color="inherit" target="_blank" rel="noopener">
            <GitHubIcon />
          </Link>
        </Box>
        <Typography variant="body2" color="inherit" className="footer-copyright">
          © {new Date().getFullYear()} PlanWise. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}