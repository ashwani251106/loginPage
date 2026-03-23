import express from "express"
import { renderLoginPage,LoginVerifications } from "../controllers/loginContoller.js"
const loginRouter = express.Router()

loginRouter.get("/login",renderLoginPage)
loginRouter.post("/login",LoginVerifications)
export default loginRouter