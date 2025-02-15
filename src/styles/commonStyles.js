import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const GradientBackground = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #008080 0%, #20B2AA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContentCard = styled(Box)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 500px;
  
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;
