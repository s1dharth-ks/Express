import { Router } from "express"
import { getUsers, login, Register } from "../controllers/userController.js"

const router = Router()
router.post('/reg',Register)
router.get('/get',getUsers)
router.post("/login",login)

export default router