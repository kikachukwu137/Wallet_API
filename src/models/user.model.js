import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true



    },
    password: {
        type: String,
        required: true,
        trim: true

    },
    role: {
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER"
    }

 
},{timestamps: true})


const  User = mongoose.model("User",userSchema)


export default User