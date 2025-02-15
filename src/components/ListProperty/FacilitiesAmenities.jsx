import React from 'react';
import { Box, Checkbox, FormControlLabel, Button, Grid } from '@mui/material';
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

const amenities = [
  'Free WiFi',
  'Swimming Pool',
  'Fitness Center/Gym',
  'Yoga Room',
  'Parking',
  'Restaurant',
  'Spa & Wellness',
  'Air Conditioning',
  'Bar/Lounge',
  'Room Service',
  'Conference Facilities',
  'Children\'s Play Area'
];

const FacilitiesAmenities = ({ data, onFormChange, onNext, onBack }) => {
  const handleChange = (amenity) => (event) => {
    const newFacilities = event.target.checked
      ? [...data, amenity]
      : data.filter(item => item !== amenity);
    onFormChange(newFacilities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {amenities.map((amenity) => (
          <Grid item xs={12} sm={6} md={4} key={amenity}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.includes(amenity)}
                  onChange={handleChange(amenity)}
                  sx={{
                    '&.Mui-checked': {
                      color: '#1a237e',
                    },
                  }}
                />
              }
              label={amenity}
            />
          </Grid>
        ))}
      </Grid>

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

export default FacilitiesAmenities;
