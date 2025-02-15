import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SocialIcon } from 'react-social-icons';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactWrapper = styled(Box)`
  background: linear-gradient(135deg, #005f73 0%, #0a9396 100%);
  padding: 4rem 0;
`;

const ContactCard = styled(Box)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 1rem;
  
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    
    &:hover fieldset {
      border-color: #1976d2;
    }
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: none;
  background: #1976d2;
  
  &:hover {
    background: #1565c0;
  }
`;

const ContactInfo = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  color: #666;
  
  & svg {
    margin-right: 1rem;
    color: #1976d2;
  }
`;

const SocialIcons = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
  justify-content: center;
  
  & .social-icon {
    transition: transform 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <ContactWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactCard>
              <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600, textAlign: 'center' }}>
                CONTACT US
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <ContactInfo>
                  <PhoneIcon />
                  <Box>
                    <Typography variant="body1">PHONE</Typography>
                    <Typography variant="body2">+91 9548998980</Typography>
                    <Typography variant="body2">+91 6396244410</Typography>
                  </Box>
                </ContactInfo>

                <ContactInfo>
                  <EmailIcon />
                  <Box>
                    <Typography variant="body1">EMAIL</Typography>
                    <Typography variant="body2">Prashant.yadav043@gmail.com</Typography>
                  </Box>
                </ContactInfo>

                <ContactInfo>
                  <InstagramIcon />
                  <Box>
                    <Typography variant="body1">INSTAGRAM</Typography>
                    <Typography variant="body2">@Hotelify.agra</Typography>
                  </Box>
                </ContactInfo>

                <SocialIcons>
                  <SocialIcon url="https://instagram.com/Hotelify.agra" network="instagram" />
                  <SocialIcon url="https://facebook.com" network="facebook" />
                  <SocialIcon url="https://twitter.com" network="twitter" />
                  <SocialIcon url="https://whatsapp.com" network="whatsapp" />
                </SocialIcons>
              </Box>
            </ContactCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactCard>
              <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600, textAlign: 'center' }}>
                SEND US A MESSAGE
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      name="fullName"
                      label="Full Name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      name="email"
                      label="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                
                <StyledTextField
                  name="phoneNumber"
                  label="Phone Number"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                
                <StyledTextField
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                
                <SubmitButton
                  variant="contained"
                  type="submit"
                >
                  SEND MESSAGE
                </SubmitButton>
              </form>
            </ContactCard>
          </Grid>
        </Grid>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
