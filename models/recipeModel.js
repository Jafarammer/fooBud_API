const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const recipeModel = sequelize.define('Recipes', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recipe_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cover_recipe: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
})

module.exports = recipeModel