// src/Components/HomePage.jsx

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
import { motion } from 'framer-motion';
import MainSearch from './FormComponents/MainSearch';
import rogersLogo   from '../assets/Rogers.svg';
import bellLogo     from '../assets/Bell_Canada.svg';
import vmediaLogo   from '../assets/vmedia.svg';
import teksavvyLogo from '../assets/teksavvy.svg';
import CustomCard   from '../Components/FormComponents/CustomCard';

const logos = {
  rogers:   rogersLogo,
  bell:     bellLogo,
  vmedia:   vmediaLogo,
  teksavvy: teksavvyLogo,
};

const plans = [
  { key: 'rogers',   title: 'Rogers',   text: 'This is the first card.' },
  { key: 'bell',     title: 'Bell',     text: 'This is the second card.' },
  { key: 'vmedia',   title: 'Vmedia',   text: 'This is the third card.' },
  { key: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleOptionSelect = (_, newVal) => {
    navigate('/available-plans', {
      state: { keyword: newVal }
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* ─── Search bar row (unchanged) ─── */}
      <Grid container spacing={2} sx={{ mt: 20 }}>
        <Grid
          size={{ xs: 12, sm: 8 }}
          offset={{ sm: 2 }}
          sx={{ display: 'flex' }}
        >
          <MainSearch onSelect={handleOptionSelect} />
        </Grid>
      </Grid>

      {/* ─── Plan cards row ─── */}
      <Grid container spacing={2} sx={{ mt: 20 }}>
        {plans.map((plan, index) => (
          <Grid
            key={plan.key}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{ display: 'flex' }}
          >
            {/* motion.div wraps your card, no layout changes */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
