import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: '10px 24px',
  '&.MuiButton-contained': {
    backgroundColor: '#1a237e',
    '&:hover': {
      backgroundColor: '#0d1b60',
    },
  },
}));

const LocationAddress = ({ data, onFormChange, onNext, onBack }) => {
  const handleChange = (field) => (event) => {
    onFormChange({
      ...data,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        required
        label="Street Address"
        value={data.streetAddress}
        onChange={handleChange('streetAddress')}
        margin="normal"
        variant="outlined"
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, my: 2 }}>
        <TextField
          required
          label="City"
          value={data.city}
          onChange={handleChange('city')}
          variant="outlined"
        />
        
        <TextField
          required
          label="State/Province"
          value={data.state}
          onChange={handleChange('state')}
          variant="outlined"
        />

        <TextField
          required
          label="Country"
          value={data.country}
          onChange={handleChange('country')}
          variant="outlined"
        />

        <TextField
          required
          label="ZIP/Postal Code"
          value={data.zipCode}
          onChange={handleChange('zipCode')}
          variant="outlined"
        />
      </Box>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <StyledButton
          onClick={onBack}
          variant="outlined"
          startIcon={<span>←</span>}
        >
          Back
        </StyledButton>
        <StyledButton
          type="submit"
          variant="contained"
          endIcon={<span>→</span>}
        >
          Next
        </StyledButton>
      </Box>
    </Box>
  );
};

export default LocationAddress;
