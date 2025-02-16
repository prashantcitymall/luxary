import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  IconButton, 
  Typography, 
  Box,
  Button,
  styled 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { motion } from 'framer-motion';

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    max-width: 500px;
    width: 100%;
    margin: 16px;
  }
`;

const EmptyCartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  text-align: center;
`;

const IconContainer = styled(Box)`
  background: #f0f4ff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  
  svg {
    font-size: 3.5rem;
    color: #4070f4;
  }
`;

const SearchButton = styled(Button)`
  background: linear-gradient(45deg, #4070f4 30%, #2d5cf7 90%);
  border-radius: 25px;
  padding: 12px 32px;
  color: white;
  font-weight: 600;
  text-transform: none;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(64, 112, 244, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #2d5cf7 30%, #1e4ad4 90%);
    box-shadow: 0 6px 20px rgba(64, 112, 244, 0.3);
    transform: translateY(-2px);
  }
`;

const CartModal = ({ open, onClose }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={onClose} sx={{ color: '#666' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <EmptyCartContainer
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IconContainer
            component={motion.div}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ShoppingBagOutlinedIcon />
          </IconContainer>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
            Shop for hotels, flights, cars and attractions to plan your next trip
          </Typography>
          <SearchButton
            variant="contained"
            onClick={onClose}
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Search for travel
          </SearchButton>
        </EmptyCartContainer>
      </DialogContent>
    </StyledDialog>
  );
};

export default CartModal;
