import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardHeader,
  Box,
} from '@mui/material';
import MainSearch from './FormComponents/MainSearch';
import { useNavigate } from 'react-router-dom';
import rogersLogo from '../assets/Rogers.svg';
import bellLogo from '../assets/Bell_Canada.svg';
import vmediaLogo from '../assets/vmedia.svg';
import teksavvyLogo from '../assets/teksavvy.svg';
import CustomCard  from '../Components/FormComponents/CustomCard'

const logos = {
  rogers: rogersLogo,
  bell: bellLogo,
  vmedia: vmediaLogo,
  teksavvy: teksavvyLogo,
};

const plans = [
  { key: 'rogers', title: 'Rogers', text: 'This is the first card.' },
  { key: 'bell', title: 'Bell', text: 'This is the second card.' },
  { key: 'vmedia', title: 'Vmedia', text: 'This is the third card.' },
  { key: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const handleOptionSelect = (_, newVal) => {

    navigate('/available-plans', {
      state: {
        keyword: newVal,
      }
    })

  }
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>

      {/* ─── First row: Search bar centered with 2‑col offsets ─── */}
      <Grid container spacing={2} sx={{ mt: 20 }}>
        <Grid
          size={{ xs: 12, sm: 8 }}
          offset={{ sm: 2 }}
          sx={{ display: 'flex' }}
        >
          <MainSearch onSelect={handleOptionSelect} />
        </Grid>
      </Grid>

      {/* ─── Second row: Plan cards ─── */}
      <Grid container spacing={2} sx={{ mt: 20 }}>
        {plans.map((plan) => (
          <Grid
            key={plan.key}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{ display: 'flex' }}
          >
            <CustomCard>

              <CardHeader
                title={plan.title}
                action={
                  <Box component="img" src={logos[plan.key]} alt={`${plan.title} logo`} sx={{ width: 90, height: 90 }} />
                }
                sx={{ pb: 0 }}
              />
              <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                <Typography variant="body2" color="text.secpndary">
                  {plan.text}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button component={RouterNavLink} to={`/${plan.key}`} fullWidth variant="contained"  >
                  Learn More
                </Button>
              </CardActions>
            </CustomCard>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
export default HomePage;
