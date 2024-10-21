const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user_model = require('../models/userModel')
const dotenv = require('dotenv')
dotenv.config()
const JWT_SECRET = process.env.SECRET_KEY

exports.register = async(req,res) => {
    const {first_name, last_name, email, password ,age, address} = req.body
    try {
        const hashedPassword = await bcrypt.hash(password,10)
        const defaultProfileImage = 'user/upload/default-profile.jpg';
        const defaultCoverImage = 'user/upload/default-cover.png';
        const profileImage = req.files.profileImage ? `user/upload/${req.files.profileImage[0].filename}` : defaultProfileImage;
        const coverImage = req.files.coverImage ? `user/upload/${req.files.coverImage[0].filename}` : defaultCoverImage;
        const newItem = await user_model.create({first_name, last_name, email, password: hashedPassword ,age, address, profile_img: profileImage,cover_img: coverImage})
        res.status(201).json({message: 'User registered successfully', data: newItem})
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
}
exports.login = async(req,res) => {
    const {email,password} = req.body
    try {
        const user = await user_model.findOne({where: {email}})
        if(!user) {
            return res.status(401).json({message: "Invalid email or password"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const token = jwt.sign(
            {id: user.id},
            JWT_SECRET,
            {expiresIn: '1hr'}
        )
        const {password: _, ...userData} = user.toJSON()
        res.json({token, user: userData})
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}