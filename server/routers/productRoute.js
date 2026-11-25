import express from "express"
import { addProduct, listProduct, updateProduct } from "../controllers/productController.js"
import upload from "../middlewares/upload.js"

const router = express()
router.post("/add",upload.single('image'),addProduct)
router.get("/get",listProduct)
router.put("/update",upload.single('image'),updateProduct)

export default router 

