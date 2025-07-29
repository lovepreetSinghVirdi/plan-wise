// src/Components/FormComponents/CustomCard.jsx
import React from 'react';
import { Card } from '@mui/material';

const CustomCard = ({ children, lift = true, noShadow = false, sx = {} }) => {
  const defaultElevation = 6;
  const elevation = noShadow ? 0 : defaultElevation;

  const liftStyles = lift
    ? noShadow
      ? {
        transition: 'transform 0.3s',
        '&:hover': { transform: 'translateY(-10px)' },
      }
      : {
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 12,
        },
      }
    : {};

  const shadowStyles = noShadow
    ? { boxShadow: 'none !important' }
    : {};

  return (
    <Card
      elevation={elevation}
      sx={{
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '25rem',
        minHeight: '25rem',
        borderRadius: 4,
        p: 2,
        pb: 3,
        overflow: 'hidden',
        ...shadowStyles,
        ...liftStyles,
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
