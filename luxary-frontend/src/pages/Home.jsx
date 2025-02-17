import React, { lazy, Suspense } from 'react';
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import SearchForm from '../components/SearchForm/SearchForm';

// Import components directly to ensure they exist
import FeatureBanner from '../components/Home/FeatureBanner';
import PropertyTypeSlider from '../components/Home/PropertyTypeSlider';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const VideoBackground = styled('video')`
  position: fixed;
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



const PageContainer = styled(Box)`
  width: 100%;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overscroll-behavior: none;
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
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
  
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
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/video/video 2.mp4" type="video/mp4" />
      </VideoBackground>
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Box sx={{ mt: -4 }}>
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
