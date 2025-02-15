import React from 'react';
import { Typography, Box, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { GradientBackground } from '../styles/commonStyles';

const CartContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
`;

const CartItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const StyledButton = styled(Button)`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  text-transform: none;
`;

const Cart = () => {
  // Sample cart items - replace with actual data
  const cartItems = [];

  return (
    <GradientBackground sx={{ minHeight: '100vh', padding: '2rem' }}>
      <CartContainer>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <ShoppingCartIcon sx={{ fontSize: '2rem', color: '#008080' }} />
          <Typography variant="h4" component="h1" sx={{ color: '#008080', fontWeight: 600 }}>
            Your Cart
          </Typography>
        </Box>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <CartItem>
                  {/* Add cart item content here */}
                </CartItem>
                <Divider />
              </React.Fragment>
            ))}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <StyledButton
                variant="contained"
                sx={{ bgcolor: '#008080', '&:hover': { bgcolor: '#006666' } }}
              >
                Proceed to Checkout
              </StyledButton>
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
              Your cart is empty
            </Typography>
            <StyledButton
              variant="contained"
              sx={{ bgcolor: '#008080', '&:hover': { bgcolor: '#006666' } }}
            >
              Continue Shopping
            </StyledButton>
          </Box>
        )}
      </CartContainer>
    </GradientBackground>
  );
};

export default Cart;
