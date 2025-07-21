// src/Components/IprimusPlans.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion as Motion } from 'framer-motion';
import Loader from './FormComponents/Loader';
import iprimusLogo from '../assets/iprimus_logo.svg';
import PlanCard from './FormComponents/PlanCard';
import{
  apiURL,
  searchPlanByTextUrl,
  makePlansFromRawData
} from '../Helpers/helpers'
export default function IprimusPlans() {
  const theme = useTheme();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiURL}${searchPlanByTextUrl}`, {
        params: { q: 'iprimus' },
      })
      .then(({ data }) => {
        
        const allPlans = makePlansFromRawData(data);
        const IprimusPlans = allPlans
          .filter(p => p.site === 'Iprimus')
          .map(p => ({ ...p, logo: iprimusLogo }));
        setPlans(IprimusPlans);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader message="Loading Iprimus plans…" />;
  }
  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh', width: '100%' }}>
        <Typography color="error" align="center">
          Failed to load plans: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, minHeight: '100vh', width: '100%' }}
    >
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

      <Grid container spacing={4} alignContent="center">
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
