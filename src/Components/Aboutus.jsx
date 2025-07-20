// src/Components/AboutUs.jsx
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';

import diptiImg from '../assets/dipti.jpg';
import lovepreetImg from '../assets/lovepreet.jpg';

const teamMembers = [
  { name: 'Lovepreet Singh Virdi', role: 'Team Leader', avatar: lovepreetImg },
  { name: 'Tusharbir Singh Mutty', role: 'Back‑End Developer' },
  { name: 'Kunal Rastogi', role: 'Back‑End Developer' },
  { name: 'Dipti Patel', role: 'Front‑End Developer', avatar: diptiImg },
];

const values = [
  { title: 'Integrity', text: 'We are honest, transparent, and committed to doing the right thing.' },
  { title: 'Innovation', text: 'We strive to continuously improve and think outside the box.' },
  { title: 'Customer First', text: 'Our users are at the heart of everything we do.' },
];

export default function AboutUs() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* ─── About Us Header ─── */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, letterSpacing: 2, color: theme.palette.primary.main }}
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
            lineHeight: 1.6
          }}
        >
          At PlanWise, our mission is to empower users to find the perfect internet plans
          seamlessly, delivering clarity, value, and peace of mind in a dynamic digital world.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* ─── Team Section ─── */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, textTransform: 'uppercase', color: theme.palette.primary.main }}
        >
          Our Team
        </Typography>
      </Box>
      <Grid container spacing={6} justifyContent="center" mb={6}>
        {teamMembers.map(member => (
          <Grid key={member.name} item xs={12} sm={6} md={3} display="flex" justifyContent="center">
            <Card
              elevation={6}
              sx={{
                width: 260,
                height: 400,
                borderRadius: 4,
                p: 2,
                textAlign: 'center',
                transition: 'transform .3s, box-shadow .3s',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: 12 }
              }}
            >
              <Avatar
                src={member.avatar}
                alt={member.name}
                sx={{
                  width: 200,
                  height: 200,
                  mx: 'auto',
                  mb: 2,
                  mt: 2
                }}
              />
              <CardContent sx={{ p: 1, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
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

      {/* ─── Contact Us Section ─── */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="stretch"
        gap={4}
      >
        <Box sx={{ my: 2 }} />
        {/* contact us  */}
        <Paper
          elevation={3}
          sx={{
            flexBasis: { xs: '100%', md: '30%' },
            p: 6,
            bgcolor: '#00000066',
            color: '#fff',
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <DescriptionIcon sx={{ fontSize: 48, mb: 2, color: theme.palette.primary.main }} />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            Got any questions or suggestions?<br />
            Fill out this form and we’ll get back to you as soon as possible.
          </Typography>
        </Paper>

        {/*  form section  */}
        <Box flexBasis={{ xs: '100%', md: '70%' }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            display="grid"
            gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
            gap={2}
          >
            <TextField label="Your Name" variant="standard" fullWidth />
            <TextField label="Your E‑mail" variant="standard" fullWidth />

            <TextField label="Enter Phone Number" variant="standard" fullWidth />
            <TextField label="Subject" variant="standard" fullWidth />

            <TextField
              label="Message"
              variant="standard"
              fullWidth
              multiline
              rows={6}
              sx={{ gridColumn: '1 / -1' }}
            />

            <Box gridColumn="1 / -1" textAlign={isMdUp ? 'right' : 'center'} mt={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  minWidth: 1000,
                  '&:hover': { backgroundColor: theme.palette.primary.dark },
                }}
              >
                Send a Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* ─── Values Section ─── */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, textTransform: 'uppercase', color: theme.palette.primary.main }}
        >
          Our Values
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" mb={6}>
        {values.map(val => (
          <Grid key={val.title} item xs={12} sm={4} display="flex" justifyContent="center">
            <Box sx={{
              maxWidth: 300,
              textAlign: 'center',
              px: 2
            }}>
              <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600, mb: 1 }}>
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                {val.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
