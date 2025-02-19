import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Switch, FormControlLabel, styled } from '@mui/material';

// Styled components
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
        backgroundColor: '#aab4be',
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
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const HeroSection = () => {
  const [isManager, setIsManager] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (you can modify this based on your auth implementation)
    const token = localStorage.getItem('token');
    if (token) {
      setShowToggle(false);
    }
  }, []);

  const handleModeChange = (event) => {
    setIsManager(event.target.checked);
    // You can store the mode in localStorage or context for persistence
    localStorage.setItem('userMode', event.target.checked ? 'manager' : 'customer');
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Find Your Perfect Stay
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {isManager 
              ? 'List your property and reach millions of travelers'
              : 'Discover amazing places to stay around the world'}
          </Typography>
          
          {showToggle && (
            <Box sx={{ mt: 4 }}>
              <FormControlLabel
                control={
                  <StyledSwitch
                    checked={isManager}
                    onChange={handleModeChange}
                  />
                }
                label={isManager ? "Manager Mode" : "Customer Mode"}
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
