const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController')
// middleware
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, recipeController.findAllRecipe)
router.get('/:id', authMiddleware, recipeController.getRecipeByid)
router.post('/', authMiddleware,recipeController.addNewRecipe)

module.exports = router