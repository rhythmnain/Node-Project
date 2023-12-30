const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define routes related to user operations
router.post('/createNewUsers', userController.createUser);

module.exports = router;
