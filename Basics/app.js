const express = require("express")

const app = express()

// app.get("/",(req,res)=>{
//     res.send("hello Express")
// })

// app.get("/contact",(req,res)=>{
//     res.send("contact")
// })

// app.get("/about",(req,res)=>{
//     res.send("about")
// })

// app.get("/home",(req,res)=>{
//     res.redirect("/about")
// })




// app.get("/",middleWare,(req,res)=>{
//     setTimeout(()=>{
//         res.send("welcome")
//     },2000)
// })

// app.use((req,res,next)=>{
//     console.log("middleware executed")
//     next()
// })

// app.get("/",(req,res)=>{
//     res.send("home page")
// })





// app.post("/contact",(req,res)=>{
//     res.send("contact")
// })

// app.put("/update/:id",(req,res)=>{
//     res.send("updated...")
// })

// app.get("/view/:id",(req,res)=>{
//     res.send(req.params.id)
// })

// app.get("/search",(req,res)=>{
//     const name = req.query.name
//     const age = req.query.age
//     res.json({
//         name,age
//     })
// })

// const middleWare = (req,res,next)=>{
//     console.log("middleware executed")
//     next()
// }

// app.get("/",middleWare,(req,res)=>{
//     setTimeout(()=>{
//     res.send("home page")
//     },2000)
// })

// app.get("/about",middleWare,(req,res)=>{
//     setTimeout(()=>{
//         res.send("about page")
//     },2000)
//     console.log("loading....")
// })

// app.get("/contact",(req,res)=>{
//     res.send("contact page")
// })

// app.use(express.static("public"))

app.get("/student",(req,res,next)=>{
    const error = new Error("student not found")
    next(error)
})

app.use((err,req,res,next)=>{
    res.static(500).send(err.message)
})

app.listen(3000,()=>{
    console.log(`server starting:`,3000);   
})