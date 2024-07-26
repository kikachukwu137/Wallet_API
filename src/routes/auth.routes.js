import { Router } from "express";
import * as authcontroller from '../controllers/auth.controller.js'
import { generateMiddleware } from "../middlewares/validation.middleware.js";
import { loginSchema,registerSchema } from "../models/auth.model.js";
const authRoute = Router()



authRoute.post("/login",generateMiddleware(loginSchema),authcontroller.login)
authRoute.post("/register", generateMiddleware(registerSchema),authcontroller.register)

export default authRoute;