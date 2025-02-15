import React from 'react';
import { Box, TextField, Button, IconButton, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

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

const roomTypes = [
  'Standard Room',
  'Deluxe Room',
  'Suite',
  'Executive Suite',
  'Family Room',
  'Twin Room',
  'Single Room',
  'Presidential Suite'
];

const RoomTypePricing = ({ data, onFormChange, onNext, onBack }) => {
  const handleChange = (index, field) => (event) => {
    const newRooms = [...data];
    newRooms[index] = {
      ...newRooms[index],
      [field]: event.target.value,
    };
    onFormChange(newRooms);
  };

  const handleAddRoom = () => {
    onFormChange([
      ...data,
      {
        type: '',
        capacity: '',
        pricePerNight: '',
        numberOfRooms: '',
      },
    ]);
  };

  const handleRemoveRoom = (index) => {
    const newRooms = data.filter((_, i) => i !== index);
    onFormChange(newRooms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {data.map((room, index) => (
        <Box
          key={index}
          sx={{
            mb: 4,
            p: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            position: 'relative',
          }}
        >
          {index > 0 && (
            <IconButton
              onClick={() => handleRemoveRoom(index)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <DeleteIcon />
            </IconButton>
          )}
          
          <Typography variant="h6" sx={{ mb: 2 }}>
            Room Type {index + 1}
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField
              required
              select
              label="Room Type"
              value={room.type}
              onChange={handleChange(index, 'type')}
              variant="outlined"
            >
              {roomTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              label="Room Capacity"
              type="number"
              value={room.capacity}
              onChange={handleChange(index, 'capacity')}
              variant="outlined"
              inputProps={{ min: "1" }}
            />

            <TextField
              required
              label="Price per Night"
              type="number"
              value={room.pricePerNight}
              onChange={handleChange(index, 'pricePerNight')}
              variant="outlined"
              InputProps={{
                startAdornment: <span>$</span>,
              }}
            />

            <TextField
              required
              label="Number of Rooms"
              type="number"
              value={room.numberOfRooms}
              onChange={handleChange(index, 'numberOfRooms')}
              variant="outlined"
              inputProps={{ min: "1" }}
            />
          </Box>
        </Box>
      ))}

      <Button
        variant="outlined"
        onClick={handleAddRoom}
        sx={{ mb: 4 }}
      >
        Add Another Room Type
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
          endIcon={<span>→</span>}
        >
          Next
        </StyledButton>
      </Box>
    </Box>
  );
};

export default RoomTypePricing;
