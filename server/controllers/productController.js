import product from "../models/product.js";
import path from "path"
import fs, { stat } from "fs"
import { fileURLToPath } from "url";

export const addProduct = async(req,res)=>{
    try{
        const {name,description,price,image} = req.body
        if(!name){
            console.log("name is required");
            
        }else{
            const newProduct = new product({name,description,price})
            if(req.file && req.file.filename){
                newProduct.image = req.file.filename
            }
            const savedProduct = await newProduct.save()
            res.status(200).json({
                status:true,
                message: "product added",
                data:savedProduct
            })
        }
    }catch(err){
        console.log(err);
        
    }
}

// export const getProduct = async(req,res)=>{
//     try{
//         const products = await product.find()

//         res.status(200).json({
//             status:true,
//             message:"successfull",
//             data:products
//         })
//     }catch(err){
//         console.log(err);
        
//     }
// }

export const listProduct = async(req,res)=>{
    try{
        const { name,minPrice,maxPrice} = req.query
        const filter = {}
        if(name){
            filter.name = {$regex: name,$options: "i"}
        }
        if(minPrice || maxPrice){
            filter.price = {}
            if(minPrice) filter.price.$gte = Number(minPrice)
            if(maxPrice) filter.price.$lte = Number(maxPrice)
        }

        const products = await product.find(filter)
        res.status(200).json({
            status: true,
            message: "success",
            data: products
        })
    }catch(err){
        console.log(err);
        
    }
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const updateProduct = async(req,res)=>{
    try{
        const {id,name,description,price} = req.body
        if(!id) console.log(" id is required");

        const pro = await product.findById(id)

        if(!pro) console.log("Product not found...");
        
        const updateData = {}
        if(name) updateData.name = name
        if(description) updateData.description = description
        if(price) updateData.price = price

        if(req.file && req.file.filename){
            if(pro.image){
                const oldpath = path.join(__dirname,"../upload",pro.image)
                fs.unlink(oldpath,(err)=>{
                    if(err) console.log(err);
                    
                })
            }
            updateData.image = req.file.filename
        }

        const updatedProduct = await product.findByIdAndUpdate(id,updateData,{returnDocument:"after"})
        
        res.status(200).json({
            status: true,
            message: "success",
            data: updatedProduct
        })
    }catch(err){
        console.log(err);
    }
}