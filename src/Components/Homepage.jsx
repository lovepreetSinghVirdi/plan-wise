import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Autocomplete,
  TextField,
  CardHeader,
  Box,
} from '@mui/material';
import MainSearch from './FormComponents/MainSearch';
import RogersLogo   from '../assets/Rogers.svg';
import BellLogo      from '../assets/Bell_Canada.svg';
import VmediaLogo    from '../assets/vmedia.svg';
import TeksavvyLogo  from '../assets/teksavvy.svg';
const logos = {
  rogers:   RogersLogo,
  bell:     BellLogo,
  vmedia:   VmediaLogo,
  teksavvy: TeksavvyLogo,
};

const plans = [
  { key: 'rogers', title: 'Rogers', text: 'This is the first card.' },
  { key: 'bell', title: 'Bell', text: 'This is the second card.' },
  { key: 'vmedia', title: 'Vmedia', text: 'This is the third card.' },
  { key: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
];

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>

      {/* ─── First row: Search bar centered with 2‑col offsets ─── */}
      <Grid container spacing={2} sx={{ mt: 20 }}>
        <Grid
          size={{ xs: 12, sm: 8 }}
          offset={{ sm: 2 }}
          sx={{ display: 'flex' }}
        >
          <MainSearch />
        </Grid>
      </Grid>

      {/* ─── Second row: Plan cards ─── */}
      <Grid container spacing={2} sx={{ mt: 20 }}>
        {plans.map((plan) => (
          <Grid
            key={plan.key}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{ display: 'flex' }}
          >
            <Card
              elevation={3}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
             
              <CardHeader
              title={plan.title}
              action={
                <Box component="img" src={logos[plan.key]} alt={`${plan.title} logo`}  sx={{ width: 90, height: 90 }}/>
              }
              sx={{ pb: 0 }}
              />
              <CardContent sx={{ flexGrow: 1, pt: 1}}>
                <Typography variant="body2" color="text.secpndary">
                  {plan.text}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button component={RouterNavLink}  to={`/${plan.key}`} fullWidth variant="contained"  >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
