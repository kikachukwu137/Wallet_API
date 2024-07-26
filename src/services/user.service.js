import User from  '../models/user.model.js'
import { ErrorWithStatus } from '../exception/error.js'


export const getAllUser = async(page = 1, limit = 10, query = null) =>{
    try {
        //page 1 limit 10 total 100

        //page 1 == skip 0  logic (page - 1) * limit which is  0
        //page 2 == skip 10                 10
        // page 3 == skip 20
        // page 4 == skip 30
        const skip = (page - 1) * limit
        const filter = query ?{ name: query} : {}
        // let use the regular expression match inorder to match names both in uppercase and lowercase;
        // const filter = query ? { name: { $regex: query, $options: "i" } } : {};

        const users = await User.find(filter,{password : 0, __v: 0}).skip(0).limit(limit) // hide password
        const total = await User.countDocuments(filter)
        return {data : users, meta: {page, limit, total}}
        
    } catch (error) {
        throw new ErrorWithStatus(error.message,error.status)
        
    }
}
// ? if like a question


export const getUserById =  async(userId) => {
    try {
        return await User.findOne(userId)
        
    } catch (error) {
        throw new ErrorWithStatus("error occured here", 404)
        
    }

}


export const deleteUser = async(userId) => {
    try {
        
        const user = await User.findByIdAndDelete(userId)
        return user
    } catch (error) {
        throw new ErrorWithStatus("error occured here", 404)

    }
}