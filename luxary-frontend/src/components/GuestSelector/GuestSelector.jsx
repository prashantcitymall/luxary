import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Stack,
  Popover,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  width: '100%',
  maxWidth: '600px',
}));

const CounterButton = styled(IconButton)(({ disabled }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1.5px solid #007FFF',
  color: disabled ? '#ccc' : '#007FFF',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: disabled ? '#FFFFFF' : 'rgba(0, 127, 255, 0.1)',
  },
  '&:disabled': {
    border: '1.5px solid #ccc',
  }
}));

const CounterValue = styled(Typography)({
  minWidth: '32px',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '500',
});

const AgeSelect = styled(Select)({
  '& .MuiSelect-select': {
    padding: '8px 16px',
    borderRadius: '25px',
    border: '2px solid #007FFF',
    backgroundColor: '#FFFFFF',
    '&:focus': {
      backgroundColor: '#FFFFFF',
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  }
});

const GuestSelector = ({ onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [guests, setGuests] = useState({
    rooms: 1,
    adults: 2,
    children: 0,
    childrenAges: []
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onChange && onChange(guests);
  };

  const handleCounterChange = (type, increment) => {
    setGuests(prev => {
      const limits = {
        rooms: { min: 1, max: 8 },
        adults: { min: 1, max: 12 },
        children: { min: 0, max: 6 }
      };
      
      const newValue = prev[type] + (increment ? 1 : -1);
      const newGuests = {
        ...prev,
        [type]: Math.max(limits[type].min, Math.min(limits[type].max, newValue))
      };

      // Adjust children ages array
      if (type === 'children') {
        if (increment && newValue > prev.children) {
          newGuests.childrenAges = [...prev.childrenAges, 0];
        } else if (!increment && newValue < prev.children) {
          newGuests.childrenAges = prev.childrenAges.slice(0, -1);
        }
      }

      return newGuests;
    });
  };

  const handleAgeChange = (index, age) => {
    setGuests(prev => ({
      ...prev,
      childrenAges: prev.childrenAges.map((a, i) => i === index ? age : a)
    }));
  };

  const open = Boolean(anchorEl);

  const getSummaryText = () => {
    const parts = [];
    if (guests.adults > 0) parts.push(`${guests.adults} Adult${guests.adults !== 1 ? 's' : ''}`);
    if (guests.children > 0) parts.push(`${guests.children} Child${guests.children !== 1 ? 'ren' : ''}`);
    parts.push(`${guests.rooms} Room${guests.rooms !== 1 ? 's' : ''}`);
    return parts.join(' | ');
  };

  return (
    <Box>
      <Box
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          p: 2,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          }
        }}
      >
        <Box>
          <Typography sx={{ mb: 0.5, fontWeight: 600, color: '#8B0000' }}>
            Guests & Rooms
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500, color: '#A52A2A' }}>
            {getSummaryText()}
          </Typography>
        </Box>
        <KeyboardArrowDownIcon sx={{ color: '#8B0000' }} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            width: anchorEl?.offsetWidth,
          }
        }}
      >
        <StyledPaper>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Rooms <Typography component="span" variant="caption" color="textSecondary">(Max 8)</Typography>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CounterButton
                  size="small"
                  disabled={guests.rooms <= 1}
                  onClick={() => handleCounterChange('rooms', false)}
                >
                  <RemoveIcon fontSize="small" />
                </CounterButton>
                <CounterValue>{guests.rooms}</CounterValue>
                <CounterButton
                  size="small"
                  disabled={guests.rooms >= 8}
                  onClick={() => handleCounterChange('rooms', true)}
                >
                  <AddIcon fontSize="small" />
                </CounterButton>
              </Box>
            </Box>

            <Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Adults <Typography component="span" variant="caption" color="textSecondary">(12+ yr)</Typography>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CounterButton
                  size="small"
                  disabled={guests.adults <= 1}
                  onClick={() => handleCounterChange('adults', false)}
                >
                  <RemoveIcon fontSize="small" />
                </CounterButton>
                <CounterValue>{guests.adults}</CounterValue>
                <CounterButton
                  size="small"
                  disabled={guests.adults >= 12}
                  onClick={() => handleCounterChange('adults', true)}
                >
                  <AddIcon fontSize="small" />
                </CounterButton>
              </Box>
            </Box>

            <Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Children <Typography component="span" variant="caption" color="textSecondary">(0-12 yr)</Typography>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CounterButton
                  size="small"
                  disabled={guests.children <= 0}
                  onClick={() => handleCounterChange('children', false)}
                >
                  <RemoveIcon fontSize="small" />
                </CounterButton>
                <CounterValue>{guests.children}</CounterValue>
                <CounterButton
                  size="small"
                  disabled={guests.children >= 6}
                  onClick={() => handleCounterChange('children', true)}
                >
                  <AddIcon fontSize="small" />
                </CounterButton>
              </Box>
            </Box>

            {guests.children > 0 && (
              <Box sx={{ flex: '1 1 100%', mt: 1 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {guests.childrenAges.map((age, index) => (
                    <Box key={index} sx={{ flex: '1 1 120px', minWidth: '120px' }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        Child {index + 1}
                      </Typography>
                      <AgeSelect
                        value={age}
                        onChange={(e) => handleAgeChange(index, e.target.value)}
                        size="small"
                        fullWidth
                      >
                        {[...Array(13)].map((_, i) => (
                          <MenuItem key={i} value={i}>{i} years</MenuItem>
                        ))}
                      </AgeSelect>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </StyledPaper>
      </Popover>
    </Box>
  );
};

export default GuestSelector;
