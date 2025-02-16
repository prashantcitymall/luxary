const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

// Middleware for input validation
const validateUser = (req, res, next) => {
  const { full_name, date_of_birth, phone, password, email, aadhar_number } = req.body;
  
  if (!full_name || !date_of_birth || !phone || !password || !aadhar_number) {
    return res.status(400).json({ error: 'All required fields must be provided' });
  }

  if (phone.length !== 10 || !/^\d+$/.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  if (aadhar_number.length !== 12 || !/^\d+$/.test(aadhar_number)) {
    return res.status(400).json({ error: 'Invalid Aadhar number. Must be 12 digits' });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};

// CREATE - Register a new user
router.post('/register', validateUser, async (req, res) => {
  try {
    const { full_name, date_of_birth, phone, password, aadhar_proof, email } = req.body;
    
    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'User with this phone number already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Insert new user with aadhar number
    const result = await pool.query(
      'INSERT INTO users (full_name, date_of_birth, phone, password_hash, aadhar_number, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [full_name, date_of_birth, phone, password_hash, aadhar_number, email]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.rows[0].id
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// READ - Get all users
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, full_name, date_of_birth, phone, email, created_at FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// READ - Get user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT id, full_name, date_of_birth, phone, email, created_at FROM users WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Validate input
    if (!phone || !password) {
      return res.status(400).json({ error: 'Phone and password are required' });
    }

    // Check if user exists
    const result = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, phone: user.phone },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Optional: Save user data to local file
    if (req.body.saveLocal) {
      const fs = require('fs');
      const userData = {
        id: user.id,
        full_name: user.full_name,
        phone: user.phone,
        email: user.email,
        lastLogin: new Date()
      };
      fs.writeFileSync(
        `./user_backups/${user.id}_backup.json`,
        JSON.stringify(userData, null, 2)
      );
    }

    res.json({
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        phone: user.phone,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// UPDATE - Update user details
router.put('/users/:id', validateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, date_of_birth, phone, password, aadhar_proof, email } = req.body;

    // Check if user exists
    const userExists = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (userExists.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Hash new password if provided
    let password_hash = userExists.rows[0].password_hash;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password_hash = await bcrypt.hash(password, salt);
    }

    // Update user
    await pool.query(
      'UPDATE users SET full_name = $1, date_of_birth = $2, phone = $3, password_hash = $4, aadhar_proof = $5, email = $6 WHERE id = $7',
      [full_name, date_of_birth, phone, password_hash, aadhar_proof, email, id]
    );

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE - Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
