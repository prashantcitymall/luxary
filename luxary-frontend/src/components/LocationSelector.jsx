import React, { useState } from 'react';
import { famousCities } from '../utils/famousCities';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Grid,
  Chip,
  styled
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const menuProps = {
  PaperProps: {
    style: {
      background: '#8B0000',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      '& .MuiList-root': {
        paddingTop: 0,
        paddingBottom: 0,
      },
      '& .MuiMenuItem-root': {
        color: '#FFFFFF',
      },
    },
  },
};

const StyledSelect = styled(Select)(({ theme }) => ({
  background: '#8B0000',
  backdropFilter: 'blur(8px)',
  borderRadius: '8px',
  '& .MuiSelect-select': {
    backgroundColor: 'transparent',
    color: '#FFFFFF !important',
    fontWeight: 500,
    padding: '10px 15px',
    '@media (max-width: 600px)': {
      padding: '8px 12px',
      fontSize: '0.875rem',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #8B0000',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #8B0000',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #8B0000',
  },
  '& .MuiSelect-icon': {
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '1.25rem',
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  background: '#8B0000 !important',
  color: '#FFFFFF !important',
  fontWeight: 500,
  padding: '10px 15px',
  '@media (max-width: 600px)': {
    padding: '8px 12px',
    fontSize: '0.875rem',
  },
  '&:hover': {
    background: '#630000 !important',
  },
  '&.Mui-selected': {
    background: '#4B0000 !important',
    color: '#FFFFFF !important',
    '&:hover': {
      background: '#630000 !important',
      color: '#FFFFFF !important',
    },
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '400px',
  '& .MuiInputLabel-root': {
    color: '#FFFFFF',
    '&.Mui-focused': {
      color: '#FFFFFF'
    }
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8B0000'
    },
    '&:hover fieldset': {
      borderColor: '#8B0000'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8B0000'
    }
  },
  '@media (max-width: 600px)': {
    maxWidth: '100%',
    marginBottom: '0.75rem',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-focused': {
      color: 'rgba(255, 255, 255, 0.9)',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.875rem',
    },
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
  },
}));

const LocationSelector = ({ onLocationSelect }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
    setSelectedPlace('');
    if (onLocationSelect) {
      onLocationSelect({
        city: cityName,
        place: ''
      });
    }
  };

  const handlePlaceChange = (event) => {
    const place = event.target.value;
    setSelectedPlace(place);
    if (onLocationSelect) {
      onLocationSelect({
        city: selectedCity,
        place: place
      });
    }
  };

  const selectedCityData = famousCities.find(city => city.name === selectedCity);

  return (
    <Box sx={{
      minWidth: 120,
      mt: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      px: { xs: 2, sm: 3, md: 4 },
      width: '100%',
    }}>
      <StyledFormControl sx={{ mb: { xs: 1.5, sm: 2 }, '& .MuiInputLabel-root': { color: '#8B0000' } }}>
        <InputLabel>Famous Cities</InputLabel>
        <StyledSelect
          value={selectedCity}
          label="Famous Cities"
          onChange={handleCityChange}
          MenuProps={menuProps}
        >
          {famousCities.map((city) => (
            <StyledMenuItem key={city.name} value={city.name}>
              <Typography variant="body1" component="div" sx={{ fontWeight: 500, color: '#FFFFFF' }}>
                {city.name}
              </Typography>
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl sx={{ mb: { xs: 1.5, sm: 2 }, '& .MuiInputLabel-root': { color: '#8B0000' } }}>
        <InputLabel>Tourist Places</InputLabel>
        <StyledSelect
          value={selectedPlace}
          label="Tourist Places"
          onChange={handlePlaceChange}
          disabled={!selectedCity}
          MenuProps={menuProps}
        >
          {selectedCityData?.touristPlaces.map((place) => (
            <StyledMenuItem key={place} value={place}>
              <Typography variant="body1" component="div">
                {place}
              </Typography>
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </Box>
  );
};

export default LocationSelector;
