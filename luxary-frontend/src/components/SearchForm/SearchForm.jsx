import React, { useState, useRef, useEffect } from 'react';
import LocationSelector from '../LocationSelector/LocationSelector';
import {
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  Slider,
  IconButton,
  Popper,
  ClickAwayListener,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const GuestInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    transition: all 0.3s ease;

    & input {
      color: #fff;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: rgba(255, 255, 255, 0.2);
      border-width: 1px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      & .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.3);
      }
    }

    &.Mui-focused {
      background: rgba(255, 255, 255, 0.2);
      & .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.5);
        border-width: 1px;
      }
    }
  }

  & .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
    &.Mui-focused {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const GuestDropdown = styled(Paper)`
  padding: 16px;
  width: 300px;
  max-width: 100%;
  background: rgba(23, 25, 35, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const CounterButton = styled(IconButton)`
  background-color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${props => props.disabled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.2)'};
    border-color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)'};
  }
`;

const StyledPaper = styled(Paper)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.15);
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

const LocationInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    transition: all 0.3s ease;

    & input {
      color: #fff;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: rgba(255, 255, 255, 0.2);
      border-width: 1px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      & .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.3);
      }
    }

    &.Mui-focused {
      background: rgba(255, 255, 255, 0.2);
      & .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.5);
        border-width: 1px;
      }
    }
  }

  & .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
    &.Mui-focused {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  & .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const LocationDropdown = styled(Paper)`
  padding: 8px 0;
  width: 300px;
  max-width: 100%;
  max-height: 400px;
  overflow-y: auto;
  background: rgba(23, 25, 35, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  & .MuiListItem-root {
    padding: 12px 16px;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const StyledDatePicker = styled(DatePicker)`
  & .MuiOutlinedInput-root {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    transition: all 0.3s ease;

    & input {
      color: #fff;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: rgba(255, 255, 255, 0.2);
      border-width: 1px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      & .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.3);
      }
    }

    &.Mui-focused {
      background: rgba(255, 255, 255, 0.2);
      & .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.5);
        border-width: 1px;
      }
    }
  }

  & .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
    &.Mui-focused {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  & .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.7);
  }

  & .MuiPickersPopper-paper {
    background: rgba(23, 25, 35, 0.95);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    color: #fff;

    & .MuiPickersDay-root {
      color: rgba(255, 255, 255, 0.8);
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      &.Mui-selected {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    & .MuiPickersDay-today {
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const SearchButton = styled(Button)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: #fff;
  padding: 12px 32px;
  font-size: 1.1rem;
  text-transform: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SearchForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1
  });
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [location, setLocation] = useState({ state: '', city: '' });
  const guestAnchorRef = useRef(null);



  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleGuestChange = (type, increment) => {
    setGuests(prev => {
      const newValue = prev[type] + (increment ? 1 : -1);
      const limits = {
        adults: { min: 1, max: 10 },
        children: { min: 0, max: 6 },
        rooms: { min: 1, max: 5 }
      };
      return {
        ...prev,
        [type]: Math.max(limits[type].min, Math.min(limits[type].max, newValue))
      };
    });
  };

  const getGuestSummary = () => {
    const parts = [];
    if (guests.adults > 0) {
      parts.push(`${guests.adults} Adult${guests.adults !== 1 ? 's' : ''}`);
    }
    if (guests.children > 0) {
      parts.push(`${guests.children} Child${guests.children !== 1 ? 'ren' : ''}`);
    }
    if (guests.rooms > 0) {
      parts.push(`${guests.rooms} Room${guests.rooms !== 1 ? 's' : ''}`);
    }
    return parts.join(', ');
  };

  const handleGuestClickAway = () => {
    setGuestDropdownOpen(false);
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
        <Typography variant="h5" gutterBottom sx={{ color: '#1a237e', fontWeight: 600 }}>
          Find Your Perfect Stay in Agra
        </Typography>
        
        <Box component="form" sx={{ mt: 3 }}>
          <Stack spacing={3}>
            <Box sx={{ width: '100%', mb: 2 }}>
              <LocationSelector onLocationChange={handleLocationChange} />
            </Box>

            <Box sx={{ width: '100%' }}>
              <GuestInput
                fullWidth
                ref={guestAnchorRef}
                value={getGuestSummary()}
                onClick={() => setGuestDropdownOpen(true)}
                InputProps={{
                  readOnly: true,
                  endAdornment: <ExpandMoreIcon />
                }}
              />
              <Popper
                open={guestDropdownOpen}
                anchorEl={guestAnchorRef.current}
                placement="bottom-start"
                style={{ zIndex: 1301 }}
              >
                <ClickAwayListener onClickAway={handleGuestClickAway}>
                  <GuestDropdown elevation={4}>
                    <Stack spacing={3}>
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff' }}>Adults</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Age 13+</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CounterButton
                              size="small"
                              onClick={() => handleGuestChange('adults', false)}
                              disabled={guests.adults <= 1}
                            >
                              <RemoveIcon fontSize="small" />
                            </CounterButton>
                            <Typography sx={{ minWidth: '20px', textAlign: 'center', color: '#fff' }}>{guests.adults}</Typography>
                            <CounterButton
                              size="small"
                              onClick={() => handleGuestChange('adults', true)}
                              disabled={guests.adults >= 10}
                            >
                              <AddIcon fontSize="small" />
                            </CounterButton>
                          </Box>
                        </Box>
                        <Divider />
                      </Box>

                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff' }}>Children</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Ages 2-12</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CounterButton
                              size="small"
                              onClick={() => handleGuestChange('children', false)}
                              disabled={guests.children <= 0}
                            >
                              <RemoveIcon fontSize="small" />
                            </CounterButton>
                            <Typography sx={{ minWidth: '20px', textAlign: 'center', color: '#fff' }}>{guests.children}</Typography>
                            <CounterButton
                              size="small"
                              onClick={() => handleGuestChange('children', true)}
                              disabled={guests.children >= 6}
                            >
                              <AddIcon fontSize="small" />
                            </CounterButton>
                          </Box>
                        </Box>
                        <Divider />
                      </Box>

                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff' }}>Rooms</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Number of rooms</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CounterButton
                              size="small"
                              onClick={() => handleGuestChange('rooms', false)}
                              disabled={guests.rooms <= 1}
                            >
                              <RemoveIcon fontSize="small" />
                            </CounterButton>
                            <Typography sx={{ minWidth: '20px', textAlign: 'center', color: '#fff' }}>{guests.rooms}</Typography>
                            <CounterButton
                              size="small"
                              onClick={() => handleGuestChange('rooms', true)}
                              disabled={guests.rooms >= 5}
                            >
                              <AddIcon fontSize="small" />
                            </CounterButton>
                          </Box>
                        </Box>
                      </Box>
                    </Stack>
                  </GuestDropdown>
                </ClickAwayListener>
              </Popper>
            </Box>

            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Check-in Date"
                  value={checkInDate}
                  onChange={setCheckInDate}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={new Date()}
                />
                <DatePicker
                  label="Check-out Date"
                  value={checkOutDate}
                  onChange={setCheckOutDate}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={checkInDate || new Date()}
                />
              </LocalizationProvider>
            </Box>

            <Box sx={{ px: 2 }}>
              <Typography gutterBottom>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={10000}
                step={500}
                sx={{ color: '#1a237e' }}
              />
            </Box>

            <Button 
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#1a237e',
                '&:hover': { bgcolor: '#283593' },
                py: 1.5
              }}
            >
              Search Hotels
            </Button>
          </Stack>
        </Box>
      </StyledPaper>
    </motion.div>
  );
};

export default SearchForm;
