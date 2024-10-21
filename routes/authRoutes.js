const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
// middleware
const profileMiddleware = require('../middlewares/profileMiddleware')

router.post('/register', profileMiddleware,authController.register)
router.post('/login', authController.login)

module.exports = router