const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello Express")
})

// app.post("/contact",(req,res)=>{
//     res.send("contact")
// })

// app.put("/update/:id",(req,res)=>{
//     res.send("updated...")
// })

// app.get("/view/:id",(req,res)=>{
//     res.send(req.params.id)
// })

app.get("/search",(req,res)=>{
    const name = req.query.name
    const age = req.query.age
    res.json({
        name,age
    })
})


app.listen(3000,()=>{
    console.log(`server starting:`,3000);   
})