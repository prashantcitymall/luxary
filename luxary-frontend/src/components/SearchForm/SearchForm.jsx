import React, { useState } from 'react';
import LocationSelector from '../LocationSelector';
import {
  Paper,
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from '../../utils/dayjs';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import GuestSelector from '../GuestSelector/GuestSelector';

const StyledPaper = styled(Paper)`
  padding: 1.8rem;
  background: rgba(255, 255, 255, 0.15);
  transform: scale(0.90);
  transform-origin: center;
  backdrop-filter: blur(25px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
              inset 0 0 80px rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 2rem;
  margin-right: calc(55% + 2rem);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 0 80px rgba(255, 255, 255, 0.2);
  }
`;

const SearchForm = () => {
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, 'day'));
  const [location, setLocation] = useState({ city: '', place: '' });

  const handleGuestChange = (newGuests) => {
    console.log('Guest selection changed:', newGuests);
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom sx={{ color: '#8B0000', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
          Find Your Perfect Stay In Every Corner Of India
        </Typography>
        
        <Box component="form" sx={{ mt: 3 }}>
          <Stack spacing={3}>
            <Box sx={{ 
              width: '100%', 
              mb: 2,
              '& .MuiInputBase-root': {
                transition: 'border-color 0.2s ease-in-out',
                '&:hover': {
                  borderColor: '#1976d2'
                }
              }
            }}>
              <LocationSelector onLocationSelect={handleLocationChange} />
            </Box>

            <Box sx={{ 
              width: '100%',
              '& > div': {
                transition: 'border-color 0.2s ease-in-out',
                '&:hover': {
                  borderColor: '#1976d2'
                }
              }
            }}>
              <GuestSelector onChange={handleGuestChange} />
            </Box>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ 
                  width: '100%',
                  '& .MuiTextField-root': {
                    transition: 'border-color 0.2s ease-in-out',
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2'
                    }
                  }
                }}>
                <DatePicker
                  label="Check-in"
                  value={checkInDate}
                  onChange={(newValue) => setCheckInDate(newValue)}
                  format="DD/MM/YYYY"
                  sx={{ flex: 1 }}
                />
                <DatePicker
                  label="Check-out"
                  value={checkOutDate}
                  onChange={(newValue) => setCheckOutDate(newValue)}
                  format="DD/MM/YYYY"
                  sx={{ flex: 1 }}
                />
              </Stack>
            </LocalizationProvider>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#87CEEB',
                '&:hover': {
                  backgroundColor: '#5FB6E5',
                },
                color: '#000000',
                fontWeight: 600
              }}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </StyledPaper>
    </motion.div>
  );
};

export default SearchForm;
