import React from 'react';
import { Box, Switch, FormControlLabel, styled } from '@mui/material';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const ToggleMode = ({ onModeChange, currentMode }) => {
  const handleChange = (event) => {
    const newMode = event.target.checked ? 'manager' : 'customer';
    onModeChange(newMode);
  };

  return (
    <Box sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '8px 16px',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <FormControlLabel
        control={
          <StyledSwitch
            checked={currentMode === 'manager'}
            onChange={handleChange}
          />
        }
        label={currentMode === 'manager' ? "Manager Mode" : "Customer Mode"}
        sx={{ 
          color: currentMode === 'manager' ? '#333333' : '#FFFFFF',
          '& .MuiFormControlLabel-label': {
            fontSize: '0.9rem',
            fontWeight: 500,
          }
        }}
      />
    </Box>
  );
};

export default ToggleMode;
