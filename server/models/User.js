import { model,Schema } from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const userschema=new Schema({
    username:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    }

})

const User=model("User",userschema)
export default User;