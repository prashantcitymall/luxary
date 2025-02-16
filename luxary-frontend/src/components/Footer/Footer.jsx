import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SocialIcon } from 'react-social-icons';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';

const FooterWrapper = styled(Box)`
  background: #003844;
  color: white;
  padding: 4rem 0 2rem 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: 4rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100vw;
    right: -100vw;
    height: 85%;
    background: #003844;
    z-index: -1;
  }
`;

const FooterSection = styled(Box)`
  margin-bottom: 2rem;
`;

const FooterTitle = styled(Typography)`
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #0a9396;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background: #0a9396;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #0a9396;
  }
`;

const SocialIcons = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  & .social-icon {
    transition: transform 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ContactInfo = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.5rem;
  
  & svg {
    color: #0a9396;
    font-size: 1.2rem;
  }
`;

const AmenityGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <FooterTitle variant="h6">ABOUT HOTELIFY</FooterTitle>
              <Typography variant="body2" sx={{ mb: 2, color: '#fff' }}>
                Experience luxury and comfort at its finest. Our hotel offers premium accommodations
                with world-class amenities and exceptional service to make your stay memorable.
              </Typography>
              <SocialIcons>
                <SocialIcon url="https://instagram.com/Hotelify.agra" network="instagram" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://facebook.com" network="facebook" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://twitter.com" network="twitter" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://whatsapp.com" network="whatsapp" style={{ height: 35, width: 35 }} />
              </SocialIcons>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterSection>
              <FooterTitle variant="h6">CONTACT INFO</FooterTitle>
              <ContactInfo>
                <PhoneIcon />
                <Box>
                  <Typography variant="body2">+91 9548998980</Typography>
                  <Typography variant="body2">+91 6396244410</Typography>
                </Box>
              </ContactInfo>
              <ContactInfo>
                <EmailIcon />
                <Typography variant="body2">Prashant.yadav043@gmail.com</Typography>
              </ContactInfo>
              <ContactInfo>
                <LocationOnIcon />
                <Typography variant="body2">
                  Agra, Uttar Pradesh, India
                </Typography>
              </ContactInfo>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterSection>
              <FooterTitle variant="h6">AMENITIES</FooterTitle>
              <AmenityGrid>
                <FooterLink href="#" underline="none">
                  <HotelIcon /> Luxury Rooms
                </FooterLink>
                <FooterLink href="#" underline="none">
                  <RestaurantIcon /> Restaurant
                </FooterLink>
                <FooterLink href="#" underline="none">
                  <SpaIcon /> Spa & Wellness
                </FooterLink>
                <FooterLink href="#" underline="none">
                  <LocalParkingIcon /> Free Parking
                </FooterLink>
                <FooterLink href="#" underline="none">
                  <WifiIcon /> Free Wi-Fi
                </FooterLink>
                <FooterLink href="#" underline="none">
                  <PoolIcon /> Swimming Pool
                </FooterLink>
              </AmenityGrid>
            </FooterSection>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 3 }} />
        
        <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          © {new Date().getFullYear()} Hotelify. All rights reserved.
        </Typography>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
