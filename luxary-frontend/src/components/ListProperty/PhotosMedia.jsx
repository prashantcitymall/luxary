import React, { useCallback } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: '10px 24px',
  '&.MuiButton-contained': {
    backgroundColor: '#1a237e',
    '&:hover': {
      backgroundColor: '#0d1b60',
    },
  },
}));

const UploadBox = styled(Box)(({ theme }) => ({
  border: '2px dashed #ccc',
  borderRadius: 8,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#1a237e',
    backgroundColor: 'rgba(26, 35, 126, 0.04)',
  },
}));

const PhotoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
}));

const PhotoItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '1',
  borderRadius: 8,
  overflow: 'hidden',
  '&:hover .delete-button': {
    opacity: 1,
  },
}));

const PhotosMedia = ({ data, onFormChange, onBack }) => {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const newPhotos = imageFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    onFormChange([...data, ...newPhotos]);
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = data.filter((_, i) => i !== index);
    onFormChange(newPhotos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically upload the photos and submit the form
    console.log('Submitting photos:', data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <UploadBox
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById('photo-input').click()}
      >
        <input
          type="file"
          id="photo-input"
          multiple
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => handleFiles(Array.from(e.target.files))}
        />
        <CloudUploadIcon sx={{ fontSize: 48, color: '#1a237e', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Drag & Drop Photos Here
        </Typography>
        <Typography variant="body2" color="textSecondary">
          or click to select files
        </Typography>
      </UploadBox>

      <PhotoGrid>
        {data.map((photo, index) => (
          <PhotoItem key={index}>
            <img
              src={photo.preview}
              alt={`Property ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <IconButton
              className="delete-button"
              onClick={() => handleRemovePhoto(index)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                opacity: 0,
                transition: 'opacity 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </PhotoItem>
        ))}
      </PhotoGrid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <StyledButton
          onClick={onBack}
          variant="outlined"
          startIcon={<span>←</span>}
        >
          Back
        </StyledButton>
        <StyledButton
          type="submit"
          variant="contained"
        >
          Submit Property
        </StyledButton>
      </Box>
    </Box>
  );
};

export default PhotosMedia;
