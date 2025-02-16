import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeIcon from '@mui/icons-material/Home';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';
import UploadModal from './UploadModal';
import { useUser } from '../../context/UserContext';

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
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
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
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useUser();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleProfileClose();
    logout();
  };
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box display="flex" alignItems="center" gap={3}>
            <Box 
              display="flex" 
              alignItems="center" 
              onClick={() => navigate('/')} 
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  '& .logo-icon': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease'
                  },
                  '& .logo-text': {
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease'
                  }
                }
              }}
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HomeIcon className="logo-icon" sx={{ fontSize: 32, mr: 1, color: '#64B5F6' }} />
              <Logo className="logo-text" variant="h6">HOTELIFY</Logo>
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
              onClick={() => navigate('/list-property')}
              startIcon={<HomeWorkIcon />}
            >
              List Property
            </NavButton>
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              sx={{ 
                color: 'white', 
                mr: 2,
                background: 'linear-gradient(45deg, rgba(244, 67, 54, 0.1), rgba(255, 87, 34, 0.1))',
                padding: '8px',
                '&:hover': {
                  background: 'linear-gradient(45deg, rgba(244, 67, 54, 0.2), rgba(255, 87, 34, 0.2))',
                }
              }}
            >
              <FavoriteIcon />
            </IconButton>
            {user ? (
              <>
                <Box
                  onClick={handleProfileClick}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    padding: '6px 16px',
                    borderRadius: '12px',
                    background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(30, 136, 229, 0.1))',
                    border: '1px solid rgba(100, 181, 246, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.2), rgba(30, 136, 229, 0.2))',
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: '#1a237e',
                      fontSize: '0.9rem'
                    }}
                  >
                    {user.full_name.charAt(0)}
                  </Avatar>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  >
                    {user.full_name}
                  </Typography>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileClose}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      minWidth: '280px',
                      background: 'rgba(13, 13, 25, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      color: '#fff'
                    }
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#64B5F6' }}>
                      Personal Details
                    </Typography>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        Aadhar Number
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        {user?.aadhar_number || 'Not provided'}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        Phone Number
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        {user?.phone || 'Not provided'}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        Date of Birth
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        {user?.date_of_birth || 'Not provided'}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                  <MenuItem 
                    onClick={handleLogout}
                    sx={{ 
                      color: '#FF5252',
                      mt: 1,
                      '&:hover': {
                        background: 'rgba(255, 82, 82, 0.1)'
                      }
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <NavButton 
                onClick={() => setIsLoginOpen(true)}
                sx={{ 
                  background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(30, 136, 229, 0.1))',
                  borderColor: 'rgba(100, 181, 246, 0.3)'
                }}
              >
                Login
              </NavButton>
            )}
            {!user && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
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
              </motion.div>
            )}
            <SignUpModal 
              open={isSignUpOpen}
              onClose={() => setIsSignUpOpen(false)}
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
