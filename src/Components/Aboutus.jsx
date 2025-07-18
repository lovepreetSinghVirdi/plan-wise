import React from 'react';
import { useTheme } from '@mui/material/styles';
import Container   from '@mui/material/Container';
import Box         from '@mui/material/Box';
import Grid        from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Divider     from '@mui/material/Divider';
import Avatar      from '@mui/material/Avatar';
import Card        from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// 1) Import your static person‑images from assets/logos
//  import LovepreetImg   from '../assets/logos/Lovepreet.svg';
//  import TusharbirImg   from '../assets/logos/Tusharbir.svg';
//  import KunalImg       from '../assets/logos/Kunal.svg';
import DiptiImg       from '../assets/dipti.jpg';

const teamMembers = [
  { name: 'Lovepreet Singh Virdi',   role: 'Team Leader',                    },
  { name: 'Tusharbir Singh Mutty',   role: 'Back-End Devloper',                    },
  { name: 'Kunal Rastogi',           role: 'Back-End Devloper',      },
  { name: 'Dipti Patel',             role: 'Font-End Developer',  avatar: DiptiImg },
];

const values = [
  {
    title: 'Integrity',
    text:  'We are honest, transparent, and committed to doing the right thing.',
  },
  {
    title: 'Innovation',
    text:  'We strive to continuously improve and think outside the box.',
  },
  {
    title: 'Customer First',
    text:  'Our users are at the heart of everything we do.',
  },
];

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* About Us header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            color: theme.palette.primary.main,
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            fontStyle: 'italic',
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
            letterSpacing: 0.5,
            lineHeight: 1.6,
          }}
        >
          At PlanWise, our mission is to empower users to find the perfect internet plans
          seamlessly, delivering clarity, value, and peace of mind in a dynamic digital world.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Team Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            color: theme.palette.primary.main,
          }}
        >
          Our Team
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map(member => (
          <Grid
            key={member.name}
            item
            xs={12} sm={6} md={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              elevation={6}
              sx={{
                width: 260,
                height: 360,
                borderRadius: 4,
                p: 2,
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 12,
                },
              }}
            >
              <Avatar
                src={member.avatar}
                alt={member.name}
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Values Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            color: theme.palette.primary.main,
          }}
        >
          Our Values
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {values.map(val => (
          <Grid
            key={val.title}
            item
            xs={12} sm={4} md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ maxWidth: 300, textAlign: 'center', px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {val.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
