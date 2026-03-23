import express from "express"
import { logoutGet } from "../controllers/logoutController.js"
const logoutRouter = express.Router()
logoutRouter.get("/logout",logoutGet)
export default logoutRouter