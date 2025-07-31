// src/Components/HomePage.jsx
import { useState, useCallback } from 'react';
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
import MainSearch from './FormComponents/MainSearch';
import AppLoader from './FormComponents/AppLoader';
import CustomCard from './FormComponents/CustomCard';
import CardCarousel from './FormComponents/CardCarousel';
import { brandLogo } from '../Helpers/helpers';

const plans = [
  { site: 'rogers', title: 'Rogers', text: 'Extensive LTE and 5G coverage with a full spectrum of postpaid and prepaid options—from basic data bundles to unlimited family packages—featuring perks like data‑free streaming on select services.' },
  { site: 'iprimus', title: 'IPrimus', text: 'Flexible SIM‑only offerings on major networks, with no‑lock‑in contracts, competitive data allowances, and the freedom to bring your own device or upgrade anytime without penalty.' },
  { site: 'vmedia', title: 'Vmedia', text: 'Month‑to‑month SIM‑only plans on a leading network, combining generous data allowances with optional voice and text add‑ons, all with the flexibility of no long‑term commitments.' },
  { site: 'teksavvy', title: 'Teksavvy', text: 'No‑contract, SIM‑only plans delivered through partner networks, offering features like data rollover, family sharing, and transparent billing—so you get full service control without hidden fees.' },
  { site: 'dodo', title: 'Dodo', text: 'Budget‑focused prepaid and postpaid plans on a robust 4G network, featuring simple flat‑rate data packs, unlimited on‑net calls and texts, and an intuitive online dashboard for usage management.' },
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

                <CustomCard key={plan.site} lift={false} noShadow>
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
