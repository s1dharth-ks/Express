import mongoose from "mongoose"

const connection = ()=>{
        mongoose.connect(process.env.mongourl).then(()=>{
            console.log("mongodb connected...")
    })
}

export default connection