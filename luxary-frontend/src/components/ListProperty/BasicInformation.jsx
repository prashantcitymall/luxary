import React from 'react';
import { Box, TextField, MenuItem, Button, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

const NextButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1a237e',
  color: '#fff',
  padding: '12px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#0d1b60',
  },
  float: 'right',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#1a237e',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1a237e',
    },
  },
}));

const propertyTypes = [
  { value: 'hotel', label: 'Hotel' },
  { value: 'resort', label: 'Resort' },
  { value: 'villa', label: 'Villa' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'guesthouse', label: 'Guesthouse' },
  { value: 'homestay', label: 'Homestay' },
  { value: 'boutique', label: 'Boutique Hotel' },
];

const starRatings = [
  { value: '1', label: '1 Star' },
  { value: '2', label: '2 Stars' },
  { value: '3', label: '3 Stars' },
  { value: '4', label: '4 Stars' },
  { value: '5', label: '5 Stars' },
];

const BasicInformation = ({ data, onFormChange, onNext }) => {
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
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '100%' }}>
      <FormControl fullWidth>
        <StyledTextField
          required
          label="Property Name"
          name="propertyName"
          value={data.propertyName}
          onChange={handleChange('propertyName')}
          placeholder="Enter your property name"
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth>
        <StyledTextField
          required
          select
          label="Property Type"
          name="propertyType"
          value={data.propertyType}
          onChange={handleChange('propertyType')}
          placeholder="Select property type"
          variant="outlined"
        >
          {propertyTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledTextField>
      </FormControl>

      <FormControl fullWidth>
        <StyledTextField
          required
          multiline
          rows={4}
          label="Property Description"
          name="propertyDescription"
          value={data.propertyDescription}
          onChange={handleChange('propertyDescription')}
          placeholder="Describe your property"
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth>
        <StyledTextField
          required
          select
          label="Star Rating"
          name="starRating"
          value={data.starRating}
          onChange={handleChange('starRating')}
          placeholder="Select star rating"
          variant="outlined"
        >
          {starRatings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledTextField>
      </FormControl>

      <Box sx={{ mt: 4 }}>
        <NextButton type="submit">
          Next →
        </NextButton>
      </Box>
    </Box>
  );
};

export default BasicInformation;
