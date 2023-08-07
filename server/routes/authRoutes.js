const express = require('express');
const router = express.Router();
const { test, registerUser, loginUser, getProfile } = require('../controllers/authController');

// Middlewares
router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);

module.exports = router;

