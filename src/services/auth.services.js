import User from '../models/user.model.js';
//import {loginSchema,registerSchema} from '../models/auth.model.js'
import { ErrorWithStatus } from '../exception/error.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




export const login = async (email,password) => {
    
        // find if user exist
        const user = await User.findOne({email})
        if(!user){
            throw new ErrorWithStatus("user doesn't exist please register",404)

        }
        // check for password
        if(!bcrypt.compareSync(password,user.password)){
            throw new ErrorWithStatus("password is not correct",404)
        }
        const JWT_SECRET = process.env.JWT_SECRET;

        const token = jwt.sign({
            role: user.role || "USER",
            email: user.email,
            _id: user._id,
            sub: user._id
        },
    
            JWT_SECRET,
        {
            expiresIn: "1h"
        })

        return token



    
} 


export const register  = async(name,email,password,role) => {
    const user = await User.findOne({email})
    if(user){
        throw new ErrorWithStatus("user already exist",400)
    }
    password = await bcrypt.hash(password,10)
    const newUser = new User({
        name,email,password,role
    })
    await newUser.save()
    delete newUser.password
    return newUser
}