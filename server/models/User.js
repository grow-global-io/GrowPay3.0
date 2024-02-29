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
// userschema.method.generateToken=function(){
//     try{
//         return jwt.sign(
//             {userId:this._id.toString(),
//             email:this.email
//             },
//             process.env.JWT_SECRET_KEY
//             ,
//             {
//                 expiresIn:"1h"
//             }
//         )

//     }catch(error){
//         console.log(error)
//     }
// };
const User=model("User",userschema)
export default User;