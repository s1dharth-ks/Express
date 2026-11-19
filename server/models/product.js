import mongoose from "mongoose";

const productSchema = new mongoose.schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }

})

const product = mongoose.model(productData,productSchema)

export default product
