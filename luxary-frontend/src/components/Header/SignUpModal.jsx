import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from '../../utils/dayjs';
import { authService } from '../../services/auth';
import { Alert, Snackbar } from '@mui/material';
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
    dateOfBirth: dayjs().subtract(18, 'year'),
    aadharNumber: '',
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.aadharNumber) {
      newErrors.aadharNumber = 'Aadhar number is required';    
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhar number must be exactly 12 digits';
    }
    
    // Validate full name
    if (!formData.fullName || !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    // Validate phone number
    if (!formData.phoneNumber || !formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }
    
    // Validate email (optional)
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Validate password
    if (!formData.password || !formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Validate date of birth
    if (!formData.dateOfBirth || !dayjs.isDayjs(formData.dateOfBirth)) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const age = dayjs().diff(formData.dateOfBirth, 'year');
      if (age < 18) {
        newErrors.dateOfBirth = 'You must be at least 18 years old';
      }
    }

    // Validate Aadhar number
    if (!formData.aadharNumber) {
      newErrors.aadharNumber = 'Aadhar number is required';
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhar number must be exactly 12 digits';
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

    if (name === 'aadharNumber') {
      const digits = value.replace(/\D/g, '').slice(0, 12);
      setFormData(prev => ({ ...prev, [name]: digits }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    
    if (validateForm()) {
      setLoading(true);
      try {
        // Ensure all required fields are properly formatted
        if (formData.aadharNumber.length !== 12) {
          setAlert({
            open: true,
            message: 'Aadhar number must be 12 digits',
            severity: 'error'
          });
          return;
        }

        const userData = {
          full_name: formData.fullName.trim(),
          date_of_birth: dayjs(formData.dateOfBirth).format('YYYY-MM-DD'),
          phone: formData.phoneNumber.trim(),
          password: formData.password,
          gender: formData.gender,
          aadhar_number: formData.aadharNumber,
        };
        
        if (formData.email && formData.email.trim()) {
          userData.email = formData.email.trim();
        }

        console.log('Submitting form data...');

        const response = await authService.register(userData);
        console.log('Registration response:', response);

        setAlert({
          open: true,
          message: 'Registration successful! Please log in.',
          severity: 'success'
        });
        
        // Clear form data
        setFormData({
          fullName: '',
          phoneNumber: '',
          gender: 'male',
          email: '',
          password: '',
          dateOfBirth: dayjs().subtract(18, 'year')
        });

        setTimeout(() => {
          onClose();
        }, 1500);
      } catch (error) {
        console.error('Registration error:', error); // Debug log
        setAlert({
          open: true,
          message: error.response?.data?.error || 'Registration failed. Please try again.',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
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
        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
          onClose={() => setAlert({ ...alert, open: false })}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity={alert.severity} onClose={() => setAlert({ ...alert, open: false })}>
            {alert.message}
          </Alert>
        </Snackbar>
        
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
          label="Aadhar Number"
          name="aadharNumber"
          value={formData.aadharNumber}
          onChange={handleChange}
          error={!!errors.aadharNumber}
          helperText={errors.aadharNumber}
          required
          size="small"
          inputProps={{
            maxLength: 12,
            pattern: '[0-9]*',
            inputMode: 'numeric'
          }}
          sx={{ mb: 2 }}
        />

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
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={formData.dateOfBirth}
            onChange={(newValue) => {
              setFormData(prev => ({ ...prev, dateOfBirth: newValue }));
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!errors.dateOfBirth,
                helperText: errors.dateOfBirth,
                size: "small",
                required: true
              }
            }}
            disableFuture
            format="DD/MM/YYYY"
          />
        </LocalizationProvider>

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
        
        <SignUpButton type="submit" disabled={loading}>
          Sign Up
        </SignUpButton>
      </FormBox>
    </Modal>
  );
};

export default SignUpModal;
