import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  outline: none;
  
  .MuiTextField-root {
    margin-bottom: 16px;
  }
`;

const SignUpButton = styled(Button)`
  background: linear-gradient(45deg, #1a237e, #0d1b60);
  color: white;
  padding: 12px;
  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
  text-transform: none;
  font-size: 1rem;
  
  &:hover {
    background: linear-gradient(45deg, #0d1b60, #1a237e);
  }
`;

const SignUpModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    gender: 'male',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'phoneNumber') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: digits }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      onClose();
    }
  };
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="signup-modal"
      aria-describedby="signup-form"
    >
      <FormBox component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: '#1a237e', fontWeight: 600 }}>
          Sign Up
        </Typography>
        
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
          required
          size="small"
        />
        
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          required
          size="small"
          inputProps={{
            maxLength: 10,
            pattern: '[0-9]*'
          }}
        />
        
        <FormControl component="fieldset" sx={{ mb: 2, width: '100%' }}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
            <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
          </RadioGroup>
        </FormControl>
        
        <TextField
          fullWidth
          label="Email (Optional)"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          size="small"
        />
        
        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          required
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  size="small"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        
        <SignUpButton type="submit">
          Sign Up
        </SignUpButton>
      </FormBox>
    </Modal>
  );
};

export default SignUpModal;
