import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { indianStates } from '../utils/indianLocations';
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      boxShadow: 'none',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      '& .MuiList-root': {
        paddingTop: 0,
        paddingBottom: 0,
      },
      '& .MuiMenuItem-root': {
        color: 'white',
      },
    },
  },
};

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(8px)',
  borderRadius: '8px',
  '& .MuiSelect-select': {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '10px 15px',
    '@media (max-width: 600px)': {
      padding: '8px 12px',
      fontSize: '0.875rem',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255, 255, 255, 0.5)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255, 255, 255, 0.7)',
  },
  '& .MuiSelect-icon': {
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '1.25rem',
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: 'transparent !important',
  color: 'white !important',
  padding: '10px 15px',
  '@media (max-width: 600px)': {
    padding: '8px 12px',
    fontSize: '0.875rem',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
    },
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '400px',
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
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch states on component mount
  useEffect(() => {
    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
      setSelectedCity('');
      setSelectedPlace('');
      setTouristPlaces([]);
    }
  }, [selectedState]);

  // Fetch tourist places when city changes
  useEffect(() => {
    if (selectedCity) {
      const city = cities.find(c => c.id === selectedCity);
      if (city) {
        fetchTouristPlaces(city.name);
        setSelectedPlace('');
      }
    }
  }, [selectedCity, cities]);

  const fetchStates = () => {
    setStates(indianStates);
  };

  const fetchCities = async (stateId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/locations/cities/${stateId}`);
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTouristPlaces = async (cityName) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/locations/tourist-places/${cityName}`);
      setTouristPlaces(response.data.places || []);
    } catch (error) {
      console.error('Error fetching tourist places:', error);
      setTouristPlaces([]);
    } finally {
      setLoading(false);
    }
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
    if (onLocationSelect) {
      onLocationSelect({
        state: selectedState,
        city: selectedCity,
        place: event.target.value
      });
    }
  };

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
      <StyledFormControl sx={{ mb: { xs: 1.5, sm: 2 } }}>
        <InputLabel>State</InputLabel>
        <StyledSelect
          value={selectedState}
          label="State"
          onChange={handleStateChange}
          disabled={loading}
          MenuProps={menuProps}
        >
          {states.map((state) => (
            <StyledMenuItem key={state} value={state}>
              {state}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControl>

      <StyledFormControl sx={{ mb: { xs: 1.5, sm: 2 } }}>
        <InputLabel>City</InputLabel>
        <StyledSelect
          value={selectedCity}
          label="City"
          onChange={handleCityChange}
          disabled={!selectedState || loading}
          MenuProps={menuProps}
        >
          {cities.map((city) => (
            <StyledMenuItem key={city.id} value={city.id}>
              {city.name}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControl>

      <StyledFormControl fullWidth>
        <InputLabel>Tourist Place</InputLabel>
        <StyledSelect
          value={selectedPlace}
          label="Tourist Place"
          onChange={handlePlaceChange}
          disabled={!selectedCity || loading}
          MenuProps={menuProps}
        >
          {touristPlaces.map((place, index) => (
            <StyledMenuItem key={index} value={place.id}>
              {place.name}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControl>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default LocationSelector;
