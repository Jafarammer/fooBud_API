const {Op} = require('sequelize')
const user_model = require('../models/userModel')

exports.getAllUsers = async(req,res) => {
    try {
        const items = await user_model.findAll({attributes: {exclude: ['password']}})
        // const items = await user_model.findAll()
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.searchUserByName = async(req,res) => {
    const name = req.query.name
    try {
        const items = await user_model.findAll({
            where: {
                first_name: {
                  [Op.like]: `%${name}%`
                }
              },
              attributes: {exclude: ['password']}
        })
        if(items.length > 0) {
            res.status(200).json({ data: items });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error searching user', error });
    }
}