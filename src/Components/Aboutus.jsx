import React from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Front-end Developer', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Bob Smith', role: 'Back-end Developer',  avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Carol Lee', role: 'UI/UX Designer',       avatar: 'https://i.pravatar.cc/150?img=3' },
  { name: 'David Kim', role: 'Project Manager',      avatar: 'https://i.pravatar.cc/150?img=4' },
];

const values = [
  { title: 'Integrity',     text: 'We are honest, transparent, and committed to doing the right thing.' },
  { title: 'Innovation',    text: 'We strive to continuously improve and think outside the box.' },
  { title: 'Customer First',text: 'Our users are at the heart of everything we do.' },
];

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Mission & Vision Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
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

      <Divider variant="middle" sx={{ my: 6 }} />

      {/* Team Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1.2,
            display: 'inline-block',
            position: 'relative',
            '&::after': {
              content: '""',
              width: '50px',
              height: '4px',
              bgcolor: 'primary.main',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
        >
          Our Team
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.name} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              elevation={6}
              sx={{
                width: 260,
                minHeight: 300,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 12,
                },
              }}
            >
              <Avatar src={member.avatar} alt={member.name} sx={{ width: 100, height: 100, mt: 1 }} />
              <CardContent sx={{ p: 1, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: 0.3 }}>
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider variant="middle" sx={{ my: 6 }} />

      {/* Values Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1.2,
            display: 'inline-block',
            position: 'relative',
            '&::after': {
              content: '""',
              width: '50px',
              height: '4px',
              bgcolor: 'primary.main',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
        >
          Our Values
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {values.map((val) => (
          <Grid item xs={12} sm={4} md={4} key={val.title} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: 300, textAlign: 'center', px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }} align="center">
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }} align="center">
                {val.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}