// src/Components/HomePage.jsx
import React, { useState, useCallback } from 'react';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { motion as Motion } from 'framer-motion';
import MainSearch from './FormComponents/MainSearch';
import AppLoader from './FormComponents/AppLoader';
import CustomCard from './FormComponents/CustomCard';
import CardCarousel from './FormComponents/CardCarousel';
import { brandLogo } from '../Helpers/helpers';

const plans = [
  { site: 'rogers',   title: 'Rogers',   text: 'This is the first card.' },
  { site: 'iprimus',  title: 'IPrimus',  text: 'This is the second card.' },
  { site: 'vmedia',   title: 'Vmedia',   text: 'This is the third card.' },
  { site: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
  { site: 'dodo',     title: 'Dodo',     text: 'This is the fifth card.' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleOptionSelect = useCallback(
    (keyword) => navigate('/search-results', { state: { keyword } }),
    [navigate]
  );

  const handleLoading = useCallback((loading) => {
    setLoading(!!loading);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {isLoading ? (
        <AppLoader />
      ) : (
        <>
          {/* ─── Main Search ─── */}
          <Grid container spacing={2} sx={{ mt: 20 }}>
            <MainSearch
              handleLoadingFromParent={handleLoading}
              onSelect={handleOptionSelect}
            />
          </Grid>

          {/* ─── Plans Carousel ─── */}
          <Box sx={{ mt: 10 }}>
            <CardCarousel>
              {plans.map((plan) => (
 
                  <CustomCard  key={plan.site} lift={false} noShadow>
                    <CardHeader
                      title={plan.title}
                      action={
                        <Box
                          component="img"
                          src={brandLogo(plan.site)}
                          alt={`${plan.site} logo"`}
                          sx={{ width: 90, height: 90 }}
                        />
                      }
                    />
                    <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {plan.text}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                      <Button
                        component={RouterNavLink}
                        to={`/${plan.site}`}
                        fullWidth
                        variant="contained"
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </CustomCard>
          
              ))}
            </CardCarousel>
          </Box>
        </>
      )}
    </Container>
  );
}
