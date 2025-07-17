// src/Components/AppHeader.jsx
import React, { useState } from 'react';
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
    { label: 'Home',    to: '/' },
    { label: 'Rogers',  to: '/rogers' },
    { label: 'Bell',    to: '/bell' },
    { label: 'Vmedia',  to: '/vmedia' },
    { label: 'Teksavvy',to: '/teksavvy' },
    { label: 'About Us',to: '/about' },
  ];

  const handleDrawerToggle = () => setMobileOpen(open => !open);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link to="/" style={{ display: 'inline-flex', textDecoration: 'none', alignItems: 'center' }}>
        <Box component="img" src={logo} alt="PlanWise logo" sx={{ height: 40, mr: 2 }} />
        <Typography variant="h6" sx={{ color: 'inherit' }}>{appName}</Typography>
      </Link>
      <List>
        {navItems.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.to} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ display: 'inline-flex', textDecoration: 'none', alignItems: 'center' }}>
            <Box component="img" src={logo} alt="PlanWise logo" sx={{ height: 40, mr: 2 }} />
          </Link>

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

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.to}
                sx={{ ml: 1 }}
              >
                {item.label.toUpperCase()}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

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
