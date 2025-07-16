import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import logo from '../assets/logo.png';

export default function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const appName = 'PlanWise';

  const navItems = [
    { label: 'Home', to: '/home' },
    { label: 'Rogers', to: '/rogers' },
    { label: 'Bell', to: '/plan' },
    { label: 'Vmedia', to: '/vmedia' },
    { label: 'Teksavvy', to: '/teksavvy' },
    { label: 'About Us', to: '/about' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* Logo in the drawer */}
      <Link to="/" style={{ display: 'inline-flex', textDecoration: 'none', alignItems: 'center' }}>
        <Box
          component="img"
          src={logo}
          alt="PlanWise logo"
          sx={{ height: 40, mr: 2 }}
        />
      </Link>
      <Typography
        component={Link}
        to="/"
        variant="h6"
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        {appName}
      </Typography>
      <List>
        {navItems.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.to}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Link to="/" style={{ display: 'inline-flex', textDecoration: 'none', alignItems: 'center' }}>
            <Box
              component="img"
              src={logo}
              alt="PlanWise logo"
              sx={{ height: 40, mr: 2 }}
            />
          </Link>

          {/* App name (optional if your logo contains text) */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            {appName}
          </Typography>

          {/* Desktop nav items */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button
                key={item.label}
                variant="text"       // <–– make this one text
                color="inherit"      // <–– white on the dark AppBar
                component={Link}
                to={item.to}
                sx={{ ml: 1 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
