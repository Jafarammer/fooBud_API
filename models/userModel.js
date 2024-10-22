const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const userModel = sequelize.define('users', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    profile_img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cover_img: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'users',
    timestamps: true,
    // updatedAt,
    // createdAt
})

// userModel.belongsTo(recipeModel, {foreignKey: 'user_id', as: 'recipe'})
// recipeModel.hasMany(userModel, {foreignKey: 'id', as: 'user'})

module.exports = userModel