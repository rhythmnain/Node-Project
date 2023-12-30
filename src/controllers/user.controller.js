//user creation 
const UserModel = require('../models/user.model');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Route for creating a user
exports.createUser = async (req, res) => {
  try {
    // Assuming the user input is in the request body
    const { Name, RegID, Email, Hostel, Block } = req.body;

    // Perform validation or any other necessary logic here

    // Example: Creating a user in a hypothetical database
    const newUser = {
      Name,
      RegID,
      Email,
      Hostel,
      Block,
      // Additional fields can be added based on your requirements
    };

    // Respond with a success message or the created user
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}; 