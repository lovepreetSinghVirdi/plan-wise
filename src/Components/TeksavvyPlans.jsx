import React from 'react';
import { useTheme }    from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardHeader  from '@mui/material/CardHeader';
import Box         from '@mui/material/Box';
import RogersLogo from '../assets/teksavvy.svg';
import CustomCard from './FormComponents/CustomCard';
import { motion } from 'framer-motion';

const teksavvyPlans = [
  { id: 1, name: 'TekSavvy Basic',    description: 'Affordable starter',  price: '$34.95/mo' },
  { id: 2, name: 'TekSavvy Standard', description: 'Steady performance',  price: '$54.95/mo' },
  { id: 3, name: 'TekSavvy Premium',  description: 'Blazing fast speeds', price: '$74.95/mo' },
];

export default function TekSavvyPlans() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" 
    sx={{
         mt: 4,
          minHeight: '100vh',
          width: '100%',
          }}>
      <Typography
       variant="h4"
        component="h2" 
        align='center' 
        gutterBottom
        sx={{
        fontWeight: 700,
        fontSize: '2.5rem',
        color: theme.palette.primary.main,
        mb: 4,
      }}
        >
        TekSavvy Plans
      </Typography>

      <Grid container spacing={2}>
        {teksavvyPlans.map((plan,index) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ width: '100%' }} 
            >
            <CustomCard
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
          <CardHeader title={plan.name}
               action={
              <Box component="img" src={RogersLogo} alt="Rogers logo" sx={{ width:80, height:80 }}/>
             }
            sx={{ pb: 0 }}
             />

              {/* Drop the plan.name Typography; only description */}
              <CardContent sx={{ flexGrow:1, pt:1 }}>
                <Typography variant="body2" 
                color="text.secondary"
                >
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
         
            </CustomCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
