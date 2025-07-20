// src/Components/RogersPlans.jsx
import React, { useState, useEffect } from 'react';
import { useTheme }    from '@mui/material/styles';
import Container       from '@mui/material/Container';
import Grid            from '@mui/material/Grid';
import CardHeader      from '@mui/material/CardHeader';
import CardContent     from '@mui/material/CardContent';
import CardActions     from '@mui/material/CardActions';
import Typography      from '@mui/material/Typography';
import Button          from '@mui/material/Button';
import Box             from '@mui/material/Box';
import { motion }      from 'framer-motion';
import CustomCard      from './FormComponents/CustomCard';
import Loader          from './FormComponents/Loader';
import RogersLogo      from '../assets/Rogers.svg';

export default function RogersPlans() {
  const theme = useTheme();
  const [rogersPlans, setRogersPlans] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);

  useEffect(() => {
    fetch('/rogers_plans.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setRogersPlans)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader message="Loading Rogers plans…" />;
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
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh', width: '100%' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: '2.5rem',
          color: theme.palette.primary.main,
          mb: 4
        }}
       
      >
        Rogers Plan
      </Typography>

      <Grid container spacing={4}  sx={{ mt: 6, width:'100%', justifyContent:'center'}}>
        {rogersPlans.map((plan, index) => (
          <Grid
            key={plan.id}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex' }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CustomCard sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                  title={plan.name}
                  action={
                    <Box
                      component="img"
                      src={RogersLogo}
                      alt="Rogers logo"
                      sx={{ width: 90, height: 90 }}
                    />
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {plan.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    <strong>Download Speed:</strong> {plan.DownloadingSpeed}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Upload Speed:</strong> {plan.uploadingspeed}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    mt: 'auto',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    pb: 3
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
