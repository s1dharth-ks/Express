import express from "express"
import connection from "./config/db.js"
const server = express()
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT
const username = process.env.NAME
import userRoute from "./routers/userRoute.js"
// console.log(username);


server.use("/user",userRoute)

server.listen(PORT,()=>{
    console.log(`server is starting: ${PORT}`);
})

connection()