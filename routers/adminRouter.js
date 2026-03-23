import express from "express"
import { adminGet } from "../controllers/AdminController.js"
import isAdmin from "../middleWares/admin.js"
import isAuth from "../middleWares/auth.js"


const adminRouter = express.Router()
adminRouter.get("/admin-only",isAuth,isAdmin,adminGet)
export default adminRouter