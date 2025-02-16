const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const path = require('path');
const router = express.Router();

// Database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Get file extension
    const ext = path.extname(file.originalname).toLowerCase();
    
    // List of allowed extensions
    const allowedExtensions = [
      '.jpg', '.jpeg', '.png', '.gif', '.bmp', // Images
      '.pdf', '.doc', '.docx', '.txt', '.rtf', // Documents
      '.xls', '.xlsx', // Excel files
      '.ppt', '.pptx' // PowerPoint files
    ];
    
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Allowed types: ' + allowedExtensions.join(', ')), false);
    }
  },
});

// Upload address document
router.post('/upload', upload.single('document'), async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone || !req.file) {
      return res.status(400).json({ error: 'Phone number and document are required' });
    }

    // Check if user exists
    const userExists = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
    if (userExists.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get file information
    const fileInfo = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
      extension: path.extname(req.file.originalname).toLowerCase()
    };

    // Save document to database
    const result = await pool.query(
      'INSERT INTO address_documents (phone, file_data, file_name, file_type, file_size) VALUES ($1, $2, $3, $4, $5) RETURNING id, file_name, file_type, file_size, uploaded_at',
      [phone, req.file.buffer, fileInfo.name, fileInfo.type, fileInfo.size]
    );

    res.status(201).json({
      success: true,
      message: 'Document uploaded successfully',
      document: {
        ...result.rows[0],
        size_formatted: formatFileSize(result.rows[0].file_size)
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Helper function to format file size
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Get address documents by phone number
router.get('/:phone', async (req, res) => {
  try {
    const { phone } = req.params;

    const result = await pool.query(
      'SELECT id, file_name, file_type, file_size, uploaded_at FROM address_documents WHERE phone = $1 ORDER BY uploaded_at DESC',
      [phone]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No documents found for this user' });
    }

    // Format the documents for display
    const documents = result.rows.map(doc => ({
      ...doc,
      size_formatted: formatFileSize(doc.file_size),
      extension: path.extname(doc.file_name).toLowerCase()
    }));

    res.json({
      success: true,
      documents
    });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Download specific document
router.get('/download/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'SELECT file_data, file_name, file_type FROM address_documents WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Document not found' });
    }

    const doc = result.rows[0];

    // Set response headers for file download
    res.setHeader('Content-Type', doc.file_type);
    res.setHeader('Content-Disposition', `attachment; filename="${doc.file_name}"`);

    // Send the file
    res.send(doc.file_data);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
