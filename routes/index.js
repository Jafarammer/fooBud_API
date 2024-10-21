const express = require('express');
const router = express.Router();
// routes
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const profileRoutes = require('./profileRoutes')

router.use('/auth',authRoutes)
router.use('/users',userRoutes)
router.use('/profile', profileRoutes)

module.exports = router