import express from "express"
import { addProduct, deleteProduct, getOneProduct, listProduct, updateProduct } from "../controllers/productController.js"
import upload from "../middlewares/upload.js"
import { authCheck } from "../middlewares/authCheck.js"

const router = express()

router.use(authCheck)
router.post("/add",upload.single('image'),addProduct)
router.get("/get",listProduct)
router.put("/update",upload.single('image'),updateProduct)
router.delete("/delete",deleteProduct)
router.get("/getone",getOneProduct)
export default router 

