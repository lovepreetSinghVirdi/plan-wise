// src/Components/HomePage.jsx
import React from 'react';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { motion as Motion } from 'framer-motion';
import MainSearch from './FormComponents/MainSearch';
import rogersLogo from '../assets/Rogers.svg';
import bellLogo from '../assets/Bell_Canada.svg';
import vmediaLogo from '../assets/vmedia.svg';
import teksavvyLogo from '../assets/teksavvy.svg';
import CustomCard from './FormComponents/CustomCard';

const logos = {
  rogers: rogersLogo,
  bell: bellLogo,
  vmedia: vmediaLogo,
  teksavvy: teksavvyLogo,
};

const plans = [
  { key: 'rogers', title: 'Rogers', text: 'This is the first card.' },
  { key: 'bell', title: 'Bell', text: 'This is the second card.' },
  { key: 'vmedia', title: 'Vmedia', text: 'This is the third card.' },
  { key: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleOptionSelect = (_, keyword) => {
    navigate('/available-plans', { state: { keyword } });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, width:'100%', justifyContent:'center'}}>
            {/* ─── Main Searchbar row ─── */}
      < Grid container spacing={2} sx={{ mt: 20 }}>
        <MainSearch onSelect={handleOptionSelect} />

      </Grid>

      {/* ─── Plan cards row ─── */}
      <Grid container spacing={2} sx={{ mt: 20}}>
        {plans.map((plan, i) => (
          <Grid key={plan.key} xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <Motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              style={{ width: '100%' }}
            >
              <CustomCard>
                <CardHeader
                  title={plan.title}
                  action={
                    <Box
                      component="img"
                      src={logos[plan.key]}
                      alt={`${plan.title} logo`}
                      sx={{ width: 90, height: 90 }}
                    />
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {plan.text}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    component={RouterNavLink}
                    to={`/${plan.key}`}
                    fullWidth
                    variant="contained"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CustomCard>
            </Motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
