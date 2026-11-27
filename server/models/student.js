import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },email:{
        type:String,
        require:true
    },phone:{
        type:Number,
        require:true
    },age:{
        type:Number,
        require:true
    },course:{
        type:String,
        require:true
    },qualification:{
        type:String,
        require:true
    }
},{timestamps:true})

const Students = mongoose.model("StudentData",userScheme)

export default Students