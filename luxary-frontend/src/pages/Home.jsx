import React, { lazy, Suspense } from 'react';
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import SearchForm from '../components/SearchForm/SearchForm';
import { useMode } from '../context/ModeContext';

// Import components directly to ensure they exist
import ToggleMode from '../components/Home/ToggleMode';
import FeatureBanner from '../components/Home/FeatureBanner';
import PropertyTypeSlider from '../components/Home/PropertyTypeSlider';
import TouristPlacesSection from '../components/TouristPlaces/TouristPlacesSection';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const HeroSection = styled(Box)`
  min-height: 100vh;
  position: relative;
  background: ${props => props.isManagerMode ? '#bb7e5d' : 'linear-gradient(135deg, #f49e4c, #30001A)'};
  transition: background 0.3s ease;
`;

const PageContainer = styled(Box)`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  background: ${props => props.isManagerMode ? '#bb7e5d' : 'linear-gradient(135deg, #f49e4c, #30001A)'};
  transition: background 0.3s ease;
`;

const ContentWrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 80px;
  overflow-y: visible;
  overflow-x: hidden;
  touch-action: pan-y pinch-zoom;
  color: ${props => props.isManagerMode ? '#FFFFFF' : '#FFFFFF'};
  
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
  color: ${props => props.isManagerMode ? '#FFFFFF' : 'white'};
  text-shadow: ${props => props.isManagerMode ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : '2px 2px 4px rgba(0, 0, 0, 0.3)'};
  
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    background: ${props => props.isManagerMode ? 'none' : 'linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.8))'};
    -webkit-background-clip: ${props => props.isManagerMode ? 'none' : 'text'};
    -webkit-text-fill-color: ${props => props.isManagerMode ? '#FFFFFF' : 'transparent'};
    
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
  color: ${props => props.isManagerMode ? '#FFFFFF' : 'white'};
  scroll-behavior: smooth;
  overflow-y: visible;
  overflow-x: hidden;
  padding: 4rem 0 0;
  position: relative;
  background: ${props => props.isManagerMode ? '#bb7e5d' : 'linear-gradient(135deg, #f49e4c, #30001A)'};
  transition: background 0.3s ease;
  
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
  const { mode, handleModeChange } = useMode();
  const isManagerMode = mode === 'manager';

  React.useEffect(() => {
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
    <Box sx={{ 
      overflowX: 'hidden',
      overflowY: 'auto', 
      touchAction: 'pan-y pinch-zoom', 
      minHeight: '100vh',
      transition: 'background 0.3s ease',
      background: isManagerMode ? '#bb7e5d' : 'linear-gradient(135deg, #f49e4c, #30001A)',
    }}>
      <PageContainer isManagerMode={isManagerMode}>
        <ContentWrapper isManagerMode={isManagerMode}>
          <MainContent>
            <SearchForm />
            <SloganWrapper>
              <SloganText isManagerMode={isManagerMode}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {isManagerMode 
                    ? "Manage Your Properties with Ease"
                    : "Do not disturb 🚪 🤚"}
                </motion.h1>
                {!isManagerMode && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Typography variant="h5" sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      mt: 2,
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 500,
                      fontSize: {
                        xs: '1.5rem',
                        sm: '1.8rem',
                        md: '2rem'
                      }
                    }}>
                      Embarking on a journey of peace, pampering, and pillow forts.
                    </Typography>
                  </motion.div>
                )}
              </SloganText>
            </SloganWrapper>
          </MainContent>
        </ContentWrapper>
      </PageContainer>
      
      <ContentSection isManagerMode={isManagerMode}>
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
