require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong!';
  res.status(statusCode).json({ 
    status: 'error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

const startServer = (port) => {
  if (port > 5010) { // Don't try more than 10 ports
    console.error('Could not find an available port. Please free up some ports and try again.');
    process.exit(1);
  }

  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying port ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error('Server error:', err);
      }
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

const PORT = process.env.PORT || 5000;
startServer(PORT);
