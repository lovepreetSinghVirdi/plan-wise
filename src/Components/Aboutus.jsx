// src/Components/AboutUs.jsx
import React, { useState } from 'react';
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

import {
  validateName,
  validateEmail,
  validatePhone,
  validateAddress,
  validateMessage
} from '../utils/validators';

const teamMembers = [
  { name: 'Lovepreet Singh Virdi', role: 'Team Leader', avatar: lovepreetImg },
  { name: 'Tusharbir Singh Mutty', role: 'Back-End Developer' },
  { name: 'Kunal Rastogi', role: 'Back-End Developer' },
  { name: 'Dipti Patel', role: 'Front-End Developer', avatar: diptiImg },
];

const values = [
  { title: 'Integrity', text: 'We are honest, transparent, and committed to doing the right thing.' },
  { title: 'Innovation', text: 'We strive to continuously improve and think outside the box.' },
  { title: 'Customer First', text: 'Our users are at the heart of everything we do.' },
];

export default function AboutUs() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  // ─── Validation State & Handlers ───
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'address':
        error = validateAddress(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // validate all
    Object.entries(formData).forEach(([field, val]) => validateField(field, val));

    // check for errors
    const hasErrors = Object.values(formData).some((v, i) => {
      const key = Object.keys(formData)[i];
      return !v || errors[key];
    });

    if (!hasErrors) {
      alert('Form submitted!');
      // …submission logic
    }
  };

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
                sx={{ width: 200, height: 200, mx: 'auto', mb: 2, mt: 2 }}
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
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
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

        <Box flexBasis={{ xs: '100%', md: '70%' }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            display="grid"
            gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
            gap={2}
          >
            <TextField
              label="Your Name"
              name="name"
              variant="standard"
              fullWidth
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Your E-mail"
              name="email"
              variant="standard"
              fullWidth
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Enter Phone Number"
              name="phone"
              variant="standard"
              fullWidth
              placeholder="+1 416 123 4567"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <TextField
              label="Your Address"
              name="address"
              variant="standard"
              fullWidth
              placeholder="123 Main St, City, State, postal code"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
            />
            <TextField
              label="Message"
              name="message"
              variant="standard"
              fullWidth
              multiline
              rows={6}
              placeholder="Type your message here…"
              sx={{ gridColumn: '1 / -1' }}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />

            <Box gridColumn="1 / -1" textAlign={isMdUp ? 'right' : 'center'} mt={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  px: 4,
                  py: 1.5,
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
            <Box sx={{ maxWidth: 300, textAlign: 'center', px: 2 }}>
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
