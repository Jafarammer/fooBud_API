const express = require('express');
const router = express.Router();
// routes
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const profileRoutes = require('./profileRoutes')
const recipeRoutes = require('./recipeRoutes')

router.use('/auth',authRoutes)
router.use('/users',userRoutes)
router.use('/profile', profileRoutes)
router.use('/recipe', recipeRoutes)

module.exports = router