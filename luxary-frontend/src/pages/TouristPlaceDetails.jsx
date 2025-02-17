import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Chip,
  Skeleton,
  styled
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import { states } from '../data/touristPlaces';

const HeroImage = styled(Box)`
  height: 60vh;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  }
`;

const ContentContainer = styled(Container)`
  margin-top: -100px;
  position: relative;
  z-index: 1;
`;

const InfoCard = styled(Paper)`
  padding: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 16px;
`;

const InfoItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  
  & svg {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const TouristPlaceDetails = () => {
  const { stateId, cityId, placeId } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    const state = states.find(s => s.id === stateId);
    const city = state?.cities.find(c => c.id === cityId);
    const foundPlace = city?.places.find(p => p.id === placeId);
    
    if (foundPlace) {
      setPlace(foundPlace);
    }
    setLoading(false);
  }, [stateId, cityId, placeId]);

  if (loading) {
    return <Skeleton variant="rectangular" height={400} />;
  }

  if (!place) {
    return (
      <Container>
        <Typography variant="h4" color="error">Place not found</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #F90C71, #30001A)', minHeight: '100vh', color: 'white' }}>
      <HeroImage sx={{ backgroundImage: `url(${place.image})` }} />
      
      <ContentContainer maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <InfoCard elevation={3}>
              <Typography variant="h3" gutterBottom>
                {place.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)' }}>
                {place.description}
              </Typography>
              
              <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />
              
              <InfoItem>
                <AccessTimeIcon />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Visiting Hours
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)">
                    {place.visitingHours}
                  </Typography>
                </Box>
              </InfoItem>
              
              <InfoItem>
                <CurrencyRupeeIcon />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Entry Fee
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)">
                    Indian: {place.entryFee.indian} | Foreign: {place.entryFee.foreign}
                  </Typography>
                </Box>
              </InfoItem>
              
              <InfoItem>
                <CalendarMonthIcon />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Best Time to Visit
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)">
                    {place.bestTime}
                  </Typography>
                </Box>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Additional Information
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)">
                    {place.additionalInfo}
                  </Typography>
                </Box>
              </InfoItem>
            </InfoCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <InfoCard elevation={3}>
              <Typography variant="h6" gutterBottom>
                Quick Facts
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                <Chip 
                  label="UNESCO Site" 
                  sx={{ 
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }} 
                />
                <Chip 
                  label="Photography Allowed" 
                  sx={{ 
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }} 
                />
                <Chip 
                  label="Guide Available" 
                  sx={{ 
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }} 
                />
              </Box>
            </InfoCard>
          </Grid>
        </Grid>
      </ContentContainer>
    </Box>
  );
};

export default TouristPlaceDetails;
