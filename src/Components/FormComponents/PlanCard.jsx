// src/Components/PlanCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CustomCard from './CustomCard';
import { brandLogo, capitalize } from '../../Helpers/helpers';


export default function PlanCard(props) {
  const { plan } = props;
  const { description, features, price, planName } = plan;

  // fallback to raw JSON keys if camelCase isn't provided
  const downloadSpeed =
    plan.downloadSpeed ?? plan.DownloadingSpeed ?? null;
  const uploadSpeed =
    plan.uploadSpeed ?? plan.uploadingspeed ?? null;

  return (
    <CustomCard
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        flexGrow: 1
      }}>
      <CardHeader
        title={capitalize(plan.site)}
        action={
          <Box
            component="img"
            src={brandLogo(plan.site)}
            alt={`${plan.site} logo`}
            sx={{ width: 80, height: 80 }}
          />

        }
        sx={{ pb: 0 }}
      />

      <CardContent sx={{ flexGrow: 1, mt: 2 }}>
         <Typography variant="h6">
          {planName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {downloadSpeed && (
          <Typography sx={{ display: 'flex', mt: 3, justifyContent: 'space-between' }} variant="body2" color="text.secondary">
            <strong style={{ marginRight: '1rem' }}>Download Speed:</strong> <Box component={'span'}>{downloadSpeed}</Box>
          </Typography>
        )}
        {uploadSpeed && (
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }} variant="body2" color="text.secondary">
            <strong style={{ marginRight: '1rem' }}>Upload Speed:</strong>  <Box component={'span'}> {uploadSpeed}</Box>
          </Typography>
        )}

        {features && (
          <Typography sx={{ display: 'flex' }} variant="body2" color="text.secondary">
            <strong style={{ marginRight: '1rem' }}>Features:</strong>  <Box component={'span'}>  {features}</Box>
          </Typography>
        )}
      </CardContent>

      <CardActions
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          mt: 'auto',
          justifyContent: 'center',
          pb: 2,
          mb: 2
        }}
      >
        <Typography variant="h6" gutterBottom>
          {price}
        </Typography>
        <Button fullWidth variant="contained">
          Shop Now
        </Button>
      </CardActions>
    </CustomCard>
  );

}
