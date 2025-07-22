// src/Components/VmediaPlans.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion as Motion } from 'framer-motion';
import AppLoader from './FormComponents/AppLoader';
import vmediaLogo from '../assets/vmedia.svg';
import PlanCard from './FormComponents/PlanCard';
import{
  apiURL,
  searchPlanByTextUrl,
  makePlansFromRawData
} from '../Helpers/helpers'
export default function VmediaPlans() {
  const theme = useTheme();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiURL}${searchPlanByTextUrl}`, {
        params: { q: 'vmedia' },
      })
      .then(({ data }) => {
        
        const allPlans = makePlansFromRawData(data);
        const VmediaPlans = allPlans
          .filter(p => p.site === 'VMEDIA')
          .map(p => ({ ...p, logo: vmediaLogo }));
        setPlans(VmediaPlans);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <AppLoader message="Loading Vmedia plans…" />;
  }
  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
        <Typography color="error" align="center">
          Failed to load plans: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: '2.5rem',
          color: theme.palette.primary.main,
          mb: 4,
        }}
      >
        Vmedia Plans
      </Typography>

      <Grid container spacing={4}alignItems="stretch">
        {plans.map((plan, index) => (
          <Grid
            key={plan.id}
            sx={{ display: 'flex' }}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <Motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ width: '100%' }}
            >
              <PlanCard plan={plan} />
            </Motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
