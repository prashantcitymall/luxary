import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import BasicInformation from '../components/ListProperty/BasicInformation';
import LocationAddress from '../components/ListProperty/LocationAddress';
import FacilitiesAmenities from '../components/ListProperty/FacilitiesAmenities';
import RoomTypePricing from '../components/ListProperty/RoomTypePricing';
import PhotosMedia from '../components/ListProperty/PhotosMedia';

const CustomStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiStepLabel-label': {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    }
  },
  '& .MuiStepIcon-root': {
    width: '1.5em',
    height: '1.5em',
    color: '#e0e0e0',
    '&.Mui-active': {
      color: '#1a237e',
    },
    '&.Mui-completed': {
      color: '#1a237e',
    },
    [theme.breakpoints.down('sm')]: {
      width: '1.2em',
      height: '1.2em',
    }
  }
}));

const PageWrapper = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #008080 0%, #20B2AA 100%);
  padding: 80px 0;
  
  @media (max-width: 600px) {
    padding: 60px 0;
  }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '1000px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  }
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  }
}));

const steps = [
  { label: 'Basic Information', number: 1 },
  { label: 'Location & Address', number: 2 },
  { label: 'Facilities & Amenities', number: 3 },
  { label: 'Room Types & Pricing', number: 4 },
  { label: 'Photos & Media', number: 5 }
];

const ListProperty = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    basicInfo: {
      propertyName: '',
      propertyType: '',
      propertyDescription: '',
      starRating: '',
    },
    location: {
      streetAddress: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
    facilities: [],
    rooms: [{
      type: '',
      capacity: '',
      pricePerNight: '',
      numberOfRooms: '',
    }],
    photos: [],
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleFormChange = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicInformation
            data={formData.basicInfo}
            onFormChange={(data) => handleFormChange('basicInfo', data)}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <LocationAddress
            data={formData.location}
            onFormChange={(data) => handleFormChange('location', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <FacilitiesAmenities
            data={formData.facilities}
            onFormChange={(data) => handleFormChange('facilities', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <RoomTypePricing
            data={formData.rooms}
            onFormChange={(data) => handleFormChange('rooms', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <PhotosMedia
            data={formData.photos}
            onFormChange={(data) => handleFormChange('photos', data)}
            onBack={handleBack}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <PageWrapper>
      <StyledContainer>
      <Typography variant="h4" sx={{
        mb: 4,
        color: '#1a237e',
        fontWeight: 600,
        textAlign: 'center',
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
      }}>
        List Your Property
      </Typography>
      
      <FormWrapper>
        <CustomStepper activeStep={activeStep} alternativeLabel>
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </CustomStepper>
        
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          {getStepContent(activeStep)}
        </Box>
      </FormWrapper>
    </StyledContainer>
    </PageWrapper>
  );
};

export default ListProperty;
