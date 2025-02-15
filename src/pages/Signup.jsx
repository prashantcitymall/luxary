import React from 'react';
import { Typography, TextField, Button, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { GradientBackground, ContentCard } from '../styles/commonStyles';

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const StyledButton = styled(Button)`
  padding: 0.8rem;
  font-size: 1rem;
  text-transform: none;
`;

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <GradientBackground>
      <ContentCard>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: '#008080', fontWeight: 600 }}>
          Create Account
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            required
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
          />
          <TextField
            label="Phone Number"
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
          />
          <TextField
            label="Confirm Password"
            type="password"
            required
            fullWidth
          />
          <StyledButton
            variant="contained"
            type="submit"
            fullWidth
            sx={{ bgcolor: '#008080', '&:hover': { bgcolor: '#006666' } }}
          >
            Sign Up
          </StyledButton>
        </StyledForm>
        <Typography align="center" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <MuiLink component={Link} to="/login" sx={{ color: '#008080' }}>
            Login
          </MuiLink>
        </Typography>
      </ContentCard>
    </GradientBackground>
  );
};

export default Signup;
