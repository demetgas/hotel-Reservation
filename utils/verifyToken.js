import  jwt  from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"Authentication failed!"))
    }
    jwt.verify(token,process.env.JWT,(err,user)=>(
        
    ))
}