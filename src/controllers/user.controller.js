import * as userService from '../services/user.service.js';


export const getAllUser = async(req,res) => {
    try {
        console.log("user", req.user)
        let page = Number(req.query.page) || 1
        // this means if page is less than one return one or page
        page = page < 1 ? 1 : page
        let limit = Number(req.query.limit) || 10
        limit = limit < 1 ? 10 : limit ;
        //search for user by name
        const query = req.query.q;
        const{data, meta} = await userService.getAllUser(page,limit,query)
        res.status(200).json({message: "Get all user", data,meta})
        
        
    } catch (error) {
        res.status(error.status).json(error.message)
        
    }

}




export const deleteUser= async(req,res) => {
    try {
        const {Id} = req.params
        const user = await userService.deleteUser(Id)
        res.status(200).json({message: "successfully deleted",user})
    } catch (error) {
        res.status(error.status).json(error.message)
        
    }
}

/*export const deleteUser = async(req,res) => {
    const {userId} = req.params;
    const user = await userService.deleteUser(userId)
    res.status(200).json({message: "successfully deleted"})

}*/


export const getUserById = async(req,res) => {
    try {
        const {id} = req.params;
        const book = await userService.getUserById(id)
        res.status(200).json({message: id, book})
        
    } catch (error) {
        res.status(error.status).json(error.message)
        
    }
   
}