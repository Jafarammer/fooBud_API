const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const userModel = require('./userModel')

const recipeModel = sequelize.define('recipes', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: userModel,
            key: 'id',
        }
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

recipeModel.belongsTo(userModel, { foreignKey: 'user_id', as: 'user' });
userModel.hasMany(recipeModel, { foreignKey: 'user_id', as: 'recipes' });

module.exports = recipeModel