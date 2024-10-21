const recipe_model = require('../models/recipeModel')
const user_model = require('../models/userModel')
const generateId = require('../utils/generateId')

exports.addNewRecipe = async(req,res) => {
    const {title,description,coverRecipe} = req.body
    try {
        const user = await user_model.findOne({where: {id: req.userId}})
        const recipeId = generateId()
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
        const newRecipe = await recipe_model.create({
            user_id: req.userId,
            recipe_id: recipeId,
            title,
            description,
            cover_recipe: coverRecipe
        })
        res.status(200).json({message: 'New recipe added', data: newRecipe})
    } catch (error) {
        res.status(500).json({ message: 'Error add new recipe', error });
    }
}
exports.findAllRecipe = async(req,res) => {
    try {
        const recipe = await recipe_model.findAll()
        res.json(recipe)
    } catch (error) {
        res.status(500).json({ message: 'Get recipe', error });
    }
}
exports.getRecipeByid = async(req,res) => {
    const {id} = req.params
    try {
        const recipe = await recipe_model.findAndCountAll({where: {user_id: id}})
        if(!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.json({count: recipe.count, data: recipe.rows})
    } catch (error) {
        res.status(500).json({ message: 'Get my recipe', error });
    }
}