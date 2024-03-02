// RegistrationPage.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, CssBaseline } from '@mui/material';
import '../style/RegistrationPage.css';
import { registrationForm } from '../services/registration';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [submitMsg, setSubmitMsg] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    


  const validateForm =  () => {
    const newErrors = {};

    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const success = await registrationForm(formData.email, formData.password, formData.displayName, setSubmitMsg);
      if(success){
        setFormData({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setErrors({});
      } else {
        console.log('Registration failed');
      }
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="container">
      <CssBaseline />
      <div className="paper">
        <Typography variant="h5">Registration</Typography>
        <form onSubmit={handleSubmit} noValidate className="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="displayName"
                label="Display Name"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                error={!!errors.displayName}
                helperText={errors.displayName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>
          </Grid>
          <Button
            className="submitBtn"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
        {!!setSubmitMsg && <Typography>{submitMsg}</Typography>}
      </div>
    </Container>
  );
};

export default RegistrationPage;
