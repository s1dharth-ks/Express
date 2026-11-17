import user from "../models/user.js"
import bcrypt from 'bcrypt'

export const Register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body

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
        const newUser = new user({ name, email, password: hash, phone })
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