import { Router } from "express";
import * as userController from '../controllers/user.controller.js'
//import { generateMiddleware } from "../middlewares/validation.middleware.js";
//import { authenticationMiddleware } from "../middlewares/authorization.js";
import { adminMidddleware } from "../middlewares/adminMiddleware.js";

const userRoute = Router()

userRoute.get("/",adminMidddleware,userController.getAllUser)
userRoute.get("/:userId",userController.getUserById)
userRoute.delete("/:userId",userController.deleteUser)



export default userRoute