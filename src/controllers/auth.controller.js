import  * as authService from '../services/auth.services.js';



export const login = async(req,res) => {
    try {
        const {email,password} = req.body;
        const token = await authService.login(email,password);

        res.json({message: "welcome",token})
        
    } catch (error) {
        res.status(error.status);
        res.json({message: error.message})
    }
}



export const register = async(req,res) => {
    try {
        const {name,email,password,role} = req.body
        const user = await authService.register(name,email,password,"USER")
        res.json({details: user})
    } catch (error) {
        res.status(error.status);
        res.json({message: error.message})
        
    }
}