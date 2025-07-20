// src/Components/RogersPlans.jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion as Motion } from 'framer-motion';

import Loader from './FormComponents/Loader'
import PlanCard from './FormComponents/PlanCard'
import RogersLogo from '../assets/Rogers.svg'

export default function RogersPlans() {
  const theme = useTheme()
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('/plans.json')
      .then(res => {
        const rogers = res.data
          .filter(p => p.provider === 'rogers')
          .map(p => ({ ...p, logo: RogersLogo }))
        setPlans(rogers)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Loader message="Loading Rogers plans…" />
  }
  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
        <Typography color="error" align="center">
          Failed to load plans: {error}
        </Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: '2.5rem',
          color: theme.palette.primary.main,
          mb: 4
        }}
      >
        Rogers Plans
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {plans.map((plan, i) => (
          <Grid
            key={plan.id}
            sx={{ display: 'flex' }}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <Motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              style={{
                flex: 1,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'   /* ➋ fill the grid‐cell vertically */
              }}
            >
              <PlanCard plan={plan} />
            </Motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
