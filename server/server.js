import express from "express"
import connection from "./config/db.js"
const server = express()
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT
const username = process.env.NAME
import userRoute from "./routers/userRoute.js"
import productRoute from "./routers/productRoute.js"
import studentRoute from  "./routers/studentRoute.js"
// console.log(username);
connection()
server.use(express.json())
// console.log("xdhgf");

server.use('/user',userRoute)
server.use('/product',productRoute)
server.use('/student',studentRoute)


server.listen(PORT,()=>{
    console.log(`server is starting: ${PORT}`);
})


