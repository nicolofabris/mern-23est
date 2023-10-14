import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const {username, email, password} = req.body

    const newUser = new User({username, email, password})
    await newUser.save()
    res.status(201).json('user created successfully')
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body
    
    const validUser = await User.findOne({email})
    if (!validUser) return error 

    const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET)
    res.cookie('access_token', token, {httpOnly: true }).status(200).json(validUser)

}