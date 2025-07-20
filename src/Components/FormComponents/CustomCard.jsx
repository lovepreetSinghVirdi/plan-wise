// CustomCard.jsx
import { Card } from '@mui/material';

const CustomCard = ({ children, sx = { height: '100%', display: 'flex', flexDirection: 'column'} }) => (
  <Card
    elevation={6}
    sx={{
      width: '100%',
      height: '100%',
      minHeight: 300,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
      p: 2,
      pb: 3,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: 12,
      },
      ...sx,
    }}
  >
    {children}
  </Card>
);

export default CustomCard;
