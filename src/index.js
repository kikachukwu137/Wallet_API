import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.routes.js';
import walletRoute from './routes/wallet.route.js';
import {authenticationMiddleware} from './middlewares/authorization.js'


dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/auth",authRoute)
app.use("/wallet",walletRoute)
app.use(authenticationMiddleware)
app.use("/user",userRoute)


app.all("*",(req,res)=>{
    res.status(400).json({"message": "routes does not exist"})
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("connected to database")
        console.log(`server is running on ${PORT}`)
    })
})