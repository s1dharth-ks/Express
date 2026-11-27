import user from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
    try {
        const { name, email, password, phone, role } = req.body

        if (!email) {
            console.log("email id required");
        }

        const ExistingEmail = await user.findOne({ email });
        if (ExistingEmail) {
            console.log("user already exist");
        }
        const saltRound = 10
        const salt = bcrypt.genSaltSync(saltRound)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = new user({ name, email, password: hash, phone, role })
        const savedUser = await newUser.save()
        res.status(200).json({
            status: true,
            message: "succesfull",
            data: savedUser
        })
    } catch (err) {

        console.log(err);

    }
}

export const getUsers = async(req,res)=>{
    try{
        const users =  await user.find()

        res.status(200).json({
            status : true,
            message : "succesfull",
            data :  users
        })
    }catch{
        console.log("err");
        
    }
}

export const login = async (req,res)=>{
    try{
        const {email,password} = req.body
        console.log(req.body);

        if(!email || !password){
            console.log("email and password not found");
        }

        const User = await user.findOne({email})
        console.log(User);
        
        if(!User){
            console.log("user not found");     
        }

        const ispassword = await bcrypt.compare(password,User.password)
        if(!ispassword){
            console.log("invalid password");
        }else{
        const token = jwt.sign({
            userId:User._id,
            userEmail:User.email,
            userRole:User.role
        },
        process.env.Jwtsecret,
        {expiresIn:"30d"}
    )
    res.status(200).json({
        status:true,
        message:"login successfully",
        data: User,
        access_token:token
    })
    }
    }catch(err){
        console.log(err);    
    }
}