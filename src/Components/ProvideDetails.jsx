// src/Components/ProvideDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert
} from '@mui/material';

export default function ProvideDetails() {
  // const { plan } = useParams();
  const plan = '';
  const [planData, setPlanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(false);

  useEffect(() => {
    // mock for preview
    const mock = {
      name: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Ultimate`,
      cost: '$69.99/mo',
      downloadSpeed: '250 Mbps',
      uploadSpeed: '25 Mbps',
      devices: 'Up to 12 devices',
      description: 'Perfect for families, 4K streaming, and gaming.'
    };
    const t = setTimeout(() => {
      setPlanData(mock);
      setLoading(false);
    }, 300);
    return () => clearTimeout(t);
  }, [plan]);

  if (loading) {
    return (
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !planData) {
    return (
      <Box sx={{ py: 5 }}>
        <Alert severity="error">
          Sorry, we couldn’t load the <strong>{plan}</strong> plan.
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                {planData.name}
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary="Cost"
                    secondary={planData.cost}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Download Speed"
                    secondary={planData.downloadSpeed}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Upload Speed"
                    secondary={planData.uploadSpeed}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Devices Supported"
                    secondary={planData.devices}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Description"
                    secondary={planData.description}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
