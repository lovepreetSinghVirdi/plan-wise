import { useState } from 'react';

import { NavLink }             from 'react-router-dom'
import AppBar                  from '@mui/material/AppBar'
import Box                     from '@mui/material/Box'
import Toolbar                 from '@mui/material/Toolbar'
import IconButton              from '@mui/material/IconButton'
import MenuIcon                from '@mui/icons-material/Menu'
import Typography              from '@mui/material/Typography'
import Button                  from '@mui/material/Button'
import Drawer                  from '@mui/material/Drawer'
import List                    from '@mui/material/List'
import ListItem                from '@mui/material/ListItem'
import ListItemButton          from '@mui/material/ListItemButton'
import ListItemText            from '@mui/material/ListItemText'

import logo                    from '../assets/logo.png'

export default function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const appName = 'PlanWise'

  const navItems = [
    { label: 'Home', to: '/home' },
    { label: 'Rogers', to: '/rogers' },
    { label: 'Bell', to: '/plan' },
    { label: 'Vmedia', to: '/vmedia' },
    { label: 'Teksavvy', to: '/teksavvy' },
    { label: 'About Us', to: '/about' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // mobile‐drawer contents
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'active-navlink' : '')}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: '#000',
          py: 2
        }}
      >
        <Box component="img" src={logo} alt="logo" sx={{ height: 40, mr: 1 }} />
        <Typography variant="h6">{appName}</Typography>
      </NavLink>

      <List>
        {navItems.map(item => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.to}
              end
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          {/* Hamburger menu (mobile) */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo + PlanWise title as one NavLink */}
          <Box
            component={NavLink}
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active-navlink' : '')}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 1,
              color: 'common.white',
              py: 1,
              '&:hover': { color: 'common.white' },
              '&.active-navlink': {
                color: '#FDAD5E',
                borderBottom: '2px solid #FDAD5E',
              },
            }}
          >
            <Box component="img" src={logo} alt="logo" sx={{ height: 40, mr: 1 }} />
            <Typography variant="h6">{appName}</Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map(item => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end
                disableRipple
                color="inherit"
                style={({ isActive }) => ({
                  color:        isActive ? '#FDAD5E' : '#fff',
                  borderBottom: isActive
                    ? '2px solid #FDAD5E'
                    : '2px solid transparent',
                })}
                sx={{
                  ml: 1,
                  bgcolor: 'transparent',
                  '&:hover': { bgcolor: 'transparent' },
                }}
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
  )
}
