import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';

const ToggleBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '60px',
  padding: '8px 8px',
  position: 'relative',
  cursor: 'pointer',
  width: '616px',
  height: '88px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
}));

const ToggleButton = styled(Box)(({ checked }) => ({
  position: 'absolute',
  width: '300px',
  height: '72px',
  borderRadius: '48px',
  backgroundColor: checked ? '#426a5a' : '#8B0000',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  transform: checked ? 'translateX(308px)' : 'translateX(0)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
}));

const ToggleOption = styled(Box)(({ active }) => ({
  '& .MuiTypography-root': {
    fontSize: '1.5rem',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
  },
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  zIndex: 1,
  color: active ? '#fff' : 'rgba(255, 255, 255, 0.7)',
  transition: 'color 0.3s ease',
  fontWeight: active ? 600 : 400,
  userSelect: 'none',
}));

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <ToggleBar onClick={() => onChange({ target: { checked: !checked } })}>
      <ToggleButton checked={checked} />
      <ToggleOption active={!checked}>
        <AdminPanelSettingsIcon />
        <Typography variant="body2">Manager Mode</Typography>
      </ToggleOption>
      <ToggleOption active={checked}>
        <PersonIcon />
        <Typography variant="body2">Customer Mode</Typography>
      </ToggleOption>
    </ToggleBar>
  );
};

export default ToggleSwitch;
