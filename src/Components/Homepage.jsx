import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';

const cards = [
  { title: 'Rogers', text: 'This is the first card.' },
  { title: 'Bell', text: 'This is the second card.' },
  { title: 'Card', text: 'This is the third card.' },
  { title: 'Dodo', text: 'This is the fourth card.' }
];

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
      <Grid container spacing={2}>
        {cards.map((card, idx) => (
          <Grid size={{ xs: 12, sm: 6 }} key={idx}>
            <Card elevation={3} sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.text}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button variant="contained" color="primary">
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
