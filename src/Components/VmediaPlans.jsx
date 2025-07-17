import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 import CardHeader  from '@mui/material/CardHeader';
 import Box         from '@mui/material/Box';
import RogersLogo from '../assets/vmedia.svg';

const vmediaPlans = [
  { id: 1, name: 'Vmedia Essentials', description: 'Budget friendly',       price: '$39.99/mo' },
  { id: 2, name: 'Vmedia Plus',      description: 'More speed, more data', price: '$59.99/mo' },
  { id: 3, name: 'Vmedia Ultra',     description: 'Unlimited everything',  price: '$79.99/mo' },
];

export default function VmediaPlans() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Vmedia Plans
      </Typography>

      <Grid container spacing={2}>
        {vmediaPlans.map((plan) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardHeader title={plan.name}
               action={
              <Box component="img" src={RogersLogo} alt="Rogers logo" sx={{ width:90, height:90 }}/>
             }
            sx={{ pb: 0 }}
             />

              {/* Drop the plan.name Typography; only description */}
              <CardContent sx={{ flexGrow:1, pt:1 }}>
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
