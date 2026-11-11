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

// const middleWare = (req,res,next)=>{
//     console.log("middleware executed")
//     next()
// }


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

app.use((req,res,next)=>{
    console.log("middleware executed")  
    next()
})

app.get("/",(req,res)=>{
    setTimeout(()=>{
    res.send("home page")
    },2000)
})

app.get("/about",(req,res)=>{
    setTimeout(()=>{
        res.send("about page")
    },2000)
    res.send("loading....")
})
app.listen(3000,()=>{
    console.log(`server starting:`,3000);   
})