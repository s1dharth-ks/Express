import user from  "../models/user.js"

const Register = async (req,res)=>{
    try{
        const {name,email,password,phone} = req.body

        if(!email){
            console.log("email id required");
        }

        const ExistingEmail = await user.findOne({email});
        if(ExistingEmail){
            console.log("user already exist");
            
        }

    }catch(err){

    }
}