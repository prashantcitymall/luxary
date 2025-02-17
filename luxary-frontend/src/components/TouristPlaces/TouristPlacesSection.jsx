import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';
import { states } from '../../data/touristPlaces';

const SectionContainer = styled(Box)`
  padding: 2rem 0;
  background: linear-gradient(rgba(244, 158, 76, 0.85), rgba(48, 0, 26, 0.85)), url('/images/tourist%20place%20.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  width: 65%;
  margin-left: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const StyledAccordion = styled(Accordion)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 8px;
  transform: scale(0.9);
  
  &:before {
    display: none;
  }
  
  &.Mui-expanded {
    margin: 16px 0;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  & .MuiAccordionSummary-content {
    color: white;
  }
  
  & .MuiAccordionSummary-expandIconWrapper {
    color: white;
  }
`;

const StyledTab = styled(Tab)`
  color: rgba(255, 255, 255, 0.7);
  &.Mui-selected {
    color: white;
  }
`;

const PlaceCard = styled(motion(Card))`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: scale(0.9);
  
  &:hover {
    transform: scale(0.9) translateY(-8px);
  }
`;

const PlaceImage = styled(CardMedia)`
  height: 200px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`;

const PlaceTitle = styled(Typography)`
  color: white;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const PlaceDescription = styled(Typography)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const NavigationButton = styled(IconButton)`
  color: white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 8px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const TouristPlacesSection = () => {
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handlePlaceClick = (stateId, cityId, placeId) => {
    navigate(`/tourist-places/${stateId}/${cityId}/${placeId}`);
  };

  const handleStateChange = (event, newValue) => {
    setSelectedState(newValue);
    setSelectedCity('');
  };

  return (
    <SectionContainer>
      <Container maxWidth="xl">
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          Famous Tourist Places
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2, display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <NavigationButton size="small">
                <NavigateBeforeIcon />
              </NavigationButton>
            )}
            <Tabs 
              value={selectedState}
              onChange={handleStateChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ 
                '& .MuiTabs-indicator': { 
                  backgroundColor: 'white' 
                }
              }}
            >
              {states.map((state, index) => (
                <StyledTab key={state.id} label={state.name} />
              ))}
            </Tabs>
            {!isMobile && (
              <NavigationButton size="small">
                <NavigateNextIcon />
              </NavigationButton>
            )}
          </Box>
        </Box>

        <Grid container spacing={3}>
          {states[selectedState].cities.map((city) => (
            <Grid item xs={12} key={city.id}>
              <StyledAccordion>
                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{city.name}</Typography>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    {city.places.map((place) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
                        <PlaceCard
                          onClick={() => handlePlaceClick(states[selectedState].id, city.id, place.id)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <PlaceImage
                            image={place.image}
                            title={place.name}
                          />
                          <CardContent>
                            <PlaceTitle variant="h6" gutterBottom>
                              {place.name}
                            </PlaceTitle>
                            <PlaceDescription>
                              {place.shortDescription}
                            </PlaceDescription>
                          </CardContent>
                        </PlaceCard>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </StyledAccordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default TouristPlacesSection;
