import React, { useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  styled,
  LinearProgress,
  Alert,
  Snackbar,
  TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { motion } from 'framer-motion';
import { uploadService } from '../../services/upload';

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
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      // Validate file type and size
      uploadService.validateFile(file);
      setSelectedFile(file);
      setErrors({});
    } catch (error) {
      setErrors({ file: error.message });
      setSelectedFile(null);
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(value);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!phoneNumber || phoneNumber.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!selectedFile) {
      newErrors.file = 'Please select a file to upload';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpload = async () => {
    if (!validateForm()) return;

    try {
      setIsUploading(true);
      setUploadProgress(0);

      // Upload the file with phone number
      const response = await uploadService.uploadFile(selectedFile, phoneNumber, (progress) => {
        setUploadProgress(progress);
      });

      setAlert({
        open: true,
        message: response.message || 'File uploaded successfully!',
        severity: 'success'
      });

      // Reset form and close modal after success
      setSelectedFile(null);
      setPhoneNumber('');
      setTimeout(() => {
        onClose();
        setIsUploading(false);
        setUploadProgress(0);
      }, 1500);

    } catch (error) {
      console.error('Upload error:', error);
      let errorMessage = 'Failed to upload file';
      
      if (error.message.includes('Authentication')) {
        errorMessage = 'Please login before uploading documents';
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setAlert({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
      setIsUploading(false);
      setUploadProgress(0);
    }
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
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            error={!!errors.phone}
            helperText={errors.phone}
            placeholder="Enter 10-digit phone number"
            sx={{ mb: 2 }}
            inputProps={{
              maxLength: 10,
              pattern: '[0-9]*'
            }}
          />
        </Box>
        {isUploading && (
          <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Uploading... {uploadProgress}%
            </Typography>
            <LinearProgress variant="determinate" value={uploadProgress} />
          </Box>
        )}
        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
          onClose={() => setAlert({ ...alert, open: false })}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            severity={alert.severity} 
            onClose={() => setAlert({ ...alert, open: false })}
            sx={{ width: '100%' }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiddenInput
            ref={fileInputRef}
            type="file"
            accept={uploadService.getAcceptedExtensions()}
            onChange={handleFileSelect}
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
                Upload images (jpg, png, gif) or documents (pdf, doc, docx)
              {selectedFile && (
                <Typography variant="caption" color="primary.main" sx={{ display: 'block', mt: 1 }}>
                  Selected: {selectedFile.name}
                </Typography>
              )}
              {errors.file && (
                <Typography variant="caption" color="error" sx={{ display: 'block', mt: 1 }}>
                  {errors.file}
                </Typography>
              )}
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

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={isUploading || !selectedFile}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              px: 4,
              py: 1.5
            }}
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </Button>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default UploadModal;
