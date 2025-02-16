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
`;

const SliderContainer = styled(Box)`
  position: relative;
  padding: 2rem 0;
  overflow: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
`;

const SliderHeader = styled(Typography)`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const Card = styled(motion.div)`
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
  flex: 0 0 280px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  height: 360px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
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

const CardOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem;
  background: linear-gradient(to top, 
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
`;

const CardTitle = styled(Typography)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
`;



const propertyTypes = [
  {
    id: 1,
    title: 'House Boat',
    image: '/images/property type images/house boat.jpg'
  },
  {
    id: 2,
    title: 'Villa',
    image: '/images/property type images/villa.jpg'
  },
  {
    id: 3,
    title: 'Apartment',
    image: '/images/property type images/apartment.jpg'
  },
  {
    id: 4,
    title: 'Spa',
    image: '/images/property type images/spa.jpg'
  },
  {
    id: 5,
    title: 'Resort',
    image: '/images/property type images/resort.jpg'
  },
  {
    id: 6,
    title: 'Family Friendly',
    image: '/images/property type images/family friendly.jpg'
  },
  {
    id: 7,
    title: 'Hot Tub',
    image: '/images/property type images/hot tub.jpg'
  },
  {
    id: 8,
    title: 'Water Park',
    image: '/images/property type images/water park.jpg'
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
    const cardWidth = 280 + 24; // card width + gap
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
              onError={(e) => {
                console.error(`Error loading image: ${type.image}`);
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
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
