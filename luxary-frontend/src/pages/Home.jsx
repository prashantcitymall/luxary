import React, { lazy, Suspense } from 'react';
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import SearchForm from '../components/SearchForm/SearchForm';

// Import components directly to ensure they exist
import FeatureBanner from '../components/Home/FeatureBanner';
import PropertyTypeSlider from '../components/Home/PropertyTypeSlider';
import TouristPlacesSection from '../components/TouristPlaces/TouristPlacesSection';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';



const HeroSection = styled(Box)`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #f49e4c, #30001A);
`;



const PageContainer = styled(Box)`
  width: 100%;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overscroll-behavior: none;
  background: linear-gradient(135deg, #f49e4c, #30001A);
`;

const ContentWrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 80px; // Account for fixed header
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  overscroll-behavior-x: none;
  touch-action: pan-y pinch-zoom;
  
  @media (max-width: 600px) {
    padding-top: 64px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const MainContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  @media (max-width: 600px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const SloganWrapper = styled(Box)`
  flex: 1;
  max-width: 600px;
  padding: 2rem;
  
  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
    padding: 1.5rem;
  }
  
  @media (max-width: 600px) {
    padding: 1rem;
  }
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
    
    @media (max-width: 1200px) {
      font-size: 3.5rem;
    }
    
    @media (max-width: 900px) {
      font-size: 3rem;
    }
    
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }
  
  .highlight {
    color: #FFD700;
    -webkit-text-fill-color: #FFD700;
  }
`;

const LoadingSpinner = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ContentSection = styled(Box)`
  color: white;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4rem 0 0;
  overscroll-behavior-x: none;
  touch-action: pan-y pinch-zoom;
  position: relative;
  background: linear-gradient(135deg, #f49e4c, #30001A);
  
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
`;

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    setIsLoading(false);
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const fallbackLoader = (
    <LoadingSpinner>
      <CircularProgress sx={{ color: 'white' }} />
    </LoadingSpinner>
  );

  return (
    <Box sx={{ overflowX: 'hidden', touchAction: 'pan-y pinch-zoom', overscrollBehavior: 'none' }}>
      <HeroSection>
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
      
      <ContentSection>
        <AnimatePresence>
          {!isLoading && (
            <>
              <Container maxWidth="xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FeatureBanner />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <PropertyTypeSlider />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <TouristPlacesSection />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Box sx={{ mt: 4 }}>
                    <Contact />
                  </Box>
                </motion.div>
              </Container>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Footer />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </ContentSection>
    </Box>
  );
};

export default Home;
