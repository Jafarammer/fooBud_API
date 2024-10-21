const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
// middleware
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', authMiddleware,userController.getAllUsers)
router.get('/search',authMiddleware,userController.searchUserByName)

module.exports = router