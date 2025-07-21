// src/Components/PlanCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CustomCard from './FormComponents/CustomCard';

export default function PlanCard({ plan }) {
  // pull name/description/price/features/logo 
  const {
    name,
    description= "",
    price,
    features = [],
    logo
  } = plan;
  const featureList = features.length
    ? features
    : description.split(',').map(s => s.trim());
  // fallback to raw JSON keys if camelCase isn't provided
  const downloadSpeed =
    plan.downloadSpeed ?? plan.DownloadingSpeed ?? null;
  const uploadSpeed =
    plan.uploadSpeed   ?? plan.uploadingspeed  ?? null;

  return (
    <CustomCard 
    sx={{ 
        display: 'flex', 
        flexDirection: 'column',
         height: '100%', 
         flexGrow:1 }}>
      <CardHeader
        title={name}
        action={
          logo && (
            <Box
              component="img"
              src={logo}
              alt={`${name} logo`}
              sx={{ width: 80, height: 80 }}
            />
          )
        }
        sx={{ pb: 0 }}
      />

      <CardContent sx={{ flexGrow: 1, pt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {downloadSpeed && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Download Speed:</strong> {downloadSpeed}
          </Typography>
        )}
        {uploadSpeed && (
          <Typography variant="body2" color="text.secondary">
            <strong>Upload Speed:</strong> {uploadSpeed}
          </Typography>
        )}

        {features.length > 0 && (
          <>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Features:</strong>
            </Typography>
            <ul style={{ margin: 4, paddingLeft: 20 }}>
              {features.map((f, i) => (
                <li key={i}>
                  <Typography variant="body2">{f}</Typography>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>

      <CardActions
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          mt: 'auto',
          mb: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {price}
        </Typography>
        <Button fullWidth variant="contained">
          Choose
        </Button>
      </CardActions>
    </CustomCard>
  );

}
