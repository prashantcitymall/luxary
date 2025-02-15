import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SearchForm from '../components/SearchForm/SearchForm';
import FeatureBanner from '../components/Home/FeatureBanner';
import PropertyTypeSlider from '../components/Home/PropertyTypeSlider';
import Contact from '../components/Contact/Contact';

const VideoBackground = styled('video')`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const HeroSection = styled(Box)`
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
    z-index: 0;
  }
`;



const ContentWrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 80px; // Account for fixed header
`;

const MainContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SloganWrapper = styled(Box)`
  flex: 1;
  max-width: 600px;
  padding: 2rem;
`;

const SloganText = styled(motion.div)`
  font-family: 'Playfair Display', serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .highlight {
    color: #FFD700;
    -webkit-text-fill-color: #FFD700;
  }
`;

const MainSection = styled(Box)`
  background: linear-gradient(135deg, #005f73 0%, #0a9396 100%);
  min-height: 100vh;
  padding: 4rem 0;
  color: white;
`;

const Home = () => {
  return (
    <Box>
      <HeroSection>
        <VideoBackground autoPlay muted loop playsInline>
          <source src="/video/video 2.mp4" type="video/mp4" />
        </VideoBackground>
        <ContentWrapper maxWidth="xl">
          <MainContent>
            <SearchForm />
            <SloganWrapper>
              <SloganText
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Luxury meets <span className="highlight">affordability</span> under one roof.
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.9)', mt: 2 }}>
                    Discover comfort without compromise
                  </Typography>
                </motion.div>
              </SloganText>
            </SloganWrapper>
          </MainContent>
        </ContentWrapper>
      </HeroSection>
      
      <MainSection>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <FeatureBanner />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <PropertyTypeSlider />
          </motion.div>
        </Container>
      </MainSection>
      <Contact />
    </Box>
  );
};

export default Home;
