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
import { motion as Motion } from 'framer-motion';
import MainSearch from './FormComponents/MainSearch';
import CustomCard from './FormComponents/CustomCard';
import { brandLogo } from '../Helpers/helpers';
import { useCallback, useState } from 'react';
import AppLoader from './FormComponents/AppLoader';

const plans = [
  { key: 'rogers', title: 'Rogers', text: 'This is the first card.' },
  { key: 'iprimus', title: 'IPrimus', text: 'This is the second card.' },
  { key: 'vmedia', title: 'Vmedia', text: 'This is the third card.' },
  { key: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
];

export default function HomePage() {

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleOptionSelect = (keyword) => {
    navigate('/available-plans', { state: { keyword } });
  };
  const handleLoading = useCallback((loading) => {
    debugger
    setLoading(!!loading);
  }, [setLoading])

  return (
    <Container maxWidth="lg" sx={{ mt: 4, width: '100%', justifyContent: 'center' }}>
      {isLoading ? <AppLoader /> :
        <>
          {/* ─── Main Searchbar row ─── */}
          < Grid container spacing={2} sx={{ mt: 20 }}>
            <MainSearch handleLoadingFromParent={handleLoading} onSelect={handleOptionSelect} />

          </Grid>

          {/* ─── Plan cards row ─── */}
          <Grid container spacing={2} sx={{ mt: 10 }}>
            {plans.map((plan, index) => (
              <Grid
                key={`plan_${index}_${plan.key}`}
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{ display: 'flex' }}
              >

                <Motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  style={{ width: '100%' }}
                >
                  <CustomCard>
                    <CardHeader
                      title={plan.title}
                      action={
                        <Box
                          component="img"
                          src={brandLogo(plan.site)}
                          alt={`${plan.site} logo`}
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
                </Motion.div>
              </Grid>
            ))}
          </Grid>

        </>
      }
    </Container>

  );
}
