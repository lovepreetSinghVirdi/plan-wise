import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const rogersPlans = [
  { id: 1, name: 'Rogers Basic',     description: 'Entry‑level plan',        price: '$39.99/mo' },
  { id: 2, name: 'Rogers Unlimited', description: 'Unlimited data',          price: '$69.99/mo' },
  { id: 3, name: 'Rogers Family',    description: 'Shareable family plan',   price: '$109.99/mo' },
];

export default function RogersPlans() {
  return (
    <Box component="section" sx={{ pt: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          Rogers Plans
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {rogersPlans.map((plan) => (
            <Card
              key={plan.id}
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {plan.name}
                </Typography>
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
                <Typography variant="h6" component="div" gutterBottom>
                  {plan.price}
                </Typography>
                <Button fullWidth variant="contained">
                  Choose
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
