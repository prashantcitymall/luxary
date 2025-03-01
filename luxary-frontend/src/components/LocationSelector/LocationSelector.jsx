import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { indianStates, indianCities, touristPlaces } from '../../utils/indianLocations';

const menuProps = {
  PaperProps: {
    style: {
      backgroundColor: '#218380',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      marginTop: '8px',
    },
  },
  MenuListProps: {
    style: {
      padding: '8px 0',
    },
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};

const selectStyles = {
  '& .MuiSelect-select': {
    color: 'white',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
};

const LocationWrapper = styled(Box)`
  background: transparent;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  
  .MuiPaper-root {
    background-color: #218380 !important;
  }
  
  .MuiMenuItem-root {
    color: white !important;
    padding: 12px 16px !important;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
  }
  
  .MuiSelect-select {
    color: white !important;
  }
  
  .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  
  .MuiOutlinedInput-notchedOutline {
    border-color: rgba(255, 255, 255, 0.3) !important;
  }
`;

const SearchTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 4px;
    background: white;
    
    &:hover {
      background: #f8f8f8;
    }
    
    &.Mui-focused {
      background: white;
    }
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-bottom: 1rem;
  
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    background: transparent;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    
    &.Mui-focused {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  & .MuiMenu-paper {
    background-color: #218380;
  }

  & .MuiSelect-select {
    color: white;
  }

  & .MuiMenuItem-root {
    color: white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  }
  
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: border-color 0.2s ease;
  }
  
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(255, 255, 255, 0.5);
  }

  & .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
  }

  & .MuiInputLabel-root.Mui-focused {
    color: rgba(255, 255, 255, 0.9);
  }

  & .MuiSelect-icon {
    color: rgba(255, 255, 255, 0.7);
  }

  & .MuiMenuItem-root {
    color: white;
  }
`;

const LocationSelector = ({ onLocationChange }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [cities, setCities] = useState([]);
  const [places, setPlaces] = useState([]);
  const [stateSearchTerm, setStateSearchTerm] = useState('');
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  
  // Memoize filtered states and cities to prevent unnecessary re-renders
  const filteredStates = React.useMemo(() => 
    indianStates.filter(state =>
      state.toLowerCase().includes(stateSearchTerm.toLowerCase().trim())
    ),
    [stateSearchTerm]
  );

  const filteredCities = React.useMemo(() => 
    cities.filter(city =>
      city.toLowerCase().includes(citySearchTerm.toLowerCase().trim())
    ),
    [cities, citySearchTerm]
  );

  useEffect(() => {
    if (selectedState) {
      setCities(indianCities[selectedState] || []);
      setSelectedCity(''); // Reset city when state changes
      setSelectedPlace(''); // Reset place when state changes
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity) {
      setPlaces(touristPlaces.get(selectedCity));
      setSelectedPlace(''); // Reset place when city changes
    }
  }, [selectedCity]);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    onLocationChange({ state, city: '' });
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onLocationChange({ state: selectedState, city, place: '' });
  };

  const handlePlaceChange = (event) => {
    const place = event.target.value;
    setSelectedPlace(place);
    onLocationChange({ state: selectedState, city: selectedCity, place });
  };

  return (
    <LocationWrapper>
      <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
        Location
      </Typography>
      
      <StyledFormControl required>
        <InputLabel>State</InputLabel>
        <Select
          value={selectedState}
          label="State"
          onChange={handleStateChange}
          sx={selectStyles}
          MenuProps={menuProps}
          inputProps={{
            MenuProps: {

            PaperProps: {
              style: {
                backgroundColor: '#218380',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              },
            },
            MenuListProps: {
              style: {
                padding: 0,
              },
            },
          }}

          onOpen={() => {
            setIsStateOpen(true);
            // Clear search when opening
            setStateSearchTerm('');
          }}
          onClose={() => {
            setIsStateOpen(false);
            // Clear search when closing
            setStateSearchTerm('');
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            PaperProps: {
              style: {
                maxHeight: 400,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }
            }
          }}
        >
          {isStateOpen && (
            <Box 
              component="li"
              style={{ 
                position: 'sticky', 
                top: 0, 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                backdropFilter: 'blur(10px)',
                zIndex: 1,
                padding: '8px 16px',
                margin: 0
              }}
            >
              <SearchTextField
                size="small"
                placeholder="Search state..."
                value={stateSearchTerm}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setStateSearchTerm(e.target.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onKeyDown={(e) => {
                  // Prevent select from closing on key press
                  e.stopPropagation();
                }}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#f5f5f5',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: '#fafafa'
                    },
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.87)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2'
                    }
                  },
                  '& .MuiInputBase-input': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  },
                  '& .MuiInputAdornment-root': {
                    color: 'rgba(0, 0, 0, 0.54)'
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
          {filteredStates.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>

      <StyledFormControl required disabled={!selectedState}>
        <InputLabel>City</InputLabel>
        <Select
          value={selectedCity}
          label="City"
          onChange={handleCityChange}
          sx={selectStyles}
          MenuProps={menuProps}
          inputProps={{
            MenuProps: {

            PaperProps: {
              style: {
                backgroundColor: '#218380',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              },
            },
            MenuListProps: {
              style: {
                padding: 0,
              },
            },
          }}

          onOpen={() => {
            setIsCityOpen(true);
            setCitySearchTerm('');
          }}
          onClose={() => {
            setIsCityOpen(false);
            setCitySearchTerm('');
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            PaperProps: {
              style: {
                maxHeight: 400,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }
            }
          }}
        >
          {isCityOpen && (
            <Box 
              component="li"
              style={{ 
                position: 'sticky', 
                top: 0, 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                backdropFilter: 'blur(10px)',
                zIndex: 1,
                padding: '8px 16px',
                margin: 0
              }}
            >
              <SearchTextField
                size="small"
                placeholder="Search city..."
                value={citySearchTerm}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCitySearchTerm(e.target.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#f5f5f5',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: '#fafafa'
                    },
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.87)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2'
                    }
                  },
                  '& .MuiInputBase-input': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  },
                  '& .MuiInputAdornment-root': {
                    color: 'rgba(0, 0, 0, 0.54)'
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
          {filteredCities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>

      {selectedCity && (
        <StyledFormControl required>
          <InputLabel>Where to go</InputLabel>
          <Select
            value={selectedPlace}
            label="Where to go"
            onChange={handlePlaceChange}
          >
            {places.map((place) => (
              <MenuItem key={place} value={place}>
                {place}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      )}
    </LocationWrapper>
  );
};

export default LocationSelector;
