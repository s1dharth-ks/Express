import jwt from "jsonwebtoken";
import user from "../models/user.js";

export const authCheck =async(req,res,next)=>{
    if(req.method === "OPTIONS"){
        return next()
    }else{
        try{
            console.log("sss");
            const token = req.headers.authorization.split(' ')[1]
            console.log(token);
            if(!token){
                console.log("authentication failed");
            }else{
                const decodedToken = jwt.verify(token,process.env.Jwtsecret)
                const validUser = await user.findOne({_id:decodedToken.userId})
                
                if(!validUser){
                    console.log("Invalid credentials!...");
                }else{
                    req.userDetails = { userId : decodedToken.userId, userEmail: decodedToken.userEmail}
                    next()
                }
            }
        }catch(err){
            console.log("authentication failed");
        }
    }
}