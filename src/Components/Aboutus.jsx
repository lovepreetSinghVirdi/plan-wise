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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';

import diptiImg from '../assets/dipti.jpg';
import lovepreetImg from '../assets/lovepreet.jpg';

import { ADDRESS_NUMBER_REGEX, CANADA_POSTAL_REGEX, EMAIL_REGEX, PHONE_REGEX } from '../Helpers/helpers';

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

  // Shared card styles
  const cardStyles = {
    backgroundColor: '#fff',
    borderRadius: 4,
    p: 2,
    pb: 3,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: 12,
    },
  };

  // Validation state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!EMAIL_REGEX.test(value.trim())) error = 'Email is invalid';
        break;
      case 'phone': {
        const digits = value.replace(/\D/g, '');
        if (!PHONE_REGEX.test(digits)) error = 'Phone must be 10 digits';
        break;
      }
      case 'address':
        if (!value.trim()) error = 'Address is required';
        else if (!ADDRESS_NUMBER_REGEX.test(value.trim())) error = 'Address must start with number';
        else if (!CANADA_POSTAL_REGEX.test(value.trim())) error = 'Include valid postal code';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    Object.entries(formData).forEach(([key, val]) => validateField(key, val));
    const hasError = Object.keys(formData).some(key => !formData[key] || errors[key]);
    if (!hasError) {
      alert('Form submitted!');
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* About Us Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, letterSpacing: 2, color: theme.palette.primary.main }}>
          About Us
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ fontStyle: 'italic', color: 'text.secondary', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
          At PlanWise, our mission is to empower users to find the perfect internet plans seamlessly, delivering clarity, value, and peace of mind.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Team Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, textTransform: 'uppercase', color: theme.palette.primary.main }}>
          Our Team
        </Typography>
      </Box>
      <Grid container spacing={2} mb={6} justifyContent='center'>
        {teamMembers.map(member => (
          <Grid key={member.name} item size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card elevation={6} sx={{ width: 260, height: 400, borderRadius: 4, p: 2, textAlign: 'center', transition: 'transform .3s, box-shadow .3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: 12 } }}>
              <Avatar src={member.avatar} alt={member.name} sx={{ width: 200, height: 200, mx: 'auto', mb: 2, mt: 2 }} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">{member.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Us Section */}
      <Grid container spacing={2} mb={6}>
        <Grid container item spacing={2} size={{ xs: 12, sm: 12, md: 8 }} offset={{md:4}} sx={{ ...cardStyles, display: 'flex', justifyContent: 'center' }}>
          {/* Icon & Intro */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <DescriptionIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Contact Us</Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Got any questions or suggestions?<br />Fill out this form and we’ll get back to you.
              </Typography>
            </Box>
          </Grid>
          {/* Form */}
          <Grid item size={{ xs: 12, md: 8 }}>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
              <TextField label="Name" name="name" variant="outlined" fullWidth placeholder="John Doe" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
              <TextField label="E-mail" name="email" variant="outlined" fullWidth placeholder="you@example.com" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
              <TextField label="Phone Number" name="phone" variant="outlined" fullWidth placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} />
              <TextField label="Address" name="address" variant="outlined" fullWidth placeholder="123 Main St, City, State" value={formData.address} onChange={handleChange} error={!!errors.address} helperText={errors.address} />
              <TextField label="Message" name="message" variant="outlined" fullWidth multiline rows={6} placeholder="Type your message here…" value={formData.message} onChange={handleChange} error={!!errors.message} helperText={errors.message} />
              <Box sx={{ textAlign: isMdUp ? 'right' : 'center', pt: 1 }}>
                <Button type="submit" variant="contained" sx={{ backgroundColor: theme.palette.primary.main, color: '#fff', px: 4, py: 1.5, '&:hover': { backgroundColor: theme.palette.primary.dark } }}>
                  Send a Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ my: 8 }} />

      {/* Values Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 600, textTransform: 'uppercase', color: theme.palette.primary.main }}>Our Values</Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" mb={6}>
        {values.map(val => (
          <Grid key={val.title} item size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: 300, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600, mb: 1 }}>{val.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>{val.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
