import multer from "multer"

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        let name = file.originalname.replace(/\s\s+/g,' ')
        name = name.replace(/[&\/\\#, +()$~%'":=*?<>{}@-]/g,'_')
        cb(null,DataTransfer.now()+ "_"+ name)
    }
})

const fileFilterConfig = (req,file,cb)=>{
    if(
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpg" 
    ) {
        cb(null,true)
    } else {
        cb(new Error("only png jpg jpeg allowed"), false)
    }
}

const upload = multer({
    storage:storage,
    limits: {
        filSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilterConfig

})

export default upload