
import Students from "../models/student.js";
import { updateProduct } from "./productController.js";

export const addStudent = async(req,res)=>{
    const { name, email, phone, age, course, qualification} = req.body
    try{
        if(!name) console.log("name is required");

        const ExistingEmail = await Students.findOne({email})
        const ExistingName = await Students.findOne({name})
        if(ExistingEmail || ExistingName) console.log("Student is already existing....");

        const newStudent = new Students({name,email,phone,age,course,qualification})
        const savedStudent = await newStudent.save()

        res.status(200).json({
            status:true,
            message:"successfull",
            data:savedStudent
        })
    }catch(err){
        console.log("Add student is failed");  
    }
    
}

export const getStudent = async(req,res)=>{
    try{
        const students = await Students.find()
        
        res.status(200).json({
            status:true,
            message:"successfull",
            data:students
        })
    }catch(err){
        console.log("getting student is failed",err)
    }
}

export const singleView = async(req,res)=>{
    try{
        const {id} = req.body
        const student = await Students.findOne({_id:id})

        res.status(200).json({
            status: true,
            message: "successfull",
            data:student
        })

    }catch(err){
        console.log("single view failed...",err);  
    }
}

export const editStudent = async(req,res)=>{
    try{
        const {id, name, email,phone, age, course, qualification} = req.body
        if(!id) console.log("id is required");

        const student = await Students.findById(id)
        if(!student) console.log("student is not available");

        const updateData = {}
        if(name) updateData.name = name 
        if(email) updateData.email = email 
        if(phone) updateData.phone = phone  
        if(age) updateData.age = age
        if(course) updateData.course = course
        if(qualification) updateData.qualification = qualification

        const updatedStudent = await Students.findByIdAndUpdate(id,updateData,{returnDocument:"after"})

        res.status(200).json({
            status:true,
            message:"successfull",
            data:updatedStudent
        })
    }catch(err) {
        console.log("edit is failed..",err);
        
    }
    
    
}