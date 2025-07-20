// src/Components/IprimusPlans.jsx
import React from 'react';
import Container   from '@mui/material/Container';
import Grid        from '@mui/material/Grid';
import CardHeader  from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography  from '@mui/material/Typography';
import Button      from '@mui/material/Button';
import Box         from '@mui/material/Box';
import { useTheme }from '@mui/material/styles';
import { motion } from 'framer-motion';
import iprimusLogo from '../assets/iprimus_logo.svg';
import CustomCard  from './FormComponents/CustomCard';

const iprimusPlansData = [
  { id: 1, name: 'Iprimus Fibe 75',  description: 'Fast home internet', price: '$49.99/mo' },
  { id: 2, name: 'Iprimus Fibe 150', description: 'Faster streaming',     price: '$69.99/mo' },
  { id: 3, name: 'Iprimus Fibe 250', description: 'Blazing speed',        price: '$109.99/mo' },
];

export default function IprimusPlans() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: '2.5rem',
          color: theme.palette.primary.main,
          mb: 4,
        }}
      >
        Iprimus Plans
      </Typography>

      {/* Grid: exactly like Rogers (stretch all cells) */}
     <Grid container spacing={2}>
        {iprimusPlansData.map((plan,index) => (
          <Grid size={{ xs: 12, md:4, sm: 6 }} key={plan.id}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ width: '100%' }} 
            >
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
                  <Box component="img" src={iprimusLogo} alt="Iprimus logo" sx={{ width: 90, height: 90 }} />
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
