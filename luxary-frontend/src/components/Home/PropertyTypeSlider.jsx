import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, styled } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const OuterContainer = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
  margin-top: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const SliderContainer = styled(Box)`
  position: relative;
  padding: 2rem 0;
  overflow: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
`;

const SliderHeader = styled(Typography)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 600px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  cursor: grab;
  padding: 1rem 0.5rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  -ms-overflow-style: none;
  scrollbar-width: none;
  touch-action: pan-x;
  &::-webkit-scrollbar {
    display: none;
  }
  &:active {
    cursor: grabbing;
  }
`;

const CardImage = styled('img')`
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Card = styled(motion.div)`
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
  flex: 0 0 220px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 280px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  @media (max-width: 600px) {
    flex: 0 0 180px;
    height: 240px;
  }
  
  @media (max-width: 400px) {
    flex: 0 0 160px;
    height: 220px;
  }
  
  &:hover {
    transform: translateY(-5px);
    img {
      transform: scale(1.05);
    }
  }
  
  @media (hover: none) {
    &:hover {
      transform: none;
      img {
        transform: none;
      }
    }
  }
`;

const CardOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, 
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardTitle = styled(Typography)`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const NavigationButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  z-index: 2;
  padding: 1.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  &.prev {
    left: -1.5rem;
  }

  &.next {
    right: -1.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
  
  @media (max-width: 600px) {
    padding: 1rem;
    
    &.prev {
      left: -0.5rem;
    }

    &.next {
      right: -0.5rem;
    }
    
    svg {
      font-size: 1.25rem;
    }
  }
  
  @media (max-width: 400px) {
    display: none;
  }
`;



const propertyTypes = [
  {
    id: 1,
    title: 'Hotels',
    image: '/images/property-types/hotels.jpg'
  },
  {
    id: 2,
    title: 'Holiday homes',
    image: '/images/property-types/holiday-homes.jpg'
  },
  {
    id: 3,
    title: 'Resorts',
    image: '/images/property-types/resorts.jpg'
  },
  {
    id: 4,
    title: 'Villas',
    image: '/images/property-types/villas.jpg'
  },
  {
    id: 5,
    title: 'Apartments',
    image: '/images/property-types/apartments.jpg'
  },
  {
    id: 6,
    title: 'Guest houses',
    image: '/images/property-types/guest-houses.jpg'
  },
  {
    id: 7,
    title: 'Cottages',
    image: '/images/property-types/cottages.jpg'
  },
  {
    id: 8,
    title: 'Hostels',
    image: '/images/property-types/hostels.jpg'
  }
];

const PropertyTypeSlider = () => {
  const containerRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setSliderWidth(containerRef.current.scrollWidth);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const scroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = 220 + 24; // card width + gap
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <OuterContainer>
    <SliderContainer>
      <SliderHeader variant="h2">
        Discover your new favourite stay
      </SliderHeader>
      
      <NavigationButton 
        className="prev"
        onClick={() => scroll('left')}
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowBackIosNewIcon />
      </NavigationButton>

      <NavigationButton 
        className="next"
        onClick={() => scroll('right')}
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowForwardIosIcon />
      </NavigationButton>

      <CardsContainer
        ref={containerRef}
        drag="x"
        dragConstraints={{
          left: -sliderWidth + containerWidth,
          right: 0
        }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {propertyTypes.map((type) => (
          <Card
            style={{ touchAction: 'none' }}
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.3 }}
          >
            <CardImage
              as={motion.img}
              src={type.image}
              alt={type.title}
              loading="eager"
              onLoad={() => console.log(`Successfully loaded: ${type.image}`)}
              onError={(e) => {
                console.error(`Error loading image: ${type.image}`);
                e.target.src = `https://via.placeholder.com/220x280/1a1a1a/ffffff?text=${type.title}`;
              }}
            />
            <CardOverlay>
              <CardTitle variant="h6">{type.title}</CardTitle>
            </CardOverlay>
          </Card>
        ))}
      </CardsContainer>
    </SliderContainer>
    </OuterContainer>
  );
};

export default PropertyTypeSlider;
