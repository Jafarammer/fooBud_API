const user_model = require('../models/userModel')
const fs = require('fs')

exports.getUserProfile = async(req,res) => {
    try {
        // Fetch the user from the database using the ID from the token
        const user = await user_model.findOne({ where: { id: req.userId }, attributes: { exclude: ['password'] } });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Return user profile (excluding password)
        res.json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
}
exports.updateUserProfile = async(req,res) => {
    const {first_name, last_name, email, age, address} = req.body
    try {
       const user = await user_model.findOne({where: {id: req.userId}})
       if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if(first_name) user.set('first_name', first_name);
      if(last_name) user.set('last_name', last_name);
      if(email) user.set('email', email);
      if(age) user.set('age', age);
      if(address) user.set('address', address)
      if (req.files && req.files.profileImage) {
        user.set('profile_img', `user/upload/${req.files.profileImage[0].filename}`)
      }
      if (req.files && req.files.coverImage) {
        user.set('cover_img', `user/upload/${req.files.coverImage[0].filename}`)
      }
      
      await user.save()

      res.json({ message: 'Profile updated successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}