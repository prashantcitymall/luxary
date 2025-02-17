import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const BannerContainer = styled(Box)`
  background: linear-gradient(135deg, #f49e4c, #30001A);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  display: flex;
  gap: 1rem;
  margin-top: -5vh;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const FeatureCard = styled(motion.div)`
  flex: 1;
  background: linear-gradient(135deg, #f49e4c, #30001A);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: ${props => props.gradient};
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  
  svg {
    font-size: 24px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const TextContainer = styled(Box)`
  flex: 1;
`;

const MainText = styled(Typography)`
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubText = styled(Typography)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const FeatureBanner = () => {
  const features = [
    {
      icon: <NightlightRoundIcon sx={{ color: '#FFD700' }} />,
      gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
      title: "Earn rewards on every night you stay",
      description: "Get points for every booking and redeem for free stays"
    },
    {
      icon: <LocalOfferIcon sx={{ color: '#FF6B6B' }} />,
      gradient: 'linear-gradient(135deg, #FF6B6B, #FF4B4B)',
      title: "Save more with Member Prices",
      description: "Exclusive discounts for our loyal members"
    },
    {
      icon: <EventAvailableIcon sx={{ color: '#4ED8E8' }} />,
      gradient: 'linear-gradient(135deg, #4ED8E8, #2AC9DB)',
      title: "Free cancellation options if plans change",
      description: "Flexible booking options for peace of mind"
    }
  ];

  return (
    <BannerContainer>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <IconWrapper gradient={feature.gradient}>{feature.icon}</IconWrapper>
          <TextContainer>
            <MainText>{feature.title}</MainText>
            <SubText>{feature.description}</SubText>
          </TextContainer>
        </FeatureCard>
      ))}
    </BannerContainer>
  );
};

export default FeatureBanner;
