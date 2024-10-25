const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController')
// middleware
const authMiddleware = require('../middlewares/authMiddleware')
const recipeMiddleware = require('../middlewares/recipeMiddleware')

router.get('/', authMiddleware, recipeController.findAllRecipe)
router.get('/:id', authMiddleware, recipeController.getRecipeByid)
router.post('/', authMiddleware,recipeMiddleware,recipeController.addNewRecipe)
router.delete('/:id', authMiddleware,recipeController.deleteRecipe)

module.exports = router