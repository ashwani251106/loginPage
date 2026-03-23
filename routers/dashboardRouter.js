import express from "express"
import isAuth from "../middleWares/auth.js"
import { dashBoard } from "../controllers/dashboardController.js"

const dashBoardRouter = express.Router()

dashBoardRouter.get("/dashboard",isAuth,dashBoard)
export default dashBoardRouter