import express from "express"
import connection from "./config/db.js"
const server = express()
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT
const username = process.env.NAME
console.log(username);

server.listen(PORT,()=>{
    console.log(`server is starting: ${PORT}`);
})

connection()