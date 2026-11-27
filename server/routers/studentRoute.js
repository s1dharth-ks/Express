import { addStudent, editStudent, getStudent, singleView } from "../controllers/studentController.js"
import Router from "express"
import { authCheck } from "../middlewares/authCheck.js"


const router = Router()
router.get("/get",getStudent)
router.post("/single",singleView)

router.use(authCheck)
router.post("/add",addStudent)
router.put("/edit",editStudent)



export default router