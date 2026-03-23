import express from "express"
import { getSignUp,postSignUp } from "../controllers/signUpController.js"
const signupRouter = express.Router()
signupRouter.get("/signup",getSignUp)
signupRouter.post("/signup",postSignUp)




export default signupRouter