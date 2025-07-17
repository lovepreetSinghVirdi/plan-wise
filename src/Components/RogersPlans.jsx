import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';         // CSS‑Grid API
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import RogersLogo from '../assets/Rogers.svg';
import CustomCard from './FormComponents/CustomCard';
const rogersPlans = [
  { id: 1, name: 'Rogers Basic', description: 'Entry‑level plan', price: '$39.99/mo' },
  { id: 2, name: 'Rogers Unlimited', description: 'Unlimited data', price: '$69.99/mo' },
  { id: 3, name: 'Rogers Family', description: 'Shareable family plan', price: '$109.99/mo' },
];

export default function RogersPlans() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Rogers Plans
      </Typography>
      <Grid container spacing={2}>
        {rogersPlans.map((plan) => (
          <Grid size={{ xs: 12, md: 4, sm: 6 }}>
            <CustomCard
              key={plan.id}
              // elevation={3}
              sx={{
                width: '100%',          // fill the grid cell
                height: '100%',         // match heights
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardHeader title={plan.name}
                action={
                  <Box component="img" src={RogersLogo} alt="Rogers logo" sx={{ width: 90, height: 90 }} />
                }
                sx={{ pb: 0 }}
              />

              {/* Drop the plan.name Typography; only description */}
              <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  pb: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {plan.price}
                </Typography>
                <Button fullWidth variant="contained">
                  Choose
                </Button>
              </CardActions>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
