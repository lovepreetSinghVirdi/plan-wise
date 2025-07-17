import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';         // CSS‑Grid API
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 import CardHeader  from '@mui/material/CardHeader';
 import Box         from '@mui/material/Box';
import RogersLogo from '../assets/Bell_Canada.svg';
// mock data for Bell
const bellPlans = [
  { id: 1, name: 'Bell Fibe 75',      description: 'Fast home internet',    price: '$49.99/mo' },
  { id: 2, name: 'Bell Fibe 150',     description: 'Faster streaming',      price: '$69.99/mo' },
  { id: 3, name: 'Bell Fibe Gigabit', description: 'Blazing speed',         price: '$109.99/mo' },
];

export default function BellPlans() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Bell Plans
      </Typography>

      <Grid container spacing={2}>
        {bellPlans.map((plan) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} >
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardHeader title={plan.name}
               action={
              <Box component="img" src={RogersLogo} alt="Rogers logo" sx={{ width:80, height:80 }}/>
             }
            sx={{ pb: 0 }}
             />

              {/* Drop the plan.name Typography; only description */}
              <CardContent sx={{ flexGrow:1, pt:1 }}>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ flexDirection: 'column', alignItems: 'center', mb: 2, mt: 'auto' }}>
                <Typography variant="h6">{plan.price}</Typography>
                <Button fullWidth variant="contained">Choose</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
