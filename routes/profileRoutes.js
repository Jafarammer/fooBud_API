const express = require('express')
const router = express.Router();
const profileController = require('../controllers/profileController')
// middleware
const authMiddleware = require('../middlewares/authMiddleware')
const profileMiddleware = require('../middlewares/profileMiddleware')

router.get('/', authMiddleware,profileController.getUserProfile)
router.put('/',authMiddleware,profileMiddleware,profileController.updateUserProfile)

module.exports = router