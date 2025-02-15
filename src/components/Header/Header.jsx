import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeIcon from '@mui/icons-material/Home';
import HouseIcon from '@mui/icons-material/House';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';
import CartModal from './CartModal';
import UploadModal from './UploadModal';

const StyledAppBar = styled(AppBar)`
  background: rgba(13, 13, 25, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;

const Logo = styled(Typography)`
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  background: linear-gradient(45deg, #fff, #E1F5FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
`;

const NavButton = styled(Button)`
  margin: 0 8px;
  color: #fff;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 12px;
  text-transform: none;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  & .MuiButton-startIcon {
    margin-right: 8px;
    transition: transform 0.3s ease;
    color: rgba(255, 255, 255, 0.9);
  }

  &:hover .MuiButton-startIcon {
    transform: scale(1.2);
    color: #fff;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box display="flex" alignItems="center" gap={3}>
            <Box display="flex" alignItems="center">
              <HomeIcon sx={{ fontSize: 32, mr: 1, color: '#64B5F6' }} />
              <Logo variant="h6">HOTELIFY</Logo>
            </Box>
            <Divider orientation="vertical" sx={{ height: 24, borderColor: 'rgba(255,255,255,0.2)' }} />
            <Box
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.15)',
                }
              }}
              onClick={() => setIsUploadOpen(true)}
            >
              <FileUploadOutlinedIcon sx={{ fontSize: 20, mr: 1, color: '#fff' }} />
              <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>Upload</Typography>
            </Box>
          </Box>
        </motion.div>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box display="flex" alignItems="center">
            <NavButton 
              onClick={() => navigate('/')}
              startIcon={<HouseIcon />}
              sx={{
                background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(30, 136, 229, 0.1))',
                borderColor: 'rgba(100, 181, 246, 0.3)'
              }}
            >
              Home
            </NavButton>
            <NavButton 
              onClick={() => navigate('/list-property')}
              startIcon={<HomeWorkIcon />}
            >
              List Property
            </NavButton>
            <NavButton 
              startIcon={<FavoriteIcon />}
              sx={{
                background: 'linear-gradient(45deg, rgba(244, 67, 54, 0.1), rgba(255, 87, 34, 0.1))',
                borderColor: 'rgba(244, 67, 54, 0.3)'
              }}
            >
              Wishlist
            </NavButton>
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              sx={{ color: 'white', mr: 2 }}
              onClick={() => setIsCartOpen(true)}
            >
              <Badge badgeContent={0} color="error" sx={{
                '& .MuiBadge-badge': {
                  background: 'linear-gradient(45deg, #ff4b4b, #ff6b6b)',
                  border: '2px solid rgba(13, 13, 25, 0.8)',
                }
              }}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <NavButton startIcon={<AccountCircleIcon />}>Profile</NavButton>
            <NavButton 
              onClick={() => setIsLoginOpen(true)}
              sx={{ 
                background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(30, 136, 229, 0.1))',
                borderColor: 'rgba(100, 181, 246, 0.3)'
              }}
            >
              Login
            </NavButton>
            <NavButton 
              onClick={() => setIsSignUpOpen(true)}
              sx={{ 
                background: 'linear-gradient(45deg, #1E88E5, #1565C0)',
                border: 'none',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976D2, #0D47A1)',
                  boxShadow: '0 8px 25px rgba(30, 136, 229, 0.4)'
                }
              }}
            >
              Sign Up
            </NavButton>
            <SignUpModal 
              open={isSignUpOpen}
              onClose={() => setIsSignUpOpen(false)}
            />
            <CartModal 
              open={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
            <UploadModal
              open={isUploadOpen}
              onClose={() => setIsUploadOpen(false)}
            />
            <LoginModal
              open={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
          </Box>
        </motion.div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
