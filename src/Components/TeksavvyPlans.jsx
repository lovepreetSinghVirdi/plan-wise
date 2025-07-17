import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const teksavvyPlans = [
  { id: 1, name: 'TekSavvy Basic',    description: 'Affordable starter',  price: '$34.95/mo' },
  { id: 2, name: 'TekSavvy Standard', description: 'Steady performance',  price: '$54.95/mo' },
  { id: 3, name: 'TekSavvy Premium',  description: 'Blazing fast speeds', price: '$74.95/mo' },
];

export default function TekSavvyPlans() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        TekSavvy Plans
      </Typography>

      <Grid container spacing={2}>
        {teksavvyPlans.map((plan) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  mb: 2,
                  mt: 'auto'
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {plan.price}
                </Typography>
                <Button fullWidth variant="contained">
                  Choose
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
