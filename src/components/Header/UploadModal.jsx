import React, { useRef } from 'react';
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
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { motion } from 'framer-motion';

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    max-width: 400px;
    width: 100%;
    margin: 16px;
  }
`;

const UploadOption = styled(Button)`
  width: 100%;
  padding: 24px;
  margin: 8px 0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: none;
  background: rgba(64, 112, 244, 0.05);
  border: 2px solid rgba(64, 112, 244, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(64, 112, 244, 0.1);
    border-color: rgba(64, 112, 244, 0.2);
    transform: translateY(-2px);
  }

  .icon {
    font-size: 2rem;
    margin-right: 16px;
    color: #4070f4;
  }

  .text {
    text-align: left;
  }
`;

const HiddenInput = styled('input')`
  display: none;
`;

const UploadModal = ({ open, onClose }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload here
      console.log('File selected:', file);
    }
    onClose();
  };

  const handleCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Handle camera stream here
      console.log('Camera accessed:', stream);
      stream.getTracks().forEach(track => track.stop());
      onClose();
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Upload Document
        </Typography>
        <IconButton onClick={onClose} sx={{ color: '#666' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ p: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiddenInput
            ref={fileInputRef}
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileUpload}
          />
          
          <UploadOption
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => fileInputRef.current.click()}
          >
            <FileUploadOutlinedIcon className="icon" />
            <div className="text">
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Choose from Device
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Upload documents from your computer or phone
              </Typography>
            </div>
          </UploadOption>

          <UploadOption
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCamera}
          >
            <CameraAltOutlinedIcon className="icon" />
            <div className="text">
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Take a Photo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use your camera to capture document
              </Typography>
            </div>
          </UploadOption>
        </motion.div>
      </DialogContent>
    </StyledDialog>
  );
};

export default UploadModal;
