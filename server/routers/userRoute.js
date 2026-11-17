import { Router } from "express"
import { getUsers, Register } from "../controllers/userController.js"

const router = Router()
router.post('/reg',Register)
router.get('/get',getUsers)

export default router