const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello Express")
})

app.get("/contact",(req,res)=>{
    res.send("contact")
})

app.get("/about",(req,res)=>{
    res.send("about")
})

app.listen(3000,()=>{
    console.log(`server starting:`,3000);   
})