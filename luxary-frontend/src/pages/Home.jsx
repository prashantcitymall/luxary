import React, { lazy, Suspense } from 'react';
import { Box, Container, Typography, CircularProgress, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import SearchForm from '../components/SearchForm/SearchForm';
import { useMode } from '../context/ModeContext';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

// Import components directly to ensure they exist
import FeatureBanner from '../components/Home/FeatureBanner';
import PropertyTypeSlider from '../components/Home/PropertyTypeSlider';
import TouristPlacesSection from '../components/TouristPlaces/TouristPlacesSection';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const PageContainer = styled(Box)`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${props => props.isManagerMode ? '#bb7e5d' : '#fff'};
`;

const HeroSection = styled(Box)`
  min-height: 100vh;
  position: relative;
  padding-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 900px;
    height: 900px;
    background: ${props => props.isManagerMode ? 
      'linear-gradient(135deg, #d4a28c, #bb7e5d)' : 
      'linear-gradient(135deg, #FFB6C1, #FF69B4)'};
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: ${props => props.isManagerMode ? 
      'linear-gradient(135deg, #bb7e5d, #a66d4f)' : 
      'linear-gradient(135deg, #FFE4E1, #FFB6C1)'};
    border-radius: 50%;
    z-index: 0;
  }
`;

const ContentWrapper = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
`;

const MainContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 2rem;
  padding-top: 4rem;
  position: relative;
  width: 100%;
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
  }
`;

const TextContent = styled(Box)`
  flex: 1;
  max-width: 600px;
  text-align: center;
`;

const Title = styled(Typography)`
  font-size: 4.5rem;
  font-weight: 700;
  color: ${props => props.isManagerMode ? '#fff' : '#4A4A4A'};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled(Typography)`
  font-size: 1.2rem;
  color: ${props => props.isManagerMode ? 'rgba(255, 255, 255, 0.8)' : '#666'};
  margin-bottom: 2rem;
  max-width: 500px;
`;

const SeeMoreButton = styled(motion.button)`
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: ${props => props.isManagerMode ? '#8B4513' : '#FF69B4'};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SearchFormWrapper = styled(Box)`
  flex: 1;
  max-width: 580px;
  min-width: 580px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 30px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-right: auto;
  margin-left: -5%;
  transform: translateX(-5%);
  
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    min-width: auto;
    padding: 2rem;
    margin-left: 0;
    transform: none;
  }
`;

const SocialIcons = styled(Box)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
`;

const SocialIconButton = styled(IconButton)`
  background: ${props => props.isManagerMode ? 'rgba(139, 69, 19, 0.1)' : 'rgba(255, 105, 180, 0.1)'};
  color: ${props => props.isManagerMode ? '#8B4513' : '#FF69B4'};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isManagerMode ? 'rgba(139, 69, 19, 0.2)' : 'rgba(255, 105, 180, 0.2)'};
    transform: translateY(-2px);
  }
`;

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { mode } = useMode();
  const isManagerMode = mode === 'manager';

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <PageContainer isManagerMode={isManagerMode}>
      <HeroSection isManagerMode={isManagerMode}>
        <ContentWrapper>
          <MainContent>
            <TextContent>
              <Title variant="h1" isManagerMode={isManagerMode}>
                HOTEL & RESTAURANT
              </Title>
              <Subtitle isManagerMode={isManagerMode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Subtitle>
              <SeeMoreButton
                isManagerMode={isManagerMode}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SEE MORE
              </SeeMoreButton>
            </TextContent>
            <SearchFormWrapper>
              <SearchForm />
            </SearchFormWrapper>
          </MainContent>
        </ContentWrapper>
        
        <SocialIcons>
          <SocialIconButton isManagerMode={isManagerMode}>
            <InstagramIcon />
          </SocialIconButton>
          <SocialIconButton isManagerMode={isManagerMode}>
            <FacebookIcon />
          </SocialIconButton>
          <SocialIconButton isManagerMode={isManagerMode}>
            <TwitterIcon />
          </SocialIconButton>
        </SocialIcons>
      </HeroSection>

      {!isLoading && (
        <Box sx={{ position: 'relative', zIndex: 1, background: '#fff' }}>
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FeatureBanner />
              <PropertyTypeSlider />
              <TouristPlacesSection />
              <Contact />
            </motion.div>
          </Container>
          <Footer />
        </Box>
      )}
    </PageContainer>
  );
};

export default Home;