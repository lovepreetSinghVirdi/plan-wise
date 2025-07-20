// src/Components/AppHeader.jsx
import React, { useState } from 'react';
import { NavLink }          from 'react-router-dom';
import AppBar               from '@mui/material/AppBar';
import Box                  from '@mui/material/Box';
import Toolbar              from '@mui/material/Toolbar';
import IconButton           from '@mui/material/IconButton';
import MenuIcon             from '@mui/icons-material/Menu';
import Typography           from '@mui/material/Typography';
import Button               from '@mui/material/Button';
import Drawer               from '@mui/material/Drawer';
import List                 from '@mui/material/List';
import ListItem             from '@mui/material/ListItem';
import ListItemButton       from '@mui/material/ListItemButton';
import ListItemText         from '@mui/material/ListItemText';

import logo from '../assets/logo.png';

export default function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: 'Home',     to: '/'       },
    { label: 'Rogers',   to: '/rogers' },
    { label: 'Bell',     to: '/bell'   },
    { label: 'Vmedia',   to: '/vmedia' },
    { label: 'Teksavvy', to: '/teksavvy' },
    { label: 'About Us', to: '/aboutus' },
  ];

  const toggleDrawer = () => setMobileOpen(o => !o);

  // mobile drawer
  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
      {/* Logo + Title */}
      <Box
        component={NavLink}
        to="/"
        end
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'text.primary',
          py: 2,
          '&.active': {
            color: 'secondary.main',
            borderBottom: '2px solid secondary.main',
          }
        }}
      >
        <Box component="img" src={logo} alt="logo" sx={{ height: 40, mr: 1 }} />
        <Typography variant="h6">PlanWise</Typography>
      </Box>

      <List>
        {navItems.map(item => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.to}
              end
              sx={{
                textAlign: 'center',
                '&.active .MuiListItemText-root': {
                  color: 'primary.main',
                }
              }}
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
      <AppBar position="sticky" sx={{ top: 0 }}>
        <Toolbar>
          {/* Mobile hamburger */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo + Title (desktop) */}
          <Box
            component={NavLink}
            to="/"
            end
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 1,
              color: 'common.white',
              py: 1,
              '&:hover': { color: 'common.white' }
            }}
          >
            <Box component="img" src={logo} alt="logo" sx={{ height: 40, mr: 1 }} />
            <Typography variant="h6">PlanWise</Typography>
          </Box>

          {/* Desktop nav buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map(item => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end
                disableRipple
                sx={{
                  ml: 1,
                  color: 'common.white',
                  borderBottom: 2,
                  borderColor: 'transparent',
                  '&.active': {
                    color: 'secondary.main',
                    borderColor: 'secondary.main',
                    '&:hover': { bgcolor: 'transparent' }
                  },
                  '&:hover': { bgcolor: 'secondary.main' }
                }}
              >
                {item.label.toUpperCase()}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
