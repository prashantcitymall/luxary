import React, { useState, useEffect } from 'react';
import { Box, FormControlLabel, Switch, styled } from '@mui/material';

const StyledSwitch = styled(Switch)(({ theme, size }) => ({
  '& .MuiSwitch-root': {
    overflow: 'visible',
  },
  width: 52,
  height: 24,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,
    transform: 'translateX(0)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(28px)',  // Increased to move to the end
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'rgba(244, 158, 76, 0.8)',
        border: '2px solid rgba(244, 158, 76, 0.4)',
        boxShadow: '0 0 10px rgba(244, 158, 76, 0.2)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#fff',
    width: 24,
    height: 24,
    margin: 0,
    boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      borderRadius: '50%',
      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 14,
    border: '2px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(4px)',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
    }
  },
}));

const ToggleMode = ({ onModeChange, size = 'normal' }) => {
  console.log('ToggleMode rendered'); // Debug log
  const [isManager, setIsManager] = useState(false);
  const [showToggle, setShowToggle] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setShowToggle(false);
    }
  }, []);

  const handleModeChange = (event) => {
    const newMode = event.target.checked;
    setIsManager(newMode);
    localStorage.setItem('userMode', newMode ? 'manager' : 'customer');
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  if (!showToggle) return null;

  return (
    <Box sx={{ 
        display: 'inline-flex',
        alignItems: 'center',
        height: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '0 8px',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
        },
      }}>
      <FormControlLabel
        control={
          <StyledSwitch
            checked={isManager}
            onChange={handleModeChange}
          />
        }
        label={isManager ? "Manager Mode" : "Customer Mode"}
        sx={{ 
          margin: 0,
          color: 'white',
          '& .MuiFormControlLabel-label': {
            fontSize: '0.7rem',
            fontWeight: 500,
            marginLeft: '2px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap'
          }
        }}
      />
    </Box>
  );
};

const ExportedToggleMode = ToggleMode;
export default ExportedToggleMode;
