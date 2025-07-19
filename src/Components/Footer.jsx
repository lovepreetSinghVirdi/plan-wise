import './Footer.css';
import { Container, Link, Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box component="footer" className="footer"  sx={{ mt: 20 }}>
      <Container maxWidth="lg" className="footer-container">
        <Box className="footer-links">
          <Link href="/about" color="inherit" underline="hover">
            About Us
          </Link>
          <Link href="/terms" color="inherit" underline="hover">
            Terms of Service
          </Link>
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Box>
        <Box className="footer-social">
          <Link href="https://github.com/YourOrg" color="inherit" target="_blank" rel="noopener">
            <GitHubIcon />
          </Link>
          <Link href="https://twitter.com/YourHandle" color="inherit" target="_blank" rel="noopener">
            <TwitterIcon />
          </Link>
        </Box>
        <Typography variant="body2" color="inherit" className="footer-copyright">
          © {new Date().getFullYear()} PlanWise. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}