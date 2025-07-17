
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import MainSearch from './FormComponents/MainSearch';
import { useNavigate } from 'react-router-dom';

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
            <Card
              elevation={3}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.text}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button fullWidth variant="contained">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
export default HomePage;
