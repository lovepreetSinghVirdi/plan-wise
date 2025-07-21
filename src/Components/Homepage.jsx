// src/Components/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { motion as Motion } from 'framer-motion';
import MainSearch from './FormComponents/MainSearch';
import CustomCard from './FormComponents/CustomCard';
import axios from 'axios';
import { apiURL, brandLogo, getWordOccurencesURL } from '../Helpers/helpers';

const plans = [
  { key: 'rogers', title: 'Rogers', text: 'This is the first card.' },
  { key: 'iprimus', title: 'IPrimus', text: 'This is the second card.' },
  { key: 'vmedia', title: 'Vmedia', text: 'This is the third card.' },
  { key: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
];

export default function HomePage() {
  const [topSearchedWords, setTopSearchedWords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopSearches = async () => {

      try {
        const config = { params: { keyword: '' } };
        const result = await axios.get(`${apiURL}${getWordOccurencesURL}`, config);
        setTopSearchedWords(result);

      } catch (error) {
        console.log("error---", error)
      }
    }
    fetchTopSearches();
  }, [])

  const handleOptionSelect = (keyword) => {
    navigate('/available-plans', { state: { keyword } });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, width: '100%', justifyContent: 'center' }}>
      {/* ─── Main Searchbar row ─── */}
      < Grid container spacing={2} sx={{ mt: 20 }}>
        <MainSearch onSelect={handleOptionSelect} />

      </Grid>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }} sx={{ mt: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',

              //reserve space so layout never jumps:
              minHeight: '2rem',
            }}
          >
            {topSearchedWords.length > 0 && topSearchedWords.map((s) => (
              <Chip
                key={s}
                label={s}
                size="small"
                color="primary"
                onClick={() => { }}
                sx={{ ml: 1 }}
              />
            ))}

          </Box>
        </Grid>
      </Grid>


      {/* ─── Plan cards row ─── */}
      <Grid container spacing={2} sx={{ mt: 10 }}>
        {plans.map((plan, index) => (
          <Grid
            key={`plan_${index}_${plan.key}`}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{ display: 'flex' }}
          >

            <Motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ width: '100%' }}
            >
              <CustomCard>
                <CardHeader
                  title={plan.title}
                  action={
                    <Box
                      component="img"
                      src={brandLogo(plan.site)}
                      alt={`${plan.site} logo`}
                      sx={{ width: 90, height: 90 }}
                    />
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {plan.text}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    component={RouterNavLink}
                    to={`/${plan.key}`}
                    fullWidth
                    variant="contained"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CustomCard>
            </Motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
